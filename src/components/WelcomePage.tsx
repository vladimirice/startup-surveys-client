import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import CardImage from './common/CardImage';
import { GoogleAuthLink } from './common/GoogleAuthLink';
import { AuthType } from '../interfaces/model-interfaces';

type Props = {
  auth: AuthType;
}

class WelcomePage extends Component<Props> {
  renderContent() {
    if (this.props.auth) {
      return <Redirect to="/surveys" />
    }

    return (
      <div>
        <CardImage
          imgAlt="welcome"
          imgSrc="img/welcome-page.jpg"
          title="Welcome!"
          content='Create email surveys, ask people about your ideas, observe response stats. Please log in to continue.'
          action={<GoogleAuthLink class='btn-small'/>}
        />
      </div>
    )
  }

  render() {
    return this.renderContent();
  }
}

const mapStateToProps = (state: any) => {
  return {
    auth: state.auth,
  }
};

export default connect(mapStateToProps)(WelcomePage);
