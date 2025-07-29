import React from "react";

const UzmanEkip = () => {
  return (
    <div
      className="uzmanekip"
      style={{
        backgroundColor: "#113F67",
      }}
    >
      {/* Başlık ayrı div olarak dışarıda ortalanmış */}
      <div
        className="baslik"
        style={{
          width: "100%",
          textAlign: "center",
          color: "#FDF5AA",
          fontSize: 36,
          fontFamily: "Bitcount",
          fontWeight: "400",
        }}
      >
        UZMAN EKİBİMİZ
      </div>

      {/* Kartların kapsayıcısı */}
      <div
        className="uzmanekip"
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "flex-start",
          flexWrap: "wrap",
          gap: 40,
          marginTop: 40,
        }}
      >
        {/* KART 1 */}
        <div
          style={{
            width: 333,
            height: 675,
            backgroundColor: "#34699A",
            borderRadius: 40,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: 20,
            boxSizing: "border-box",
            gap: 10,
          }}
        >
          <img
            style={{ width: 198, height: 210 }}
            src="/team1.png"
            alt="profil"
          />
          <div
            style={{
              width: 246,
              textAlign: "center",
              color: "#FDF5AA",
              fontSize: 20,
              marginTop: 30,
              fontFamily: "Anonymous Pro",
              fontWeight: "700",
            }}
          >
            Elif Yılmaz <br />
            Saç Tasarım Uzmanı
          </div>
          <div
            style={{
              width: 246,
              textAlign: "center",
              color: "#FDF5AA",
              fontSize: 18,
              fontFamily: "Inter",
              fontWeight: "400",
            }}
          >
            Elif, 8 yıllık tecrübesiyle <br />
            modern saç kesimlerinde <br />
            uzmanlaşmıştır.
          </div>
        </div>

        {/* KART 2 */}
        <div
          style={{
            width: 333,
            height: 675,
            background: "#34699A",
            borderRadius: 40,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: 20,
            boxSizing: "border-box",
            gap: 10,
          }}
        >
          <img
            style={{ width: 198, height: 210 }}
            src="/team3.png"
            alt="profil"
          />
          <div
            style={{
              width: 246,
              textAlign: "center",
              color: "#FDF5AA",
              fontSize: 20,
              marginTop: 30,
              fontFamily: "Anonymous Pro",
              fontWeight: "700",
            }}
          >
            Buse Demir <br />
            Cilt Bakım Uzmanı
          </div>
          <div
            style={{
              width: 246,
              textAlign: "center",
              color: "#FDF5AA",
              fontSize: 18,
              fontFamily: "Inter",
              fontWeight: "400",
            }}
          >
            Buse, cilt sağlığı ve estetik dokunuşlarıyla danışanlarının
            vazgeçilmezi.
          </div>
        </div>
        {/* KART 1 */}
        <div
          style={{
            width: 333,
            height: 675,
            background: "#34699A",
            borderRadius: 40,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: 20,
            boxSizing: "border-box",
            gap: 10,
          }}
        >
          <img
            style={{ width: 198, height: 210 }}
            src="/team2.png"
            alt="profil"
          />
          <div
            style={{
              width: 246,
              textAlign: "center",
              color: "#FDF5AA",
              fontSize: 20,
              marginTop: 30,
              fontFamily: "Anonymous Pro",
              fontWeight: "700",
            }}
          >
            Mert Kaya <br />
            Renk Uzmanı
          </div>
          <div
            style={{
              width: 246,
              textAlign: "center",
              color: "#FDF5AA",
              fontSize: 18,
              fontFamily: "Inter",
              fontWeight: "400",
            }}
          >
            Mert, renk kombinasyonları ve balayage uygulamalarıyla fark yaratır.
          </div>
        </div>
      </div>
      <div
        style={{
          width: 833,
          height: 41,
          color: "#FDF5AA",
          fontSize: 28,
          marginLeft: 350,
          marginTop: 50,
          marginBottom: 50,
          fontFamily: "Caveat",
          fontWeight: "400",
          wordWrap: "break-word",
        }}
      >
        Uzman ekibimizle hayal ettiğiniz görünüme ulaşmanız için buradayız !
      </div>
    </div>
  );
};

export default UzmanEkip;
