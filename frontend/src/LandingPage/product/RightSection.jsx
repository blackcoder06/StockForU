import React from 'react';

function RightSection({imageURL , productName , productDescription , learnMore}) {
    return (
        <div className='conatiner '>
            <div className='row  align-items-center' >
                <div className='col-12 col-md-6 p-5  '>
                    <h1 className='fs-4 text-muted mb-3'>{productName}</h1>
                    <p>{productDescription}</p>
                    <div>
                    <a href={learnMore} style={{ textDecoration:"none"}}>Learn more <i class="fa-solid fa-arrow-right-long"></i> </a>
                    </div>
                </div>
                <div className='col-12 col-md-6 p-5 mb-5'>
                    
                    <img src={imageURL} alt="img" className='img-fluid ' />
                </div>
            </div>
        </div>
    );
}

export default RightSection;