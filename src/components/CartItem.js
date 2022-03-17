const CartItem = ({ product, removeFromCart = () => {} }) => {
    const { name, description } = product
    
    const handleRemoveFromCart = () => {
      removeFromCart(product)
    }
    
      return (<div>
        {name}: {description}
        <button onClick={handleRemoveFromCart}>Remove from Cart</button>
      </div>);
    }
    
    export default CartItem;
    