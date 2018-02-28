var board=document.getElementById("board");
var clearbutt=document.getElementById("clear");
var ns="https://www.w3.org/2000/svg";

var previousX;
var previousY;

var circleNum = 0;

var drawLine = function(x1,y1,x2,y2){
    var line = document.createElementNS(ns, "line");
    line.setAttribute("x1", x1);
    line.setAttribute("y1", y1);
    line.setAttribute("x2", x2);
    line.setAttribute("y2", y2);
    board.appendChild(line);
}

var drawCircle = function(e){
    if(circleNum == 0){
	var mouseX = e.offsetX;
	var mouseY = e.offsetY;
	previousX = mouseX;
	previousY = mouseY:
	var circ = document.createElementNS(ns, "circle");
	circ.setAttribute("cx", mouseX);
	circ.setAttribute("cy", mouseY);
	circ.setAttribute("r", 25);
	circ.setAttribute("id", str(circleNum));
	board.appendChild(circ);
	circleNum++;
    }
    else{
	var mouseX = e.offsetX;
	var mouseY = e.offsetY;
	drawLine(previousX, previousY, mouseX, mouseY);
	previousX = mouseX;
	previousY = mouseY;
	var circ = document.createElementNS(ns, "circle");
	circ.setAttribute("cx", mouseX);
	circ.setAttribute("cy", mouseY);
	circ.setAttribute("r", 25);
	circ.setAttribute("id", str(circleNum));
	board.appendChild(circ);
	circleNum++;
    }
}

var clear = function(){
    
}

