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
          class="btn btn-secondary"
          style={{
            fontSize: "1rem",
            padding: "0.5rem 0.5rem",
            marginTop: "25px",
            textDecoration: "none",
            color: "white",
          }}
        >
          Randevu Al
        </button>
      </Link>

      <img src={icon} alt="makas görseli" className="icon" />
      <p style={{ color: "#5A4A42", maxWidth: "700px", marginTop: "10px" }}>
        Kuaför randevunuzu saniyeler içinde planlayın. Modern, hızlı ve pratik
        bir güzellik deneyimi.
      </p>
    </div>
  );
};

export default Anasayfa;
