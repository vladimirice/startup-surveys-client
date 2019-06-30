export interface IFields {
  label: string;
  name: string;
}

export const surveyFormFields: IFields[] = [
  {
    label: 'Survey title',
    name: 'title',
  },
  {
    label: 'Email subject',
    name: 'subject',
  },
  {
    label: 'The question',
    name: 'body',
  },
  {
    label: 'Comma delimited recipients',
    name: 'recipients',
  },
];
