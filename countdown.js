export function formatTime(t) {
    let m = String(Math.floor(t / 60)).padStart(2, '0');
    let s = String(t % 60).padStart(2, '0');
    return m + ":" + s;
}

export function startTimer(minutes,seconds) {
    let min=minutes&&minutes>=0?minutes:0;
    let sec=seconds&&seconds>=0?seconds:0;
    const playBtn = document.getElementById('playBtn');

    const content = document.getElementById('content');

    const timerElement = document.getElementById('timer');


    let t = min*60 + sec; // Convierte minutos y segundos a segundos
    let countdown;

    // Oculta el botón y muestra el título y el temporizador
    playBtn.style.display = 'none';
    content.style.display = 'flex';

    // 1. Pinta el tiempo inicial de inmediato al arrancar
    timerElement.innerText = formatTime(t);

    // 2. Inicia la cuenta regresiva que descuenta cada segundo
    // Inicia la cuenta regresiva
    countdown = setInterval(() => {
        

        if (t > 0) {
            t--;
            timerElement.innerText = formatTime(t);
        } else {
            clearInterval(countdown);
            timerElement.innerText = "¡Empezamos!";
        }
    }, 1000);
}

