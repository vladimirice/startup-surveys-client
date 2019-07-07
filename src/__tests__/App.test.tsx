/* eslint-disable @typescript-eslint/no-explicit-any */
// eslint-disable-next-line unicorn/filename-case
import React from 'react';
import { mount } from 'enzyme';
import App from '../components/app/App';
import ReduxRoot from '../components/common/redux/reduxRoot';
import WelcomePage from '../components/app/pages/WelcomePage';
import SurveysPage from '../components/surveys/pages/SurveysPage';
import CardImage from '../components/common/CardImage';
import GoogleAuthLink from '../components/common/GoogleAuthLink';

describe('Guest', (): void => {
  let wrapped: any;

  beforeEach((): void => {
    const initialState = {};

    wrapped = mount(
      <ReduxRoot initialState={initialState}>
        <App />
      </ReduxRoot>,
    );
  });

  afterEach((): void => {
    wrapped.unmount();
  });

  it('shows a guest card', (): void => {
    expect(wrapped.find(WelcomePage).length).toEqual(1);
    const cardImage = wrapped.find(CardImage);
    expect(cardImage.length).toEqual(1);

    const cardTitle = cardImage.find('.card-title');
    expect(cardTitle.length).toEqual(1);
    expect(cardTitle.text()).toEqual('Welcome!');

    expect(cardImage.find(GoogleAuthLink).length).toEqual(1);
  });
});

describe('Logged user', (): void => {
  let wrapped: any;

  it('shows a logged user add credits card', (): void => {
    const initialState = { auth: { googleId: '12345', credits: 5 } };

    wrapped = mount(
      <ReduxRoot initialState={initialState}>
        <App />
      </ReduxRoot>,
    );

    expect(wrapped.find(SurveysPage).length).toEqual(1);
  });
});
