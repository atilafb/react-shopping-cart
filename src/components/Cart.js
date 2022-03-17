import CartItem from './CartItem'

const Cart = ({ items, removeFromCart }) => {
  return (
    items.map((item) => (
      <CartItem key={item.id} product={item} removeFromCart={removeFromCart} />
    ))
  );
}

export default Cart;
