import React, { Component, MouseEventHandler } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { IFields, surveyFormFieldsSet } from './surveyFormFieldsSet';
import { submitSurvey } from '../../../actions';
import { History } from 'history';
import { IState } from '../../../interfaces/stateInterfaces';

interface Props {
  onCancel: MouseEventHandler;
  submitSurvey: Function;
  formValues: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [index: string]: any;
  };
  history: History;
}

class SurveysReviewForm extends Component<Props> {
  private renderReviewFields(): JSX.Element[] {
    return surveyFormFieldsSet.map((field: IFields): JSX.Element => {
      return (
        <div key={field.name}>
          <h5 className="teal-text lighten-1">{field.label}</h5>
          <h6>
            { this.props.formValues[field.name] }
          </h6>
        </div>
      );
    })
  }

  public render(): JSX.Element {
    return (
      <div>
        <h4>Please review your entries before submitting</h4>
        {this.renderReviewFields()}
        <div style={{marginTop: '20px'}}>
          <button
            onClick={this.props.onCancel}
            className="yellow darken-3 btn-flat white-text">
          Back
            <i className="material-icons left white-text">arrow_back</i>
          </button>
          <button
            className="green btn-flat right white-text"
            onClick={ (): void => this.props.submitSurvey(this.props.formValues, this.props.history) }>
          Submit
            <i className="material-icons right white-text">email</i>
          </button>
        </div>
      </div>
    );
  }
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const mapStateToProps = (state: IState): { formValues: any } => {
  return {
    formValues: state.form.surveyForm.values,
  }
};


export default connect(mapStateToProps, { submitSurvey })(
  // @ts-ignore
  withRouter(SurveysReviewForm)
);
