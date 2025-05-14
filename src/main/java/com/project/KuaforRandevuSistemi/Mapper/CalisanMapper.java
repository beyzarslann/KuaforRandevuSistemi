package com.project.KuaforRandevuSistemi.Mapper;

import com.project.KuaforRandevuSistemi.Dto.CalisanDto;
import com.project.KuaforRandevuSistemi.Entity.Calisan;

public class CalisanMapper {
    public static CalisanDto calisanToDto(Calisan calisan){
        CalisanDto calisanDto = new CalisanDto(
                calisan.getCalisan_id(),
                calisan.getCalisan_ad(),
                calisan.getCalisan_soyad()
        );
        return calisanDto;
    }

    public static Calisan dtoToCalisan(CalisanDto calisanDto){
        Calisan calisan = new Calisan(
                calisanDto.getCalisan_id(),
                calisanDto.getCalisan_ad(),
                calisanDto.getCalisan_soyad()
        );
        return calisan;
    }
}
