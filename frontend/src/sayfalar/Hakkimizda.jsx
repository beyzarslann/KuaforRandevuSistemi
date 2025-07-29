import React from "react";

const Hakkimizda = () => {
  return (
    <div
      className="hakkimizda"
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
          width: 600,
          height: 42,
          margin: "0 auto", // merkezi ortalama
          textAlign: "center",
          color: "black",
          fontSize: 36,
          fontFamily: "Bitcount",
          fontWeight: "400",
          wordWrap: "break-word",
        }}
      >
        HAKKIMIZDA
      </div>
      <img
        style={{
          width: 388,
          height: 259,
          borderRadius: 17,
          marginLeft: 100,
          marginTop: 50,
        }}
        src="/2.jpg"
      />
      <img
        style={{
          width: 388,
          height: 259,
          borderRadius: 32,
          marginLeft: 300,
          marginRight: 100,
          marginTop: 50,
        }}
        src="/1.jpg"
      />

      {/* VİZYON */}

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "40px",
          marginLeft: "40px",
        }}
      >
        {/* Vizyon Başlık Kutusu */}
        <div
          style={{
            backgroundColor: "#d58c8c",
            width: "400px",
            height: "100px",
            borderRadius: "30px",
            marginTop: 40,
            marginLeft: 50,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <p
            style={{
              fontFamily: "Bitcount",
              fontSize: "20px",
              color: "white",
              margin: 0,
            }}
          >
            VİZYONUMUZ
          </p>
        </div>

        {/* Açıklama */}
        <p
          style={{
            maxWidth: "700px",
            marginTop: 40,
            fontSize: "14px",
            fontFamily: "Lekton",
            lineHeight: "1.6",
          }}
        >
          Modern, güvenilir ve ulaşılabilir bir kuaför hizmeti sunarak her
          bireyin kendini özel hissettiği bir adres olmak. Teknolojiyi ve
          trendleri takip ederek randevu sistemimizi sürekli geliştiriyoruz.
        </p>
      </div>

      {/* MİSYON */}
      <div
        style={{
          display: "flex",
          flexDirection: "row-reverse",
          gap: "40px",
          padding: "20px",
        }}
      >
        <div
          style={{
            backgroundColor: "#d98c8c",
            padding: "40px 60px",
            width: 354,
            height: 92,
            borderRadius: 30,
            color: "white",
            fontSize: 20,
            fontFamily: "Bitcount",
            display: "flex", // ✅ eklendi
            alignItems: "center", // dikey ortalama
            justifyContent: "center", // yatay ortalama
          }}
        >
          MİSYONUMUZ
        </div>

        <p style={{ fontFamily: "Lekton", maxWidth: "800px" }}>
          Her müşterimize kişisel bakımda konfor, hijyen ve profesyonellik
          sunmak için buradayız. İhtiyacınıza uygun çözümlerle, güzelliğinizi
          destekleyen bir deneyim yaratmayı amaçlıyoruz.
        </p>
      </div>

      {/* Hizmet Kalitesi */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "40px",
          marginLeft: "40px",
        }}
      >
        <div
          style={{
            backgroundColor: "#d58c8c",
            width: "400px",
            height: "100px",
            borderRadius: "30px",
            marginTop: 10,
            marginLeft: 50,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <p
            style={{
              fontFamily: "Bitcount",
              fontSize: "20px",
              color: "white",
              margin: 0,
            }}
          >
            HİZMET KALİTESİ
          </p>
        </div>

        {/* Açıklama */}
        <p
          style={{
            maxWidth: "700px",
            marginTop: 10,
            fontSize: "14px",
            fontFamily: "Lekton",
            lineHeight: "1.6",
          }}
        >
          Alanında uzman ekibimizle her işlemde kaliteli ürünler ve özenli
          hizmet sunuyoruz. Randevulu sistemimiz sayesinde zamanınıza değer
          veriyor, beklemeden bakım yapıyoruz.
        </p>
      </div>

      {/* Müşteri memnuniyeti */}

      <div
        style={{
          display: "flex",
          flexDirection: "row-reverse",
          gap: "40px",
          padding: "20px",
        }}
      >
        <div
          style={{
            backgroundColor: "#d98c8c",
            padding: "40px 60px",
            width: 354,
            height: 92,
            borderRadius: 30,
            color: "white",
            fontSize: 20,
            fontFamily: "Bitcount",
            display: "flex", // ✅ eklendi
            alignItems: "center", // dikey ortalama
            justifyContent: "center", // yatay ortalama
          }}
        >
          MÜŞTERİ MEMNUNİYETİ
        </div>

        <p style={{ fontFamily: "Lekton", maxWidth: "800px" }}>
          Sizin mutluluğunuz, bizim en büyük motivasyon kaynağımızdır. Görüş ve
          geri bildirimlerinizi önemsiyor, her gün daha iyi olmak için
          çalışıyoruz.
        </p>
      </div>
    </div>
  );
};

export default Hakkimizda;
