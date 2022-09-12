import React from 'react'
import {FiMenu} from 'react-icons/fi'
import {BsCart4} from 'react-icons/bs'
import { Link} from 'react-router-dom'
import './header.css'



const Header = ({cartItem}) => {
  return (
    <div className='header-page'>
        <div className='menu-icon'>
            <FiMenu fontSize={'2em'}/>
        </div>
        <h1>Sneakers</h1>
         <div className='link'>
            <ul className='link-items'>
            <li>
           <Link className='lk' to='/'>Collection</Link>
            </li>
            <li>
            <Link className='lk' to='/men'>Men</Link>
            </li>
            <li>
            <Link className='lk' to='/women'>Women</Link>
            </li>
            <li>
            <Link className='lk' to='/about'>About</Link>
            </li>
            <li>
            <Link className='lk' to='/contact'>Contact</Link>
            </li>
            </ul>
         </div>
         <div className='cart-icon'>
           <Link to='/cart'> <BsCart4 fontSize={'2em'}  /></Link>
           <span className='item-qty'>
            {cartItem.length === 0 ? '' : cartItem.length}
           </span>
        </div>

         <div className='image'>
            <img src='./my-picture/sergio.jpg' alt='my-pics' className='sergio' style={{cursor: 'pointer'}}/>
        </div>  
          
    </div>

  )
}

export default Header 