package feri.um.si.Ekipa14Projetkna.repository;

import feri.um.si.Ekipa14Projetkna.model.Mera;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MeraRepository extends JpaRepository <Mera, Integer> {
}
