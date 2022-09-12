import React from 'react'
import './cart.css'

const cart = ({ cartItem, handleDel, clearCart }) => {

  return (
    <div className='cart-item'>
      <h3 className='cartname'>Cart Items</h3>
      <div className='cartitems'>
        {cartItem.length === 0 && <div>
          <h4>No item is added please select!</h4>
        </div>}
      </div>
      <div className='flexcart'>
        {
          cartItem.map((item) => (
            <div className='grid' key={item.id}>
              <div>
                <img className='img-push' src={item.image} alt='' />
              </div>
              <div className='namebutton'>
                <h3 >{item.name}</h3>
                <button style={{
                  cursor: 'pointer',
                  backgroundColor: 'whitesmoke',
                  padding: '.25rem',
                  border: 'none',
                  borderRadius: '.25rem',
                  boxShadow: '0px 3px 10px black'
                }} onClick={() => handleDel(item.id)}>Remove</button>
              </div>
            </div>
          ))
        }
      </div>
      <div className='clearcart'>
        {cartItem.length >= 1 && <div>
           <button onClick={() => clearCart(cartItem)}>clear cart</button>
           </div>}
      </div>
    </div>
  )
}

export default cart