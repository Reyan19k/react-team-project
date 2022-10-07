import twitLogo from '../images/twitlogo.png'
import faceLogo from '../images/facelogo.png'
import instaLogo from '../images/instalogo.png'

const CatsFooter = () => {
    return (
        <div>
            <div className="pageFooter">
                <div className="catFooterCards">
                <div className="catLinks">
                    <div className="catLinksTitle"><u><strong>Cat Links</strong></u></div>
                    <div className="catLinks2">
                    <div>Cats</div>
                    <div>Kittens</div>
                    <div>Adopt</div>
                    </div>
                </div>
                <div className="catServices">
                    <div className="catServicesTitle"><u><strong>Cat Services</strong></u></div>
                    <div className="catServices2">
                    <div>Local Vets</div>
                    <div>Accessories</div>
                    <div>Vaccinations</div>
                    </div>
                </div>
                <div className="catInfo">
                    <div className="catInfoTitle"><u><strong>Information</strong></u></div>
                    <div className="catInfo2">
                    <div>About Us</div>
                    <div>Contact</div>
                    </div>
                </div>
                <div className="catSocials">
                <div className="twitLogo"><img src={twitLogo} alt="twitter logo"></img></div>
                <div className="faceLogo"><img src={faceLogo} alt="facebook logo"></img></div>
                <div className="instaLogo"><img src={instaLogo} alt="instagram logo"></img></div>
                </div>
                </div>
            </div>
        </div>
    )
}

export default CatsFooter;