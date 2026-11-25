//==========Digital Clock==========
//updates the dashboard  clock withthe current system time.
function updateClock(){
    //finds the clock element in the  html
    const clock=document.getElementById("clock");
//displays the  current time
if(clock) clock.textContent=new Date().toLocaleTimeString();
}
//calls the  time function immediately.
updateClock();
//repeats the clock update every  one second(1000 milli seconds)
setInterval(updateClock,1000);

