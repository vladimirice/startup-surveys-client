import Payments from '../Payments';
import React from 'react';
import { Link } from 'react-router-dom';
import CardImage from '../common/CardImage';

export const addCreditsCard: JSX.Element =
  <CardImage
    key="add-credits-card"
    imgAlt="lorem"
    imgSrc="http://lorempixel.com/output/nightlife-q-c-1280-200-2.jpg"
    title="Next step - add credits"
    content="To use this service you have to buy credits. One credit = one survey. Minimum amount to buy - 5 credits. Notice: card number to test is: 4242 4242 4242 4242"
    action={<Payments/>}
  />;

export const newSurveyCard: JSX.Element =
  <CardImage
    key="new-survey-card"
    imgAlt="create-new-survey"
    imgSrc="http://lorempixel.com/output/business-q-c-1280-200-6.jpg"
    title="Next step - create a new survey"
    content="Now it is time to create your first survey! Push the button below to begin."
    action={
      <Link to="surveys/new" className="btn-small">
        Create a new survey
      </Link>
    }
  />;
