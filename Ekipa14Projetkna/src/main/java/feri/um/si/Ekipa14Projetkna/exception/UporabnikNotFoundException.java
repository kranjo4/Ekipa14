package feri.um.si.Ekipa14Projetkna.exception;

public class UporabnikNotFoundException extends RuntimeException{
    public UporabnikNotFoundException (int id){
        super("Uporabnik z id: " + id + " ne obstaja!");
    }
}
