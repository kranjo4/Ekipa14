package feri.um.si.Ekipa14Projetkna.repository;

import feri.um.si.Ekipa14Projetkna.model.Trening;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TreningRepository extends JpaRepository <Trening, Integer>{
}
