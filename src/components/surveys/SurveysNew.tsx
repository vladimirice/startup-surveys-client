import React, { Component } from 'react';
import SurveysForm from './SurveysForm';
import SurveysReviewForm from './SurveysReviewForm';
import { InjectedFormProps, reduxForm } from 'redux-form';

type State = {
  showReviewForm: boolean;
}

class SurveysNew extends Component<InjectedFormProps> {
  state: State = { showReviewForm: false };

  renderContent() {
    if (this.state.showReviewForm) {
      // @ts-ignore
      return <SurveysReviewForm
        onCancel = { () => this.setState({ showReviewForm: false})}
      />
    }

    return <SurveysForm onSurveySubmit={ () => this.setState({ showReviewForm: true }) }/>
  }

  render() {
    return this.renderContent();
  }
}

export default reduxForm({
  form: 'surveyForm',
})(SurveysNew);
