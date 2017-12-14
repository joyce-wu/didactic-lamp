/**
Team Didactic Lamp
Alessandro Cartegni & Joyce Wu
SoftDev1 pd7
HW17 -- Moo?
2017-12-13
**/


var box = document.getElementById("box");
var boxHeight = box.offsetHeight;
var boxWidth = box.offsetWidth;

//randomized target
var targetX = Math.random() * boxWidth;
var targetY = Math.random() * boxHeight;


console.log( "box height: " + boxHeight );
console.log( "box width: " + boxWidth );

//calculate distance between current mouse pos and target
var distance = function (x0, y0, x1, y1) {
  return Math.sqrt(Math.pow((x0-x1), 2) + Math.pow((y0-y1), 2));
};

//finds max distance from (targetX, targetY)
var max_dist = function(){
  var upper_left = distance(targetX, targetY, 0, 0);
  var upper_right = distance(targetX, targetY, boxWidth, 0);
  var lower_left = distance(targetX, targetY, 0, boxHeight);
  var lower_right = distance(targetX, targetY, boxWidth, boxHeight);
  return Math.max(upper_right, upper_left, lower_left, lower_right);
};

//paces the image at the location
var placeImage = function(){
    //console.log("image");
    //console.log(targetX + " " + targetY);
  var image = document.createElement("img");
  image.src = "https://cdn.pixabay.com/photo/2017/01/31/16/57/linux-2025536_1280.png";
  image.setAttribute("style", "position:absolute;top:"+(targetY-55)+"px;left:"+(targetX-45)+"px;height:110px;width:90px;");
  box.appendChild(image);
};

//checks mouse position and changes background color
var findIt = function(e) {
  console.log("working");
    var dist = distance(event.pageX, event.pageY, targetX, targetY);
    var max_d = max_dist();
    if(dist < 20){
	box.setAttribute("style", "background-color: rgb(255,255,255)");
    }else{
	var shade = parseInt(255 - (255 * dist / max_d));
	box.setAttribute("style", "background-color: rgb("+shade+","+shade+","+shade+")");
    }
};

//checks for mouse click on right spot, then shows image
var foundIt = function(e) {
    var dist = distance(event.pageX, event.pageY, targetX, targetY);
    if(dist < 20){
	box.setAttribute("style", "background-color: rgb(255,255,255)");
	placeImage();
    }
};

box.addEventListener("mousemove", findIt);
box.addEventListener("click", foundIt);
