import { combineEpics } from 'redux-observable';
import { takeUntil } from 'rxjs/operator/takeUntil';
import { mergeMap } from 'rxjs/operator/mergeMap';
import { map } from 'rxjs/operator/map';
import { _catch } from 'rxjs/operator/catch';

import { ajax } from 'utils/ajax';

import {
  authLoginError,
  authLoginSuccess,
  authLogoutError,
  authLogoutSuccess,
  authPasswordRemindError,
  authPasswordRemindSuccess,
  authRegisterError,
  authRegisterSuccess,
} from './auth.actions';
import {
  AUTH_LOGIN,
  AUTH_LOGIN_CANCELLED,
  AUTH_LOGOUT,
  AUTH_LOGOUT_CANCELLED,
  AUTH_PASSWORD_REMIND,
  AUTH_PASSWORD_REMIND_CANCELLED,
  AUTH_REGISTER,
  AUTH_REGISTER_CANCELLED,
} from './auth.constants';

const loginEpic = (action$) => {
  return action$.ofType(AUTH_LOGIN)
    ::mergeMap(({ payload }) => {
      const { password, username } = payload;

      return ajax({
        method: 'POST',
        // url: `/api/login`, TODO: Valid endpoint
        url: `/api/testEndpoint`,
        body: {
          password,
          username,
        },
      })
        ::map(({ token = 'olden' }) => authLoginSuccess(token))
        ::_catch((error) => authLoginError(error.message || error));
    })
    ::takeUntil(action$.ofType(AUTH_LOGIN_CANCELLED));
};

const logoutEpic = (action$) => {
  return action$.ofType(AUTH_LOGOUT)
    ::mergeMap(() =>
      ajax({
        method: 'POST',
        // url: `/api/logout`, TODO: Valid endpoint
        url: `/api/testEndpoint`,
      })
        ::map(() => authLogoutSuccess())
        ::_catch((error) => authLogoutError(error.message || error))
    )
    ::takeUntil(action$.ofType(AUTH_LOGOUT_CANCELLED));
};

const passwordRemindEpic = (action$) => {
  return action$.ofType(AUTH_PASSWORD_REMIND)
    ::mergeMap(() =>
      ajax({
        method: 'POST',
        // url: `/api/remindPassword`, TODO: Valid endpoint
        url: `/api/testEndpoint`,
      })
        ::map(() => {
          window.location.href = '/logowanie';
          return authPasswordRemindSuccess();
        })
        ::_catch((error) => authPasswordRemindError(error.message || error))
    )
    ::takeUntil(action$.ofType(AUTH_PASSWORD_REMIND_CANCELLED));
};

const registerEpic = (action$) => {
  return action$.ofType(AUTH_REGISTER)
    ::mergeMap(() =>
      ajax({
        method: 'POST',
        // url: `/api/register`, TODO: Valid endpoint
        url: `/api/testEndpoint`,
      })
        ::map(() => {
          window.location.href = '/logowanie';
          return authRegisterSuccess();
        })
        ::_catch((error) => authRegisterError(error.message || error))
    )
    ::takeUntil(action$.ofType(AUTH_REGISTER_CANCELLED));
};

const authEpic = combineEpics(
  loginEpic,
  logoutEpic,
  passwordRemindEpic,
  registerEpic,
);

export { authEpic };
