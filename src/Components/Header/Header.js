import { Link, withRouter } from "react-router-dom";
import { useContext } from "react";
import { DarkmodeContext } from "../../App";

import "./index.css";

function Header() {
  const [mode, setMode] = useContext(DarkmodeContext);
  const SelectDark = () => {
    console.log(mode);
    setMode((prev) => !prev);
  };
  return (
    <div className="header-main-cont">
      <button onClick={SelectDark}>isdark</button>
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
