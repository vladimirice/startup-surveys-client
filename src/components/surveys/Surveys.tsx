import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchCurrentUserSurveys } from '../../actions';

type Props = {
  fetchCurrentUserSurveys: Function,
  surveys: any,
}

class Surveys extends Component<Props> {

  componentDidMount(): void {
    this.props.fetchCurrentUserSurveys();
  }

  renderContent() {
    return this.props.surveys.map((item: any) => {
      return (
        <div className="card darken-1" key={item._id}>
          <div className="card-content">
            <span className="card-title">{item.title}</span>
            <p>{item.question}</p>
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
  }

  render() {
    return (
      <div>
        <div>
          <ul>
            {this.renderContent()}
          </ul>
        </div>
        <div className="fixed-action-btn">
          <Link to="surveys/new" className="btn-floating btn-large red">
            <i className="material-icons">add</i>
          </Link>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: any) => {
  return {
    surveys: state.surveys,
  };
};

export default connect(mapStateToProps, { fetchCurrentUserSurveys })(Surveys);
