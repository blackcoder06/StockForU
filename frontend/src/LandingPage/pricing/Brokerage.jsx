import React from 'react';

function Brokerage() {
    return (
        <div className='container'>
            <div className='row p-5 mt-5 text-center border-top'>
                <div className='col-12 col-md-8  '>
                <a href="" style={{textDecoration:"none"}}><h3 className='fs-5'>Brokerage</h3></a>
                <ul style={{textAlign:"left" , lineHeight:"2.5"}} className='text-muted fs-6'>
                <li>Call & Trade and RMS auto-squareoff:Additional charges of 50 GST per order.</li>

                <li>Digital contract notes will be sent via e-mail.</li>
                    
                <li>Physical copies of contract notes, if required, shall be charged</li>

                <li>20 per contract note. Courier charges apply.For NRI account</li>

                <li>(non-PIS), 0.5% or or 100 per executed order for equity (whichever
                is lower). </li>

                <li>For NRI account (PIS), 0.5% or 200 per executed order for equity (whichever is lower).</li>

                <li>If the account is in debit balance, any order placed will be charged 40 per executed instead of 20 per executed order.</li>
                </ul>
                
                </div>
                <div className='col-12 col-md-4'>
                <a href="" style={{textDecoration:"none"}}><h3 className='fs-5' >List of charge</h3></a>

                <ul style={{textAlign:"left" , lineHeight:"2.5"}} className='text-muted fs-6 text-center'>
                <li style={{listStyle:"none"}}><span className='free-tag p-1 ' style={{backgroundColor:"#4caf50" , color:"white" , borderRadius:"3px" , alignItems:"center"}}>Free</span></li>

                <li style={{listStyle:"none"}}><span className='free-tag p-1 ' style={{backgroundColor:"#4caf50" , color:"white" , borderRadius:"3px" , alignItems:"center"}}>Free</span></li>
                    
                <li style={{listStyle:"none"}}><span className='free-tag p-1 ' style={{backgroundColor:"#4caf50" , color:"white" , borderRadius:"3px" , alignItems:"center"}}>Free</span></li>

                <li style={{listStyle:"none"}}><span className='free-tag p-1 ' style={{backgroundColor:"#4caf50" , color:"white" , borderRadius:"3px" , alignItems:"center"}}>Free</span></li>

                <li style={{listStyle:"none"}}><span className='free-tag p-1 ' style={{backgroundColor:"#4caf50" , color:"white" , borderRadius:"3px" , alignItems:"center"}}>Free</span></li>

                <li style={{listStyle:"none"}}><span className='free-tag p-1 ' style={{backgroundColor:"#4caf50" , color:"white" , borderRadius:"3px" , alignItems:"center"}}>Free</span></li>

                <li style={{listStyle:"none"}}><span className='free-tag p-1 ' style={{backgroundColor:"#4caf50" , color:"white" , borderRadius:"3px" , alignItems:"center"}}>Free</span></li>
                </ul>
                </div>
            </div>
        </div>
    );
}

export default Brokerage;