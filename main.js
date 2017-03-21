

//For "play games" button
function setIframeSource() {
   var theSelect = document.getElementById('location');
   var theIframe = document.getElementById('myIframe');
   var theUrl;

   theUrl = theSelect.options[theSelect.selectedIndex].value;
   theIframe.src = theUrl;
}

//For "do tracing" button
var motionPath = document.getElementById('theMotionPath');
motionPath.addEventListener("mouseover", mouseOver);
function mouseOver(){
	console.log("on motion path"); //prints when mouse is over the star outline
	}

var move = function(dx,dy) {
			this.attr({
									transform: this.data('origTransform') + (this.data('origTransform') ? "T" : "t") + [dx, dy]
							});
}
var start = function() {
        this.data('origTransform', this.transform().local );
}
var stop = function() {
        console.log('finished dragging');
}

circle.drag(move, start, stop );
