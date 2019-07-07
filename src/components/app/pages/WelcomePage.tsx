import React, { Component } from 'react';
import { connect } from 'react-redux';
import CardImage from '../../common/CardImage';
import GoogleAuthLink from '../../common/GoogleAuthLink';
import { mapToPropsWithAuth } from '../../../utils/redux-helper/mapStateToPropsHelper';
import requireGuest from '../../auth/requireGuest';

class WelcomePage extends Component {
  public render(): JSX.Element {
    return WelcomePage.renderContent();
  }

  private static renderContent(): JSX.Element {
    return (
      <div>
        <CardImage
          imgAlt="welcome"
          imgSrc="/img/welcome-page.jpg"
          title="Welcome!"
          content='Create email surveys, ask people about your ideas, observe response stats. Please log in to continue.'
          action={<GoogleAuthLink class='btn-small'/>}
        />
      </div>
    );
  }
}

export default connect(mapToPropsWithAuth)(requireGuest(WelcomePage));
