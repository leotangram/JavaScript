function fizzBuzz(num) {
	if (num % 3) {
		return	"fizz";
	} else if (num % 5) {
		return "buzz";
	} else if (num % 3 && num % 5) {
		return "fizzbuzz"
	} else {
		return num;
	}
}




// function fizzBuzz(num){
//     if (num % 3 === 0) {
//     return "fizz";
//   } else if (num % 5 === 0){
//     return "buzz";
//   } else if (num % 3 === 0 && num % 5 === 0 ){
//     return "fizzbuzz";
//   } else {
//     return num;
//   }


// function fizzBuzz(num) {
// 	if (fizzBuzz % 3) {
// 		return	"fizz";
// 	} else if (fizzBuzz % 5) {
// 		return "buzz";
// 	} else if (fizzBuzz % 3 && fizzBuzz % 5) {
// 		return "fizzbuzz"
// 	} else {
// 		return num;
// 	}
// }



// function fizzBuzz(num) {
// 	if (fizzBuzz % 3) {
// 		return	"fizz";
// 	} else if (fizzBuzz % 5) {
// 		return "buzz";
// 	} else if (fizzBuzz % 3 && fizzBuzz % 5) {
// 		return "fizzbuzz"
// 	} else {
// 		return fizzBuzz;
// 	}
// }




// function fizzBuzz(num = 1) {
// 	if (num % 3) {
// 		return	"fizz";
// 	} else if (num % 5) {
// 		return "buzz";
// 	} else if (num % 3 && num % 5) {
// 		return "fizzbuzz"
// 	} else {
// 		return num;
// 	}
// }