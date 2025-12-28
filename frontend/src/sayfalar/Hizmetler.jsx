import React from "react";

const Hizmetler = () => {
  const services = [
    {
      img: "/kesim.jpg",
      title: "Saç Kesimi & Şekillendirme",
      desc: "Klasikten moderne, yüz hatlarınıza uygun stil önerileri.",
    },
    {
      img: "/boya.jpg",
      title: "Saç Boyama",
      desc: "Trend renklerle profesyonel dönüşüm.",
    },
    {
      img: "/bakim.jpg",
      title: "Saç Bakımı",
      desc: "Yıpranmış saçlar için keratin, botoks ve nem terapileri.",
    },
    {
      img: "https://images.pexels.com/photos/3735616/pexels-photo-3735616.jpeg?auto=compress&cs=tinysrgb&w=1200",
      title: "Cilt Bakımı",
      desc: "Cildinize nefes aldıran tazeleyici bakım seansları.",
    },
  ];

  return (
    <div
      style={{
        backgroundColor: "#EFE7DA",
        minHeight: "100vh",
        padding: "50px 0",
      }}
    >
      {/* Başlık */}
      <div
        style={{
          textAlign: "center",
          color: "#6F4E37",
          marginBottom: "10px",
          fontSize: "30px",
          fontWeight: "700",
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
        {services.map((item) => (
          <div
            key={item.title}
            style={{
              backgroundColor: "white",
              borderRadius: "20px",
              boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
              textAlign: "center",
              width: 260,
              height: 350,
              overflow: "hidden",
              display: "flex",
              flexDirection: "column",
            }}
          >
            {/* Foto */}
            <img
              src={item.img}
              alt={item.title}
              style={{
                width: "100%",
                height: 150,
                objectFit: "cover",
                display: "block",
              }}
              onError={(e) => {
                e.currentTarget.src =
                  "https://images.pexels.com/photos/3993444/pexels-photo-3993444.jpeg?auto=compress&cs=tinysrgb&w=1200";
              }}
            />

            <div
              style={{
                padding: "18px 18px 22px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                flex: 1,
              }}
            >
              <div
                style={{
                  color: "#6F4E37",
                  fontSize: 22,
                  fontFamily: "Caveat",
                  fontWeight: "600",
                  marginTop: 6,
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
                  marginTop: 10,
                }}
              >
                {item.desc}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hizmetler;
