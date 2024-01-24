package feri.um.si.Ekipa14Projetkna.model;

import jakarta.persistence.*;
import lombok.Data;

import java.util.Date;


@Entity
@Data
public class Mera{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private int tezaVKG;
    private int visinaVcm;
    private int starost;
    private Date datum_vnosa;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "uporabnik_id")
    private Uporabnik uporabnik;

    public Uporabnik getUporabnik() {
        return uporabnik;
    }

    public void setUporabnik(Uporabnik uporabnik) {
        this.uporabnik = uporabnik;
    }

    public Mera(){
    }

    public int getTezaVKG(){
        return tezaVKG;
    }

    public void setTezaVKG(int tezaVKG){
        this.tezaVKG=tezaVKG;
    }

    public int getVisinaVcm(){
        return visinaVcm;
    }

    public void setVisinaVcm(int visinaVcm){
        this.visinaVcm=visinaVcm;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getStarost() {
        return starost;
    }

    public void setStarost(int starost) {
        this.starost = starost;
    }

    public Date getDatum_vnosa() {
        return datum_vnosa;
    }

    public void setDatum_vnosa(Date datum_vnosa) {
        this.datum_vnosa = datum_vnosa;
    }

    @Override
    public String toString() {
        return "Mera{" +
                "id=" + id +
                ", tezaVKG=" + tezaVKG +
                ", visinaVcm=" + visinaVcm +
                ", starost=" + starost +
                ", datum_vnosa=" + datum_vnosa +
                ", uporabnik=" + uporabnik +
                '}';
    }
}
