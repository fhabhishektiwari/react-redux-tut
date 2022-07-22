import React from 'react'
import pic3 from '../img/carticonrmbg.png';
const Header=(props)=>{
    console.log("Headers",props.data.length)
    return(
        <div>
            <div className='add-to-cart'>
            <span className='cart-count'>{props.data.length}</span>
                <img src={pic3} alt='add to cart icon'/>
            </div>
            
        </div>
    );
}

export default Header;