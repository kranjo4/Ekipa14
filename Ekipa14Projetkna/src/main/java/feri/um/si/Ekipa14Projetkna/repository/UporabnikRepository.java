package feri.um.si.Ekipa14Projetkna.repository;

import feri.um.si.Ekipa14Projetkna.model.Uporabnik;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UporabnikRepository extends JpaRepository <Uporabnik, Integer>{
}
