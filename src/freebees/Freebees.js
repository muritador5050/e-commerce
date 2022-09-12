import React from 'react'
import '../freebees/freebees.css'


const Freebees = (props) => {
  const { cartItems, handleAdd, handleRemove, handleDelete } = props
  return (
    <div className='cart-list'>
      <h3 className='h3-items'>Cart items</h3>
      <div className='cart-length'>
        {cartItems.length === 0 && <p>No item is added</p>}
      </div>
      <div>
        {cartItems.map((items) =>
          <div className='class-items' key={items.id}>
            <div className='image-carts'>
              <img className='image-cart' src={items.imgUrl} alt={items.name} />
            </div>

            <div className=''>{items.name}</div>
            <div>
              <button onClick={() => handleAdd(items)}>+</button>
              <span>{items.qty}</span>
              <button onClick={() => handleRemove(items)}>-</button>
            </div>
            <p >${items.qty * items.price}</p>
             <button onClick={() => handleDelete(items)}>delete</button>
          </div>
        )}
      </div>
      <div className='checkout'>
        <button onClick={() => alert('checkout!')}>checkout</button>
      </div>
    </div>
  )
}

export default Freebees