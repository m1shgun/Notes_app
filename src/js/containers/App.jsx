import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import * as notesActions from '../redux/actions/notesActions';
import Search from '../components/Search.jsx';
import Field from '../components/Field.jsx';
import NotesList from '../components/NotesList.jsx';
import DevTools from '../redux/utils/devtools';

class App extends Component {

    static propTypes = {
        notes: PropTypes.array.isRequired,
        notesActions: PropTypes.object.isRequired
    };

    render() {
        const {notes} = this.props;
        const {addNote, deleteNote, deleteAll} = this.props.notesActions;

        return (
            <div className="app">
                <h1 className="app__title">Notes</h1>
                <div className="app__content">
                    <Search />
                    <Field />
                    <NotesList />
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
        notes: state.notes
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        notesActions: bindActionCreators(notesActions, dispatch)
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);