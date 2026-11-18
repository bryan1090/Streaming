// @vitest-environment jsdom
import { describe, test, expect, beforeEach, afterEach, vi } from 'vitest';
import { formatTime, startTimer } from './countdown.js';

describe('Pruebas del Temporizador con Vitest', () => {

    beforeEach(() => {
        // Vitest con JSDOM provee un document real inyectado globalmente
        document.body.innerHTML = `
            <button id="playBtn" style="display: block;"></button>
            <div id="content" style="display: none;"></div>
            <div id="timer"></div>
        `;
        // Activamos los temporizadores falsos de Vitest
        vi.useFakeTimers();
    });

    afterEach(() => {
        vi.useRealTimers();
    });

    test('formatTime convierte segundos a formato MM:SS', () => {
        expect(formatTime(125)).toBe('02:05');
        expect(formatTime(60)).toBe('01:00');
        expect(formatTime(0)).toBe('00:00');
    });

    test('startTimer actualiza el DOM inmediatamente y descuenta el tiempo con precisión', () => {
        const playBtn = document.getElementById('playBtn');
        const content = document.getElementById('content');
        const timerElement = document.getElementById('timer');

        // Iniciamos con 0 minutos y 2 segundos
        startTimer(0, 2);

        // Verificamos el estado visual inmediato
        expect(playBtn.style.display).toBe('none');
        expect(content.style.display).toBe('flex');
        expect(timerElement.innerText).toBe('00:02');

        // Avanzamos el tiempo 1 segundo usando Vitest
        vi.advanceTimersByTime(1000);
        expect(timerElement.innerText).toBe('00:01');

        // Avanzamos el siguiente segundo
        vi.advanceTimersByTime(1000);
        expect(timerElement.innerText).toBe('00:00');

        // El último tick del intervalo dispara el mensaje final
        vi.advanceTimersByTime(1000);
        expect(timerElement.innerText).toBe('¡Empezamos!');
    });
});
