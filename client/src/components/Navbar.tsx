import { Link } from "react-router-dom";

const Navbar = () => {
  const menuItem = [
    {
      title: "Genders",
    },
    {
      title: "Users",
    },
  ];
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Navbar
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              {menuItem.map((menuItem, index) => (
                <li className="nav-item" key={index}>
                  <Link className="nav-link" to={"#"}>
                    {menuItem.title}
                  </Link>
                </li>
              ))}
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#">
                  Home
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
