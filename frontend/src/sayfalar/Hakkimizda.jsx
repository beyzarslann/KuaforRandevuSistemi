import React from "react";

const Hakkimizda = () => {
  return (
    <div className="py-5" style={{ backgroundColor: "#EFE7DA" }}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6 text-center mb-4 mb-md-0">
            <img
              className="img-fluid rounded shadow  d-block my-1 mx-2"
              src="/hakkimizda.jpg"
              alt="image"
              style={{ maxWidth: "450px" }}
            />
          </div>
          <div className="col-md-6">
            <h2
              className="fw-bold mb-4"
              style={{
                color: "#a46610ff",
                fontFamily: "Playfair Display",
              }}
            >
              Hakkımızda
            </h2>
            <p className="text-secondary fs-5" style={{ fontFamily: "Inter" }}>
              Modern güzellik dünyasının hızına ayak uydurmak ve kuaför
              deneyimini daha konforlu hale getirmek için tasarlandı.
            </p>
            <p className="text-secondary fs-5" style={{ fontFamily: "Inter" }}>
              Amacımız; randevu sürecini kolaylaştıran, zaman yönetimini
              iyileştiren ve hem müşteriler hem de salon çalışanları için
              kesintisiz bir hizmet akışı sağlayan yenilikçi bir sistem sunmak.
            </p>
            <p className="text-secondary fs-5" style={{ fontFamily: "Inter" }}>
              Her müşterinin kendini özel hissettiği bir kuaför deneyimi için;
              uzman kadrolar, kaliteli hizmetler ve teknolojiyi bir araya
              getiriyoruz.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hakkimizda;
