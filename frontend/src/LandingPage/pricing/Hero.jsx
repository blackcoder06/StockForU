import React from 'react';

function Hero() {
    return (
        <div className='container'>
        <div className='row text-center mt-5'>
            <h1 className='fs-3'>Charges</h1>
            <h3 className='text-muted fs-4 mt-2 mb-5'>List of all charges and taxes</h3>
            <div className='col-12 col-md-4 mt-5'>
                <img src="media/images/pricing0.svg" alt="img" className='img-fluid' style={{width:"60%"}} />
                <h1 className='p-3 fs-2'>Free equity delivery</h1>
                <p className='text-muted'>All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
            </div>
            <div className='col-12 col-md-4 mt-5'>
                <img src="media/images/other-trades.svg" alt="img" className='img-fluid' style={{width:"60%"}} />
                <h1 className='p-3 fs-2'>Intraday and F&O trades</h1>
                <p className='text-muted'>Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
            </div>
            <div className='col-12 col-md-4 mt-5'>
                <img src="media/images/pricing0.svg" alt="img" className='img-fluid' style={{width:"60%"}} />
                <h1 className='p-3 fs-2'>Free direct MF</h1>
                <p className='text-muted'>All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
            </div>
            
        </div>
    </div>
    );
}

export default Hero;