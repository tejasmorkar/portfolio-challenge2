var scrolled
var winScroll = 0;
window.onscroll = function() {myFunction()};

function myFunction() {
	winScroll = document.body.scrollTop || document.documentElement.scrollTop;
	var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
	scrolled = (winScroll / height) * 100;
	document.getElementById("myBar").style.width = scrolled + "%";

/*	console.log(winScroll);
	console.log(document.documentElement.scrollHeight);
	console.log(document.documentElement.clientHeight);*/
}

