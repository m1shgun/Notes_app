import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import * as notesActions from '../redux/actions/notesActions';
import * as colorActions from '../redux/actions/colorActions';
import Search from '../components/Search.jsx';
import Field from '../components/Field.jsx';
import NotesList from '../components/NotesList.jsx';
import DevTools from '../redux/utils/devtools';

class App extends Component {

    static propTypes = {
        notes: PropTypes.array.isRequired,
        color: PropTypes.string.isRequired,
        notesActions: PropTypes.object.isRequired,
        colorActions: PropTypes.object.isRequired
    };

    constructor(props) {
        super(props);
        this.state = {
            newNotes: [],
            search: false
        };

        //to remove :hover on mobile devices
        this.mobile = !!('ontouchstart' in window);
    }

    componentDidMount() {
        window.onscroll = () => {
            if (window.pageYOffset > 0) {
                this.up.classList.add('show');
            } else {
                this.up.classList.remove('show');
            }
        };
    }

    handleSearchChange(value) {
        this.setState({
            search: value
        })
    }

    handleNotesSearch(value) {
        const {notes} = this.props;

        this.setState({
            newNotes: notes.filter(note => note.text.toLowerCase().indexOf(value.toLowerCase()) !== -1)
        });
    }

    handleNoteDelete(id) {
        const {deleteNote} = this.props.notesActions;
        const {search} = this.state;
        deleteNote(id);

        if (search) {
            const {notes} = this.props;
            const search = this.content.querySelector('.search__field');
            const newNotes = notes.filter(note => note.id !== id);

            this.setState({
                newNotes: newNotes.filter(note => note.text.toLowerCase().indexOf(search.value.toLowerCase()) !== -1)
            });
        }
    }

    goUp() {
        window.scrollTo(0,0);
    }

    render() {
        const {notes, color} = this.props;
        const {addNote, deleteAll} = this.props.notesActions;
        const {changeColor} = this.props.colorActions;
        const {newNotes, search} = this.state;

        return (
            <div className="app">
                <h1 className="app__title">Notes</h1>
                <div className="app__content" ref={ref => { this.content = ref; }}>
                    <Search
                        notes={notes}
                        search={search}
                        onSearchChange={::this.handleSearchChange}
                        onNotesSearch={::this.handleNotesSearch}
                    />
                    {
                        !search ?
                        <Field
                            color={color}
                            notes={notes}
                            onNoteAdd={addNote}
                            onAllDelete={deleteAll}
                            onColorChange={changeColor}
                            mobile={this.mobile}
                        />
                        : null
                    }

                    <NotesList
                        search={search}
                        notes={!search ? notes : newNotes}
                        mobile={this.mobile}
                        onNoteDelete={::this.handleNoteDelete}
                    />
                    <div
                        className="app__up"
                        ref={ref => { this.up = ref; }}
                        onClick={this.goUp}
                    />
                </div>
                {
                    NODE_ENV === 'development' ? <DevTools /> : null
                }
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        notes: state.notes,
        color: state.color
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        notesActions: bindActionCreators(notesActions, dispatch),
        colorActions: bindActionCreators(colorActions, dispatch)
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);