import * as PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { load } from '../actions/application';
import Authentication from './Authentication';

class Loader extends React.Component {
    componentDidMount () {
        this.props.load();
    }

    render () {
        if (this.props.isLoading) {
            return null;
        }

        return (
            <div className="App">
                <Authentication/>
            </div>
        );
    }
}

Loader.propTypes = {
    isLoading: PropTypes.bool.isRequired,
    load: PropTypes.func.isRequired,
};

const stateToProps = (state) => {
    return {
        isLoading: state.application.isLoading,
    };
};

const actionsToProps = {
    load,
};

export default connect(stateToProps, actionsToProps)(Loader);
