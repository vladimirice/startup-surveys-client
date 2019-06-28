import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { connect } from 'react-redux';
import { handleStripeToken } from '../actions';

type PaymentsProps = { handleStripeToken: Function };

class Payments extends Component<PaymentsProps> {
  render() {
    return (
      <StripeCheckout
        name='Startup surveys'
        description='5$ for the 5 credits'
        amount = {500}
        token = {token => this.props.handleStripeToken(token)}
        stripeKey={process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY!}
      >
        <button className="btn">Add credits</button>
      </StripeCheckout>
    )
  }
}

export default connect(null, { handleStripeToken })(Payments);
