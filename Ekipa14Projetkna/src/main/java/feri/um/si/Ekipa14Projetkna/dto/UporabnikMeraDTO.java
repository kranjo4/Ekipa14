package feri.um.si.Ekipa14Projetkna.dto;

import lombok.AllArgsConstructor;
import lombok.Data;

import java.util.ArrayList;
import java.util.List;

@Data
@AllArgsConstructor
public class UporabnikMeraDTO {
    private int uporabnikId;
    private String username;

    List<MeraDTO> mere = new ArrayList<>();
    List<TreningDTO> trenigi = new ArrayList<>();;

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
    public List<MeraDTO> getMere() {
        return mere;
    }

    public void setMere(List<MeraDTO> mere) {
        this.mere = mere;
    }

    public List<TreningDTO> getTrenigi() {
        return trenigi;
    }

    public void setTrenigi(List<TreningDTO> trenigi) {
        this.trenigi = trenigi;
    }


}
