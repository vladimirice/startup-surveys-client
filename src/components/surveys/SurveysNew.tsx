import React, { Component } from 'react';
import SurveysForm from './SurveysForm';
import SurveysReviewForm from './SurveysReviewForm';
import { InjectedFormProps, reduxForm } from 'redux-form';
import { IState } from '../../interfaces/state-interfaces';
import { connect } from 'react-redux';
import { AuthType } from '../../interfaces/model-interfaces';
import { Redirect } from 'react-router';

type State = {
  showReviewForm: boolean;
}

interface Props extends InjectedFormProps {
  auth: AuthType;
}

class SurveysNew extends Component<Props> {
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
)(SurveysNew);

export default reduxForm({
  form: 'surveyForm',
})(SurveysNewWithProps);
