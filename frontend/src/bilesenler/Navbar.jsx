import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <header>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3">
          <Link className="navbar-brand" to="/">
            Kuaför Randevu Sistemi
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarMenu"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarMenu">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Anasayfa
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/hakkimizda">
                  Hakkımızda
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/uzmanekip">
                  Uzman Ekibimiz
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/hizmetler">
                  Hizmetlerimiz
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/iletisim">
                  İletişim
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/admin">
                  Admin
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
