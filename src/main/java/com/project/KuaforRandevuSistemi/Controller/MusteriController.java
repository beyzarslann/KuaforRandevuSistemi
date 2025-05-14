package com.project.KuaforRandevuSistemi.Controller;

import com.project.KuaforRandevuSistemi.Dto.MusteriDto;
import com.project.KuaforRandevuSistemi.Service.interfaces.MusteriService;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/musteri")
public class MusteriController {
    private MusteriService musteriService;

    @GetMapping("/tumMusteriler")
    public List<MusteriDto> tumMusteriler() {
        return musteriService.getButunMusteri();
    }




}
