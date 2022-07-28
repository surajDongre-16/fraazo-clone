import { AnyAction } from "redux";
import * as types from "./actionTypes";

const initalState:IstateType = {
	isAuth: false,
	token: "",
	loading: false,
	error: false,
};


interface IstateType{
    isAuth: boolean;
	token: string;
	loading: boolean;
	error: boolean
}



export const AuthReducer = (state:IstateType = initalState, action: AnyAction):IstateType => {
	const { type, payload } = action;

	switch (type) {
		case types.AUTH_REQUEST:
			return {
				...state,
				loading: true,
			};

		case types.AUTH_SUCCESS:
			return {
				...state,
				loading: false,
				isAuth: true,
				token: payload,
				error: false,
			};

		case types.AUTH_FAILURE:
			return {
				...state,
				isAuth: false,
				token: "",
				loading: false,
				error: true,
			};

		default:
			return state;
	}
};
