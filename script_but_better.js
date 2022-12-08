class Spill{ // Declaring the game class
    constructor(ovreGrense){
        this.vinnTekst = document.querySelector("#vinn-tekst");
        this.alleKastContainer = document.querySelector("#allekast-container");
        this.ovreGrense = ovreGrense;

        this.alleKast = []
    }
    genererElement(className, innerText){
        let element = document.createElement("div");
        element.className = className;
        element.innerHTML = innerText;
        return element
    }
    vunnet(spiller){
        this.vinnTekst.innerHTML = `Gratulerer, spiller ${spiller} har vunnet!`
        this.alleKastTekst.innerHTML = this.alleKast;
    }
    reset(){
        this.vinnTekst.innerHTML = "";
        this.alleKastContainer.innerHTML = "";
        p1.resetSpiller();
        p2.resetSpiller();
    }
}
class Spiller extends Spill{   // Declaring the player class
    constructor(spillerNO){
        super();
        this.spillerNO = spillerNO;
        this.poeng = 0;

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

            if (this.spillerNO == 1) {
                this.alleKastContainer.appendChild(this.genererElement("spiller1", this.alleKast[this.alleKast.length+1]));
            }
            else if (this.spillerNO == 2) {
                this.alleKastContainer.appendChild(this.genererElement("spiller2", this.alleKast[this.alleKast.length+1]));
                }

            if (this.poeng >= 50) this.vunnet(this.spillerNO);
        }
    }
    resetSpiller(){
        this.poeng = 0;
        this.sumTekst.innerHTML = "0";
        this.addTekst.innerHTML = "0";
    }
}
    // Initializing the players
p1 = new Spiller(1);
p2 = new Spiller(2);