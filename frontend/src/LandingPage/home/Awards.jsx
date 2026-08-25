import React from 'react';

function Awards () {
    return (
        <div className='container mt-5'>
            <div className='row align-items-center'>
                <div className='col-12 col-md-6  p-3 '>
                <img src="media/images/largestBroker.svg" alt="img" className='img-fluid' />
                </div>
                <div className='col-12 col-md-6  p-3 '>
                <h1>Largets Stock broker in India</h1>
                <p className='mb-5'>2+ million StockForU clients contribute to over 15% of all volumnes in India daily by trading and investing in:</p>
                <div className='row'>
                    <div className='col-6'>
                        <ul>
                        <li>
                            <p>Futures and Options</p>
                        </li>
                        <li>
                            <p>Commodity derivatives</p>
                        </li>
                        <li>
                            <p>Currency</p>
                        </li>
                    </ul>
                    </div>
                    <div className='col-6'>
                            <ul>
                        <li>
                            <p>Stocks & IPOs</p>
                        </li>
                        <li>
                            <p>Direct mutual funds</p>
                        </li>
                        <li>
                            <p>Bonds and Growth</p>
                        </li>
                    </ul>
                    </div>
                    <img src="media/images/pressLogos.png" alt="img" style={{width:"90%"}} />
                </div>
                
                    
                    
                </div>
            </div>
        </div>
    );
}

export default Awards;