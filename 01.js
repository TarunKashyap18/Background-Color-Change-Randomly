function randomColor(){
	//pick a red from 0 to 255
	var r= Math.floor(Math.random()*180);
	//pick a green from 0 to 255
	var g= Math.floor(Math.random()*180);
	//pick a blue from 0 to 255
	var b= Math.floor(Math.random()*180);
	return"rgb(" +r +", " +g +", " +b +")";
}
var body =document.getElementsByTagName("body")
function getRandomColors(num){
	//make an array
	var arr = [];
	//repeat num times
	for(var i=0 ; i<num ; i++){
		//get random color & push into array
		arr.push(randomColor());
	}
	//return that array
	return arr;
}
var color =getRandomColors(255);

function setbackground()
{
	window.setTimeout( "setbackground()", 500); // 500 milliseconds delay
	var c=Math.floor(Math.random() * color.length)
		body[0].style.background = color[c];
		// console.log(color[c]);
}