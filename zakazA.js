/**************339**************/
console.log(Number.isInteger(25));
console.log(Number.isInteger(25.0));
console.log(Number.isInteger(25.1));
/**************340**************/

console.log(Math.pow(2, 53));
console.log(Math.pow(2, 53) + 1);

var inside = Number.MAX_SAFE_INTEGER,
	outside = inside + 1;

console.log(Number.isInteger(inside));
console.log(Number.isSafeInteger(inside));

console.log(Number.isInteger(outside));
console.log(Number.isSafeInteger(outside));

var \u0061 = "abc1000";
console.log(\u0061);
console.log(a);

var \u{61} = "abc2000";

console.log(\u{61});
console.log(a);

let person = {
	getGreeting(){
		return "Hello";
	}
};


let dog = {
	getGreeting(){
		return "Woof";
	}
};

// прототипом является person
let friend = {
	__proto__ : person
};


console.log(friend.getGreeting());
console.log(Object.getPrototypeOf(friend) === person);
console.log(friend.__proto__=== person);








