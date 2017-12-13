var box = document.getElementById("box");
var boxHeight = box.offsetHeight;
var boxWidth = box.offsetWidth;

//hardcode target as center
//randomize later
var targetX = boxWidth / 2;
var targetY = boxHeight / 2;


console.log( "box height: " + boxHeight );
console.log( "box width: " + boxWidth );

//calculate distance between current mouse pos and target
var distance = function (x0, y0, x1, y1) {
  return Math.sqrt(Math.pow((x0-x1), 2) + Math.pow((y0-y1), 2));
};

var findIt = function(e) {
  var dist = distance(event.pageX, event.pageY, targetX, targetY);
  if(dist == 0){
    box.setAttribute("style", "background-color: rgb(0,0,0)");
  }else{
    console.log(dist);
    var shade = 225 - dist/225.0; 
    console.log(shade);
    box.setAttribute("style", "background-color: rgb("+shade+","+shade+","+shade+")");
  }
};

/*
your OTHER FXNS
*/

box.addEventListener("mousemove", findIt);
