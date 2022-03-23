import { useState } from 'react'
import Cart from './Cart'
import ProductsList from './ProductsList';
import Checkout from './Checkout'


const PRODUCTS = [
  {
    id: 1,
    name: 'Caneta',
    description: 'Uma caneta'
  },
  {
    id: 2,
    name: 'Lapis',
    description: 'Um lapis'
  },
  {
    id: 3,
    name: 'Caderno',
    description: 'Um caderno'
  }
];


function Store() {
  const [tabToShow, setTabToShow] = useState('products')
  const showProducts = tabToShow === 'products'
  const showCart = tabToShow === 'cart'
  const showCheckout = tabToShow === 'checkout'

  const [cartItems, setCartItems] = useState([])

  const handleProductClick = () => {
    setTabToShow('products')
  }

  const handleShoppingCartClick = () => {
    setTabToShow('cart')
  }

  const addToCart = (product) => {
    const hasProductInCart = cartItems.some((object) => object.id === product.id)

    if (!hasProductInCart) {
      setCartItems([...cartItems, product])
    }
  }

  const removeFromCart = (cartItem) => {
    const updatedCartItems = cartItems.filter((object) => object.id !== cartItem.id)
    setCartItems(updatedCartItems)
  }

  const moveToCheckout = () => {
    setTabToShow('checkout')
  }

  return (
    <>
      <div>
        <button onClick={handleProductClick}>Products</button>
        <button onClick={handleShoppingCartClick}>Cart</button>
      </div>
      {showProducts && <ProductsList items={PRODUCTS} addToCart={addToCart} />}
      {showCart && <Cart items={cartItems} removeFromCart={removeFromCart} moveToCheckout={moveToCheckout}/>}
      {showCheckout && <Checkout />}
    </>
  );
}

export default Store;
