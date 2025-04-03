document.addEventListener("DOMContentLoaded", function () {
    var duration = document.getElementById("duration");
    var selectedTime = document.getElementById("selected-time-value");
    var start = document.getElementById("start");
    var stop = document.getElementById("stop");
    var restart = document.getElementById("restart");
    var pomodo = document.getElementById("pomodoro-time");

    let interval;
    var timeLeft;

    function startCounter() {
        if (duration.value === '30min') {
            timeLeft = 1800;
            interval = setInterval(() => {
                timeLeft--;
                updateTimer();
                start.disabled = true;

                if (timeLeft === 0) {
                    clearInterval(interval);
                    alert("Acabou o tempo de foco!");
                    pomodo.disabled = true;
                    updateTimer();
                }

            }, 1000)
        }

        if (duration.value === '1hour') {
            timeLeft = 3600;
            interval = setInterval(() => {
                timeLeft--;
                updateTimer();
                start.disabled = true;

                if (timeLeft === 0) {
                    clearInterval(interval);
                    alert("Acabou o tempo de foco!");
                    pomodo.disabled = true;
                    updateTimer();
                }
            }, 1000)
        }
        if (duration.value === '1h30') {
            timeLeft = 5400;
            interval = setInterval(() => {
                timeLeft--;
                updateTimer();
                start.disabled = true;

                if (timeLeft === 0) {
                    clearInterval(interval);
                    alert("Acabou o tempo de foco!");
                    pomodo.disabled = true;
                    updateTimer();
                }
            }, 1000)
        }

        selectedTime.textContent = "Timer iniciado!";

    }

    function updateTimer() {
        let minutes = Math.floor(timeLeft / 60);
        let seconds = timeLeft % 60;
        let formattedTime = `Tempo restante: 
        ${minutes.toString().padStart(2, '0')}:
        ${seconds.toString().padStart(2, '0')}`;
        pomodo.innerHTML = formattedTime;
    }

    function stopTimer() {
        clearInterval(interval);
        pomodo.innerHTML = null;
        start.disabled = false;
        selectedTime.textContent = "Timer parado!";
    }

    function restartTimer() {
        clearInterval(interval);
        startCounter();
        selectedTime.textContent = "Timer reiniciado!";
    }
    
    function clearTimer(){
        clearInterval(interval);
        pomodo.innerHTML = null;
        start.disabled = false;
        selectedTime.textContent = null;
    }

    start.addEventListener('click', startCounter);
    stop.addEventListener('click', stopTimer);
    restart.addEventListener('click', restartTimer);
    duration.addEventListener('click', clearTimer);

})