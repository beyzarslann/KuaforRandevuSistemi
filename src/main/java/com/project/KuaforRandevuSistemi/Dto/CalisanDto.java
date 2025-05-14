package com.project.KuaforRandevuSistemi.Dto;

public class CalisanDto {
    private Long calisan_id;
    private String calisan_ad;
    private String calisan_soyad;

    public CalisanDto() {
    }

    public CalisanDto(Long calisan_id, String calisan_ad, String calisan_soyad) {
        this.calisan_id = calisan_id;
        this.calisan_ad = calisan_ad;
        this.calisan_soyad = calisan_soyad;
    }

    public Long getCalisan_id() {
        return calisan_id;
    }

    public void setCalisan_id(Long calisan_id) {
        this.calisan_id = calisan_id;
    }

    public String getCalisan_ad() {
        return calisan_ad;
    }

    public void setCalisan_ad(String calisan_ad) {
        this.calisan_ad = calisan_ad;
    }

    public String getCalisan_soyad() {
        return calisan_soyad;
    }

    public void setCalisan_soyad(String calisan_soyad) {
        this.calisan_soyad = calisan_soyad;
    }

}
