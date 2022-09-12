import React from 'react'
import Product from '../product/Product';


const Free = (props) => {

  const {products, handleAdd} = props;

  return (
    <div className=''>
      <h1>Products</h1>
      <div className=''>
        {products.map((item) => 
          <Product key={item.id} product={item} handleAdd={handleAdd} />
        )}
      </div>
    </div>
  )
}

export default Free