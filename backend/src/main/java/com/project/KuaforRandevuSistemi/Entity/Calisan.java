package com.project.KuaforRandevuSistemi.Entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import lombok.Data;

@Entity
@Data
@Table(name = "calisan")
public class Calisan {
    private Long calisan_id;
    private String calisan_ad;
    private String calisan_soyad;
}
