import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import SurveysFormField from './SurveysFormField';
import { Link } from 'react-router-dom';
import { validateEmails } from '../../utils/validators/validate-emails';
import { surveyFormFields } from './surveyFormFields';

type Props = {
  handleSubmit:   Function,
  onSurveySubmit: Function,
};

class SurveysForm extends Component<Props> {
  renderInput() {
    return surveyFormFields.map(item => <Field key={item.name} type="text" name={item.name} label={item.label} component={SurveysFormField}/>)
  }

  render() {
    return (
      <div>
        <h4>Create a new survey</h4>
        <form onSubmit={
          this.props.handleSubmit(this.props.onSurveySubmit)
        }>
          {this.renderInput()}
          <Link to="/surveys" className="red btn-flat left white-text">
            Cancel
          </Link>
          <button type="submit" className="teal btn-flat right white-text">
            Next
            <i className="material-icons right">arrow_forward</i>
          </button>
        </form>
      </div>
    );
  }
}

function validate(values: any) {
  const errors: any = {};

  for (const { name } of surveyFormFields) {
    if (!values[name]) {
      errors[name] = `Please provide a value for ${name}`;
    }
  }

  if (values.recipients) {
    errors['recipients'] = validateEmails(values.recipients);
  }

  return errors;
}

export default reduxForm({
  validate,
  form: 'surveyForm',
  destroyOnUnmount: false,
// @ts-ignore
})(SurveysForm);

