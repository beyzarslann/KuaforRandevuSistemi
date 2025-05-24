package com.project.KuaforRandevuSistemi.Controller;

import com.project.KuaforRandevuSistemi.Dto.MusteriDto;
import com.project.KuaforRandevuSistemi.Service.interfaces.MusteriService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:5173", allowedHeaders = "*", methods = {RequestMethod.GET, RequestMethod.POST, RequestMethod.PUT, RequestMethod.DELETE})
@RestController
@RequestMapping("/musteri")
public class MusteriController {
    private MusteriService musteriService;

    public MusteriController(MusteriService musteriService) {
        this.musteriService = musteriService;
    }

    @GetMapping("/tumMusteriler")
    public List<MusteriDto> tumMusteriler() {
        return musteriService.getButunMusteri();
    }

    @PostMapping("/yeniMusteri")
    public ResponseEntity<MusteriDto> yeniMusteri(@RequestBody MusteriDto musteriDto) {
        MusteriDto yeniMusteriDto = musteriService.yeniMusteri(musteriDto);
        return new ResponseEntity<>(yeniMusteriDto, HttpStatus.CREATED);
    }

    public MusteriService getMusteriService() {
        return musteriService;
    }

    public void setMusteriService(MusteriService musteriService) {
        this.musteriService = musteriService;
    }
}
