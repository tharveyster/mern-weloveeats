import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <>
      <div className="navigationContainer">
        <ul className="navigationMenu">
          <li className="navigationSub">
            <Link to="#">
            <img src="/images/icons/menu.png" alt="Menu" />
            </Link>
            <ul className="navigationItems">
              <li className="navigationItem">
                <Link to="/">
                  <img src="/images/icons/home.png" alt="Home" />
                  <span>Home</span>
                </Link>
              </li>
            </ul>
          </li>
        </ul>
      </div>

    </>
  );
};

export default Navigation;
