package com.project.KuaforRandevuSistemi.Service.impl;

import com.project.KuaforRandevuSistemi.Dto.MusteriDto;
import com.project.KuaforRandevuSistemi.Entity.Musteri;
import com.project.KuaforRandevuSistemi.Mapper.MusteriMapper;
import com.project.KuaforRandevuSistemi.Repository.MusteriRepo;
import com.project.KuaforRandevuSistemi.Service.interfaces.MusteriService;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class MusteriImpl implements MusteriService {
    private MusteriRepo musteriRepo;

    public MusteriImpl(MusteriRepo musteriRepo) {
        this.musteriRepo = musteriRepo;
    }

    @Override
    public List<MusteriDto> getButunMusteri() {
        List<Musteri> musteriList = musteriRepo.findAll();
        return musteriList.stream()
                .map(MusteriMapper::musteriToDto)
                .collect(Collectors.toList());
    }

    @Override
    public MusteriDto yeniMusteri(MusteriDto musteriDto) {
        Musteri musteri = MusteriMapper.dtoToMusteri(musteriDto);
        Musteri yeniKayit = musteriRepo.save(musteri);
        MusteriDto yeniMusteriDto = MusteriMapper.musteriToDto(yeniKayit);
        return yeniMusteriDto;
    }

    public MusteriRepo getMusteriRepo() {
        return musteriRepo;
    }

    public void setMusteriRepo(MusteriRepo musteriRepo) {
        this.musteriRepo = musteriRepo;
    }
}

