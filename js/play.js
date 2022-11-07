let turn;
let turn2;
let turn3;
let timer = false;
let score = 20000;
let soucet;
let spravny = 0;
let blizko = 0;
let spatne = 0;
let vyhra = 45000;
let roll = document.getElementById('roll');
let audio = document.getElementById('kostka');
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
    if (!timer && score>0 && score < vyhra && score != vyhra) {
        play.innerText = 'STOP'
        timer = setInterval(animace, 40);
        audio.play();
    }
    else if (timer){
        let guess = document.getElementById('guess').value;
        let g1 = guess++ && guess--;
        let g2 = guess-1;
        play.innerText = 'HREJ'
        clearInterval(timer);
        timer = false;
        audio.pause();
        roll.play();
        soucet = turn + turn2 + turn3;
        result.innerHTML += soucet;
        if (g1 == soucet || g2 == soucet){
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
        if (score>0 && score < vyhra){
            skore.innerHTML= `<p>Aktuální Skóre</p>`;
            skore.innerHTML+= `<p>${score} V-Bucksů</p>`;
        }
        else if (score == vyhra || score> vyhra){
            skore.innerHTML= `<p>Vyhrál jsi! Gratuluji. Pro novou hru resetuj stránku</p>`;
        }
        else{
            skore.innerHTML= `<p>Jsi na nule. Pro novou hru resetuj stránku</p>`;
        }
        result.innerHTML = stats();
        console.log(score)
    }
})