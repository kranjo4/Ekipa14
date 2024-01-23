package feri.um.si.Ekipa14Projetkna.controller;

import feri.um.si.Ekipa14Projetkna.dto.UporabnikMeraDTO;
import feri.um.si.Ekipa14Projetkna.exception.UporabnikNotFoundException;
import feri.um.si.Ekipa14Projetkna.model.Uporabnik;
import feri.um.si.Ekipa14Projetkna.service.UporabnikService;
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
    public Uporabnik add(@RequestBody Uporabnik uporabnik) {
//        uporabnikService.saveUporabnik(uporabnik);
//        return "Nov uporabnik dodan";
        return uporabnikService.saveUporabnik(uporabnik);
    }

    @GetMapping("/uporabnik-mera")
    public List<UporabnikMeraDTO> getAllUporabnikMere() {
        return uporabnikService.getAllUporabnikMere();
    }
//    public List<Uporabnik> getAllUporabniki(){
//        return uporabnikService.getAllUporabniki();
//    };

    @GetMapping("/getAllUporabnik")
    public List<Uporabnik> getAllUporabniki() {
        return uporabnikService.getAllUporabniki();
    }

    ;

    @GetMapping("/getUporabnikById/{id}")
    Uporabnik fetchUporabnikById(@PathVariable int id) {
        Uporabnik uporabnik = uporabnikService.getUporabnikById(id);

        if (uporabnik == null) {
            throw new UporabnikNotFoundException(id);
        }

        return uporabnik;
    }

    @PutMapping("/uporabnik/{id}")
    Uporabnik updateUser(@PathVariable int id, @RequestBody Uporabnik newUporabnik) {
//        return uporabnikService.getUporabnikById(id);
        Uporabnik uporabnik = uporabnikService.getUporabnikById(id);

        if (uporabnik != null) {
//            uporabnik.setId(newUporabnik.getId());
            uporabnik.setIme(newUporabnik.getIme());
            uporabnik.setPriimek(newUporabnik.getPriimek());
            uporabnik.setUsername(newUporabnik.getUsername());
            uporabnik.setMail(newUporabnik.getMail());
            return uporabnikService.saveUporabnik(uporabnik);
        } else {
            throw new UporabnikNotFoundException(id);
        }

    }

    @DeleteMapping("/uporabnik/{id}")
    String deleteUporabnik(@PathVariable int id) {

        Uporabnik uporabnik = uporabnikService.getUporabnikById(id);

        if (uporabnik == null) {
            throw new UporabnikNotFoundException(id);
        }
        uporabnikService.deleteUporabnikById(id);
        return "Uporabnik z id: " + id + " je bil uspešno izbrisan";
    }

    @PostMapping ("/prijava")
    public int preveriPrijavo(@RequestBody Uporabnik user){
        List<Uporabnik> vsiUporabniki = uporabnikService.getAllUporabniki();

        for (Uporabnik uporabnik:
             vsiUporabniki) {
            if(uporabnik.getMail().equals(user.getMail())&&uporabnik.getGeslo().equals(user.getGeslo())){
                return uporabnik.getId();
            }
        }
        return -1;
    }


}
