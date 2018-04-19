import { combineReducers, routerReducer as routing } from 'redux-seamless-immutable';
import { reducer as form } from 'redux-form';

import app from './modules/app/app';
import theme from './modules/app/theme';
import authWrapper from './modules/app/authWrapper';

import signIn from './modules/auth/signIn';
import signUp from './modules/auth/signUp';
import resetPassword from './modules/auth/resetPassword';

export default combineReducers({
  routing,
  form,

  app: combineReducers({
    app,
    theme,
    authWrapper
  }),

  auth: combineReducers({
    signIn,
    signUp,
    resetPassword
  })
});
