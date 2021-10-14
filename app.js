//Variables
let time = 0;
let timerId = 0;
let timerOut = true; // timer open or close

//Elements in a variable
// هنا بحسب التايمر أحتاج ٣ متغيرات S-R-T
const start = document.querySelector("#start");
const reset = document.querySelector("#reset");
const timer = document.querySelector("#time-display");

//use this function to start the timer
const initClock = () => {
    //console.log("started");
    timerOut = false;
    timerId = setInterval(() => {
        time++;
        timerCount();
    }, 1000); // ?
};

const timerCount = () => {
    const min = Math.floor(time / 60); // عدد صحيح و للعدد الاقل دائما
    const sec = time % 60;
    if (sec < 10) {
        timer.innerHTML = `${min}:0${sec}`
    } else {
        timer.innerHTML = `${min}:${sec}`
    }
}

//this function update the timer values
const stopClock = () => {
    clearInterval(timerId);
}

// Add Listener 
// Start the timer
start.addEventListener("click", function () {
   if (timerOut) {
       initClock();
   }
});

// Add Listener 
// stop and clear the timer
reset.addEventListener("click", function () {
    stopClock();
    timerOut = true
    time = 0;
    timerCount(); //?
});