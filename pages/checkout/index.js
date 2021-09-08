import Head from 'next/head';

import CheckoutInner from '../../components/CheckoutInner/CheckoutInner';

const CheckoutPage = () => (
  <>
    <Head>
      <title>Checkout</title>
      <meta name="description" content="REP Clothing checkout" />
    </Head>

    <CheckoutInner />
  </>
);

export default CheckoutPage;
