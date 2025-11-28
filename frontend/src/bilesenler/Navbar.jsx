import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header>
      <nav
        className="navbar navbar-expand-lg px-3"
        style={{ backgroundColor: "#6F4E37" }}
      >
        <Link className="navbar-brand text-white fw-bold" to="/">
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
              <Link className="nav-link text-white" to="/">
                Anasayfa
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/hakkimizda">
                Hakkımızda
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/uzmanekip">
                Uzman Ekibimiz
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/hizmetler">
                Hizmetlerimiz
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/iletisim">
                İletişim
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/admin">
                Admin
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
