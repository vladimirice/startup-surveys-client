import React, { Component } from 'react';

type Props = {
  input: any,
  label: string,
  meta:  any,
  placeholder:  string,
  icon:  string,
};

export default class SurveysFormField extends Component<Props> {
  render() {
    const { touched, error } = this.props.meta;
    return (
      <div className="input-field" style={{marginTop: '3rem'}}>
        <i className="material-icons prefix">{this.props.icon}</i>
        <input placeholder={this.props.placeholder} id={this.props.input.name} type="text" {...this.props.input} className="validate"/>
        <label htmlFor={this.props.input.name} style={{marginTop: '-25px'}}>{this.props.label}</label>
        <div className="red-text" style={{ marginBottom: '20px', marginLeft: '45px'}}>
          {touched && error}
        </div>
      </div>
    );
  }
}
