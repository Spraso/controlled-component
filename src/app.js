import React from 'react';
import debounce from 'lodash/function/debounce';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ControlledInput from 'controlled-input';
import { syncAction, asyncAction } from 'actions';

function mapStateToProps(state) {
  return {
    value: state.value,
    message: state.message
  };
}

function mapDispatchToProps(dispatch) {
  const debouncedAsync = debounce(value => dispatch(asyncAction(value)), 200);

  return {
    onValueChange: value => {
      dispatch(syncAction(value))
      debouncedAsync(value);
    }
  };
}

@connect(mapStateToProps, mapDispatchToProps)
export default class App extends React.Component {
  render() {
    return (
      <form className='test-form'>
        <ControlledInput
          value={this.props.value}
          name='username'
          label='User name'
          onChange={this.props.onValueChange} />
        <p>{this.props.message}</p>
      </form>
    );
  }
}
