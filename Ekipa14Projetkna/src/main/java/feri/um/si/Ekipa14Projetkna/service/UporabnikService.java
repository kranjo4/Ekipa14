package feri.um.si.Ekipa14Projetkna.service;

import feri.um.si.Ekipa14Projetkna.dto.UporabnikMeraDTO;
import feri.um.si.Ekipa14Projetkna.model.Uporabnik;

import java.util.List;

public interface UporabnikService {
    public Uporabnik saveUporabnik(Uporabnik uporabnik);
    public List<Uporabnik> getAllUporabniki();
    public List<UporabnikMeraDTO> getAllUporabnikMere();
    public Uporabnik getUporabnikById(int id);
    public Uporabnik deleteUporabnikById(int id);
}
