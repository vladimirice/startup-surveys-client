/* eslint-disable max-len */
import React, { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';
import CardImage from '../CardImage';
import Payments from '../../payments/Payments';
import GoogleAuthLink from '../GoogleAuthLink';

export const AddCreditsCard: FunctionComponent = (): JSX.Element => (
  <CardImage
    key="add-credits-card"
    imgAlt="add-credits-card"
    imgSrc="/img/add-credits.jpg"
    title="Next step - add credits"
    content="To use this service you have to buy credits. One credit = one survey. Minimum amount to buy - 5 credits. Notice: card number to test is: 4242 4242 4242 4242"
    action={<Payments/>}
  />
);

export const NewSurveyCard: FunctionComponent = (): JSX.Element => (
  <CardImage
    key="new-survey-card"
    imgAlt="create-new-survey"
    imgSrc="/img/create-new-survey.jpg"
    title="Surveys"
    content="Now it is time to create your first survey! Push the button below to begin."
    action={
      <Link to="surveys/new" className="btn-small">
        Create a new survey
      </Link>
    }
  />
);

export const WelcomeCard: FunctionComponent = (): JSX.Element => (
  <CardImage
    imgAlt="welcome"
    imgSrc="/img/welcome-page.jpg"
    title="Welcome!"
    content='Create email surveys, ask people about your ideas, observe response stats. Please log in to continue.'
    action={<GoogleAuthLink class='btn-small'/>}
  />
);
