/* eslint-disable @typescript-eslint/no-explicit-any */
// eslint-disable-next-line unicorn/filename-case
import { ReactWrapper } from 'enzyme';
import SurveysPage from '../components/surveys/pages/SurveysPage';
import { ReduxRootHelper } from '../testUtils/ReduxRootHelper';
import WelcomePage from '../components/app/pages/WelcomePage';
import { CommonChecker } from '../testUtils/CommonChecker';
import { AddCreditsCard, NewSurveyCard, WelcomeCard } from '../components/common/elements/cardsElements';
import Header from '../components/app/Header/Header';
import { CommonHelper } from '../testUtils/CommonHelper';
import { MockHelper } from '../testUtils/MockHelper';

beforeEach((): void => {
  MockHelper.mockAxiosServer();
});

afterEach((): void => {
  MockHelper.restoreAxiosServer();
});

describe('Guest', (): void => {
  let wrapper: ReactWrapper;

  beforeEach((): void => {
    wrapper = ReduxRootHelper.getGuestWrapper();
  });

  afterEach((): void => {
    wrapper.unmount();
  });

  it('shows a guest card', (): void => {
    const page = CommonChecker.expectComponentExist(wrapper, WelcomePage);

    CommonChecker.expectComponentExist(page, WelcomeCard);
  });
});

describe('Logged user', (): void => {
  let wrapper: ReactWrapper;

  afterEach((): void => {
    wrapper.unmount();
  });

  describe('Logged user without created surveys', (): void => {
    it('shows correct logged with no credits page', (): void => {
      wrapper = ReduxRootHelper.getLoggedWrappedWithZeroCredits();

      const page = CommonChecker.expectComponentExist(wrapper, SurveysPage);

      CommonChecker.expectComponentExist(page, AddCreditsCard);

      CommonChecker.expectComponentAbsence(page, NewSurveyCard);

      const header = wrapper.find(Header);

      expect(header.text().includes('credits 0')).toBe(true);
    });
    it('shows correct logged state with five credits page', (): void => {
      wrapper = ReduxRootHelper.getLoggedWrappedWithFiveCredits();

      const page = CommonChecker.expectComponentExist(wrapper, SurveysPage);

      CommonChecker.expectComponentExist(page, NewSurveyCard);
      CommonChecker.expectComponentAbsence(page, AddCreditsCard);

      const header = wrapper.find(Header);

      expect(header.text().includes('credits 5')).toBe(true);
    });
  });

  describe('Logged user with surveys', (): void => {
    it('shows two surveys fetched from mocked API', async (): Promise<void> => {
      wrapper = await ReduxRootHelper.getLoggedWrappedWithFiveCredits();
      const page = CommonChecker.expectComponentExist(wrapper, SurveysPage);

      await CommonHelper.flushPromises();

      const pageText = page.text();

      expect(pageText).toMatch('Survey 1');
      expect(pageText).toMatch('Survey 2');
    });
  });
});
