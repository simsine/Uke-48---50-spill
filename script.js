const spiller1Knapp = document.querySelector("#spiller1-knapp");
const spiller1Add = document.querySelector("#spiller1-add");
const spiller1Sum = document.querySelector("#spiller1-sum");
let spiller1Poeng = 0;

spiller1Knapp.addEventListener("click",()=>{
    if (spiller2Poeng < 50 && spiller1Poeng < 50) {
        let roll = Math.floor(Math.random() * 6 + 1);
        spiller1Add.innerHTML = roll;
        spiller1Poeng += roll;
        spiller1Sum.innerHTML = spiller1Poeng;
        if (spiller1Poeng >= 50) vinnTekst.innerHTML = "Spiller 1 har vunnet!";
    }
})

const spiller2Knapp = document.querySelector("#spiller2-knapp");
const spiller2Add = document.querySelector("#spiller2-add");
const spiller2Sum = document.querySelector("#spiller2-sum");
let spiller2Poeng = 0;

spiller2Knapp.addEventListener("click",()=>{
    if (spiller2Poeng < 50 && spiller1Poeng < 50) {
        let roll = Math.floor(Math.random() * 6 + 1);
        spiller2Add.innerHTML = roll;
        spiller2Poeng += roll;
        spiller2Sum.innerHTML = spiller2Poeng;
        if (spiller2Poeng >= 50) vinnTekst.innerHTML = "Spiller 2 har vunnet!";   
    }
})

resetKnapp = document.querySelector("#reset-knapp");
resetKnapp.addEventListener("click",()=>{
    spiller1Poeng = 0;
    spiller1Add.innerHTML = 0;
    spiller1Sum.innerHTML = 0;
    spiller2Poeng = 0;
    spiller2Add.innerHTML = 0;
    spiller2Sum.innerHTML = 0;
    
    vinnTekst.innerHTML = "";
})
const vinnTekst = document.querySelector("#vinn-tekst");