import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {

    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51JqShzElj1aI588TZWsGlRjnETo7IPgl20supuHsA8aPQ86DGHIkwqeBlS8uOgAVnbkLAwjB5ozymHoqBiuqFMNM00zawz9Vgx';

    const onToken = token =>{
        console.log(token);
        alert('Payment Successful');
    }
    return (
        <div className='stipe-button'> 
            <StripeCheckout

                label="Pay Now"
                name='CRWN Clothing Ltd.'
                billingAddress
                shippingAddress
                image='https://svgshare.com/i/CUz.svg'
                description={`Your total is $${price}`}
                amount={priceForStripe}
                panelLabel='Pay Now'
                token={onToken}
                stripeKey={publishableKey}

            />
        </div>
    )
}

export default StripeCheckoutButton;
