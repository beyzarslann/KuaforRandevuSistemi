import React, { useState } from "react";
import { yeniMusteri } from "../service/MusteriService";

const MusteriEkle = () => {
  const [musteri_ad, setMusteri_Ad] = useState("");
  const [musteri_soyad, setMusteri_Soyad] = useState("");
  const [kayitBasarili, setKayitBasarili] = useState(false);

  const musteriKaydet = (e) => {
    e.preventDefault();
    const musteri = { musteri_ad, musteri_soyad };

    yeniMusteri(musteri).then((response) => {
      console.log("Kayıt başarılı:", response.data);
      setKayitBasarili(true);
    });
  };

  return (
    <div className="container">
      <br />
      <br />
      <div className="row">
        <div className="card col-md-6 offset-md-3">
          <h2 className="text-center"> Randevu Al </h2>
          <div className="card-body">
            <form>
              <div className="form-group mb-2">
                <label className="form-label">Müşteri Adı :</label>
                <input
                  type="text"
                  placeholder="Adınızı giriniz "
                  autoComplete="off"
                  name="adGir"
                  value={musteri_ad}
                  className="form-control"
                  onChange={(e) => setMusteri_Ad(e.target.value)}
                />
              </div>
              <div className="form-group mb-2">
                <label className="form-label">Müşteri Soyadı :</label>
                <input
                  type="text"
                  placeholder="Soyadınızı giriniz "
                  autoComplete="off"
                  name="soyadGir"
                  value={musteri_soyad}
                  className="form-control"
                  onChange={(e) => setMusteri_Soyad(e.target.value)}
                />
              </div>
              <button className="btn btn-success" onClick={musteriKaydet}>
                {" "}
                Kaydet{" "}
              </button>
            </form>
            {kayitBasarili && (
              <div className="alert alert-success mt-4">
                <h5>Kayıt başarıyla oluşturuldu!</h5>
                <p>
                  <strong>Ad:</strong> {musteri_ad}
                </p>
                <p>
                  <strong>Soyad:</strong> {musteri_soyad}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MusteriEkle;
