import { Link, withRouter } from "react-router-dom";

function Header() {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/signup">Sign Up</Link>
    </div>
  );
}

export default withRouter(Header);
