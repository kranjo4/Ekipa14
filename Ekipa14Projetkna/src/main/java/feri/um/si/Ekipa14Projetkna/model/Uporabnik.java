package feri.um.si.Ekipa14Projetkna.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.CascadeType;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToMany;

import jakarta.persistence.*;

import java.util.ArrayList;
import java.util.List;

@Entity
public class Uporabnik {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String ime;
    private String priimek;
    private String username;
    private String mail;
    private String geslo;
    //    public ArrayList<Mera> seznamMer = new ArrayList<Mera>();
//    public ArrayList<Trening> seznamTreningov = new ArrayList<Trening>();
//    public ArrayList<Rutina> seznamRutin = new ArrayList<Rutina>();

    @JsonIgnore
    @OneToMany(mappedBy = "uporabnik", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Mera> mera = new ArrayList<>();

    public Mera getMERA() {
        if (!mera.isEmpty()) {
            return mera.get(0);
        }
        return null;
    }

    public List<Mera> getMera() {
        return mera;
    }

    public void setMera(List<Mera> mera) {
        this.mera = mera;
    }

    public Uporabnik() {
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getIme() {
        return ime;
    }

    public void setIme(String ime) {
        this.ime = ime;
    }

    public String getPriimek() {
        return priimek;
    }

    public void setPriimek(String priimek) {
        this.priimek = priimek;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getMail() {
        return mail;
    }

    public void setMail(String mail) {
        this.mail = mail;
    }

    public String getGeslo() {
        return geslo;
    }

    public void setGeslo(String geslo) {
        this.geslo = geslo;
    }
}