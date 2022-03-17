const Product = ({ product, addToCart = () => {} }) => {
const { name, description } = product

const handleAddToCart = () => {
  addToCart(product)
}

  return (<div>
    {name}: {description}
    <button onClick={handleAddToCart}>Add to Cart</button>
  </div>);
}

export default Product;
