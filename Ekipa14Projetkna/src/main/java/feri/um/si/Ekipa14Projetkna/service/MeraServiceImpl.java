package feri.um.si.Ekipa14Projetkna.service;

import feri.um.si.Ekipa14Projetkna.model.Mera;
import feri.um.si.Ekipa14Projetkna.repository.MeraRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MeraServiceImpl implements MeraService {

    @Autowired
    private MeraRepository meraRepository;

    @Override
    public Mera saveMera(Mera mera) {
        return meraRepository.save(mera);
    }

    @Override
    public List<Mera> findAll() {
        return meraRepository.findAll();
    }

    @Override
    public Mera getMeraById(int id) {
        return meraRepository.findById(id).orElse(null);
    }

}
