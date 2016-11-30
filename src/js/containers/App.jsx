import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import * as actions from '../redux/actions/actions';
import Search from '../components/Search.jsx';
import Field from '../components/Field.jsx';
import NotesList from '../components/NotesList.jsx';
import DevTools from '../redux/utils/devtools';

class App extends Component {

    static propTypes = {
        sample: PropTypes.number.isRequired
    };

    render() {
        const {sample} = this.props;
        const {actionOne, actionTwo} = this.props.actions;

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
        sample: state.sample
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(actions, dispatch)
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);