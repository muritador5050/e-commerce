import React,{useState} from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Cart from './cart/Cart'
import Collection from './collection/Collection'
import Header from './header/Header'
import About from './about/About'


const App = () => {

  const [cartItem, setCartItem] = useState([])
   

  const handleCartItem = (product) => {
     const productExit = cartItem.find((item) =>  item.id === product.id)
     if (productExit) {  
        setCartItem(cartItem.map((item) => {
           return   item.id === product.id ? {...productExit, quantity:productExit.quantity + 1} : item
        }))
     } else {
        setCartItem ([...cartItem, {...product, quantity:1}])
     }
  }

const handleDel = (product)=> {
 setCartItem(cartItem.filter(item => item.id !== product))
}

const handleClear = () => {
   setCartItem([])
}

 
  return (
    <div className='app'> 
     <BrowserRouter>
      <Header cartItem={cartItem} />
      <Routes>
        <Route path='/' element={<Collection handleCartItem={handleCartItem} cartItem={cartItem} />}/>
         <Route path='/cart' element={<Cart handleCartItem={handleCartItem}  cartItem={cartItem} handleDel={handleDel} clearCart={handleClear}/>}/>
         <Route path='/about' element={<About/>}/>
      </Routes>
     </BrowserRouter>
  
    </div>
  )
}

export default App