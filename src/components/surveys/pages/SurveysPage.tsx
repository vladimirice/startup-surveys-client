import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { addCreditsCard, newSurveyCard } from '../../common/elements/cardsElements';
import { addSurveyButton } from '../../common/elements/buttonsElements';
import { fetchCurrentUserSurveys } from '../../../actions';
import { AuthType, ISurveyModel, IUser } from '../../../interfaces/modelInterfaces';
import { IState } from '../../../interfaces/stateInterfaces';

interface Props {
  fetchCurrentUserSurveys: Function;
  surveys: ISurveyModel[];
  auth:    AuthType;
}

class SurveysPage extends Component<Props> {
  public componentDidMount(): void {
    this.props.fetchCurrentUserSurveys(this.props.auth);
  }

  private renderSurveys(): JSX.Element {
    const elements = this.props.surveys.map((item: ISurveyModel): JSX.Element => {
      return (
        <div className="card darken-1" key={item._id}>
          <div className="card-content">
            <span className="card-title">{item.title}</span>
            <p>{item.body}</p>
            <p className="right">
              Sent On: { new Date(item.createdAt).toLocaleString() }
            </p>
          </div>
          <div className="card-action">
            <a href="/">Yes: {item.yes}</a>
            <a href="/">no: {item.no}</a>
          </div>
        </div>
      );
    });

    return (
      <div key="surveys-list">
        <p key="check-email-hint" style={{fontSize: '14px', backgroundColor: '#80ced6'}}>
          Check your email and choose one of the answers
        </p>
        {elements}
      </div>
    );
  }

  private renderContent(): JSX.Element[] | JSX.Element {
    if (this.props.auth === null) {
      return <div>Loading...</div>;
    }

    if (this.props.auth === false) {
      return <Redirect to="/" />;
    }

    const render: JSX.Element[] = [];

    if (this.props.surveys.length > 0) {
      render.push(this.renderSurveys());
    }

    const credits = (this.props.auth as IUser).credits;

    if (credits === 0) {
      render.push(addCreditsCard);

      return render;
    }

    if (this.props.surveys.length === 0) {
      render.push(newSurveyCard);
    } else {
      render.push(addSurveyButton);
    }

    return render;
  }

  public render(): JSX.Element {
    return (
      <div>
        {this.renderContent()}
      </div>
    );
  }
}

const mapStateToProps = (state: IState): { surveys: ISurveyModel[]; auth: AuthType} => {
  return {
    surveys: state.surveys,
    auth:    state.auth,
  };
};

export default connect(mapStateToProps, { fetchCurrentUserSurveys })(SurveysPage);
