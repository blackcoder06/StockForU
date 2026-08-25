import React, {useState} from 'react';

import BuyActionWindow from './BuyActionWindow';
import SellActionWindow from './SellActionWindow';

const GeneralContext = React.createContext({
    openBuyWindow: (uid) => {},
    closebuyWindow: () => {},
    openSellWindow: (uid) => {},
    closeSellWindow: () => {},
});

export const GeneralContextProvider = (props) => {
    const [isBuyWindowOpen , setIsBuyWindowOpen] = useState(false);
    const [isSellWindowOpen , setIsSellWindowOpen] = useState(false);
    const [selectedStockUID , setSelectStockUID] = useState("");

    const handleOpenBuyWindow = (uid) => {
        setIsBuyWindowOpen(true);
        setSelectStockUID(uid);
    };

    const handleCloseBuyWindow = () => {
        setIsBuyWindowOpen(false);
        setSelectStockUID("");
    };
    const handleOpenSellWindow = (uid) => {
        setSelectStockUID(uid);
        setIsSellWindowOpen(true);
    };

    const handleCloseSellWindow = () => {
        setIsSellWindowOpen(false);
        setSelectStockUID("");
    };


    return (
        <GeneralContext.Provider
        value={{
            openBuyWindow: handleOpenBuyWindow,
            closeBuyWindow: handleCloseBuyWindow,

            openSellWindow: handleOpenSellWindow,
            closeSellWindow: handleCloseSellWindow,
        }}
        >
            {props.children} {isBuyWindowOpen && <BuyActionWindow uid={selectedStockUID} />}

            {isSellWindowOpen && <SellActionWindow uid={selectedStockUID} />}

        </GeneralContext.Provider>
    );
};

export default GeneralContext;


