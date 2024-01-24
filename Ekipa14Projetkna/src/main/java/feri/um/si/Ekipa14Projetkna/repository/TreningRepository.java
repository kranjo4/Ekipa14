package feri.um.si.Ekipa14Projetkna.repository;

import feri.um.si.Ekipa14Projetkna.model.Trening;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Set;

@Repository
public interface TreningRepository extends JpaRepository<Trening, Integer> {
    @Query("SELECT t FROM Trening t WHERE t.trajanjeVMin > :trajanjeVMin AND t.volumenVKG > :volumenVKG")
    List<Trening> findAllByTrajanjeInAndVolumenIn(@Param("trajanjeVMin") Integer trajanjeVMin, @Param("volumenVKG") Double volumenVKG);
}

// Uporabnik u WHERE u.id = t.uporabnik_id AND


