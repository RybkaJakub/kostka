// Proměnná zachycuje stav hry
let stop = true;
let timer = false;

play.addEventListener('click', function() {
    if (stop) {
        play.innerText = 'STOP'
        stop = false;
    } else {
        play.innerText = 'HREJ'
        stop = true;
    }
})

timer = setInterval(function() {
    let hod = Math.ceil(Math.random() * 6);
    dice.src = `img/kostka${hod}.png`;
}, 40);