/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { AddCreditsCard, NewSurveyCard } from '../../common/elements/cardsElements';
import { fetchCurrentUserSurveys } from '../../../actions';
import { AuthType, ISurveyModel, IUser } from '../../../interfaces/modelInterfaces';
import { IState } from '../../../interfaces/stateInterfaces';

import styles from '../../common/cssModules/common.module.css';
import requireAuth from '../../auth/requireAuth';
import { IPropsWithAuthHistory } from '../../../interfaces/propsInterfaces';

interface Props extends IPropsWithAuthHistory {
  fetchCurrentUserSurveys: Function;
  surveys: ISurveyModel[];
}

class SurveysPage extends Component<Props> {
  public componentDidMount(): void {
    this.props.fetchCurrentUserSurveys();
  }

  public render(): JSX.Element {
    return (
      <div>{this.renderContent()}</div>
    );
  }

  private renderContent(): JSX.Element[] | JSX.Element {
    if (this.props.auth === null) {
      return <div>Loading...</div>;
    }

    const render: any = [];

    if (this.props.surveys.length > 0) {
      render.push(this.renderSurveys());
    }

    const { credits } = this.props.auth as IUser;

    if (credits === 0) {
      render.push(<AddCreditsCard key='add-credits-card'/>);

      return render;
    }

    render.push(<NewSurveyCard key='add-surveys-card'/>);

    return render;
  }

  private renderSurveys(): JSX.Element {
    const elements = this.props.surveys.map((item: ISurveyModel): JSX.Element => (
      <div className="card darken-1" key={item._id}>
        <div className="card-content">
          <span className="card-title">{item.title}</span>
          <p>{item.body}</p>
          <p className="right hide-on-med-and-down">
              Sent On: { new Date(item.createdAt).toLocaleString() }
          </p>
        </div>
        <div className="card-action">
          <a href="/">Yes: {item.yes}</a>
          <a href="/">no: {item.no}</a>
        </div>
      </div>
    ));

    return (
      <div key="surveys-list">
        <p key="check-email-hint" className={styles.testerTip}>
          Check your email and answer the question.
        </p>
        {elements}
      </div>
    );
  }
}

const mapStateToProps = (state: IState): { surveys: ISurveyModel[]; auth: AuthType} => ({
  surveys:  state.surveys,
  auth:     state.auth,
});

export default connect(mapStateToProps, { fetchCurrentUserSurveys })(requireAuth<Props>(SurveysPage));
