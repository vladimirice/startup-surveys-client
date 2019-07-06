import { Link } from 'react-router-dom';
import React from 'react';

export const addSurveyButton: JSX.Element = <Link key="add-survey-button" to="surveys/new" className="btn-floating btn-large right">
  <i className="material-icons">add</i>
</Link>;
