document.addEventListener('DOMContentLoaded', () => {

    const display = document.getElementById('stopwatch-display');
    const startBtn = document.getElementById('start-btn');
    const stopBtn = document.getElementById('stop-btn');
    const resetBtn = document.getElementById('reset-btn');

    let seconds = 0;       // current time in multiples of 3
    let intervalId = null;  // holds the setInterval reference

    startBtn.addEventListener('click', () => {
        // Don't start if already running or already at 30
        if (intervalId !== null || seconds >= 30) {
            return;
        }

        // Every 1 real second, add 3 to the display
        intervalId = setInterval(() => {
            seconds = seconds + 3;
            display.textContent = seconds;

            // Auto-stop at 30
            if (seconds >= 30) {
                clearInterval(intervalId);
                intervalId = null;
            }
        }, 1000);
    });

    stopBtn.addEventListener('click', () => {
        if (intervalId !== null) {
            clearInterval(intervalId);
            intervalId = null;
        }
    });

    resetBtn.addEventListener('click', () => {
        clearInterval(intervalId);
        intervalId = null;
        seconds = 0;
        display.textContent = seconds;
    });

});
