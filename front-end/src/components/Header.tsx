import { useSelector, useDispatch } from "react-redux";
import logo from "../assets/argentBankLogo.png";

const Header = () => {
  const dispatch = useDispatch();

  const logged = useSelector((state: any) => state?.authReducer?.user?.logged);
  const token = localStorage.getItem("token");

  const handleSignOut = () => {
    dispatch({ type: "LOGOUT" });
    localStorage.removeItem("token");
  };

  return (
    <nav className="main-nav">
      <a className="main-nav-logo" href="/">
        <img
          className="main-nav-logo-image"
          src={logo}
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </a>
      <div>
        {logged || token ? (
          <a className="main-nav-item" href="/signIn" onClick={handleSignOut}>
            <i className="fa fa-sign-out"></i>
            Sign Out
          </a>
        ) : (
          <a
            className="main-nav-item"
            href={logged || token ? "/dashboard" : "/signIn"}
          >
            <span className="fa fa-user-circle right"></span>
            Sign in
          </a>
        )}
      </div>
    </nav>
  );
};

export default Header;
