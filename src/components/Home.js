import React from 'react'
import pic2 from '../img/iphone6snew.png';

const Home=(props)=>{
    console.log("Home",props)
    return(
        <div>
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
                    <button onClick={()=>{
                        props.addToCartHandler([{price:1100,name:'I-phone 13'}]);
                    }}>Add to cart</button>

                    <button className='btn-purple' onClick={()=>{
                        props.removeToCartHandler();
                    }}>Remove to cart</button>
                </div>
            </div>
        </div>
    );
}

export default Home;