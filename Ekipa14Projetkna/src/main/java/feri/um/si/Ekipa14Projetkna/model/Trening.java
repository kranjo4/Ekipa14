package feri.um.si.Ekipa14Projetkna.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

import java.sql.Time;
import java.text.DecimalFormat;
import java.util.ArrayList;
import java.util.Date;
@Entity
public class Trening {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private Date datum;
    private Time cas;
    private int trajanjeVMin;
    private double volumenVKG;
//    public ArrayList<Set> seznamSetov = new ArrayList<Set>();


    public Trening() {
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public Date getDatum() {
        return datum;
    }

    public void setDatum(Date datum) {
        this.datum = datum;
    }

    public Time getCas() {
        return cas;
    }

    public void setCas(Time cas) {
        this.cas = cas;
    }

    public int getTrajanjeVMin() {
        return trajanjeVMin;
    }

    public void setTrajanjeVMin(int trajanjeVMin) {
        this.trajanjeVMin = trajanjeVMin;
    }

    public double getVolumenVKG() {
        return volumenVKG;
    }

    public void setVolumenVKG(double volumenVKG) {
        this.volumenVKG = volumenVKG;
    }
}
