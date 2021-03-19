import React, { useContext } from "react";
import styles from "./style/Input.module.scss";
import {
  IFormInfoObject,
  IFormInputProps
} from "../../../../interfaces/interfaces";
import { FormContext } from "../Form/Form";
import formStore from "../../../../stores/FormStore";

const formInfoObject: IFormInfoObject = formStore.information;

export const getFormInfoObject = () => formInfoObject;

const Input = ({ inputName }: IFormInputProps) => {
  const formContext = useContext(FormContext);

  const updateInfo = (e: React.ChangeEvent<HTMLInputElement>) => {
    formInfoObject[inputName] = e.target.value;
  };

  return (
    <div className={styles.main}>
      {inputName in formContext.error && <p>{formContext.error[inputName]}</p>}
      <h3>
        {inputName} <span> *</span>
      </h3>
      <input
        type={inputName}
        onChange={e => updateInfo(e)}
        placeholder={inputName}></input>
    </div>
  );
};

export default Input;
