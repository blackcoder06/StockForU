import React from 'react';
import { useNavigate } from "react-router-dom";

function Hero() {
    const navigate = useNavigate();
    return (
        <div className='container  mb-5'>
            <div className='row text-center'>
                <img src='media\images\homeHero.png'  alt='Hero image' className='mb-5'/>
                <h1 className='mt-5'>
                    Invest in everything
                </h1>
                <p>
                Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.
                </p>
                <button type="button" className=" pr-3 pl-3 btn btn-primary fs-5 " style={{width:"15rem" , margin:"0 auto"}}
                onClick={() => {
                    navigate("/signup")
                }}>Sign up for free</button>
            </div>
        </div>
    );
}

export default Hero;