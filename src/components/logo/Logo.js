import { Link } from "react-router-dom";
import logo from "../../logo.svg";

export default function Logo() {
  return (
    <Link to="/" className="logo">
      <img src={logo} alt="Logo" />
    </Link>
  );
}
