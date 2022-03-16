import Product from './Product'

const ProductsList = ({ items, addToCart }) => {
  return (
    items.map((item) => (
      <Product key={item.id} product={item} addToCart={addToCart} />
    ))
  );
}
export default ProductsList;
