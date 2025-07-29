import React from "react";

const Hizmetler = () => {
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
        HİZMETLERİMİZ
      </div>

      <div
        style={{
          width: 1172,
          height: 66,
          textAlign: "center",
          color: "#FDF5AA",
          fontSize: 32,
          fontFamily: "Caveat",
          marginLeft: 100,
          fontWeight: "400",
          wordWrap: "break-word",
        }}
      >
        Modern teknikler, kaliteli ürünler ve uzman eller... Size özel bakım ve
        güzellik hizmetlerimizle tanışın.
        <br />
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: 30,
          marginTop: 50,
        }}
      >
        <div
          style={{
            width: 250,
            height: 400,
            background: "#34699A", // İkinci görseldeki lila renk tonu
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: 20,
            boxSizing: "border-box",
            borderRadius: 20,
            gap: 20, // Elemanlar arası boşluk
          }}
        >
          <img style={{ width: 114, height: 114 }} src="/hairdresser.png" />

          <div
            style={{
              textAlign: "center",
              color: "#FDF5AA",
              fontSize: 28,
              fontFamily: "Caveat",
              fontWeight: "400",
            }}
          >
            Saç Kesimi & <br /> <em>Şekillendirme</em>
          </div>

          <div
            style={{
              textAlign: "center",
              color: "#FDF5AA",
              fontSize: 16,
              fontFamily: "Anonymous Pro",
              fontWeight: "400",
              lineHeight: "1.6",
            }}
          >
            Klasikten moderne,
            <br />
            yüz hatlarınıza uygun
            <br />
            stil önerileri.
          </div>
        </div>

        <div
          style={{
            width: 250,
            height: 400,
            background: "#34699A", // İkinci görseldeki lila renk tonu
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: 20,
            boxSizing: "border-box",
            borderRadius: 20,
            gap: 20, // Elemanlar arası boşluk
          }}
        >
          <img style={{ width: 114, height: 114 }} src="/boya.png" />

          <div
            style={{
              textAlign: "center",
              color: "#FDF5AA",
              fontSize: 28,
              fontFamily: "Caveat",
              fontWeight: "400",
            }}
          >
            Saç Boyama
          </div>

          <div
            style={{
              textAlign: "center",
              color: "#FDF5AA",
              fontSize: 16,
              fontFamily: "Anonymous Pro",
              fontWeight: "400",
              lineHeight: "1.6",
            }}
          >
            Trend renklerle profesyonel dönüşüm.
          </div>
        </div>
        <div
          style={{
            width: 250,
            height: 400,
            background: "#34699A", // İkinci görseldeki lila renk tonu
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: 20,
            boxSizing: "border-box",
            borderRadius: 20,
            gap: 20, // Elemanlar arası boşluk
          }}
        >
          <img style={{ width: 114, height: 114 }} src="/bakim.png" />

          <div
            style={{
              textAlign: "center",
              color: "#FDF5AA",
              fontSize: 28,
              fontFamily: "Caveat",
              fontWeight: "400",
            }}
          >
            Saç Bakımı
          </div>

          <div
            style={{
              textAlign: "center",
              color: "#FDF5AA",
              fontSize: 16,
              fontFamily: "Anonymous Pro",
              fontWeight: "400",
              lineHeight: "1.6",
            }}
          >
            Yıpranmış saçlar için keratin, botoks ve nem terapileri.
          </div>
        </div>

        <div
          style={{
            width: 250,
            height: 400,
            marginBottom: 30,
            background: "#34699A", // İkinci görseldeki lila renk tonu
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: 20,
            boxSizing: "border-box",
            borderRadius: 20,
            gap: 20, // Elemanlar arası boşluk
          }}
        >
          <img style={{ width: 114, height: 114 }} src="/cilt.png" />

          <div
            style={{
              textAlign: "center",
              color: "#FDF5AA",
              fontSize: 28,
              fontFamily: "Caveat",
              fontWeight: "400",
            }}
          >
            Cilt Bakımı{" "}
          </div>

          <div
            style={{
              textAlign: "center",
              color: "#FDF5AA",
              fontSize: 16,
              fontFamily: "Anonymous Pro",
              fontWeight: "400",
              lineHeight: "1.6",
            }}
          >
            Cildinize nefes aldıran tazeleyici bakım seansları.{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hizmetler;
