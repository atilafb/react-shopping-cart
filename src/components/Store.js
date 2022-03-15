import { useState } from 'react'
import Cart from './Cart'
import ProductsList from './ProductsList';


const PRODUCTS = [
  {
    name: 'Caneta',
    description: 'Uma caneta'
  },
  {
    name: 'Lapis',
    description: 'Um lapis'
  },
  {
    name: 'Caderno',
    description: 'Um caderno'
  }
];

function Store() {
  const [tabToShow, setTabToShow] = useState('products')
  const showProducts = tabToShow === 'products'
  const showCart = tabToShow === 'cart'

  const handleProductClick = () => {
    setTabToShow('products')
  }

  const handleShoppingCartClick = () => {
    setTabToShow('cart')
  }

  return (
    <>
      <div>
        <button onClick={handleProductClick}>Products</button>
        <button onClick={handleShoppingCartClick}>Cart</button>
      </div>
      {showProducts && <ProductsList items={PRODUCTS} />}
      {showCart && <Cart />}
    </>
  );
}

export default Store;
