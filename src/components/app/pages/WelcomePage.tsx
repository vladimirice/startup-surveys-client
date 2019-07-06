import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import CardImage from '../../common/CardImage';
import GoogleAuthLink from '../../common/GoogleAuthLink';
import { AuthType } from '../../../interfaces/modelInterfaces';
import { authPropFromState } from '../../../utils/redux-helper/mapStateToPropsHelper';

interface Props {
  auth: AuthType;
}

class WelcomePage extends Component<Props> {
  private renderContent(): JSX.Element {
    if (this.props.auth) {
      return <Redirect to="/surveys" />
    }

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
    )
  }

  public render(): JSX.Element {
    return this.renderContent();
  }
}

export default connect(authPropFromState)(WelcomePage);
