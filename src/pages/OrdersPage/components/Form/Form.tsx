import React, { useReducer } from "react";
import styles from "./style/Form.module.scss";
import Input, { getFormInfoObject } from "../Input/Input";
import { IFormStore } from "../../../../interfaces/interfaces";
import * as formActionTypes from "../../../../actionTypes/formActionTypes";
import formStore from "../../../../stores/FormStore";
import formReducer from "../../../../reducers/FormReducer";

export const FormContext = React.createContext<IFormStore>(formStore);

const Form = () => {
  const [state, dispatch] = useReducer(formReducer, formStore);

  return (
    <FormContext.Provider value={{ ...state, dispatch }}>
      {!state.hasAttempted || Object.keys(state.error).length !== 0 ? (
        <div className={styles.main}>
          {["username", "email", "password"].map((item, index) => {
            return <Input key={index} inputName={item} />;
          })}
          <button
            type="submit"
            onClick={() =>
              dispatch({
                type: formActionTypes.FINISH,
                payload: getFormInfoObject()
              })
            }>
            Finish
          </button>
        </div>
      ) : (
        <p>Done!</p>
      )}
    </FormContext.Provider>
  );
};

export default Form;
