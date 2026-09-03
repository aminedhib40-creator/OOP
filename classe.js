function Voiture (nombreMaxDePassagers ,carburant ) {
    this.nombreDePassagers = 0
    this.nombreMaxDePassagers=nombreMaxDePassagers
    this.carburant = carburant
    this.kilometrage  = 0

    this.monter = function (){
        if (this.nombreDePassagers>= this.nombreMaxDePassagers){
            return "plus de place"
        }
        this.nombreDePassagers++
    };
    this.descendre = function(){
        if ( this.nombreDePassagers === 0  ){
            return "personne à bord"
        }
        this.nombreDePassagers --
    };
    this.rouler = function(miles){
        if ( this.nombreDePassagers === 0){
          return  "pas de conducteur"
        }
        let carburantDispo = miles/this.nombreDePassagers
        if(this.carburant<carburantDispo){
            return "carburant insuffisant"
        }
        this.kilometrage=this.kilometrage+miles
        this.carburant = this.carburant-carburantDispo
    }
}
let maVoiture=new Voiture(4,10)
maVoiture.monter()
maVoiture.monter()
maVoiture.monter()

maVoiture.descendre()
console.log(maVoiture.nombreDePassagers)
maVoiture.rouler(10)
console.log(maVoiture.carburant)
console.log(maVoiture.kilometrage)

function GrillePain() {
  this.toast = undefined
  this.estEnMarche = false
  this.minuterie = undefined

  this.ajouterToast = function(pain){
    this.toast=pain
  };
  this.ejecter = function(){
    if (this.toast === undefined){
        return "le grille-pain est vide"
    }
     let pain = this.toast;

        this.toast = undefined;

        return pain;
  };
  this.demarrer = function() {

    if (this.toast === undefined) {
        return "ajoutez du pain";
    }

    this.estEnMarche = true;

    this.minuterie = setTimeout(function() {

        console.log("Ding !");

        this.toast = "toast (grillé)";
        this.estEnMarche = false;

    }.bind(this), 3000);
};
   this.arreter = function() {

        clearTimeout(this.minuterie);

        this.estEnMarche = false;
    };

}
let monGrillePain = new GrillePain();

console.log(monGrillePain);

console.log(monGrillePain.demarrer());
// "ajoutez du pain"

monGrillePain.ajouterToast("pain");

console.log(monGrillePain);

monGrillePain.demarrer();

console.log(monGrillePain.estEnMarche);
// true

setTimeout(function() {
    console.log(monGrillePain.toast);
}, 4000);