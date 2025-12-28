import React from "react";

const UzmanEkip = () => {
  return (
    <div
      style={{
        backgroundColor: "#EFE7DA",
        minHeight: "100vh",
        padding: "50px 0",
      }}
    >
      <h2
        style={{
          textAlign: "center",
          color: "#6F4E37",
          fontWeight: "700",
          marginBottom: "10px",
        }}
      >
        Uzman Ekibimiz
      </h2>
      <div
        style={{
          width: "60px",
          height: "3px",
          backgroundColor: "#6F4E37",
          margin: "0 auto 40px",
        }}
      ></div>

      <div className="container">
        <div className="row g-4 justify-content-center">
          {/* KART 1 */}
          <div className="col-md-4 overflow-hidden">
            <div
              style={{
                backgroundColor: "white",
                padding: "25px",
                borderRadius: "20px",
                boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
                textAlign: "center",
              }}
            >
              <img
                src="/team1.png"
                alt="Elif"
                style={{
                  width: "140px",
                  height: "140px",
                  borderRadius: "50%",
                  objectFit: "cover",
                  border: "4px solid #6F4E37",
                  marginBottom: "15px",
                }}
              />
              <h5 style={{ color: "#6F4E37", fontWeight: "700" }}>Mert Kaya</h5>
              <span style={{ color: "#6A6A6A" }}>Saç Tasarım Uzmanı</span>
              <p style={{ marginTop: "10px", color: "#4A3B2F" }}>
                Mert, 8 yıllık tecrübesiyle modern saç kesimlerinde
                uzmanlaşmıştır.
              </p>
            </div>
          </div>

          {/* KART 2 */}
          <div className="col-md-4 overflow-hidden">
            <div
              style={{
                backgroundColor: "white",
                padding: "25px",
                borderRadius: "20px",
                boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
                textAlign: "center",
              }}
            >
              <img
                src="/team2.png"
                alt="Ayşe"
                style={{
                  width: "140px",
                  height: "140px",
                  borderRadius: "50%",
                  objectFit: "cover",
                  border: "4px solid #6F4E37",
                  marginBottom: "15px",
                }}
              />
              <h5 style={{ color: "#6F4E37", fontWeight: "700" }}>
                Ayşe Demir
              </h5>
              <span style={{ color: "#6A6A6A" }}>Cilt Bakım Uzmanı</span>
              <p style={{ marginTop: "10px", color: "#4A3B2F" }}>
                Ayşe, cilt sağlığı ve estetik dokunuşlarıyla danışanlarının
                vazgeçilmezi.
              </p>
            </div>
          </div>

          {/* KART 3 */}
          <div className="col-md-4 overflow-hidden">
            <div
              style={{
                backgroundColor: "white",
                padding: "25px",
                borderRadius: "20px",
                boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
                textAlign: "center",
              }}
            >
              <img
                src="/team3.png"
                alt="Mert"
                style={{
                  width: "140px",
                  height: "140px",
                  borderRadius: "50%",
                  objectFit: "cover",
                  border: "4px solid #6F4E37",
                  marginBottom: "15px",
                }}
              />
              <h5 style={{ color: "#6F4E37", fontWeight: "700" }}>
                Melisa Yılmaz
              </h5>
              <span style={{ color: "#6A6A6A" }}>Renk Uzmanı</span>
              <p style={{ marginTop: "10px", color: "#4A3B2F" }}>
                Melisa, renk kombinasyonları ve balayage uygulamalarıyla fark
                yaratır.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UzmanEkip;
