package feri.um.si.Ekipa14Projetkna.service;

import feri.um.si.Ekipa14Projetkna.dto.UporabnikMeraDTO;
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
        uporabnikMeraDTO.setTezaVKG(uporabnik.getMERA().getTezaVKG());
        uporabnikMeraDTO.setVisinaVcm(uporabnik.getMERA().getVisinaVcm());
        uporabnikMeraDTO.setStarost(uporabnik.getMERA().getStarost());
        return uporabnikMeraDTO;
    }
}
