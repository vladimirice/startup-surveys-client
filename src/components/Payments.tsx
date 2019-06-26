import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';

class Payments extends Component {
  render() {
    return (
      <StripeCheckout
        name='Startup surveys'
        description='5$ for the 5 credits'
        amount = {500}
        token = {token => console.log(token)}
        stripeKey={process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY!}
      >
        <button className="btn">Add credits</button>
      </StripeCheckout>
    )
  }
}

export default Payments;
