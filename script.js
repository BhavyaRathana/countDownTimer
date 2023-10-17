const targetDate = new Date("2023-10-18 23:59:59").getTime();

const timer = setInterval(function () {
    const currentDate = new Date().getTime();
    const timeLeft = targetDate - currentDate;

    if (timeLeft <= 0) {
        clearInterval(timer);
        document.getElementById("timer").innerHTML = "Countdown expired!";
    } else {
        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        const timerText = `${days}d ${hours}h ${minutes}m ${seconds}s`;
        document.getElementById("timer").innerHTML = timerText;
    }
}, 1000); 
