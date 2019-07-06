export type AuthType = IUser | boolean | null;

export interface IUser {
  googleId: string;
  credits: number;
}

interface ISurvey {
  title: string;
  subject: string;
  body: string;
}

export interface ISurveyInput extends ISurvey {
  recipients: string;
}

export interface ISurveyModel extends ISurvey {
  _id: string;
  yes: number;
  no: number;

  _user: IUser;
  createdAt: Date;
}
