import React from 'react';
import { useNavigate } from "react-router-dom";


function OpenAccount() {
    const navigate = useNavigate();
    return (
    <div className='container  mt-5'>
            <div className='row text-center'>
                
                <h1 className='mb-3 fs-4'>
                    Open a StockForU account
                </h1>
                <p>
                Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.
                </p>
                <button type="button" className=" pr-3 pl-3 btn btn-primary fs-5 " style={{width:"15rem" , margin:"0 auto"}}
                onClick={() => {
                    navigate("/signup")
                }}>Sign up for free</button>
            </div>
        </div>
    );
}

export default OpenAccount;