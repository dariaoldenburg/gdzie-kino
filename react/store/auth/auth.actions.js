import {
  AUTH_LOGIN,
  AUTH_LOGIN_CANCELLED,
  AUTH_LOGIN_ERROR,
  AUTH_LOGIN_SUCCESS,
  AUTH_LOGOUT,
  AUTH_LOGOUT_CANCELLED,
  AUTH_LOGOUT_ERROR,
  AUTH_LOGOUT_SUCCESS,
  AUTH_PASSWORD_REMIND,
  AUTH_PASSWORD_REMIND_CANCELLED,
  AUTH_PASSWORD_REMIND_ERROR,
  AUTH_PASSWORD_REMIND_SUCCESS,
  AUTH_REGISTER,
  AUTH_REGISTER_CANCELLED,
  AUTH_REGISTER_ERROR,
  AUTH_REGISTER_SUCCESS,
} from './auth.constants';
import { simpleActionCreator } from '../action.creators';

const authLogin = (password, username) => ({
  type: AUTH_LOGIN,
  payload: {
    password,
    username,
  },
});

const authLoginCancelled = simpleActionCreator(AUTH_LOGIN_CANCELLED);

const authLoginError = (error) => ({
  type: AUTH_LOGIN_ERROR,
  payload: {
    error,
  },
});

const authLoginSuccess = (token) => ({
  type: AUTH_LOGIN_SUCCESS,
  payload: {
    token,
  },
});

const authLogout = simpleActionCreator(AUTH_LOGOUT);

const authLogoutCancelled = simpleActionCreator(AUTH_LOGOUT_CANCELLED);

const authLogoutError = (error) => ({
  type: AUTH_LOGOUT_ERROR,
  payload: {
    error,
  },
});

const authLogoutSuccess = simpleActionCreator(AUTH_LOGOUT_SUCCESS);

const authPasswordRemind = (email) => ({
  type: AUTH_PASSWORD_REMIND,
  payload: {
    email,
  },
});

const authPasswordRemindCancelled = simpleActionCreator(AUTH_PASSWORD_REMIND_CANCELLED);

const authPasswordRemindError = (error) => ({
  type: AUTH_PASSWORD_REMIND_ERROR,
  payload: {
    error,
  },
});

const authPasswordRemindSuccess = simpleActionCreator(AUTH_PASSWORD_REMIND_SUCCESS);

const authRegister = (email, password) => ({
  type: AUTH_REGISTER,
  payload: {
    email,
    password,
  },
});

const authRegisterCancelled = simpleActionCreator(AUTH_REGISTER_CANCELLED);

const authRegisterError = (error) => ({
  type: AUTH_REGISTER_ERROR,
  payload: {
    error,
  },
});

const authRegisterSuccess = simpleActionCreator(AUTH_REGISTER_SUCCESS);

export {
  authLogin,
  authLoginCancelled,
  authLoginError,
  authLoginSuccess,
  authLogout,
  authLogoutCancelled,
  authLogoutError,
  authLogoutSuccess,
  authPasswordRemind,
  authPasswordRemindCancelled,
  authPasswordRemindError,
  authPasswordRemindSuccess,
  authRegister,
  authRegisterCancelled,
  authRegisterError,
  authRegisterSuccess,
};
