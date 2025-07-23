import axios from "axios";

const REST_API_ANA_URL = "http://localhost:8080/musteri/tumMusteriler";
const EKLE_API_URL = "http://localhost:8080/musteri/yeniMusteri";
export const listeMusteriler = () => axios.get(REST_API_ANA_URL);
export const yeniMusteri = (yeniMusteri) =>
  axios.post(EKLE_API_URL, yeniMusteri);
