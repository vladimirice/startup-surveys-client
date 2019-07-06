import React, { Component, MouseEventHandler } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { IFields, surveyFormFieldsSet } from './surveyFormFieldsSet';
import { submitSurvey } from '../../../actions';
import { History } from 'history';
import { IState } from '../../../interfaces/stateInterfaces';
import { IFormValues } from '../../../interfaces/formInterfaces';

import styles from './../../common/cssModules/common.module.css';

interface Props {
  onCancel:     MouseEventHandler;
  submitSurvey: Function;
  formValues:   IFormValues;
  history:      History;
}

class SurveysReviewForm extends Component<Props> {
  public render(): JSX.Element {
    return (
      <div>
        <h4>Please review your entries before submitting</h4>
        {this.renderReviewFields()}
        <div className={styles.marginTop20}>
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
}

const mapStateToProps = (state: IState): { formValues: IFormValues } => {
  return {
    formValues: state.form.surveyForm.values,
  }
};

export default connect(mapStateToProps, { submitSurvey })(
  // @ts-ignore
  withRouter(SurveysReviewForm)
);
