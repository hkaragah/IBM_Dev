function temperature(){
	var c = document.getElementById("celcius").value;
  var f = (c * 9/5) + 32;
  document.getElementById("fahrenheit").value = f;
}

function weight(){
	var k = document.getElementById("kilo").value;
  p = k * 2.2;
  document.getElementById("pound").value = p;
}


function distance(){
	var km = document.getElementById("kilometer").value;
  mi = km * 0.62137;
  document.getElementById("miles").value = mi;
}

