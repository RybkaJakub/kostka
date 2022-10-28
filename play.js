let turn;
let timer = false;
// Proměnná typu pole, do níž uložíme body
let rounds = [];

function animace(){
    turn = Math.ceil(Math.random() * 6);
    dice.src = `img/kostka${turn}.png`
}

function sum(){
    let s = 0;
    for (let i = 0; i < rounds.length; i++){
        s += rounds[i];
    }
    return s;
}

function max(){
    let mx = 1;
    rounds.forEach(function(value,index){
        if (value > mx) mx = value;
        console.log(mx);
    })
    return mx;
}

function min(){
    let mn = 6;
    rounds.forEach(function(value,index){
        if (value < mn) mn = value;
        console.log(mn);
    })
    return mn;
}


function stats(){
    let results = `<p>Aktuální hod: ${turn}</p>`
    results += `<p>Přehled hodů: ${rounds}</p>`
    results += `<p>Počet hodů: ${rounds.length}</p>`
    results += `<p>Součet hodů: ${sum()}</p>`
    results += `<p>Průměr: ${sum()/rounds.length}</p>`
    results += `<p>Nejvyšší hod: ${max()}</p>`
    results += `<p>Nejnižší hod: ${min()}</p>`
    return results;
}

play.addEventListener('click', function() {
    if (!timer) {
        play.innerText = 'STOP'
        timer = setInterval(animace, 40);
    } else {
        play.innerText = 'HREJ'
        clearInterval(timer);
        timer = false;
        rounds.push(turn);
        result.innerHTML = stats();
    }
})