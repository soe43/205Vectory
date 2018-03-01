var board=document.getElementById("board");
var clearbutt=document.getElementById("clear");
var ns="http://www.w3.org/2000/svg";

var previousX;
var previousY;
var started=false;

var drawCircle = function(e){
    if(started){
	var mouseX = e.offsetX;
	var mouseY = e.offsetY;
	var line = document.createElementNS(ns, "line");
	line.setAttribute("x1", previousX);
	line.setAttribute("y1", previousY);
	line.setAttribute("x2", mouseX);
	line.setAttribute("y2", mouseY);
	line.setAttribute("stroke", "black");
	board.appendChild(line);
	console.log("drew");
	circle(e);
    }
    else{
	circle(e);
    }
}

var circle = function(e){
    mouseX = e.offsetX;
    mouseY = e.offsetY;
    previousX = mouseX;
    previousY = mouseY;
    started=true;
    var circ = document.createElementNS(ns, "circle");
    circ.setAttribute("cx", mouseX);
    circ.setAttribute("cy", mouseY);
    circ.setAttribute("r", 25);
    circ.setAttribute("fill", "lightsteelblue");
    board.appendChild(circ);
}

var clear = function(){
    while(board.hasChildNodes()){
	board.removeChild(board.childNodes[0]);
    }
    started=false;
    previousX=0;
    previousY=0;
    console.log("erased");
}

board.addEventListener("click", drawCircle);
clearbutt.addEventListener("click", clear);


