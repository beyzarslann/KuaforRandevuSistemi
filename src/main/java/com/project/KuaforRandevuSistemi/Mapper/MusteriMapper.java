package com.project.KuaforRandevuSistemi.Mapper;

import com.project.KuaforRandevuSistemi.Dto.MusteriDto;
import com.project.KuaforRandevuSistemi.Entity.Musteri;

public class MusteriMapper {
    public static MusteriDto musteriToDto(Musteri musteri){
        MusteriDto musteriDto = new MusteriDto(
                musteri.getMusteri_id(),
                musteri.getMusteri_ad(),
                musteri.getMusteri_soyad()
        );
        return musteriDto;
    }

    public static Musteri dtoToMusteri(MusteriDto musteriDto){
        Musteri musteri = new Musteri(
                musteriDto.getMusteri_id(),
                musteriDto.getMusteri_ad(),
                musteriDto.getMusteri_soyad()
        );
        return musteri;
    }
}
