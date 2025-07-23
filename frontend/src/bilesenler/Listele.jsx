import React, { useEffect, useState } from "react";
import { listeMusteriler } from "../service/MusteriService";
import { useNavigate } from "react-router-dom";

const Listele = () => {
  const [musteriler, setMusteriler] = useState([]);
  const navigator = useNavigate();

  useEffect(() => {
    listeMusteriler()
      .then((response) => {
        setMusteriler(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  function yeniMusteri() {
    navigator("/musteri/yeniMusteri");
  }

  return (
    <div className="container">
      <h1 className="text-center">Müşteri Listesi</h1>
      <button className="btn btn-outline-dark mb-2" onClick={yeniMusteri}>
        Musteri Ekle
      </button>
      <table className="table table-striped table-bordered">
        <thead>
          <tr>
            <td>Id</td>
            <td>Ad</td>
            <td>Soyad</td>
          </tr>
        </thead>
        <tbody>
          {musteriler.map((deger) => (
            <tr key={deger.musteri_id}>
              <td>{deger.musteri_id}</td>
              <td>{deger.musteri_ad}</td>
              <td>{deger.musteri_soyad}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Listele;
