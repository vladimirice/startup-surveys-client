import React, { Component } from 'react';
import { connect } from 'react-redux';
import { mapToPropsWithAuth } from '../../../utils/redux-helper/mapStateToPropsHelper';
import requireGuest from '../../auth/requireGuest';
import { WelcomeCard } from '../../common/elements/cardsElements';

class WelcomePage extends Component {
  public render(): JSX.Element {
    return WelcomePage.renderContent();
  }

  private static renderContent(): JSX.Element {
    return (
      <div>
        <WelcomeCard/>
      </div>
    );
  }
}

export default connect(mapToPropsWithAuth)(requireGuest(WelcomePage));
