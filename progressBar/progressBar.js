var scrolled
var winScroll = 0;
window.onscroll = function() {myFunction()};

function myFunction() {
	winScroll = document.body.scrollTop || document.documentElement.scrollTop;
	var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
	scrolled = (winScroll / height) * 100;
	document.getElementById("myBar").style.width = scrolled + "%";
}

window.setInterval(function(){
	var val = winScroll; 
	console.log(winScroll);
	if (val < 400) {
		if (document.getElementById('active-1')) {
			document.getElementById('active-1').classList.remove("active01");
		}
		if (document.getElementById('active-3')) {
			document.getElementById('active-3').classList.remove("active01");
		}
		if (document.getElementById('active-4')) {
			document.getElementById('active-4').classList.remove("active01");
		}
		if (document.getElementById('nav-1')) {
			document.getElementById('nav-1').style.visibility = "visible";
		}
	} else
	if (val >= 400 && val < 1319) { 
		if (document.getElementById('active-1')) {
			document.getElementById('active-1').classList.add("active01");
		}
		if (document.getElementById('active-3')) {
			document.getElementById('active-3').classList.remove("active01");
		}
		if (document.getElementById('active-4')) {
			document.getElementById('active-4').classList.remove("active01");
		}
		if (document.getElementById('nav-1')) {
			document.getElementById('nav-1').style.visibility = "hidden";
		}
	} else
	if (val >= 1319 && val < 1881 ) {
		if (document.getElementById('active-1')) {
			document.getElementById('active-1').classList.remove("active01");
		}
		if (document.getElementById('active-3')) {
			document.getElementById('active-3').classList.add("active01");
		}
		if (document.getElementById('active-4')) {
			document.getElementById('active-4').classList.remove("active01");
		}
		if (document.getElementById('nav-1')) {
			document.getElementById('nav-1').style.visibility = "hidden";
		}
	} 
	else {
		if (document.getElementById('active-1')) {
			document.getElementById('active-1').classList.remove("active01");
		}
		if (document.getElementById('active-3')) {
			document.getElementById('active-3').classList.remove("active01");
		}
		if (document.getElementById('active-4')) {
			document.getElementById('active-4').classList.add("active01");
		}
		if (document.getElementById('nav-1')) {
			document.getElementById('nav-1').style.visibility = "hidden";
		}
	}
}, 50);