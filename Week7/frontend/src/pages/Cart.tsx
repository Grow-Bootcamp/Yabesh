import { useAppDispatch, useAppSelector } from "../store/hooks";
import { changeQuantity, clearCart, removeFromCart } from "../store/cartSlice";

const Cart = () => {
  const dispatch = useAppDispatch(); 

  // get cart items from Redux
  const cartItems = useAppSelector(
    (state) => state.cart.items
  );

  // calculate total price
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  // handle quantity changes
  function handleQuantityChange(id: number, quantity: number) {
    dispatch(changeQuantity({ id, quantity }));
  }

  // handle product removal
  function handleRemove(id: number) {
    dispatch(removeFromCart(id));
  }

  // handle clearing the cart
  function handleClearCart() {
    dispatch(clearCart());
  }

  if (cartItems.length === 0) {
    return (
      <section>
        <h1>Your Shopping Cart</h1>
        <p>Your cart is currently empty</p>
      </section>
    );
  }

  return (
    <section>
      <h1>Your Shopping Cart</h1>
      
      <table>
        <thead>
          <tr>
            <th>Product</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Subtotal</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {cartItems.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>  
              <td>${item.price}</td>  

              <td>
                <button onClick={() => handleQuantityChange(item.id, item.quantity - 1)}>
                  -
                </button>

                {' '}{item.quantity}{' '}

                <button onClick={() => handleQuantityChange(item.id, item.quantity + 1)}>
                  +
                </button>
              </td>

              <td>${item.price * item.quantity}</td>

              <td>
                <button onClick={() => handleRemove(item.id)}>
                  Remove
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2>Total: ${totalPrice.toFixed(2)}</h2>

      <button onClick={handleClearCart}>
        Clear Cart
      </button>
    </section>
  );
}

export default Cart;