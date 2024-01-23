package feri.um.si.Ekipa14Projetkna.service;

import feri.um.si.Ekipa14Projetkna.model.Trening;
import feri.um.si.Ekipa14Projetkna.repository.TreningRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TreningServiceImpl implements TreningService{

    @Autowired
    private TreningRepository treningRepository;
    @Override
    public Trening saveTrening(Trening trening) {
        return treningRepository.save(trening);
    }

    @Override
    public List<Trening> getTreningi() {
        return treningRepository.findAll();
    }

    @Override
    public Trening getTreningById(int id) {
        return treningRepository.findById(id).orElse(null);
    }

    @Override
    public Trening deleteTreningById(int id) {
        Trening trening = treningRepository.findById(id).orElse(null);

        treningRepository.deleteById(id);
        return trening;
    }
}
