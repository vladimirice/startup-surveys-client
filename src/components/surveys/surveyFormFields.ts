export interface IFields {
  label: string;
  name: string;
  placeholder: string;
  icon: string;
}

export const surveyFormFields: IFields[] = [
  {
    label: 'Survey title',
    name: 'title',
    placeholder: 'My first survey',
    icon: 'assignment_ind',
  },
  {
    label: 'Email subject',
    name: 'subject',
    placeholder: 'A survey',
    icon: 'subject',
  },
  {
    label: 'The question',
    name: 'body',
    placeholder: 'Do you have a good delivery service?',
    icon: 'question_answer',
  },
  {
    label: 'Comma delimited recipients',
    name: 'recipients',
    placeholder: 'YOUR.EMAIL@YOUR-mail-server.com, example2@gmail.com',
    icon: 'email',
  },
];
