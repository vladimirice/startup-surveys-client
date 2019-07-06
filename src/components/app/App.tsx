import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './Header';
import { connect } from 'react-redux';
import { fetchCurrentUser } from '../../actions';
import ThanksPage from './../surveys/pages/ThanksPage';
import WelcomePage from './pages/WelcomePage';
import SurveysPage from '../surveys/pages/SurveysPage';
import NewSurveyPage from '../surveys/pages/NewSurveyPage';

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
            <Route path="/" exact component={WelcomePage}/>
            <Route path="/surveys" exact component={SurveysPage}/>
            <Route path="/surveys/new" exact component={NewSurveyPage}/>
            <Route path="/thanks" exact component={ThanksPage}/>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(null, { fetchCurrentUser })(App);
