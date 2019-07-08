/* eslint-disable @typescript-eslint/no-explicit-any */

import MockAdapter from 'axios-mock-adapter';
import { axiosServer } from '../utils/axios';

let mock: any;

export class MockHelper {
  public static restoreAxiosServer(): void {
    mock.restore();
  }

  public static mockAxiosServer(): void {
    mock = new MockAdapter(axiosServer);

    const user = {
      credits:4, _id:'5d21a8281b4f030017ec10bc', googleId:'108650293947837032307', __v:0,
    };

    mock.onGet('/surveys').reply(200, this.getSurveys())
      .onGet('/users/current').reply(200, user);
  }

  private static getSurveys(): any {
    return [
      {
        body: 'Survey 1 question',
        createdAt: '2019-07-07T08:08:37.024Z',
        no: 0,
        subject: 'my f sur subject',
        title: 'Survey 1',
        yes: 1,
        __v: 0,
        _user: '5d21a8281b4f030017ec10bc',
        _id: '1d21a8281b4f030017ec10bc',
      },
      {
        body: 'survey 2 question',
        createdAt: '2019-07-07T08:08:37.024Z',
        no: 0,
        subject: 'my f sur subject',
        title: 'Survey 2',
        yes: 1,
        __v: 0,
        _user: '5d21a8281b4f030017ec10bc',
        _id: '2d21a8281b4f030017ec10bc',
      },
    ];
  }
}
