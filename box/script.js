for (var i = 0; i < 300;i++) {
	document.querySelector(".container").innerHTML +="<div class = 'box'></div>";
}

var arrayOfBoxes = document.querySelectorAll(".box");
console.log(arrayOfBoxes);

for (var i = 0; i < arrayOfBoxes.length; i++) {
	if (i % 7 === 0){
		arrayOfBoxes[i].style.background = "red";	
	} else if (i % 7 === 1) {
		arrayOfBoxes[i].style.background = "orange";			
	} else if (i % 7 === 2) {
		arrayOfBoxes[i].style.background = "yellow";	
	} else if (i % 7 === 3) {
		arrayOfBoxes[i].style.background = "green";	
	}else if (i % 7 === 4) {
		arrayOfBoxes[i].style.background = "blue";	
	} else if (i % 7 === 5) {
		arrayOfBoxes[i].style.background = "indigo";	
	}else if (i % 7 === 6) {
		arrayOfBoxes[i].style.background = "maroon";	
	}
}