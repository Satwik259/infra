import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "./cartslice.js";
import { useState } from "react";

const Checkout = () => {
  const [orderConfirmed, setOrderConfirmed] = useState(false);
  const cart = useSelector((state) => state.cart.items); 
  const dispatch = useDispatch();

  const handlePlaceOrder = () => {
   
    dispatch(clearCart());
    setOrderConfirmed(true);
  };

  return (
    <div>
      <h1>Checkout</h1>
      <h2>Order Summary:</h2>
      <ul>
        {cart.map((item) => (
          <li key={item.id}>
            {item.name} - ${item.price}
          </li>
        ))}
      </ul>
      <button onClick={handlePlaceOrder}>Place Order</button>
      {orderConfirmed && <p>Order placed successfully!</p>}
    </div>
  );
};

export default Checkout;
