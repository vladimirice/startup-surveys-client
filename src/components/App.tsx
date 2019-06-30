import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './Header';
import { connect } from 'react-redux';
import { fetchCurrentUser } from '../actions';
import Surveys from './surveys/Surveys';
import SurveysNew from './surveys/SurveysNew';

const Landing:      React.FC = () => <h2>landing</h2>;

class App extends Component {
  componentDidMount(): void {
    // @ts-ignore
    this.props.fetchCurrentUser();
  }

  render() {
    return (
      <div>
        <BrowserRouter>
          <div className="container">
            <Header/>
            <Route path="/" exact component={Landing}/>
            <Route path="/surveys" exact component={Surveys}/>
            <Route path="/surveys/new" exact component={SurveysNew}/>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(null, { fetchCurrentUser })(App);
