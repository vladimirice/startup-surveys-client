import React, { Component } from 'react';

type Props = {
  input: any,
  label: string,
  meta:  any,
};

export default class SurveysFormField extends Component<Props> {
  render() {
    const { touched, error } = this.props.meta;
    return (
      <div>
        <label>{this.props.label}</label>
        <input {...this.props.input}/>
        <div className="red-text" style={{ marginBottom: '20px'}}>
          {touched && error}
        </div>
      </div>
    );
  }
}
