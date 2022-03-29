import { useState } from 'react'
import Cart from './Cart'
import ProductsList from './ProductsList';
import Checkout from './Checkout'
import styled from 'styled-components'
import css from '@styled-system/css'

const PRODUCTS = [
  {
    id: 1,
    name: 'Caneta',
    description: 'Uma caneta',
    price: '2.50'
  },
  {
    id: 2,
    name: 'Lapis',
    description: 'Um lapis',
    price: '1.00'
  },
  {
    id: 3,
    name: 'Caderno',
    description: 'Um caderno',
    price: '20.00'
  }
];

const Button = styled.button`
  width: 60px;
  height: 60px;
  background-color: ${({ theme }) => theme.colors.red}
  ${(props) => { console.log(props) }}
`

const Button3 = (props) =>
  <button
    css={css({
      width: 90,
      height: 90,
      backgroundColor: 'green'
    })}
    {...props}
  />


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
      {showCart && <Cart items={cartItems} removeFromCart={removeFromCart} moveToCheckout={moveToCheckout} />}
      {showCheckout && <Checkout cartItem={cartItems} />}
      <div>
        <Button name='botao'>BOTAO 1</Button>

        <Button name='botao2' css={css({
          backgroundColor: 'blue'
        })}>BOTAO 2</Button>

        <Button3 name='botao3'>BOTAO 3</Button3>
      </div>
    </>
  );
}

export default Store;
