import Product from './Product'

const Cart = ({ items }) => {
  return (
    items.map((item) => (
      <Product key={item.id} product={item} />
    ))
  );
}

export default Cart;
