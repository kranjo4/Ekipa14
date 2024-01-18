package feri.um.si.Ekipa14Projetkna.dto;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class UporabnikMeraDTO {
    private int uporabnikId;
    private String username;
    private int tezaVKG;
    private int visinaVcm;
    private int starost;

    public UporabnikMeraDTO() {
    }

    public int getUporabnikId() {
        return uporabnikId;
    }

    public void setUporabnikId(int uporabnikId) {
        this.uporabnikId = uporabnikId;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public int getTezaVKG() {
        return tezaVKG;
    }

    public void setTezaVKG(int tezaVKG) {
        this.tezaVKG = tezaVKG;
    }

    public int getVisinaVcm() {
        return visinaVcm;
    }

    public void setVisinaVcm(int visinaVcm) {
        this.visinaVcm = visinaVcm;
    }

    public int getStarost() {
        return starost;
    }

    public void setStarost(int starost) {
        this.starost = starost;
    }
}
