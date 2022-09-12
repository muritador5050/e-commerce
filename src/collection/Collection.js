import React from 'react'
import './collection.css'
import { BsCart4 } from 'react-icons/bs'



const advert = [
   {
      text: 'sneaker company'
   },

   {
      companyName: 'fall limited edition sneakers'
   },

   {
      description: 'These low-profile sneakers are your perfect  casual wear companion. featuring a durable rubber outer sole, they\'ll   withstand everything the weather can offer'
   },

   {
      price: '$125.00 ',
      percentage: '50%',
      price2: '$250.00'
   }

];

const images = [
   {
      id: '1',
      image: '/my-picture/sneakers-1.jpg',
      name: 'sneaker-1'
   },

   {
      id: '2',
      image: '/my-picture/sneakers-3.jpg',
      name: 'sneaker-2'

   },

   {
      id: '3',
      image: '/my-picture/sneakers-6.jpg',
      name: 'sneaker-3'

   },

   {
      id: '4',
      image: './my-picture/sneakers-11.jpg',
      name: 'sneaker-4'

   }
]


const Collection = ({ handleCartItem, cartItem }) => {


   return (
      <div className='collection'>
         <div className='main-pic'>
            <img className='sneaker-6' src='./my-picture/sneakers-6.jpg' alt='sneaker-1' />
            <div className='sub-image'>
               {images.map((item) => (
                  <div key={item.id}>
                     <img onClick={() => handleCartItem(item)} className='sub' src={item.image} alt='shoes' />
                  </div>
               ))}
            </div>
         </div>

         <div className='advert'>
            {advert.map((element) => {
               return (
                  <div className='' key={element.id}>
                     <h1 className='text'>{element.text}</h1>
                     <h2 className='companyname'>{element.companyName}</h2>
                     <p className='description'>{element.description}</p>
                     <div className='pp'>
                        <p className='price'>{element.price}</p>
                        <p className='percent'>{element.percentage}</p>
                     </div>
                     <p className='price-2'>{element.price2}</p>
                  </div>
               )
            })}
            <div className='down-btn'>
               <div className='btn'>
                  <button className='btn-1'>-</button>
                  <span>{cartItem.length === 0 ? 0 : cartItem.length}</span>
                  <button onClick={() => handleCartItem} className='btn-2'>+</button>
               </div>
               <div className='addcart'>
                  <button onClick={() => handleCartItem} className='addcart-btn'>
                     <span className='bscart'><BsCart4 /></span>
                     Add to cart
                  </button>
               </div>
            </div>

         </div>

      </div>
   )
}

export default Collection