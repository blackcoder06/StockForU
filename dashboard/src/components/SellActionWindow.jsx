import React , {useContext} from 'react';
import { Link } from 'react-router-dom';
import GeneralContext from './GeneralContext';
import './BuyActionWindow.css';
import { useState } from 'react';
import axios from 'axios';

function SellActionWindow({ uid }) {

        const handleSellClick = () => {
        axios.post('http://localhost:3002/newOrder' , {
            name: uid,
            qty:  stockQuantity,
            price:  stockPrice,
            mode:  "SELL",
        });
        closeSellWindow();
    }
    const { closeSellWindow } = useContext(GeneralContext);
    
    const handleCancleClick = () => {
        closeSellWindow();
    };

    const [stockQuantity , setStockQuantity] = useState(1);
    const [stockPrice , setStockPrice] = useState(0.0);


    
    return (
        <div className='conatinerClass' id="buy-window" draggable="true">
            <div className='regular-order'>
                <div className='inputs'>
                    <fieldset>
                        <legend>Qty.</legend>
                        <input type="number" name="qty" id="qty" onChange={(e) => {
                            setStockQuantity(e.target.value)
                        }} value={stockQuantity}/>
                    </fieldset>
                    <fieldset>
                        <legend>Price</legend>
                        <input type="number" name="price" id="price" step="0.05" onChange={(e) => {
                            setStockPrice(e.target.value)
                        }} value={stockPrice}/>
                    </fieldset>
                </div>
            </div>

            <div className='buttons'>
                <span>Margin required ₹140.65</span>
                <div>
                    <Link className="btn btn-red" onClick={handleSellClick}>
                    Sell</Link>
                    <Link to="" className="btn btn-grey" onClick={handleCancleClick}>Cancel</Link>
                </div>
            </div>
        </div>
    );
};

export default SellActionWindow;