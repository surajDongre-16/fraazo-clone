import axios from "axios";
import { Dispatch } from "react";
import { AnyAction } from "redux";
import * as types from "./actionTypes";

const getProductRequest = () => {
  return {
    type: types.GET_PRODUCT_REQUEST,
  };
};

const getProductSuccess = (payload: {}) => {
  return {
    type: types.GET_PRODUCT_REQUEST,
    payload,
  };
};

const getProductFailure = () => {
  return {
    type: types.GET_PRODUCT_REQUEST,
  };
};

const getProducts = (payload: string) => (dispatch: Dispatch<AnyAction>) => {
  dispatch(getProductRequest());
  axios
    .get("")
    .then((r) => dispatch(getProductSuccess(r.data)))
    .catch((e) => dispatch(getProductFailure()));
};

export { getProducts };
