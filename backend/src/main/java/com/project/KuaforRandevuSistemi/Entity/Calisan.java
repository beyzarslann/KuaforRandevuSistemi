package com.project.KuaforRandevuSistemi.Entity;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
@Table(name = "calisan")
public class Calisan {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long calisan_id;
    private String calisan_ad;
    private String calisan_soyad;
}
