import CartItem from './CartItem'

const Cart = ({ items, removeFromCart, moveToCheckout }) => {
  return (
    <>
      <button onClick={moveToCheckout}>Checkout</button>
      {
        items.map((item) => (
          <CartItem key={item.id} product={item} removeFromCart={removeFromCart} />
        ))
      }
    </>
  );
}

export default Cart;
