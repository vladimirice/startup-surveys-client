import React, { Component } from 'react';
import { InjectedFormProps, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import SurveysReviewForm from '../forms/SurveysReviewForm';
import SurveysForm from '../forms/SurveysForm';
import { AuthType } from '../../../interfaces/modelInterfaces';
import { mapToPropsWithAuth } from '../../../utils/redux-helper/mapStateToPropsHelper';
import requireAuth from '../../auth/requireAuth';

interface State {
  showReviewForm: boolean;
}

interface Props extends InjectedFormProps {
  auth: AuthType;
}

class NewSurveyPage extends Component<Props> {
  public state: State = { showReviewForm: false };

  public render(): JSX.Element {
    if (this.state.showReviewForm) {
      // @ts-ignore
      return <SurveysReviewForm
        onCancel = { (): void => this.setState({ showReviewForm: false })}
      />;
    }

    return <SurveysForm
      onSurveySubmit={ (): void => this.setState({ showReviewForm: true }) }
    />;
  }
}

const SurveysNewWithProps = connect(
  mapToPropsWithAuth,
)(NewSurveyPage);

export default reduxForm({
  form: 'surveyForm',
})(requireAuth(SurveysNewWithProps));
