import React from "react";
import "./Anasayfa.css";
import MusteriEkle from "../bilesenler/MusteriEkle";
import { Link } from "react-router-dom";
import icon from "../assets/icon1.png";

const Anasayfa = () => {
  return (
    <div className="anasayfa-container">
      <Link to="/musteri/yeniMusteri">
        <button
          type="button"
          className="btn btn-secondary btn-lg"
          style={{ fontSize: "1rem", padding: "0.5rem 0.5rem" }}
        >
          Randevu Al
        </button>
      </Link>

      <img src={icon} alt="makas görseli" className="icon" />
    </div>
  );
};

export default Anasayfa;
