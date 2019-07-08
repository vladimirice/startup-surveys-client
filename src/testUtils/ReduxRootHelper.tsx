/* eslint-disable @typescript-eslint/no-explicit-any */
import { mount, ReactWrapper } from 'enzyme';
import React from 'react';
import ReduxRoot from '../components/common/redux/reduxRoot';
import App from '../components/app/App';

const fakeGoogleId = '12345';

export class ReduxRootHelper {
  public static getGuestWrapper(): ReactWrapper {
    const initialState = {};

    return this.getWrapperWithState(initialState);
  }

  public static getLoggedWrappedWithZeroCredits(): ReactWrapper {
    const initialState = this.getAuthInitialState(0);

    return this.getWrapperWithState(initialState);
  }

  public static getLoggedWrappedWithFiveCredits(): ReactWrapper {
    const initialState = this.getAuthInitialState(5);

    return this.getWrapperWithState(initialState);
  }

  public static getWrapperWithState(initialState: any): ReactWrapper {
    return mount(
      <ReduxRoot initialState={initialState}>
        <App />
      </ReduxRoot>,
    );
  }

  private static getAuthInitialState(credits: number): any {
    return {
      auth: {
        googleId: fakeGoogleId,
        credits,
      },
    };
  }
}
