import React from 'react';

function Team() {
    return (
        <div className='container'>
            <div className='row p-3  border-top'>
                <h1 className=' fs-3 text-center '>People</h1>

            </div>

        < div className='row p-3   text-muted ' style={{lineHeight:"1.8" , fontSize:"1.1em"}}>
        <div className='col-12 col-md-6 p-5 text-center'>
        <img src="media/images/Ashwin.png" alt="img" className='img-fluid' style={{borderRadius:"100%", width:"60%"}} />
        <h4 className='mt-5'>Ashwin Dadhe</h4>
        <h6>Founder, CEO</h6>
        </div>
        <div className='col-12 col-md-6 p-5'>
            <p>Ashwin bootstrapped and founded StockForU in 2026 to overcome the hurdles he faced during his decade long stint as a trader. Today, StockForU has changed the landscape of the Indian broking industry.</p>
            <p>He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).</p>
            <p>Playing volleyball is his zen.</p>
            <p>Connect on <a href="" style={{textDecoration:"none"}}>Homepage</a>/ <a href="" style={{textDecoration:"none"}}>TradingQnA</a> / <a href="" style={{textDecoration:"none"}}>Twitter</a></p>
        </div>
            
            </div>
        </div>
    );
}

export default Team;