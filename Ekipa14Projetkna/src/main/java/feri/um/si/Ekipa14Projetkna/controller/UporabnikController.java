package feri.um.si.Ekipa14Projetkna.controller;

import feri.um.si.Ekipa14Projetkna.dto.UporabnikMeraDTO;
import feri.um.si.Ekipa14Projetkna.exception.UporbnikNotFoundException;
import feri.um.si.Ekipa14Projetkna.model.Uporabnik;
import feri.um.si.Ekipa14Projetkna.service.UporabnikService;
import jakarta.persistence.CascadeType;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToMany;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/uporabnik")
@CrossOrigin("http://localhost:3000")
public class UporabnikController {
    @Autowired
    private UporabnikService uporabnikService;

    @PostMapping("/addUporabnik")
    public Uporabnik add(@RequestBody Uporabnik uporabnik){
//        uporabnikService.saveUporabnik(uporabnik);
//        return "Nov uporabnik dodan";
        return uporabnikService.saveUporabnik(uporabnik);
    }

    @GetMapping("/uporabnik-mera")
    public List<UporabnikMeraDTO> getAllUporabnikMere(){
        return uporabnikService.getAllUporabnikMere();
    }
//    public List<Uporabnik> getAllUporabniki(){
//        return uporabnikService.getAllUporabniki();
//    };

    @GetMapping("/getAllUporabnik")
    public List<Uporabnik> getAllUporabniki(){
        return uporabnikService.getAllUporabniki();
    };

    @GetMapping("/getUporabnikById/{id}")
    Uporabnik fetchUporabnikById(@PathVariable int id){
        return uporabnikService.getUporabnikById(id);
    }


}
