import React from 'react'
import '../freebees/freebees.css'


const Product = (props) => {
    const {product, handleAdd} = props;
  return (
    <div className=''>
    <img className='product-image' src={product.imgUrl} alt={product.name}/>
     <h3>{product.name}</h3>
     <h3>{product.price}</h3>
     <div className=''>
        <button onClick={() => handleAdd(product)}>Add to cart</button>
     </div>
    </div>
  )
}

export default Product