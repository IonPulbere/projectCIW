
var elem= document.getElementById('pid');
var anim;
var currentPos=20;
var s=elem.style.backgroundPosition

function move(){
currentPos+=3;
elem.style.backgroundPosition=currentPos+"px 0px"
    if(Math.abs(currentPos)>=300){
      currentPos=-50;
    }
    anim=requestAnimationFrame(move);

}
move();


//  add a year value  in footer
var date = new Date();
var sf= document.getElementById('yeartag');
sf.textContent=date.getFullYear();
