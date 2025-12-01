import React from "react";

const Hizmetler = () => {
  return (
    <div
      style={{
        backgroundColor: "#FAF7F2",
        minHeight: "100vh",
        padding: 0,
        margin: 0,
      }}
    >
      {/* Başlık */}
      <div
        style={{
          width: "100%",
          textAlign: "center",
          color: "#6F4E37",
          fontSize: 36,
          fontWeight: "700",
          marginBottom: "10px",
          marginTop: 20,
        }}
      >
        HİZMETLERİMİZ
      </div>

      {/* Açıklama */}
      <div
        style={{
          maxWidth: 1172,
          margin: "0 auto",
          textAlign: "center",
          color: "#6F4E37",
          fontSize: 32,
          fontFamily: "Caveat",
          fontWeight: "400",
        }}
      >
        Modern teknikler, kaliteli ürünler ve uzman eller... Size özel bakım ve
        güzellik hizmetlerimizle tanışın.
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: 30,
          marginTop: 50,
        }}
      >
        {[
          {
            img: "/hairdresser.png",
            title: "Saç Kesimi & Şekillendirme",
            desc: "Klasikten moderne, yüz hatlarınıza uygun stil önerileri.",
          },
          {
            img: "/boya.png",
            title: "Saç Boyama",
            desc: "Trend renklerle profesyonel dönüşüm.",
          },
          {
            img: "/bakim.png",
            title: "Saç Bakımı",
            desc: "Yıpranmış saçlar için keratin, botoks ve nem terapileri.",
          },
          {
            img: "/cilt.png",
            title: "Cilt Bakımı",
            desc: "Cildinize nefes aldıran tazeleyici bakım seansları.",
          },
        ].map((item) => (
          <div
            key={item.title}
            style={{
              backgroundColor: "white",
              padding: "25px",
              borderRadius: "20px",
              boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
              textAlign: "center",
              width: 260,
              height: 350, // ✨ TÜM KARTLAR EŞİT YÜKSEKLİK
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <img
              style={{
                width: 114,
                height: 114,
                margin: "0 auto",
              }}
              src={item.img}
              alt={item.title}
            />

            <div
              style={{
                color: "#6F4E37", // ✨ Daha okunabilir
                fontSize: 22,
                fontFamily: "Caveat",
                fontWeight: "600",
                marginTop: 10,
              }}
            >
              {item.title}
            </div>

            <div
              style={{
                color: "#6F4E37",
                fontSize: 15,
                fontFamily: "Anonymous Pro",
                lineHeight: "1.5",
              }}
            >
              {item.desc}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hizmetler;
