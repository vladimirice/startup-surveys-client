import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { Link } from 'react-router-dom';
import { surveyFormFieldsSet } from './surveyFormFieldsSet';
import SurveyFormField from './SurveyFormField';
import { validateEmails } from '../../../utils/validators/validateEmails';
import { IFormValues } from '../../../interfaces/formInterfaces';
import { IStringToAny } from '../../../interfaces/commonInterfaces';

interface Props {
  handleSubmit: Function;
  onSurveySubmit: Function;
}

class SurveysForm extends Component<Props> {
  private renderInput(): JSX.Element[] {
    return surveyFormFieldsSet.map(
      (item): JSX.Element => <Field
        key={item.name}
        type="text"
        name={item.name}
        label={item.label}
        placeholder={item.placeholder}
        icon={item.icon}
        component={SurveyFormField}
      />,
    );
  }

  public render(): JSX.Element {
    return (
      <div>
        <h4>Create a new survey</h4>
        <form onSubmit={
          this.props.handleSubmit(this.props.onSurveySubmit)
        }>
          {this.renderInput()}
          <Link to="/surveys" className="red btn-flat left white-text">
            Cancel
            <i className="material-icons right">cancel</i>
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

function validate(values: IFormValues): IStringToAny {
  const errors: IStringToAny = {};

  // eslint-disable-next-line no-restricted-syntax
  for (const { name } of surveyFormFieldsSet) {
    if (!values[name]) {
      errors[name] = `Please provide a value for ${name}`;
    }
  }

  if (values.recipients) {
    errors.recipients = validateEmails(values.recipients);
  }

  return errors;
}

export default reduxForm({
  validate,
  form: 'surveyForm',
  destroyOnUnmount: false,
// @ts-ignore
})(SurveysForm);
