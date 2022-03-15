import Product from './Product'

const ProductsList = ({ items, addToCart }) => {
  return (
    items.map((item) => (
      <Product key={item.name} {...item} addToCart={addToCart} />
    ))
  );
}
export default ProductsList;
