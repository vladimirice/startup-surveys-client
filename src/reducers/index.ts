import 'materialize-css/dist/css/materialize.min.css';

import { reducer as reduxForm } from 'redux-form';

import { combineReducers } from 'redux';
import authReducer from './authReducer';

export default combineReducers({
  auth: authReducer,
  form: reduxForm,
})
