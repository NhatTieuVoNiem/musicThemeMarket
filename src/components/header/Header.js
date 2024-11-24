import "./header.css";
import Logo from "../logo/Logo";
import MenuItem from "../menuItem/MenuItem";
import SignUp from "../signUp/SignUp";
import List from "../../assets/icons/List.svg";

export default function Header({ type }) {
  return (
    <div className="section header">
      <Logo />
      <div class="menu-button">
        <MenuItem type={type} />
        <SignUp />
      </div>
      <div className="menu-icon">
        <img src={List} />
      </div>
    </div>
  );
}
