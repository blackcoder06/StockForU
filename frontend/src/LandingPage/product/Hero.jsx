import React from 'react';
import {Link} from 'react-router-dom';

function Hero() {
    return (
        <div className='container border-bottom'>
            <div className='text-center mt-5 p-5'>
            <h1 className='fs-2'>StockForU Products</h1>
            <h3 className='text-muted mt-3 fs-4'>Sleek, modern, and intuitive trading platforms</h3>
            <p className='mt-3'>Check out our <Link style={{textDecoration:"none"}}>investment offerings <i class="fa-solid fa-arrow-right-long"></i></Link>  </p>
            </div>
        </div>
    );
}

export default Hero;