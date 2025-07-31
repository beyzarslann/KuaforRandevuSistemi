import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { MdMailOutline } from "react-icons/md";
import { IoMdNavigate } from "react-icons/io";
import { CiClock2 } from "react-icons/ci";

const İletisim = () => {
  return (
    <div
      style={{
        backgroundColor: "#113F67",
        minHeight: "100vh",
        margin: 0,
        padding: 0,
      }}
    >
      <div
        className="baslik"
        style={{
          width: "100%",
          textAlign: "center",
          color: "#FDF5AA",
          fontSize: 36,
          fontFamily: "Bitcount",
          fontWeight: "400",
          marginTop: 20,
        }}
      >
        BİZE ULAŞIN
      </div>
      <div
        style={{
          width: 1188,
          height: 86,
          textAlign: "center",
          color: "#FDF5AA",
          fontSize: 36,
          fontFamily: "Caveat",
          marginLeft: 90,
          fontWeight: "400",
          wordWrap: "break-word",
        }}
      >
        Randevu almak, öneride bulunmak ya da sadece merhaba demek için bizimle
        iletişime geçin !
      </div>
      <div
        style={{
          width: 485,
          height: 58,
          textAlign: "center",
          color: "#FDF5AA",
          fontSize: 28,
          fontFamily: "Bitcount",
          marginTop: 30,
          marginLeft: 50,
          fontWeight: "400",
          wordWrap: "break-word",
        }}
      >
        İLETİŞİM BİLGİLERİ
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
        <FaPhoneAlt size={27} color="white" style={{ marginLeft: 150 }} />
        <div
          style={{
            textAlign: "center",
            color: "white",
            fontSize: 22,
            fontFamily: "Inter",
            fontWeight: "400",
          }}
        >
          0555 555 5555
        </div>
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 10,
          marginTop: 40,
        }}
      >
        <MdMailOutline size={27} color="white" style={{ marginLeft: 150 }} />
        <div
          style={{
            textAlign: "center",
            color: "white",
            fontSize: 22,
            fontFamily: "Inter",
            fontWeight: "400",
          }}
        >
          info@kuafor.com
        </div>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 10,
          marginTop: 40,
        }}
      >
        <IoMdNavigate size={27} color="white" style={{ marginLeft: 150 }} />
        <div
          style={{
            textAlign: "center",
            color: "white",
            fontSize: 22,
            fontFamily: "Inter",
            fontWeight: "400",
          }}
        >
          Yenimahalle / Ankara{" "}
        </div>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 10,
          marginTop: 40,
        }}
      >
        <CiClock2 size={27} color="white" style={{ marginLeft: 150 }} />
        <div
          style={{
            textAlign: "center",
            color: "white",
            fontSize: 22,
            fontFamily: "Inter",
            fontWeight: "400",
          }}
        >
          Pazartesi - Cumartesi 09.00 - 19.00{" "}
        </div>
      </div>
    </div>
  );
};

export default İletisim;
