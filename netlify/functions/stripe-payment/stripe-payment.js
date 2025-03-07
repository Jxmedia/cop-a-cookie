require("dotenv").config();
const stripe = require("stripe")(
  "sk_test_51QzzSCIxza1i2VicwQQoQyxF0TAM2Bhj0ziuz9POSQYriWvcLQNMKQwCR0pkxp3XTF3KYhDLQuWQNkWWjfX7hOzn00hsA1ahiX"
);

exports.handler = async (event) => {
  const data = JSON.parse(event.body);
  console.log(data);
  const customer = await stripe.customers.create({
    email: data.customer.email,
    name: data.customer.firstName + " " + data.customer.lastName,
    phone: data.customer.phone,

    address: {
      city: data.customer.billingCity,
      line1: data.customer.billingAddress,
      line2: data.customer.billingSuite,
      postal_code: data.customer.billingZip,
      state: data.customer.billingState,
    },
  });

  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: Number(data.amount),
      setup_future_usage: "off_session",
      description: data.recurring,
      customer: customer.id,
      currency: "USD",
      automatic_payment_methods: {
        enabled: true,
      },
    });
    console.log(paymentIntent);
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
