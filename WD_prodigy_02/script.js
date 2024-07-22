const time = document.querySelector(".time"),
startstop = document.querySelector(".startstop"),
reset = document.querySelector(".reset"),
lap = document.querySelector(".lap"),
laptime = document.querySelector("#lap-time");

let active = false;
let [ss,mm,hr] =[0,0,0];
let interval;
function startCount(){
ss++;
if(ss >59){
    ss=0;
    mm++;
    if(mm>59){
        mm=0;
        hr++;

    }
}
time.textContent = `${hr.toString().padStart(2,0)}:${mm.toString().padStart(2,0)}:${ss.toString().padStart(2,0)}`

};
startstop.addEventListener("click",()=>{
active = active ? false :true;
if(active){
    startstop.textContent = "Stop";
   interval = setInterval(startCount, 1000);
}else{
    startstop.textContent ="Start";
    clearInterval(interval);
}
})
reset.addEventListener("click",()=>{
    clearInterval(interval);
    time.textContent=`00:00:00`;
    [ss,mm,hr] =[0,0,0];
    startstop.textContent ="Start";
    active= false;
    
})

lap.addEventListener("click",()=>{
if(active){
    const currentTime = `${hr.toString().padStart(2,'0')} :${mm.toString().padStart(2,'0')} : ${ss.toString().padStart(2,'0')}`;
    const lapItem = document.createElement("li");
    lapItem.textContent = `Lap ${laptime.children.length +1} : ${currentTime}`;
    laptime.appendChild(lapItem);
}
})
