const Cart = ({ items }) => {
  return (
    items.map((item) => (
      <div key={item.id}>{item.name}: {item.description}</div>
    ))
  );
}

export default Cart;
