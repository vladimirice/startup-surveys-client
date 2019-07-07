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
* Common backend-frontend library to store model interfaces
