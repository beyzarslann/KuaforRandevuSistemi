package com.project.KuaforRandevuSistemi.Entity;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
@Table(name = "musteri")
public class Musteri {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long musteri_id;
    private String musteri_ad;
    private String musteri_soyad;


}
