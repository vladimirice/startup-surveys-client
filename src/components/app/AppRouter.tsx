import { BrowserRouter, Route } from 'react-router-dom';
import WelcomePage from './pages/WelcomePage';
import SurveysPage from '../surveys/pages/SurveysPage';
import NewSurveyPage from '../surveys/pages/NewSurveyPage';
import React, { FunctionComponent } from 'react';
import Header from './Header/Header';
import ThanksPage from '../surveys/pages/ThanksPage';

const AppRouter: FunctionComponent = (): JSX.Element => {
  return (
    <BrowserRouter>
      <div className="container">
        <Header/>
        <Route path="/" exact component={WelcomePage}/>
        <Route path="/surveys" exact component={SurveysPage}/>
        <Route path="/surveys/new" exact component={NewSurveyPage}/>
        <Route path="/thanks" exact component={ThanksPage}/>
      </div>
    </BrowserRouter>
  );
};

export default AppRouter;
