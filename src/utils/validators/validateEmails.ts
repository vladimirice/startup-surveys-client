/* eslint-disable @typescript-eslint/explicit-function-return-type */
// eslint-disable-next-line no-useless-escape,security/detect-unsafe-regex
const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

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

