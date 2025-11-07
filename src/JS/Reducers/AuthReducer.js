import { CLEAR_ERRORS_AUTH, CLEAR_SUCCESS_AUTH, CURRENT_USER, LOGIN_USER_FAIL, LOGIN_USER_LOAD, LOGIN_USER_SUCCESS, LOGOUT_USER, REGISTER_USER_FAIL, REGISTER_USER_LOAD, REGISTER_USER_SUCCESS } from "../ActionTypes/authActionTypes"



const initialState = {
    load: false,
    success: null,
    errors: null,
    user: {},
    isAuth: false
}


const AuthReducer = (state=initialState, {type, payload}) => {
    switch (type) {
      case REGISTER_USER_LOAD:
        return { ...state, load: true };

      case REGISTER_USER_SUCCESS:
        localStorage.setItem("token", payload.token);
        return {
          ...state,
          load: false,
          success: payload.success,
          user: payload.user,
          isAuth: true,
        };

      case REGISTER_USER_FAIL:
        return { ...state, load: false, errors: payload.errors, isAuth: false };

      case CLEAR_SUCCESS_AUTH:
        return { ...state, success: null };

      case CLEAR_ERRORS_AUTH:
        return { ...state, errors: null };

      case LOGIN_USER_LOAD:
        return { ...state, load: true };

      case LOGIN_USER_SUCCESS:
        localStorage.setItem("token", payload.token);
        return {
          ...state,
          load: false,
          success: payload.success,
          user: payload.user,
          isAuth: true,
        };

      case LOGIN_USER_FAIL:
        return { ...state, load: false, errors: payload.errors, isAuth: false };

      case LOGOUT_USER:
        localStorage.removeItem("token");
        return {
          ...state,
          load: false,
          success: null,
          errors: null,
          user: {},
          isAuth: false,
        };

      case CURRENT_USER:
        return {
          ...state,
          load: false,
          user: payload.user,
          isAuth: true,
        };

      default:
        return state;
    }
}

export default AuthReducer