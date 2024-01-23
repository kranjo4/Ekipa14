package feri.um.si.Ekipa14Projetkna.exception;

public class MeraNotFoundException extends RuntimeException{
    public MeraNotFoundException (int id){
        super("Mera z id: " + id + " ne obstaja!");
    }
}