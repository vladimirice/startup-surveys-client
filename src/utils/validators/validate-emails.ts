// eslint-disable-next-line no-useless-escape
const emailRegex: RegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const validateEmails: Function = (emails: string): string => {
  const invalid = emails
    .split(',')
    .map(item => item.trim())
    .filter(item => !emailRegex.test(item));

  if (invalid.length > 0) {
    return `These emails are invalid: ${invalid}`;
  }

  return '';
};

