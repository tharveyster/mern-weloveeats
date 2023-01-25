import Navigation from "./Navigation";

const Header = () => {
  return (
    <>
      <header>
      <Navigation />
        <div id="header-title">
          <img
            className="logo"
            src="/images/icons/wle-logo.png"
            alt="WeLoveEats logo"
            title="WeLoveEats title"
          />
        </div>
      </header>
    </>
  );
};

export default Header;
