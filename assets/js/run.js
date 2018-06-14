
var elem= document.getElementById('pid');
var anim;
var currentPos=0;
var s=elem.style.backgroundPosition

function move(){
currentPos+=1;
elem.style.backgroundPosition=currentPos+"px 0px"
    if(Math.abs(currentPos)>=500){
      currentPos=-50;
    }
    anim=requestAnimationFrame(move);

}
move();
