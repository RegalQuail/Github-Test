document.querySelector(".s-slide").onmouseup = function() {
var sliderValue = this.value;
if (sliderValue == 100)
		fadeOut();
else{
		let x = setInterval(function() {
    		if (document.querySelector(".s-slide").value != 0)
        		document.querySelector(".s-slide").value = sliderValue--;
        else
        		clearInterval(x);
    }, 1);
	}
}
function fadeOut(){
		document.querySelector(".s-slide").style.opacity = "0";
    document.querySelector(".s-slide").style.pointerEvents = "none";
}