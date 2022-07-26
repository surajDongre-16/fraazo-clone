import * as types from "./actionTypes";
import axios, { AxiosResponse } from "axios";
import { Dispatch } from "redux";

const userLoginRequest = () => {
  return {
    type: types.AUTH_REQUEST,
  };
};
const userLoginSuccess = (payload: {}) => {
  return {
    type: types.AUTH_SUCCESS,
    payload,
  };
};
const userLoginFailure = () => {
  return {
    type: types.AUTH_FAILURE,
  };
};

const userLogin = (payload:string) => (dispatch:Dispatch) => {
  dispatch(userLoginRequest());
  axios
    .post("")
    .then((r: AxiosResponse) => dispatch(userLoginSuccess(r)))
    .catch((e) => dispatch(userLoginFailure()));
};

export {userLogin}