package feri.um.si.Ekipa14Projetkna.controller;

import feri.um.si.Ekipa14Projetkna.model.Mera;

import feri.um.si.Ekipa14Projetkna.service.MeraService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/mera")
public class MeraController {

    @Autowired
    private MeraService meraService;

    @GetMapping("/getAllMera")
    public List<Mera> findAll(){
        return meraService.findAll();
    };

    @PostMapping("/addMera")
    public Mera add(@RequestBody Mera mera){
        return meraService.saveMera(mera);
//        meraService.saveMera(mera);
//        return "Nova mera dodana";
    }

}
