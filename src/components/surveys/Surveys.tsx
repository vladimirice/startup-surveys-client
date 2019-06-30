import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Surveys extends Component {
  render() {
    return (
      <div>
        Surveys
        <div className="fixed-action-btn">
          <Link to="surveys/new" className="btn-floating btn-large red">
            <i className="material-icons">add</i>
          </Link>
        </div>
      </div>
    );
  }
}
