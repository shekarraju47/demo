import { Link, withRouter } from "react-router-dom";
import "./index.css";

function Header() {
  return (
    <div className="header-main-cont">
      <Link to="/">
        <button className="link">Home</button>
      </Link>

      <Link to="/signup">
        <button className="link">Sign Up</button>
      </Link>
    </div>
  );
}

export default withRouter(Header);
