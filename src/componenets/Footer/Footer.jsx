import './Footer.css'
import instagram_icon from "../../assets/instagram_icon.png";
import twitter_icon from '../../assets/twitter_icon.png'
import youtube_icon from '../../assets/youtube_icon.png'
import facebook_icon from '../../assets/facebook_icon.png'

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-icon">
        <img src={facebook_icon} alt="" />
        <img src={youtube_icon} alt="" />
        <img src={twitter_icon} alt="" />
        <img src={instagram_icon} alt="" />
      </div>

      <ul>
<li>Auduio Description</li>
<li> Help centre</li>
<li>Gift Cards</li>
<li>Terms of Use</li>
<li>Cooperation Information</li>
<li>Legal Notices</li>
<li>Privacy</li>
<li>Contact Us</li>

      </ul>
      <p className='copyright-text'>@1997-2023 Netflix.inc</p>
    </div>
  );
}



export default Footer
