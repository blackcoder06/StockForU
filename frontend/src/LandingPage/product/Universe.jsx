import React from 'react';

function Universe({imageURL}) {
    return (
        <div className='conatiner '>
            <div className='row text-center' >
                <h1 className='fs-3 '>The StockForU Universe</h1>
                <p>Extend your trading and investment experience even further with our partner platforms</p>
                <div className='col-6 col-md-4 p-3 mt-5'>
                    <img src="media/images/smallcaseLogo.png" alt="img" className='img-fluid' />
                    <p className='text-small text-muted'>Thematic investing platform
that helps you invest in diversified
baskets of stocks on ETFs.</p>
                </div>
                <div className='col-6 col-md-4 p-3 mt-5'>
                    <img src="media/images/sensibullLogo.svg" alt="img" className='img-fluid' style={{width:"60%"}} />
                    <p className='text-small text-muted'>Options trading platform that lets you
create strategies, analyze positions, and examine
data points like open interest, FII/DII, and more.
</p>
                </div>
                <div className='col-6 col-md-4 p-3 mt-5'>
                    <img src="media/images/streakLogo.png" alt="img" className='img-fluid' style={{width:"50%"}}  />
                    <p className='text-small text-muted'>Systematic trading platform
that allows you to create and backtest
strategies without coding.</p>
                </div>
                <div className='col-6 col-md-4 p-3 mt-5'>
                    <img src="media/images/dittoLogo.png" alt="img" className='img-fluid' style={{width:"40%"}} />
                    <p className='text-small text-muted'>Personalized advice on life
and health insurance. No spam
and no mis-selling.</p>
                </div>
                <div className='col-6 col-md-4 p-3  mt-5'>
                    <img src="media/images/zerodhaFundhouse.png" alt="img" className='img-fluid' style={{width:"50%"}}/>
                    <p className='text-small text-muted' >Our asset management venture
that is creating simple and transparent index
funds to help you save for your goals.</p>
                </div>
                <div className='col-6 col-md-4 p-3 mt-5'>
                    <img src="media/images/tijori.svg" alt="img" className='img-fluid' style={{width:"50%"}} />
                    <p className='text-small text-muted'>Investment research platform
that offers detailed insights on stocks,
sectors, supply chains, and more.</p>
                </div>
                <button type="button" className=" pr-3 pl-3 btn btn-primary fs-5 " style={{width:"15rem" , margin:"0 auto"}}>Sign up for free</button>
            </div>
        </div>
    );
}

export default Universe;