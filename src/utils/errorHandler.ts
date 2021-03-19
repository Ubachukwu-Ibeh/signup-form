import { IFormStore } from "../interfaces/interfaces";

const specialCharacters = ["@", "-", "%", "!", "#", "$", "^"];

const contains = (
  val: string,
  expect: string | Array<string>
): object | boolean => {
  if (Array.isArray(expect)) {
    const charObj: any = {};

    expect.forEach(item => {
      charObj[item] = contains(val, item);
    });
    return charObj;
  } else {
    return val.indexOf(expect) < 0 ? false : true;
  }
};

const handleError = (state: IFormStore) => {
  Object.keys(state.information).forEach(item => {
    const info = state.information[item];
    state.hasAttempted = true;

    switch (item) {
      case "username":
        if (info.length === 0) {
          state.error.username = "Username field cannot be empty";
        } else if (
          Object.values(contains(info, specialCharacters)).includes(true)
        ) {
          state.error.username = "Username cannot have special characters";
        }
        break;

      case "email":
        if (info.length === 0) {
          state.error.email = "E-mail field cannot be empty";
        } else if (!contains(info, "@")) {
          state.error.email = "E-mail must contain '@'";
        }
        break;

      case "password":
        if (info.length === 0) {
          state.error.password = "Password field cannot be empty";
        } else if (
          !Object.values(contains(info, specialCharacters)).includes(true)
        ) {
          state.error.password = "Password must contain special characters";
        }
        break;

      default:
        break;
    }
  });
  return { ...state };
};
export default handleError;
