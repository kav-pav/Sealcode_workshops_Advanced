class Figura {
    constructor(nazwa){
        this.nazwa = nazwa;
    }
}
class Czworokat extends Figura{
    constructor(nazwa, typ_czworokata, dlugosci_bokow){
        super(nazwa);
        this.typ_czworokata = typ_czworokata;
        this.dlugosci_bokow = dlugosci_bokow;       
    }

}
class Prostokat extends Czworokat{
    constructor(nazwa, typ_czworokata, dlugosci_bokow){
        super(nazwa, typ_czworokata, dlugosci_bokow);
    }
    podaj_pole(){
        // let a = this.dlugosci_bokow.slice(0,1);
        // let b = this.dlugosci_bokow.slice(2,3);
        // return a*b;
    }
    podaj_obwod(){
        // let a = this.dlugosci_bokow.slice(0,1);
        // let b = this.dlugosci_bokow.slice(2,3);
        // return 2*(a+b);
    }
}
let kwadrat1 = new Prostokat({
    nazwa: "kwadratMietek",
    typ_czworokata: "kwadrat",
    dlugosci_bokow: "5x8"});
console.log(kwadrat1);

//  var string = "5x8";
//  var res = string.slice(0,1);
//  var tes = string.slice(2,3);
//  console.log(tes);
//  console.log(res);