import React, { Component } from 'react';
import { InjectedFormProps, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import { AuthType } from '../../../interfaces/model-interfaces';
import SurveysReviewForm from '../forms/SurveysReviewForm';
import SurveysForm from '../forms/SurveysForm';
import { IState } from '../../../interfaces/state-interfaces';

type State = {
  showReviewForm: boolean;
}

interface Props extends InjectedFormProps {
  auth: AuthType;
}

class NewSurveyPage extends Component<Props> {
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
    if (this.props.auth === false) {
      return <Redirect to="/"/>
    }

    return this.renderContent();
  }
}

const mapStateToProps = (state: IState) => {
  return {
    auth: state.auth,
  }
};

const SurveysNewWithProps = connect(
  mapStateToProps,
)(NewSurveyPage);

export default reduxForm({
  form: 'surveyForm',
})(SurveysNewWithProps);
