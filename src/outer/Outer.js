import React, { useState } from 'react'
import Free from '../free/Free'
import Freebees from '../freebees/Freebees'
import '../freebees/freebees.css'
import {data} from '../freetins/Freetins'

const Outer = () => {
  
  const [cartItems, setCartItems] = useState([])
     
  const handleAdd = (product) => {
    const productExit = cartItems.find((item) => item.id === product.id)
    if (productExit) {
      setCartItems(cartItems.map((x) => x.id  === product.id ? {...productExit, qty:productExit.qty + 1}: x))
    } else{
       setCartItems([...cartItems, {...product, qty:1}])
    }
  }
  
  const handleRemove  = (product) => {
    const productExit = cartItems.find((x) => x.id === product.id)
    if(productExit.qty === 1) {
      setCartItems(productExit.filter((x) => x.id  !== product.id))
    } else {
      setCartItems(cartItems.map((x) => x.id  === product.id ? {...productExit, qty:productExit.qty - 1}: x))
    }
  }

  const handleDelete = (product) => {
    setCartItems(cartItems.filter(item => item.id !== product.id))
  } 

  return (
         <>
    <div className='outer'>
      <Free handleAdd={handleAdd} products={data}/>
      <Freebees handleAdd={handleAdd} handleRemove={handleRemove} cartItems={cartItems} handleDelete={handleDelete} />
      </div>
     
      </>
  )
}

export default Outer