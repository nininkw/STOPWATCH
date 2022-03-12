let timer = document.getElementById(`timer`);
let start = document.getElementById(`start`);
let stop = document.getElementById(`stop`);
let reset = document.getElementById(`reset`);

function updateTime () {
  let ms = Math.floor((elapsedTime / 100) % 10);
  let s = Math.floor((elapsedTime / 1000)% 10); 
  let ten = Math.floor((elapsedTime / 10000)% 10); 
  let hundred = Math.floor((elapsedTime / 100000)% 10); 
  timer.innerHTML = hundred + " : " + ten + " : " + s + " : " + ms;
}

function setButtonStateSetting() {
  start.disabled = false;
  stop.disabled = true;
  reset.disabled = true;
}

function setButtonStateRunning() {
  start.disabled = true;
  stop.disabled = false;
  reset.disabled = true;
}

function setButtonStateStopped() {
  start.disabled = false;
  stop.disabled = true;
  reset.disabled = false;
}

setButtonStateSetting();

let elapsedTime = 0;
let intervalID;

start.addEventListener("click", function(){
  setButtonStateRunning();
  let startTime  = new Date();
  intervalID = setInterval(function() {
    elapsedTime += Date.now() - startTime;
    startTime = Date.now();
    updateTime(); 
  }, 100);
});

stop.addEventListener("click", function(){
  setButtonStateStopped();
  clearInterval(intervalID);
});

reset.addEventListener("click", function(){
  setButtonStateSetting();
  elapsedTime = 0;
  updateTime();
});


