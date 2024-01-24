package feri.um.si.Ekipa14Projetkna.controller;

import feri.um.si.Ekipa14Projetkna.exception.MeraNotFoundException;
import feri.um.si.Ekipa14Projetkna.exception.UporabnikNotFoundException;
import feri.um.si.Ekipa14Projetkna.model.Mera;

import feri.um.si.Ekipa14Projetkna.model.Uporabnik;
import feri.um.si.Ekipa14Projetkna.service.MeraService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;


@CrossOrigin(origins = "http://localhost:3000")
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

    @PutMapping("/updateMera/{id}")
    public Mera update(@PathVariable int id, @RequestBody Mera novaMera){
        Mera staraMera = meraService.getMeraById(id);



        if (staraMera != null) {
            staraMera.setTezaVKG(novaMera.getTezaVKG());
            staraMera.setVisinaVcm(novaMera.getVisinaVcm());
            staraMera.setStarost(novaMera.getStarost());
            staraMera.setDatum_vnosa(novaMera.getDatum_vnosa());
            return meraService.saveMera(staraMera);
        } else {
            throw new MeraNotFoundException(id);
        }
    }

    @GetMapping("/getMU/{id}")
    public List<Mera> najdiMereUporabnika(@PathVariable int id){
        List<Mera> vseMere = meraService.findAll();
        return vseMere.stream()
                .filter(mera -> mera.getUporabnik().getId() == id)
                .collect(Collectors.toList());
    };

    @DeleteMapping("/delete/{id}")
    String deleteMera(@PathVariable int id) {

        Mera mera = meraService.getMeraById(id);

        if (mera == null) {
            throw new MeraNotFoundException(id);
        }
        meraService.deleteMeraById(id);
        return "Mera z id: " + id + " je bila uspešno izbrisana";
    }

    @GetMapping("/getMUT/{id}")
    public List<Mera> najdiMereUporabnikaInTeza(@PathVariable int id,@ RequestParam(required = false, defaultValue = "0") int tezaVec, @RequestParam(required = false, defaultValue = "1000") int tezaMajn){
        List<Mera> vseMere = meraService.findAll();
        return vseMere.stream()
                .filter(mera -> mera.getUporabnik().getId() == id && mera.getTezaVKG() >= tezaVec &&   mera.getTezaVKG() <= tezaMajn)
                .collect(Collectors.toList());
    };

}
