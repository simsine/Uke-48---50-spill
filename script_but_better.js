class Spill{ // Declaring the game class
    constructor(ovreGrense){
        this.vinnTekst = document.querySelector("#vinn-tekst");
        this.ovreGrense = ovreGrense;
    }
    vunnet(spiller){
        this.vinnTekst.innerHTML = `Gratulerer, spiller ${spiller} har vunnet!`
    }
    reset(){
        this.vinnTekst.innerHTML = "";
        p1.resetSpiller();
        p2.resetSpiller();
    }
}
class Spiller extends Spill{   // Declaring the player class
    constructor(spillerNO){
        super();
        this.spillerNO = spillerNO;
        this.poeng = 0;
        this.alleKast = [];

        this.sumTekst = document.querySelector(`#spiller${spillerNO}-sum`);
        this.addTekst = document.querySelector(`#spiller${spillerNO}-add`);
    }
    kastTerning(){
        if (p1.poeng < 50 && p2.poeng < 50) {
	        let tilfeldigKast = Math.floor(Math.random() * 6 + 1);
	        this.poeng += tilfeldigKast;
	        this.alleKast.push(tilfeldigKast);
	
	        this.addTekst.innerHTML = tilfeldigKast;
	        this.sumTekst.innerHTML = this.poeng;

            if (this.poeng >= 50) this.vunnet(this.spillerNO);
        }
    }
    resetSpiller(){
        this.poeng = 0;
        this.alleKast = [];
        this.sumTekst.innerHTML = "0";
        this.addTekst.innerHTML = "0";
    }
}
    // Initializing the players
p1 = new Spiller(1);
p2 = new Spiller(2);