// Write your JavaScript code here.
// Remember to pay attention to page loading!
let y=0;
let x=0
window.addEventListener('load', function() {
    console.log('Its loaded!!!')


    let takeOffBtn = this.document.getElementById('takeoff');
  

    takeOffBtn.addEventListener('click',function() {
        console.log('I clicked it');
        let response=window.confirm("Confirm that the shuttle is ready for takeoff.");
        if (response) {
              document.getElementById('flightStatus').innerText="Shuttle in flight";
              document.getElementById('shuttleBackground').setAttribute('style','background-color: blue;');
              document.getElementById('spaceShuttleHeight').innerText='10000';
        }
    });

    document.getElementById('landing').addEventListener('click',function(){

       window.alert("The shuttle is landing. Landing gear engaged.") ;
       document.getElementById('flightStatus').innerText="The shuttle has landed."
       document.getElementById('shuttleBackground').setAttribute('style','background-color: green;');
       document.getElementById('spaceShuttleHeight').innerText='0';

    })
    document.getElementById('missionAbort').addEventListener('click',function(){
        let response=window.confirm("Confirm that you want to abort the mission..");
        if (response) {
              document.getElementById('flightStatus').innerText="Mission aborted.";
              document.getElementById('shuttleBackground').setAttribute('style','background-color: green;');
              document.getElementById('spaceShuttleHeight').innerText='0';
        }
    });


document.getElementById('up').addEventListener('click',function(){
    if (y- 10 < 0) return;
    let myHeight= document.getElementById('spaceShuttleHeight').innerText;
    myHeight=Number(myHeight) + 1000;
    document.getElementById('spaceShuttleHeight').innerText=myHeight

   let rocket= document.getElementById('rocket');
   y=y-10;
   rocket.style.top=y;
   console.log(y);
   rocket.setAttribute("style","top: " + y + "px; Position: relative;");
})

document.getElementById('down').addEventListener('click',function(){
    let container=document.getElementById('shuttleBackground');
    let rocket= document.getElementById('rocket');
    if (y + 10 > container.offsetHeight-rocket.height ) return;

    let myHeight= document.getElementById('spaceShuttleHeight').innerText;
    myHeight=Number(myHeight) - 1000;
    document.getElementById('spaceShuttleHeight').innerText=myHeight

   y=y+10;
   rocket.style.top=y;
   console.log(y);
   rocket.setAttribute("style","top: " + y + "px; Position: relative;");
})


document.getElementById('left').addEventListener('click',function(){
    let container=document.getElementById('shuttleBackground');
    let rocket= document.getElementById('rocket');
    if (y - 10 < (-1 * (container.offsetLeft)/ 2 ) ) return;
   y=y-10;
   rocket.style.top=y;
   rocket.setAttribute("style","left: " + y + "px; Position: relative;");
})

document.getElementById('right').addEventListener('click',function(){
    let container=document.getElementById('shuttleBackground');
    
    if (y + 10 > (container.offsetLeft)/ 2) return;
    let rocket= document.getElementById('rocket');
    y=y+10;
    rocket.style.top=y;
    rocket.setAttribute("style","right: " + y + "px; Position: relative;");
 })
});



