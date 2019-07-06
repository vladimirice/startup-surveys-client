export interface IAction {
  type:     string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  payload:  any;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface IActionFunction extends Function {}
