import Product from './Product'

const ProductsList = ({ items }) => {
    return(
    <div>
            {
                items.map((item) => {
                    return <Product key={item.name} {...item} />
                })
            }
    </div>
    )
}

export default ProductsList;
