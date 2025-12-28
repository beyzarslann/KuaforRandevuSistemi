import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { MdMailOutline } from "react-icons/md";
import { IoMdNavigate } from "react-icons/io";
import { CiClock2 } from "react-icons/ci";

const Iletisim = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Şimdilik sadece UI. İstersen backend'e POST da bağlarız.
    alert("Mesajınız alındı! ✨");
  };

  return (
    <div className="container py-5">
      <div className="row g-4 align-items-start">
        {/* SOL: Görsel (About'taki gibi kart) */}
        <div className="col-12 col-lg-5">
          <div className="card border-0 shadow-sm overflow-hidden">
            <img
              src="https://images.pexels.com/photos/3992870/pexels-photo-3992870.jpeg?_gl=1*7j48m*_ga*MTgwMzU3NzM3Ni4xNzYzNjYyMzI3*_ga_8JE65Q40S6*czE3NjY5MDg1NTYkbzQkZzEkdDE3NjY5MDg2MjckajUxJGwwJGgw"
              alt="Kuaför"
              className="img-fluid"
              style={{ height: "560px", objectFit: "cover" }}
            />
          </div>
        </div>

        {/* SAĞ: İçerik */}
        <div className="col-12 col-lg-7">
          <h2 className="fw-bold mb-2" style={{ color: "#9a6a2f" }}>
            Bize Ulaşın
          </h2>
          <p className="text-secondary mb-4">
            Randevu almak, öneride bulunmak ya da sadece merhaba demek için
            bizimle iletişime geçin.
          </p>

          <div className="row g-4">
            {/* FORM */}
            <div className="col-12 col-xl-7">
              <div className="card border-0 shadow-sm">
                <div className="card-body p-4">
                  <h5 className="fw-semibold mb-3">İletişim Formu</h5>

                  <form onSubmit={handleSubmit} autoComplete="off">
                    <div className="row g-3">
                      <div className="col-12 col-md-6">
                        <label className="form-label">Ad</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Adınız"
                          autoComplete="off"
                          required
                        />
                      </div>

                      <div className="col-12 col-md-6">
                        <label className="form-label">Soyad</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Soyadınız"
                          autoComplete="off"
                          required
                        />
                      </div>

                      <div className="col-12">
                        <label className="form-label">E-posta</label>
                        <input
                          type="email"
                          className="form-control"
                          placeholder="ornek@mail.com"
                          autoComplete="off"
                          required
                        />
                      </div>

                      <div className="col-12">
                        <label className="form-label">Mesaj</label>
                        <textarea
                          className="form-control"
                          rows="5"
                          placeholder="Mesajınızı yazın..."
                          autoComplete="off"
                          required
                        />
                      </div>

                      <div className="col-12">
                        <button
                          className="btn w-100 text-white fw-semibold"
                          style={{ backgroundColor: "#9a6a2f" }}
                        >
                          Gönder
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>

            {/* İLETİŞİM BİLGİLERİ */}
            <div className="col-12 col-xl-5">
              <div className="card border-0 shadow-sm">
                <div className="card-body p-4">
                  <h5 className="fw-semibold mb-3">İletişim Bilgileri</h5>

                  <div className="d-flex align-items-start gap-3 mb-3">
                    <FaPhoneAlt
                      size={18}
                      className="mt-1"
                      style={{ color: "#9a6a2f" }}
                    />
                    <div>
                      <div className="text-secondary small">Telefon</div>
                      <div className="fw-semibold">0555 555 55 55</div>
                    </div>
                  </div>

                  <div className="d-flex align-items-start gap-3 mb-3">
                    <MdMailOutline
                      size={20}
                      className="mt-1"
                      style={{ color: "#9a6a2f" }}
                    />
                    <div>
                      <div className="text-secondary small">E-posta</div>
                      <div className="fw-semibold">info@kuafor.com</div>
                    </div>
                  </div>

                  <div className="d-flex align-items-start gap-3 mb-3">
                    <IoMdNavigate
                      size={20}
                      className="mt-1"
                      style={{ color: "#9a6a2f" }}
                    />
                    <div>
                      <div className="text-secondary small">Adres</div>
                      <div className="fw-semibold">Yenimahalle / Ankara</div>
                    </div>
                  </div>

                  <div className="d-flex align-items-start gap-3 mb-4">
                    <CiClock2
                      size={20}
                      className="mt-1"
                      style={{ color: "#9a6a2f" }}
                    />
                    <div>
                      <div className="text-secondary small">
                        Çalışma Saatleri
                      </div>
                      <div className="fw-semibold">
                        Pazartesi - Cumartesi 09:00 - 19:00
                      </div>
                    </div>
                  </div>

                  {/* HARİTA */}
                  <div className="ratio ratio-16x9 rounded overflow-hidden">
                    <iframe
                      title="map"
                      src="https://www.google.com/maps?q=Yenimahalle%20Ankara&output=embed"
                      loading="lazy"
                      style={{ border: 0 }}
                      allowFullScreen
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Iletisim;
