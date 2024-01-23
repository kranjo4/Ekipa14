package feri.um.si.Ekipa14Projetkna.exception;

public class TreningNotFoundException extends RuntimeException{
    public TreningNotFoundException(int id){
        super("Trening z id: " + id + " ne obstaja!");
    }
}
