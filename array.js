// var arr = [1,2,3,4,5,6,7,8,9,10,]

// var store = 0;
// for (var x of arr) {
// 	store = x + store;
// 	console.log(store);
// // }

// var arr = ["hello", "goodbye", "yo"];

// for (var i=0; i < arr.length; i = i +1) {
// 	console.log("element " + i + " is " + arr[i])
// }

function upTo(low, high) {
	var answer = [];
	for (var i = low ; i <= high; i++) {
		answer.push(i); 
	}
	return answer;
}

console.log(upTo(20,50));