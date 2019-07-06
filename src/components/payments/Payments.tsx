import React, { Component } from 'react';
import StripeCheckout, { Token } from 'react-stripe-checkout';
import { connect } from 'react-redux';
import { handleStripeToken } from '../../actions';
import { stripePublishableKey } from '../../utils/config';

interface PaymentsProps {
  handleStripeToken: Function;
}

class Payments extends Component<PaymentsProps> {
  private handleToken = (token: Token): void => {
    this.props.handleStripeToken(token);
  };

  public render(): JSX.Element {
    return (
      <StripeCheckout
        name='Startup surveys'
        description='5$ for the 5 credits'
        amount = {500}
        token = {this.handleToken}
        stripeKey={stripePublishableKey}
      >
        <button className="btn">Add credits</button>
      </StripeCheckout>
    );
  }
}

export default connect(null, { handleStripeToken })(Payments);
