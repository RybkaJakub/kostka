let turn;
let turn2;
let turn3;
let timer = false;
let score = 20000;
let soucet;
let spravny = 0;
let blizko = 0;
let spatne = 0;
// Proměnná typu pole, do níž uložíme body
let rounds = [];

function animace(){
    turn = Math.ceil(Math.random() * 6);
    turn2 = Math.ceil(Math.random() * 6);
    turn3 = Math.ceil(Math.random() * 6);
    dice.src = `img/kostka${turn}.png`
    dice2.src = `img/kostka${turn2}.png`
    dice3.src = `img/kostka${turn3}.png`
}

function stats(){
    let results = `<p>Aktuální hod: ${soucet}</p>`
    results += `<p>Počet správných odhadů ${spravny}</p>`
    results += `<p>Počet blízkých odhadů ${blizko}</p>`
    results += `<p>Počet špatných odhadů ${spatne}</p>`
    return results;
}

play.addEventListener('click', function() {
    if (!timer && score>0) {
        play.innerText = 'STOP'
        timer = setInterval(animace, 40);
    } else {
        play.innerText = 'HREJ'
        clearInterval(timer);
        timer = false;
        soucet = turn + turn2 + turn3;
        result.innerHTML += soucet;
        if ((document.getElementById('guess').value)-1==soucet || ((document.getElementById('guess').value)+1==soucet)){
            score += 3000;
            blizko++;
        }
        else if ((document.getElementById('guess').value)==soucet){
            score += 5000;
            spravny++;
        }
        else{
            score -= 1500;
            spatne++;
        }
        if (score>0){
            skore.innerHTML= `<p>Aktuální Skóre</p>`;
            skore.innerHTML+= `<p>${score} V-Bucksů</p>`;
        }
        else{
            skore.innerHTML= `<p>Jsi na nule. Pro novou hru resetuj stránku</p>`;
        }
        result.innerHTML = stats();
    }
})