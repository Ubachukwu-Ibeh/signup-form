import { IFormStore } from "../interfaces/interfaces";

const formStore: IFormStore = {
  hasAttempted: false,
  information: {
    username: "",
    email: "",
    password: ""
  },
  error: {}
};
export default formStore;
