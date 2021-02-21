import React from 'react'
import StripeCheckout from 'react-stripe-checkout';
const PaymentScreen = () => {
    const price = 130; 

    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51IM8C3Au9lCCM2tncAryMx6Ay6ybho8sbjKzURnpZC7KPmb8iqE8qMixAYwhU6ZSc3RWmqVWYfW6wX4PqIjzvEgp00OtNR9Taz';


    const onToken = token => {
        alert('Payment Successful');
    }


    return (
        <StripeCheckout 
        label='Subscribe'
        name='Netflix Clone'
        billingAddress
        image='https://i.pinimg.com/originals/17/65/2c/17652c3268c85ac2e3ac9fbdab374a5a.png'
        description={`Your total is $${price}`}
        amount={priceForStripe}
        panelLabel='Pay Now'
        token={onToken}
        stripeKey={publishableKey}
        />
    )
}

export default PaymentScreen;
