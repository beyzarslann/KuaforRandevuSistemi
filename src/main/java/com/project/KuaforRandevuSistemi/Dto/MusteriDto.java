package com.project.KuaforRandevuSistemi.Dto;

public class MusteriDto {
    private Long musteri_id;
    private String musteri_ad;
    private String musteri_soyad;

    public MusteriDto() {
    }

    public MusteriDto(Long musteri_id, String musteri_ad, String musteri_soyad) {
        this.musteri_id = musteri_id;
        this.musteri_ad = musteri_ad;
        this.musteri_soyad = musteri_soyad;
    }

    public Long getMusteri_id() {
        return musteri_id;
    }

    public void setMusteri_id(Long musteri_id) {
        this.musteri_id = musteri_id;
    }

    public String getMusteri_ad() {
        return musteri_ad;
    }

    public void setMusteri_ad(String musteri_ad) {
        this.musteri_ad = musteri_ad;
    }

    public String getMusteri_soyad() {
        return musteri_soyad;
    }

    public void setMusteri_soyad(String musteri_soyad) {
        this.musteri_soyad = musteri_soyad;
    }
}
