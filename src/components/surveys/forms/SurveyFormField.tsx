import React, { Component } from 'react';

interface Props {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  input:        any;
  label:        string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  meta:         any;
  placeholder:  string;
  icon:         string;
}

export default class SurveyFormField extends Component<Props> {
  public render(): JSX.Element {
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
