import formStore from "../stores/FormStore";
import { IFormAction } from "../interfaces/interfaces";
import * as formActionTypes from "../actionTypes/formActionTypes";
import handleError from "../utils//errorHandler";

const formReducer = (state = formStore, action: IFormAction) => {
  state.information = action.payload;
  state.error = {};

  switch (action.type) {
    case formActionTypes.FINISH:
      return handleError(state);

    default:
      return state;
  }
};
export default formReducer;
