function Figura(nazwa){
    this.nazwa = nazwa;
}
function Czworokat (typ_czworokata, dlugosci_bokow, nazwa){
    Figura.call(this, nazwa);
    this.typ_czworokata = typ_czworokata;
    this.dlugosci_bokow = dlugosci_bokow;

}
function Prostokat(a,b,typ_czworokata, dlugosci_bokow, nazwa){
    Czworokat.call(this,typ_czworokata, dlugosci_bokow);
    this.a = a;
    this.b = b;
    this.podaj_pole = function(){
        return this.a*this.b;
    }
    this.podaj_obwod = function(){
        return 2*(this.a + this.b);
    }
}

Czworokat.prototype = Object.create(Figura.prototype);
Prostokat.prototype = Object.create(Czworokat.prototype);

var test = new Prostokat(4,5);
console.log(test.podaj_pole())
console.log(test.podaj_obwod())