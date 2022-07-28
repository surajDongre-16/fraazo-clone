import { AnyAction } from "redux";
import * as types from "./actionTypes";

interface isAppState {
  data: Array<string>;
  loading: boolean;
  error: boolean;
}

const initalState: isAppState = {
  data: [],
  loading: false,
  error: false,
};

export const AppReducer = (
  state: isAppState = initalState,
  action: AnyAction
) => {
  const { type, payload } = action;

  switch (type) {
    case types.GET_PRODUCT_REQUEST: {
      return {
        ...state,
        loading: true,
      };
    }
    case types.GET_PRODUCT_SUCCESS: {
      return {
        ...state,
        loading: false,
        data: payload,
        error: false,
      };
    }
    case types.GET_PRODUCT_FAILURE: {
      return {
        ...state,
        loading: false,
        error: true,
      };
    }
    default: {
      return state;
    }
  }
};
