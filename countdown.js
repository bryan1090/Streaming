export function formatTime(t) {
    let m = String(Math.floor(t / 60)).padStart(2, '0');
    let s = String(t % 60).padStart(2, '0');
    return m + ":" + s;
}

export function startTimer() {
    const playBtn = document.getElementById('playBtn');

    const content = document.getElementById('content');

    const timerElement = document.getElementById('timer');

    let t = 300;
    let countdown;

    // Oculta el botón y muestra el título y el temporizador
    playBtn.style.display = 'none';
    content.style.display = 'flex';

    // Inicia la cuenta regresiva
    countdown = setInterval(() => {
        timerElement.innerText = formatTime(t);

        if (t > 0) {
            t--;
        } else {
            clearInterval(countdown);
            timerElement.innerText = "¡Empezamos!";
        }
    }, 1000);
}

