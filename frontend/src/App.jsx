import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Listele from "./bilesenler/Listele";
import Navbar from "./bilesenler/Navbar";
import MusteriEkle from "./bilesenler/MusteriEkle";
import Anasayfa from "./sayfalar/Anasayfa";
import Admin from "./sayfalar/Admin";
import Hakkimizda from "./sayfalar/Hakkimizda";
import UzmanEkip from "./sayfalar/UzmanEkip";
import Hizmetler from "./sayfalar/Hizmetler";
import Iletisim from "./sayfalar/Iletisim";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Anasayfa />}></Route>
          <Route path="/admin" element={<Admin />}></Route>
          <Route path="/musteri/tumMusteriler" element={<Listele />}></Route>
          <Route path="/musteri/yeniMusteri" element={<MusteriEkle />}></Route>
          <Route path="/Hakkimizda" element={<Hakkimizda />}></Route>
          <Route path="/UzmanEkip" element={<UzmanEkip />}></Route>
          <Route path="/Hizmetler" element={<Hizmetler />}></Route>
          <Route path="/Iletisim" element={<Iletisim />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
