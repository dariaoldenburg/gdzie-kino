import {
  AUTH_LOGIN_ERROR,
  AUTH_LOGIN_SUCCESS,
  AUTH_LOGOUT_SUCCESS,
  AUTH_LOGOUT_ERROR,
  AUTH_REGISTER_ERROR,
} from './auth.constants';

const initialState = {
  error: null,
  token: null,
};

const authReducer = (state = initialState, action = { type: '', payload: [] }) => {
  switch (action.type) {
    case AUTH_LOGIN_SUCCESS: {
      const { token } = action.payload;

      return {
        ...state,
        token,
      };
    }

    case AUTH_LOGIN_ERROR: {
      const { error } = action.payload;

      return {
        ...state,
        error,
      };
    }

    case AUTH_LOGOUT_SUCCESS: {
      return {
        ...state,
        token: null,
      };
    }

    case AUTH_LOGOUT_ERROR: {
      const { error } = action.payload;

      return {
        ...state,
        error,
      };
    }

    case AUTH_REGISTER_ERROR: {
      const { error } = action.payload;

      return {
        ...state,
        error,
      };
    }

    default: {
      return state;
    }
  }
};

export { authReducer };
