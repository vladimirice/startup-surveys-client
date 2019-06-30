import React, { Component } from 'react';
import { connect } from 'react-redux';
import { IFields, surveyFormFields } from './surveyFormFields';
import { submitSurvey } from '../../actions';
import { withRouter } from 'react-router';

type Props = {
  onCancel: any,
  submitSurvey: any,
  formValues: {
    [index: string]: any,
  },
  history: any,
}

class SurveysReviewForm extends Component<Props> {
  private renderReviewFields() {
    return surveyFormFields.map((field: IFields) => {
      return (
        <div key={field.name}>
          <label>{field.label}</label>
          <div>
            { this.props.formValues[field.name] }
          </div>
        </div>
      );
    })
  }

  render() {
    return (
      <div>
        <h4>Please review your entries before submitting</h4>
        {this.renderReviewFields()}
        <button
          onClick={this.props.onCancel}
          className="yellow darken-3 btn-flat">
          Back
          <i className="material-icons">arrow_back</i>
        </button>
        <button
          className="green btn-flat right"
          onClick={ () => this.props.submitSurvey(this.props.formValues, this.props.history) }>
          Submit
          <i className="material-icons right">email</i>
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state: any) => {
  return {
    formValues: state.form.surveyForm.values,
  }
};


export default connect(mapStateToProps, { submitSurvey })(
  // @ts-ignore
  withRouter(SurveysReviewForm)
);
