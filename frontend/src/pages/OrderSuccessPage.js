import { useEffect } from "react";
import { Link, Navigate, useLocation, useParams } from "react-router-dom";
import { resetCartAsync } from "../features/cart/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { resetOrder } from "../features/order/orderSlice";

function OrderSuccessPage() {
  const { id } = useParams();
  const location = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    // Reset cart and order
    dispatch(resetCartAsync());
    dispatch(resetOrder());

    // Handle query parameters if needed
    const query = new URLSearchParams(location.search);
    const paymentIntent = query.get("payment_intent");
    const paymentIntentClientSecret = query.get("payment_intent_client_secret");
    const redirectStatus = query.get("redirect_status");

    if (
      paymentIntent &&
      paymentIntentClientSecret &&
      redirectStatus === "succeeded"
    ) {
      // Handle successful payment logic here
      console.log("Payment succeeded:", {
        paymentIntent,
        paymentIntentClientSecret,
      });
    } else {
      console.error("Payment failed or missing parameters");
    }
  }, [dispatch, location.search]);

  if (!id) {
    return <Navigate to="/" replace />;
  }

  return (
    <main className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div className="text-center">
        <p className="text-base font-semibold text-indigo-600">
          Order Successfully Placed
        </p>
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          Order Number #{id}
        </h1>
        <p className="mt-6 text-base leading-7 text-gray-600">
          You can check your order in My Account My Orders
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link
            to="/"
            className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Go back home
          </Link>
        </div>
      </div>
    </main>
  );
}

export default OrderSuccessPage;
