import { useSelector, useDispatch } from 'react-redux';
import { updateQuantity, removeFromCart } from './cartslice.js';

const Cart = () => {
  const cart = useSelector((state) => state.cart.items); 
  const dispatch = useDispatch();

  const handleUpdateQuantity = (id, amount) => {
    dispatch(updateQuantity({ id, amount }));
  };

  const handleRemoveItem = (id) => {
    dispatch(removeFromCart(id));
  };

  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div>
      <h2>Your Cart</h2>
      <ul>
        {cart.map(item => (
          <li key={item.id}>
            {item.name} - ${item.price} x {item.quantity}
            <button onClick={() => handleUpdateQuantity(item.id, 1)}>+</button>
            <button onClick={() => handleUpdateQuantity(item.id, -1)} disabled={item.quantity === 1}>-</button>
            <button onClick={() => handleRemoveItem(item.id)}>Remove</button>
          </li>
        ))}
      </ul>
      <h3>Total: ${totalPrice}</h3>
    </div>
  );
};

export default Cart;
