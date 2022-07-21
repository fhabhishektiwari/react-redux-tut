import React from 'react'
import pic1 from '../img/iphone.png';
import pic2 from '../img/iphone6snew.png';
import pic3 from '../img/basketcart.png';
const Home=()=>{
    return(
        <div>
            <div className='add-to-cart'>
                <img src={pic3}/>
            </div>
            <h1>Home Page</h1>
            <div className='cart-wrapper'>
                <div className='img-wrapper item'>
                    <img src={pic2} alt='best iphone'/>
                </div>
                <div className='text-wrapper item'>
                    <span>I-Phone</span>
                    <span>Price:$1000.00</span>

                </div>
                <div className='btn-wrapper item'>
                    <button>Add to cart</button>
                </div>
            </div>
        </div>
    );
}

export default Home;