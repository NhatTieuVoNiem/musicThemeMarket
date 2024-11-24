import Logo from "../logo/Logo";
import DiscordLogo from "../../assets/icons/DiscordLogo.svg";
import InstagramLogo from "../../assets/icons/InstagramLogo.svg";
import YoutubeLogo from "../../assets/icons/YoutubeLogo.svg";
import TwitterLogo from "../../assets/icons/TwitterLogo.svg";
import MenuItem from "../menuItem/MenuItem";
import "./footer.css";
import { Link } from "react-router-dom";

export default function Footer({ type }) {
  return (
    <div className="section footer">
      <div className="container content-footer">
        <div className="top-block-footer">
          <div className="column-left">
            <Logo />
            <p>NFT marketplace UI created with Anima for Figma.</p>
            <div className="community-footer">
              <p>Join our community</p>
              <div className="list-community">
                <Link to="https://discord.com/invite/eQxkYTNxSp">
                  <img src={DiscordLogo} />
                </Link>
                <Link to="https://www.youtube.com/channel/UCXqr0Ca-b73rU9zcpSBJ5cw">
                  <img src={YoutubeLogo} />
                </Link>
                <Link to="https://twitter.com/animaapp?lang=en">
                  <img src={TwitterLogo} />
                </Link>
                <Link to="https://www.instagram.com/animaapp/?hl=en">
                  <img src={InstagramLogo} />
                </Link>
              </div>
            </div>
          </div>
          <div className="column-center">
            <h5 className="title-head-column">Explore</h5>
            <MenuItem type={type} />
          </div>
          <div className="column-right">
            <h5 className="title-head-column">Join our weekly digest</h5>
            <p>Get exclusive promotions & updates straight to your inbox.</p>
            <div className="list-btn-footer">
              <input
                type="email"
                className="btn-view-input"
                placeholder="Enter your email here"
              />
              <button className="btn btn-view-footer">Subscribe</button>
            </div>
          </div>
        </div>
        <div className="bottom-block-footer">
          <footer>Ⓒ NFT Market. Use this template freely.</footer>
        </div>
      </div>
    </div>
  );
}
