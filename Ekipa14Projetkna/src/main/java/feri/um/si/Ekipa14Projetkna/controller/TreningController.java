package feri.um.si.Ekipa14Projetkna.controller;

import feri.um.si.Ekipa14Projetkna.exception.MeraNotFoundException;
import feri.um.si.Ekipa14Projetkna.exception.TreningNotFoundException;
import feri.um.si.Ekipa14Projetkna.exception.UporabnikNotFoundException;
import feri.um.si.Ekipa14Projetkna.model.Mera;
import feri.um.si.Ekipa14Projetkna.model.Trening;
import feri.um.si.Ekipa14Projetkna.service.TreningService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/trening")
@CrossOrigin("http://localhost:3000")
public class TreningController {

    @Autowired
    private TreningService treningService;

    @PostMapping("/trening")
    public Trening add(@RequestBody Trening trening){
        return  treningService.saveTrening(trening);
    }
    @GetMapping("/trening")
    public List<Trening> getTreningi(){
        return treningService.getTreningi();
    }

    @GetMapping("/trening/{id}")
    Trening fetchTreningById(@PathVariable int id){
        Trening trening = treningService.getTreningById(id);

        if(trening == null){
            throw new TreningNotFoundException(id);
        }
        return trening;
    }

    @PutMapping("/trening/{id}")
    Trening updateTrening(@PathVariable int id, @RequestBody Trening newTrening){
        Trening trening = treningService.getTreningById(id);

        if(trening != null){
            trening.setCas(newTrening.getCas());
            trening.setDatum(newTrening.getDatum());
            trening.setTrajanjeVMin(newTrening.getTrajanjeVMin());
            trening.setVolumenVKG(newTrening.getVolumenVKG());
            return treningService.saveTrening(trening);
        } else {
            throw new TreningNotFoundException(id);
        }
    }

    @DeleteMapping("/trening/{id}")
    String deleteUporabnik(@PathVariable int id){
        Trening trening = treningService.getTreningById(id);

        if(trening == null){
            throw new TreningNotFoundException(id);
        }
        treningService.deleteTreningById(id);
        return "Trening z id: " + id + " je bil uspešno izbrisan";
    }

    @GetMapping("/treningg")
    public List<Trening> getTrening(
            @RequestParam(value = "trajanjeVMin", required = false)Integer trajanjeVMin,
            @RequestParam(value = "volumenVKG", required = false)Double volumenVKG){

            return treningService.getTreningiParam(trajanjeVMin, volumenVKG);
    }

    @GetMapping("/getTrening/{id}")
    public List<Trening> najdiMereUporabnika(@PathVariable int id){
        List<Trening> vsiTreningi = treningService.getTreningi();
        return vsiTreningi.stream()
                .filter(trening -> trening.getUporabnik().getId() == id)
                .collect(Collectors.toList());
    };

//    @DeleteMapping("/delete/{id}")
//    String deleteTrening(@PathVariable int id) {
//
//        Trening trening = treningService.getTreningById(id);
//
//        if (trening == null) {
//            throw new TreningNotFoundException(id);
//        }
//        treningService.deleteTreningById(id);
//        return "Trening z id: " + id + " je bil uspešno izbrisana";
//    }


}
