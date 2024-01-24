package feri.um.si.Ekipa14Projetkna.service;

import feri.um.si.Ekipa14Projetkna.dto.MeraDTO;
import feri.um.si.Ekipa14Projetkna.dto.TreningDTO;
import feri.um.si.Ekipa14Projetkna.dto.UporabnikMeraDTO;
import feri.um.si.Ekipa14Projetkna.model.Mera;
import feri.um.si.Ekipa14Projetkna.model.Trening;
import feri.um.si.Ekipa14Projetkna.model.Uporabnik;
import feri.um.si.Ekipa14Projetkna.repository.UporabnikRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class UporabnikServiceImpl implements UporabnikService {

    @Autowired
    private UporabnikRepository uporabnnikRepository;

    @Override
    public Uporabnik saveUporabnik(Uporabnik uporabnik) {
        return uporabnnikRepository.save(uporabnik);
    }

    @Override
    public List<Uporabnik> getAllUporabniki() {
        return uporabnnikRepository.findAll();
    }

    @Override
    public List<UporabnikMeraDTO> getAllUporabnikMere(){
        return uporabnnikRepository.findAll()
                .stream()
                .map(this::convertEntityToDto)
                .collect(Collectors.toList());
    }

    private UporabnikMeraDTO convertEntityToDto(Uporabnik uporabnik){
        UporabnikMeraDTO uporabnikMeraDTO = new UporabnikMeraDTO();
        uporabnikMeraDTO.setUporabnikId(uporabnik.getId());
        uporabnikMeraDTO.setUsername(uporabnik.getUsername());


//        uporabnik.getMera().stream().forEach(mera -> {
//            MeraDTO meraDto = new MeraDTO();
//            meraDto.setTezaVKG(mera.getTezaVKG());
//            uporabnikMeraDTO.getMere().add(meraDto);
//        });

        for (Mera m: uporabnik.getMera()) {
            MeraDTO mera = new MeraDTO();
            mera.setTezaVKG(m.getTezaVKG());
            uporabnikMeraDTO.getMere().add(mera);
        }

        for (Trening t: uporabnik.getTrening()){
            TreningDTO trening = new TreningDTO();
            trening.setTrajanjeVMin(t.getTrajanjeVMin());
            uporabnikMeraDTO.getTrenigi().add(trening);
        }


//        for (Mera m: uporabnik.getMera()) {
//            MeraDTO mera = new MeraDTO();
//            mera.setTezaVKG(m.getTezaVKG());
//        }

        return uporabnikMeraDTO;
    }



    public Uporabnik getUporabnikById(int id){
        return uporabnnikRepository.findById(id).orElse(null);
    }

    public Uporabnik deleteUporabnikById(int id){
        Uporabnik uporabnik = uporabnnikRepository.findById(id).orElse(null);

        uporabnnikRepository.deleteById(id);
        return uporabnik;
    }
}
