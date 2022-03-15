import Product from './Product'

const ProductsList = ({ items }) => {
  return (
    items.map((item) => (
      <Product key={item.name} {...item} />
    ))
  );
}
export default ProductsList;
