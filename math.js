function f(x) {
	var answer = 2*x +1;
	return answer;
}

var output = f(3);
console.log("the answer is " + output + " dumbass....");

function g() {
	answer = 5;
	return answer;
}

output = g();
console.log("g() is " + output);

function h(x) {
	var answer = 3*x -2;
	return answer;
}

var output = h(3);
console.log("the answer of this value in 3x-2 is " + output);

function r(x,y) {
	var answer = 2* (x + y);
	return answer;
}

var output = r(3,4);
console.log("double the sum of these two values is " + output);

function a(x,y,z) {
	var answer= 5*x + 2*y - 3*z + 7;
	return answer;
}

var output = a(43,56,45);
console.log("the answer of these values in this function a is " + output);

function b(x,y,z) {
	var answer = h(x) + h(y) + a(x,y,z);
	return answer;
}

var output = b(41,24,35)
console.log("the answer of these values in this function b is " + output);

function pythag(a,b) {
	function square(x) {
		var answer = x*x;
		return answer;		
	}
	return Math.sqrt(square(a) + square(b));
	// var aSquared = square(a);
	// var bSquared = square(b);
	// var answer = Math.sqrt(aSquared + bSquared);
	// return answer 
}


console.log(pythag(3,4));

function repeatThreeTimes(string) {
	return string + string + string;
}

var output = repeatThreeTimes("hi");
console.log(output); 

function tangent(x) {
	var sinofx = Math.sin(x);
	var cosofx = Math.cos(x);
	var answer = sinofx / cosofx;
	return answer;
}

console.log(tangent((Math.pi)/2));