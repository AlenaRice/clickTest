let clicks = 0;
document.getElementById("clicks").innerHTML = clicks;

function countClick() {
    navigator.vibrate(11);
    clicks++;
    document.getElementById("clicks").innerHTML = clicks;
}

function resetCounter() {
    clicks = 0;
    document.getElementById("clicks").innerHTML = clicks;
}

let timerInput = document.getElementById("time"); // Импут


function myTimer() {
    alert("Время вышло");
}

//setTimeout(myTimer, yourTimer);

function test1() {
    let yourTimer = +timerInput.value; // Значение импута (таймер)
    console.log(yourTimer);
}


function test() {
    let yourTimer = +timerInput.value*1000; // Значение импута (таймер)
    if (yourTimer < 1) {
        alert("Задайте время");
     console.log(yourTimer);
    } else {
    resetCounter();
    setTimeout(myTimer, yourTimer);  
     }  
}
