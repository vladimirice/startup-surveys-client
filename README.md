# Startup surveys

<a href="https://codeclimate.com/github/vladimirice/startup-surveys-client/maintainability"><img src="https://api.codeclimate.com/v1/badges/1bdb0561f6f3b7226502/maintainability" /></a>

https://startup-surveys.sunarmy.pro/

**Goal:** Create email surveys, ask people about your ideas, observe response statistics.

Startup surveys is a project to demonstrate my React skills.

Backend part is [here](https://github.com/vladimirice/startup-surveys-server)

## Features

1. Log in via Google OAuth.
2. Add some credits via the payment system (Stripe).
3. Create a survey.
4. Observe an email and answer the question.
5. Observe the answer statistics.

Card number for Stripe (test mode)
```
4242 4242 4242 4242
``` 

## Architecture

* OAuth cookie-based authorization.
* Two steps survey creation form Redux Form.
* React Router, Redux forms, Redux thunk are used.
* Email sending - integration with the MailGun
* [High Order Component](src/components/auth/requireAuth.tsx) to provide Guest/Logged redirect logic

### Quality
* Strict typings by the Typescript.
* Many different linters.
* CodeClimate.

## Scripts

### Maintenance

To start the application in the development mode:
```
npm start
```

To build the application:
```
npm run build
```

### Quality tools
```
npm run checks
```

Additional quality checks require `codeclimate` to be installed globally
```
make check-project-before-commit
```

## Future improvements
* Frontend autotests
* Not logged user follows the /surveys URL - a request returns 401 status. The cookie-based app, how to avoid the request?
* Common backend-frontend library to store model interfaces like `ISurvey`, `IUser`
* Strict typing for HOC - remove `any`


## Autotests cases

Guest:
* Welcome page and card content - for guest

Logged user:
* Initial Redux auth state is mock user

No credits:
* card to offer deposit is visible
* Card to create a new survey is not visible
* credits 0 - in a header

There are credits:
* Card to create a new survey is visible

There are two surveys:
* mock an API call
* There is a list with the two surveys
* Check card view - all required fields must be visible

Creation form - most difficult
* follow the all steps - imitate actions
* Do not check error handling now - future task
* after clicking next - ensure a submit form is appeared
* after clicking cancel - ensure the /surveys page is appeared
* after clicking on "create" - ensure that all fields are cleared

* Click next again - all fields values must be preserved

Form review:
* Ensure all values are shown
* click submit => mock the axios call
    * response - current user data
* ensure that we are on the /surveys page
