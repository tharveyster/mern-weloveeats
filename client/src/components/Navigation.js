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
              <li className="navigationItem">
                <Link to="/Category/1" onClick={() => this.forceUpdate()}>
                  <img src="/images/icons/sm-appetizers.jpg" alt="Appetizers" />
                  <span>Appetizers</span>
                </Link>
              </li>
              <li className="navigationItem">
                <Link to="/Category/2" onClick={() => this.forceUpdate()}>
                  <img src="/images/icons/sm-salads.jpg" alt="Salads" />
                  <span>Salads</span>
                </Link>
              </li>
              <li className="navigationItem">
                <Link to="/Category/3" onClick={() => this.forceUpdate()}>
                  <img src="/images/icons/sm-soups.jpg" alt="Soups, Stews, and Chilies" />
                  <span>Soups, Stews, and Chilies</span>
                </Link>
              </li>
              <li className="navigationItem">
                <Link to="/Category/4" onClick={() => this.forceUpdate()}>
                  <img src="/images/icons/sm-sauces.jpg" alt="Sauces, Dressings, and Marinades" />
                  <span>Sauces, Dressings, and Marinades</span>
                </Link>
              </li>
              <li className="navigationItem">
                <Link to="/Category/5" onClick={() => this.forceUpdate()}>
                  <img src="/images/icons/sm-breads.jpg" alt="Breads and Pizzas" />
                  <span>Breads and Pizzas</span>
                </Link>
              </li>
              <li className="navigationItem">
                <Link to="/Category/6" onClick={() => this.forceUpdate()}>
                  <img src="/images/icons/sm-sandwiches.jpg" alt="Sandwiches" />
                  <span>Sandwiches</span>
                </Link>
              </li>
              <li className="navigationItem">
                <Link to="/Category/7" onClick={() => this.forceUpdate()}>
                  <img src="/images/icons/sm-eggs.jpg" alt="Eggs" />
                  <span>Eggs</span>
                </Link>
              </li>
              <li className="navigationItem">
                <Link to="/Category/8" onClick={() => this.forceUpdate()}>
                  <img src="/images/icons/sm-meats.jpg" alt="Meats" />
                  <span>Meats</span>
                </Link>
              </li>
              <li className="navigationItem">
                <Link to="/Category/9" onClick={() => this.forceUpdate()}>
                  <img src="/images/icons/sm-poultry.jpg" alt="Poultry" />
                  <span>Poultry</span>
                </Link>
              </li>
              <li className="navigationItem">
                <Link to="/Category/10" onClick={() => this.forceUpdate()}>
                  <img src="/images/icons/sm-seafood.jpg" alt="Seafood" />
                  <span>Seafood</span>
                </Link>
              </li>
              <li className="navigationItem">
                <Link to="/Category/11" onClick={() => this.forceUpdate()}>
                  <img src="/images/icons/sm-vegetarian.jpg" alt="Vegetarian" />
                  <span>Vegetarian</span>
                </Link>
              </li>
              <li className="navigationItem">
                <Link to="/Category/12" onClick={() => this.forceUpdate()}>
                  <img src="/images/icons/sm-casseroles.jpg" alt="Casseroles" />
                  <span>Casseroles</span>
                </Link>
              </li>
              <li className="navigationItem">
                <Link to="/Category/13" onClick={() => this.forceUpdate()}>
                  <img src="/images/icons/sm-pasta.jpg" alt="Pasta and Rice" />
                  <span>Pasta and Rice</span>
                </Link>
              </li>
              <li className="navigationItem">
                <Link to="/Category/14" onClick={() => this.forceUpdate()}>
                  <img src="/images/icons/sm-sides.jpg" alt="Side Dishes" />
                  <span>Side Dishes</span>
                </Link>
              </li>
              <li className="navigationItem">
                <Link to="/Category/15" onClick={() => this.forceUpdate()}>
                  <img src="/images/icons/sm-desserts.jpg" alt="Desserts" />
                  <span>Desserts</span>
                </Link>
              </li>
              <li className="navigationItem">
                <Link to="/Category/16" onClick={() => this.forceUpdate()}>
                  <img src="/images/icons/sm-beverages.jpg" alt="Beverages" />
                  <span>Beverages</span>
                </Link>
              </li>
              <li className="navigationItem">
                <Link to="/SignUp">
                  <img src="/images/icons/signUp.png" alt="Sign Up" />
                  <span>Sign Up</span>
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
