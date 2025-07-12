import Navigation from './Navigation'

import docu from './assets/apparel/docu.png'
import lockedin from './assets/apparel/lockedin.png'
import goldenRule from './assets/apparel/goldenRule.png'
import croppedHoodie from './assets/apparel/croppedHoodie.png'
import repoHoodie from './assets/apparel/repoHoodie.png'

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
                    <p>DOCU</p>
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
            <div className="product2Container">
                <img 
                    src={lockedin}
                    alt="" 
                    className="product2Image" 
                />
                <p className="product2NamePrice">
                    <p>LOCKED IN</p>
                    <p>₱400.00</p>
                </p>
                <div className="product2AddBuy">
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
            <div className="product3Container">
                <img 
                    src={goldenRule} 
                    alt="" 
                    className="product3Image" 
                />
                <p className="product3NamePrice">
                    <p>GOLDEN RULE</p>
                    <p>₱450.00</p>
                </p>
                <div className="product3AddBuy">
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
            <div className="product1Container">
                <img 
                    src={croppedHoodie}
                    alt="" 
                    className="product4Image" 
                />
                <p className="namePrice">
                    <p>CROPPED HOODIE</p>
                    <p>₱600.00</p>
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
            <div className="product5Container">
                <img 
                    src={repoHoodie}
                    alt="" 
                    className="product5Image" 
                />
                <p className="product5NamePrice">
                    <p>REPO HOODIE</p>
                    <p>₱600.00</p>
                </p>
                <div className="product5AddBuy">
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