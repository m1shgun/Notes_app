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
            search:false
        }
    }

    handleSearchChange(value) {
        this.setState({
            search: value
        })
    }

    render() {
        const {notes, color} = this.props;
        const {addNote, deleteNote, deleteAll} = this.props.notesActions;
        const {changeColor} = this.props.colorActions;
        const {search} = this.state;

        return (
            <div className="app">
                <h1 className="app__title">Notes</h1>
                <div className="app__content">
                    <Search
                        notes={notes}
                        onSearchChange={::this.handleSearchChange}
                    />
                    {
                        !search ?
                        <Field
                            onNoteAdd={addNote}
                            onAllDelete={deleteAll}
                            onColorChange={changeColor}
                            color={color}
                            notes={notes}
                        />
                        : null
                    }

                    <NotesList
                        notes={notes}
                        onNoteDelete={deleteNote}
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