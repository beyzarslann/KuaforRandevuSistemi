package com.project.KuaforRandevuSistemi.Entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import lombok.Data;

@Entity
@Data
@Table(name = "musteri")
public class Musteri {
    private Long musteri_id;
    private String musteri_ad;
    private String musteri_soyad;


}
