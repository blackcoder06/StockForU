import React from 'react';
import { Link } from 'react-router-dom';

function NotFound () {
    return (
<div className='container  mt-5'>
            <div className='row text-center'>
                <h1 className='mb-3 ' style={{color:"#dc3545"}}>
                404 Not Found <i class="fa-regular fa-face-frown-open fa-bounce"></i>
                </h1>
                <p className='text-muted'>
                We couldn’t find the page you were looking for. <Link to="/" style={{textDecoration:"none"}}>Visit StcokForU's home page</Link>
                </p>
                
            </div>
        </div>
    );
}

export default NotFound;