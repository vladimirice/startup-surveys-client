# Startup surveys

<a href="https://codeclimate.com/github/vladimirice/startup-surveys-client/maintainability"><img src="https://api.codeclimate.com/v1/badges/1bdb0561f6f3b7226502/maintainability" /></a>

https://startup-surveys.sunarmy.pro/

**Goal:** Create email surveys, ask people about your ideas, observe response statistics.

Startup surveys is a project to demonstrate my ReactJS skills.

Backend part is [here](https://github.com/vladimirice/startup-surveys-server)

Most exciting things I did:
* All project files are written using Typescript.
* Completely separated code bases - frontend (client) and backend.
* React Router, Redux Forms, Redux thunk is used.
* [Autotests](src/__tests__/App.test.tsx) of components using the `Enzyme` library.
* `Stripe` payment system integration.
* [High Order Components](src/components/auth) to provide Guest/Logged redirect logic
* Many different [linters](.eslintrc.js) to ensure quality
* CodeClimate badge to ensure quality

![Application business workflow](https://raw.githubusercontent.com//vladimirice/startup-surveys-client/master/documentation/img/01-application-business-workflow.jpg)
![Application components](https://raw.githubusercontent.com//vladimirice/startup-surveys-client/master/documentation/img/02-application-components.jpg)
![Action to fetch user state](https://raw.githubusercontent.com//vladimirice/startup-surveys-client/master/documentation/img/03-action-to-fetch-user-state.jpg)

## Notes

Card number for Stripe (test mode)
```
4242 4242 4242 4242
```

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
* Frontend autotests for create survey form
* Not logged user follows the /surveys URL - a request returns 401 status. The cookie-based app, how to avoid the request?
* Common backend-frontend library to store model interfaces like `ISurvey`, `IUser`
* Strict typing for High-order components - remove `any`
