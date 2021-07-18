import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import './stripe-button.styles.scss';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51ItCQ5DamlmUOLs3E2Y5kyUArfHPoQMNsdwKyBrX0ZqlIb5Wv8b0uByKfT0NJrG1yCPWEJrTGdLo4CncMYeVa2XJ0056XaVjfh';

    const onToken = token => {
        // console.log(token);
        alert('Payment Successful');
    }
    return (

        <StripeCheckout
            label='Plaćanje'
            name='Gift shop'
            billingAddress
            shippingAddress
            image=''
            description={`Ukupno: ${price} KM`}
            amount={priceForStripe}
            currency='BAM'
            panelLabel='Plaćanje'
            token={onToken}
            stripeKey={publishableKey}
        />
    );
};

export default StripeCheckoutButton;