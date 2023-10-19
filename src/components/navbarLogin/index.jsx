import React from "react";
import logo from "../../assets/Brand.png";
import { CgProfile } from "react-icons/cg";
import { BsCart } from "react-icons/bs";
import { GrNotification } from "react-icons/gr";
import { Link } from "react-router-dom";
import "../../assets/css/style.css";

const NavbarLogin = () => {
  return (
    <>
      <header id="navbar">
        <nav className="navbar fixed-top navbar-expand-lg  p-3">
          <div className="container d-flex align-items-center">
            <a className="navbar-brand" href="/home">
              <img
                src={logo}
                width="110"
                height="33"
                alt="Brand"
              />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarTogglerDemo02"
              aria-controls="navbarTogglerDemo02"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon col-md-4" />
            </button>
            <div
              className="collapse navbar-collapse justify-content-end"
              id="navbarTogglerDemo02"
            >
              <ul className="navbar-nav search-container">
                <li className="nav-item">
                  <input
                    className="form-control search"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                  />
                </li>
              </ul>
              <form className="form-inline wrap">
                <i className="cart bi bi-cart" />
                <Link
                  style={{ color: "inherit", textDecoration: "none" }}
                  to={"/profile"}
                >
                  <CgProfile size={30} />
                </Link>
                <Link
                  style={{ color: "inherit", textDecoration: "none" }}
                  to={"/cart"}
                >
                  <BsCart size={30} />
                </Link>
                <Link
                  style={{ color: "inherit", textDecoration: "none" }}
                  to={"/Notification"}
                >
                  <GrNotification size={30} />
                </Link>
              </form>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default NavbarLogin;
