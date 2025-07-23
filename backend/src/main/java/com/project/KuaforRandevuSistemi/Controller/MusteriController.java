package com.project.KuaforRandevuSistemi.Controller;

import com.project.KuaforRandevuSistemi.Entity.Musteri;
import com.project.KuaforRandevuSistemi.Service.interfaces.MusteriService;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/")
public class MusteriController {
    private MusteriService musteriService;



}
