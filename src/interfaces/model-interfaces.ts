export type AuthType = IUser | boolean | null;

export interface IUser {
  googleId: string;
  credits:  number;
}

export interface ISurvey {
  title:      string;
  body:       string;
  yes:        number;
  no:         number;

  _user:          IUser;
  createdAt:      Date,
  lastResponded:  Date,
}

