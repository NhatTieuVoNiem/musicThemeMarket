import { Link } from "react-router-dom";
import User from "../../assets/icons/User.svg";

export default function SignUp() {
  return (
    <Link to="/user" className="btn btn-view-header">
      <img src={User} />
      Sign Up
    </Link>
  );
}
