import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './Header';
import { connect } from 'react-redux';
import { fetchCurrentUser } from '../actions';

const Dashboard:    React.FC = () => <h2>dashboard</h2>;
const SurveysNew:   React.FC = () => <h2>surveysNew</h2>;
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
            <Route path="/surveys" exact component={Dashboard}/>
            <Route path="/surveys/new" exact component={SurveysNew}/>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(null, { fetchCurrentUser })(App);
