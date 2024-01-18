package feri.um.si.Ekipa14Projetkna.service;

import feri.um.si.Ekipa14Projetkna.model.Mera;

import java.util.List;

public interface MeraService {

    public Mera saveMera (Mera mera);
    public List<Mera> findAll();

}
