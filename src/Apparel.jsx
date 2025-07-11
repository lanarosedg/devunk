import Navigation from './Navigation'

import docu from './assets/apparel/docu.png'
import cart from './assets/cart.png'

function Apparel() {
    return (
        <>
        <div className="apparelContainer">
            <Navigation />
            <div className="product1Container">
                <img 
                    src={docu}
                    alt="" 
                    className="product1Image" 
                />
                <p className="namePrice">
                    <p>Docu</p>
                    <p>₱450.00</p>
                </p>
                <div className="addBuy">
                    <div className="addBuyFlex">
                        <img 
                            src={cart}
                            alt="" 
                            className="cart" 
                        />
                        <button className="buy">
                            BUY
                        </button>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Apparel