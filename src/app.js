import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ControlledInputTest from 'tests/controlled-input';
import { valueChange } from 'actions';

function mapStateToProps(state) {
  return {
    value: state.value
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onValueChange:  bindActionCreators(valueChange, dispatch)
  };
}

@connect(mapStateToProps, mapDispatchToProps)
export default class App extends React.Component {
  render() {
    return (
      <form className='test-form'>
        <ControlledInputTest
          value={this.props.value}
          onChange={this.props.onValueChange} />
      </form>
    );
  }
}
