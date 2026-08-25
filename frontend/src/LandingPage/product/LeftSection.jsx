import React from 'react';

function LeftSection({imageURL , productName , productDescription ,tryDemo , learnMore , googlePlay , appStore }) {
    return (
        <div className='conatiner '>
            <div className='row align-items-center ' >
                <div className='col-12 col-md-6 p-5'>
                    <img src={imageURL} alt="img" className='img-fluid p-5' />
                </div>
                <div className='col-12 col-md-6 p-5 mt-2'>
                    <h1 className='fs-4 text-muted mb-3'>{productName}</h1>
                    <p>{productDescription}</p>
                    <div><a href={tryDemo} style={{textDecoration:"none"}}>Try demo <i class="fa-solid fa-arrow-right-long"></i></a>
                    <a href={learnMore} style={{marginLeft:"50px", textDecoration:"none"}}>Learn more <i class="fa-solid fa-arrow-right-long"></i> </a>
                    </div>
                    <div className='mt-3 '>
                        <a href={googlePlay} className=''><img src="media/images/googlePlayBadge.svg" alt="img" /></a>
                    <a href={appStore} style={{marginLeft:"50px"}}><img src="media/images/appstoreBadge.svg" alt="img" /></a></div>
                    
                </div>
            </div>
        </div>
    );
}

export default LeftSection;