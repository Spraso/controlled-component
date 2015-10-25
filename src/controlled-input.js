import React from 'react';

export default class ControlledInput extends React.Component {
  render() {
    return (
      <fieldset>
        <label>{this.props.label}</label>
        <input type='text'
          ref='input'
          name={this.props.name}
          value={this.props.value}
          onChange={this.handleChange.bind(this)}/>
      </fieldset>
    );
  }

  handleChange() {
    this.props.onChange(this.refs.input.value);
  }
}
