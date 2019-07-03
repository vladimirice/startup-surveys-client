import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchCurrentUserSurveys } from '../../actions';
import Payments from '../Payments';
import CardImage from '../common/CardImage';
import { serverURL } from '../../utils/config';

type Props = {
  fetchCurrentUserSurveys: Function,
  surveys: any,
  auth: any,
}

class Surveys extends Component<Props> {

  componentDidMount(): void {
    this.props.fetchCurrentUserSurveys();
  }

  renderLogin() {
    return (
      <CardImage
        imgAlt="welcome"
        imgSrc="http://lorempixel.com/output/nature-q-c-1280-200-5.jpg"
        title="Welcome!"
        content="Create email surveys, ask people about your ideas, observe response stats. Please log in to continue."
        action={ <a className="btn-small" href={serverURL + '/auth/google'}>Auth via Google</a> }
      />
    );
  }

  renderAddCredits() {
    return (
      <CardImage
        imgAlt="lorem"
        imgSrc="http://lorempixel.com/output/nightlife-q-c-1280-200-2.jpg"
        title="Next step - add credits"
        content="To use this service you have to buy credits. One credit = one survey. Minimum amount to buy - 5 credits. Notice: card number to test is: 4242 4242 4242 4242"
        action={<Payments/>}
      />
    );
  }
  createNewSurvey() {
    return (
      <CardImage
        imgAlt="create-new-survey"
        imgSrc="http://lorempixel.com/output/business-q-c-1280-200-6.jpg"
        title="Next step - create a new survey"
        content="Now it is time to create your first survey! Push the button below to begin."
        action={
          <Link to="surveys/new" className="btn-small">
            Create a new survey
          </Link>
        }
      />
    );
  }

  renderSurveys() {
    const elements = this.props.surveys.map((item: any) => {
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
      <div>
        <p style={{fontSize: '14px', backgroundColor: '#80ced6'}}>Check your email and choose one of the answers</p>
      <ul>
        {elements}
      </ul>
      </div>
    );
  }

  renderContent() {
    if (this.props.surveys.length > 0) {
      return this.renderSurveys();
    }

    if (!this.props.auth) {
      return this.renderLogin();
    }

    if (this.props.auth.credits === 0) {
      return this.renderAddCredits();
    }

    return this.createNewSurvey();
  }

  renderAddButton() {
    return (
      <Link to="surveys/new" className="btn-floating btn-large right">
        <i className="material-icons">add</i>
      </Link>
    );
  }

  render() {
    return (
      <div>
          {this.renderContent()}
          {this.renderAddButton()}
      </div>
    );
  }
}

const mapStateToProps = (state: any) => {
  return {
    surveys: state.surveys,
    auth:    state.auth,
  };
};

export default connect(mapStateToProps, { fetchCurrentUserSurveys })(Surveys);
