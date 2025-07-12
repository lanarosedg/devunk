import logo from './assets/logo.png'
import instagram from './assets/logo/instagram.png'
import facebook from './assets/logo/facebook.png'
import tiktok from './assets/logo/tiktok.png'

function Footer() {
    return (
        <>
        <div className="footerParent">
            <p className="statement">
                <span className="statementBold">
                devunk.ph isn’t just a clothing brand — it’s a statement 
                for the <span className="green">build</span>-
                <span className="yellow">break</span>-
                <span className="red">debug</span>-
                <span className="blue">repeat</span> culture. </span>
                Founded by a developer who knows the hustle behind the screen, 
                devunk.ph was born to connect and represent the tech community through 
                wearable code.
            </p>
            <img 
                src={logo} 
                alt="" 
                className="logo" 
            />
            <p className="suggestion">
                Suggestions? Connect with us
            </p>
            <div className="socMed">
                <div className="socMedFlex">
                    <img 
                        src={instagram} 
                        alt="" 
                    />
                    <img 
                        src={facebook}
                        alt="" 
                    />
                    <img 
                        src={tiktok}
                        alt="" 
                    />
                </div>
            </div>
            <div className="copyright">
                © 2025 | devunk.ph
            </div>
        </div>
        </>
    )
}

export default Footer