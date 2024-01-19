import { loadStripe } from "@stripe/stripe-js";
import {
  Elements,
  CardElement,
  useStripe,
  AddressElement,
  useElements,
} from "@stripe/react-stripe-js";
import clsx from "clsx";

export const ChoiceCardPopup = ({
  period,
  type,
  price,
  time,
  onclick,
  className,
}) => {
  const publishable_key =
    "pk_test_51OZ8tJCZZ4hhxnWzwPptgvcGpUhN2gqfsw2PloDGGIR5G5vX0n5M5xTBvNlK7UoOT3YpVWh6SZGAASzbWN6Jn2pu00bRrvYMLp";
  const stripePromise = loadStripe(publishable_key);
  const options = {
    // Fully customizable with appearance API.
    appearance: {
      theme: "night",
      style: {
        base: {
          backgroundColor: "green", // or any color you want
          // other styles...
        },
      },
    },
  };

  return (
    <>
      <div
        className={clsx(
          "container-card border border-base-100 bg-base-50 w-[580px]  rounded-[20px] p-5 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2",
          className
        )}
      >
        <header className="flex justify-between items-center mb-[28px]">
          <span className="logo w-[111.25px] h-[24.91px]">
            <img
              src="../../public/images/Logo.png"
              alt="logo tublian"
              className="w-full h-full"
            />
          </span>
          <button
            onClick={onclick}
            className=" border-0 exit w-8 h-8 cursor-pointer"
          >
            <img
              src="../../public/images/exit cross.png"
              alt="exit cross image"
              className="w-full h-full"
            />
          </button>
        </header>
        <div className="plan_payment border border-base-200 rounded-[10px] bg-base-100 py-[14px] px-5 relative mb-7">
          <header className="flex justify-between mb-7">
            <h1 className="text-xl font-bold text-base-900">
              {period ? period : "Montly Plan"}
            </h1>
            <button
              type="button"
              className="text-base font-medium text-primary-gold border-0"
            >
              Chance Plan
            </button>
          </header>
          <hr className="border border-base-200 left-0 right-0 absolute top-[54px] mb-[13px]" />
          <div className="choice flex justify-center w-[160px] h-[29px] mb-[13px]">
            <button
              type="button"
              className="text-base-900 text-lg w-full h-full border border-[#79BBFF] rounded-[10px] bg-gradient-to-t from-[#0881FF] to-[#0B4F95]"
            >
              {type ? type : "Business Plan"}
            </button>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-lg font-medium text-base-900">Total:</span>
            <span className="flex justify-between items-center text-sm font-medium text-base-700">
              USD
              <span className="text-3xl text-base-900 font-bold">
                {price ? price : "$49.99"}
              </span>
              {time ? time : "/Month"}
            </span>
          </div>
        </div>
        <div className="payment flex flex-col gap-5">
          <header className="flex flex-col gap-2">
            <h2 className="text-lg font-bold text-base-900">Payment Method</h2>
            <p className="text-base font-medium text-base-800">
              Choose how you’d like to pay.
            </p>
          </header>
          <div className="btn flex flex-col w-[540px] h-[60px]">
            <div className="credit_card">
              <input type="radio" id="credit_card" className="" />
              <label htmlFor="credit_card">
                <span className="logo_card">logo</span>
                <span className="text_card">Text Card</span>
              </label>
            </div>
            <div className="pay">
              <input type="radio" id="pay" className="" />
              <label htmlFor="pay">
                <span className="logo_card">logo</span>
                <span className="text_card">Pay</span>
              </label>
            </div>
          </div>
          <div className="form_stripe">
            <Elements stripe={stripePromise}>
              <CheckoutForm />
            </Elements>
          </div>
        </div>
      </div>
    </>
  );
};

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }

    const cardElement = elements.getElement(CardElement);

    // Use the card Element with other Stripe.js APIs
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: cardElement,
    });

    if (error) {
      console.log("[error]", error);
    } else {
      console.log("[PaymentMethod]", paymentMethod);
    }
  };

  return (
    <form onSubmit={handleSubmit} className=" bg-inherit">
      <AddressElement
        options={{
          mode: "shipping",
          allowedCountries: ["US"],
          fields: {
            phone: "always",
            email: "always",
          },
        }}
      />
      <CardElement />
      <button type="submit" disabled={!stripe}>
        Payer
      </button>
    </form>
  );
};
