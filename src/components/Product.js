const Product = ({name, description}) => {
    return (<div key={name}> {name}: {description} </div>)
  }

export default Product;
