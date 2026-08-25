import React from 'react';
import './Hero.css';

function Hero() {
    return (
            <section className='container-fluid' id="supportHero">
        <div className=' p-3' id="SupportRapper">
        <h4>Support Portal</h4>
        <a href="" style={{textDecoration:"none", color:"white"}}>Track Tickets</a>
        </div>

        <div className=' row  p-5 mb-5' >
            <div className='col-12 col-md-6 p-5 '>
                <h1 className='fs-3'>Search for an answer or browse help topics to create a ticket</h1>
                <input type="text" placeholder='Eg: How do I open my acoount, How to I activate F&O.....' style={{width:"100%" , height:"40%" , borderRadius:"15px"}} />
                <br />
                <a href="" style={{textDecoration:"none",color:"White"}} className=''>
                    Track acoount opening
                </a>
                <a href="" style={{textDecoration:"none",color:"White"}} className='p-5'>
                    Track segment activation
                </a>
                <br />
                <a href="" style={{textDecoration:"none",color:"White"}} >
                    Intraday margins
                </a>
                <a href="" style={{textDecoration:"none",color:"White"}} className='p-5'>
                    Kite user manual
                </a>
            </div>
            <div className='col-12 col-md-6 p-5 '>
                <h1 className='fs-3'>Featured</h1>
                <a href="" style={{textDecoration:"none",color:"White"}} >
                    Current Takeover and Delisting - January 2026
                </a>
                <br />
                <a href="" style={{textDecoration:"none",color:"White"}} >
                    Latest Intraday leverages - MIS & CO
                </a>
                
            </div>
        </div>
    </section>
    );
}

export default Hero;