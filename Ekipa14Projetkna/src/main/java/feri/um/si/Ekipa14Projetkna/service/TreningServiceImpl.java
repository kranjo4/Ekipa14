package feri.um.si.Ekipa14Projetkna.service;

import feri.um.si.Ekipa14Projetkna.model.Trening;
import feri.um.si.Ekipa14Projetkna.repository.TreningRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Set;

@Service
public class TreningServiceImpl implements TreningService {

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

    @Override
    public List<Trening> getTreningiParam(Set<Integer> trajanjeVMin, Set<Integer> volumenVKG) {

        List<Trening> treningList = new ArrayList<>();

        if (trajanjeVMin == null){
            treningRepository.findAll()
                    .forEach(trening -> treningList.add(trening));
        }else{
            return treningRepository.findAllByTrajanjeInAndVolumenIn(trajanjeVMin, volumenVKG);
        }
        return treningList;
    }
}
