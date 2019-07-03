import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './Header';
import { connect } from 'react-redux';
import { fetchCurrentUser } from '../actions';
import Surveys from './surveys/Surveys';
import SurveysNew from './surveys/SurveysNew';
import { ThanksPage } from './surveys/ThanksPage';

type Props = {
  fetchCurrentUser: Function,
};

class App extends Component<Props> {
  componentDidMount(): void {
    this.props.fetchCurrentUser();
  }

  render() {
    return (
      <div>
        <BrowserRouter>
          <div className="container">
            <Header/>
            <Route path="/" exact component={Surveys}/>
            <Route path="/surveys/new" exact component={SurveysNew}/>
            <Route path="/thanks" exact component={ThanksPage}/>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(null, { fetchCurrentUser })(App);
