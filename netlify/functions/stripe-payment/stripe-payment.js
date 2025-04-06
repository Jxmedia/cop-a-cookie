require("dotenv").config();
// const stripe = require("stripe")(
//   "sk_test_51QzzSCIxza1i2VicwQQoQyxF0TAM2Bhj0ziuz9POSQYriWvcLQNMKQwCR0pkxp3XTF3KYhDLQuWQNkWWjfX7hOzn00hsA1ahiX"
// );
// );
const stripe = require("stripe")(process.env.STRIPE_SECRET);

exports.handler = async (event) => {
  const data = JSON.parse(event.body);
  console.log(data);

  const customer = await stripe.customers.create({
    email: data.customer.email,
    name: data.customer.firstName + " " + data.customer.lastName,
    phone: data.customer.phone,

    address: {
      city: data.customer.shippingCity,
      line1: data.customer.shippingAddress,
      line2: data.customer.shippingSuite,
      postal_code: data.customer.shippingZip,
      state: data.customer.shippingState,
    },
  });

  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: Number(data.amount),
      setup_future_usage: "off_session",
      description: JSON.stringify(data.order),
      customer: customer.id,
      currency: "USD",
      automatic_payment_methods: {
        enabled: true,
      },
    });
    // console.log(paymentIntent);
    return {
      statusCode: 200, // http status code

      body: JSON.stringify({
        paymentIntent,
      }),
    };
  } catch (error) {
    // handle errors
  }
};
