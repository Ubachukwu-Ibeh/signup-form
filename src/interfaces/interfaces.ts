export interface IFormInfoObject {
  [name: string]: string;
}

export interface IFormAction {
  type: string;
  payload: any;
}

export interface IFormStore {
  hasAttempted?: boolean;
  information: IFormInfoObject;
  error: { [name: string]: string };
  dispatch?: React.Dispatch<IFormAction>;
}
