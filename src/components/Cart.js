import CartItem from './CartItem'

const Cart = ({ items, removeFromCart, moveToCheckout }) => {

  const handleCheckoutClick = () => {
    moveToCheckout();
  }
  return (
    <>
      <button onClick={handleCheckoutClick}>Checkout</button>
      {
        items.map((item) => (
          <CartItem key={item.id} product={item} removeFromCart={removeFromCart} />
        ))
      }
    </>
  );
}

export default Cart;
