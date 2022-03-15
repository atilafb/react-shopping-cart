import { useState } from 'react'
import Cart from './Cart'
import ProductsList from './ProductsList';

function Store() {
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
    const SHOPPING_CART = [];

    const [showProductsList, setShowProductsList] = useState(PRODUCTS)
    const [showShoppingCart, setShowShoppingCart] = useState(SHOPPING_CART)
    const [tabToShow, setTabToShow] = useState('products')

    let tabToDisplay;

    if (tabToShow === 'products'){
        tabToDisplay = <ProductsList items={showProductsList}/>
    } else if (tabToShow === 'cart'){
        tabToDisplay = <Cart />
    }

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
                {tabToDisplay}
            <div>
            </div>
        </>
    );
}

export default Store;
