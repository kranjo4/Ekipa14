package feri.um.si.Ekipa14Projetkna.service;

import feri.um.si.Ekipa14Projetkna.dto.UporabnikMeraDTO;
import feri.um.si.Ekipa14Projetkna.model.Trening;
import feri.um.si.Ekipa14Projetkna.model.Uporabnik;

import java.util.List;

public interface TreningService {
    public Trening saveTrening(Trening trening);
    public List<Trening> getTreningi();
    public Trening getTreningById(int id);
    public Trening deleteTreningById(int id);
}
