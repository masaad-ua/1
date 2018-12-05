/*****************26**************/
function getValue(condition){
	if(condition){
		var value = "blue";
		return value;
	}else {
		//console.log(value);
		return null;

	}
}
getValue();
/// За кулисами интерпритатор JavaScript изменит функцию как показано ниже
function getValue2(condition){
	var value;

	if(condition){
		value = "blue";
		// прочий код
		return value;
	}else {
		console.log(value);
		return null;
	}
}
/*************28************/


/*************30************/

const person10 = {
	name: ""
};
//console.log(varso);
var varso = "2000";

/*************32************/

// var funcs = [];
//
// for (var i = 0; i < 10; i++ ){
// 	funcs.push(function () {
// 		console.log(i);
// 	});
// }
//
// funcs.forEach(function (func) {
// 	func();
// });

var funcs1 = [];

for (var i = 0; i < 10; i++ ){
	funcs1.push((function (value) {
		return function () {
			console.log(value);
		}
	}(i)));
}

// funcs1.forEach(function (func) {
// 	func();
// });
/*************33************/


var funcs2 = [],
	object = {
		a: true,
		b: true,
		c: true
	};

for(let key in object){
	funcs2.push(function(){
			console.log(key);
		}
	)
}

// funcs2.forEach(function (func) {
// 	func();
// });






/*************39*************/

let text = "界";

// console.log(text.length);
// console.log(/^.$/.test(text));

// console.log(text.charAt(0));
// console.log(text.charAt(1));

// console.log(text.charCodeAt(0));
// console.log(text.charCodeAt(1));

/****************40****************/
let text1 = "界a";
// console.log(text1.charCodeAt(0));
// console.log(text1.charCodeAt(1));
// console.log(text1.charCodeAt(2));

// console.log(text1.codePointAt(0));
// console.log(text1.codePointAt(1));
// console.log(text1.codePointAt(2));

console.log(String.fromCodePoint(134071));


let values = ["界", "界"];

let normalized = values.map( function (text) {
	return text.normalize();
});


/*42*/
let text2 = "洋";
// console.log(text2.length);
// console.log(/^.$/.test(text2));
// console.log(/^.$/u.test(text2));


//function codePointLength(text) {
//	let result = text.match(/[\s\S]/gu);
//	return result ? result.length : 0;
//}
// console.log(codePointLength("abc"));
// console.log(codePointLength("洋bc"));

/*44*/

function hasRegExpU() {
	try{
		var pattern = new RegExp(".", "u");
		return true;
	} catch(ex) {
		return false;
	}
}
// console.log(hasRegExpU());

/*45*/
let msg = "Hello world!";

// console.log(msg.startsWith("Hello"));
// console.log(msg.endsWith("!"));
// console.log(msg.includes("o"));
//
// console.log(msg.startsWith("o"));
// console.log(msg.endsWith("world!"));
// console.log(msg.includes("!!"));

/*46*/
//console.log("x".repeat(3));
//console.log("hello".repeat(2));
//console.log("abc".repeat(4));

//let text3 = "hello1 hello2 hello3",
//	pattern = /hello\d\s?/,
//	result = pattern.exec(text3),
//
//	globalPattern = /hello\d\s?/g,
//	globalResult = globalPattern.exec(text3),
//
//	stickyPattern =/hello\d\s?/y,
//	stickyResult = stickyPattern.exec(text3);

// console.log(result[0]);
// console.log(globalResult[0]);
// console.log(stickyResult[0]);
//let pattern2 = /hello\d/y;
//console.log(pattern2.sticky);

/***********48*************/
function hasRegExpY(){
    try{
        var pattern = new RegExp(".", "y");
        return true;
    }
    catch (ex){
        return false;
    }
}
//console.log(hasRegExpY());

/***********50***********/
function getFlags(re){
    var text = re.toString();
    return text.substring(text.lastIndexOf("/") + 1, text.length);
}
var re = /ab/g;
//console.log(getFlags(re));

/*********51**********/
//var message = "Multiline\
// string";
//console.log(message);

var message2 = "Multiline \n\
string";
//console.log(message2);


/*********53**********/

let message21 = `
Hello 
strong`.trim();
//console.log(message21);



/************54*************/

let name = "Nickolas",
    message = `Hello, ${name}.`;
//console.log(message);

let count1 = 10,
	price1 = 0.25,
	message1 = `${count1} items cost $${(count1 * price1).toFixed(2)}.`;
console.log(message1);

let name3 = "Nicholas",
	message3 = `Hello,  ${
			`my name is ${name}`
		}.`;
//console.log(message3);

/*******56******/
let count4 = 10,
	price4 = 0.25;
	//message4 = passthru `${count} items cost $${(count * price).toFixed(2)}.` ;
/******57******/

function passthru(literals, ...substitutions){
	let result = "";

	//цыкл  по количеству элементов в массиве
	for (let i = 0; i < substitutions.length; i++ ){
		result += literals[i];
		result += substitutions[i];
	}

	//добавит последний литерал
	result += literals[literals.length - 1];
	return result + `AAAAAA`;
}

let count11 = 10,
	price11 = 0.25,
	message11 = passthru`${count11} items cost $${(count11 * price11).toFixed(2)}`;
    console.log(message11);

/******62******/
function mixArgs2(first, second) {
	console.log("Hello");
	console.log(first === arguments[0]);
	console.log(second === arguments[1]);
	first = "c";
	second = "d";
	console.log( first === arguments[0]);
	console.log( second === arguments[1]);
}

mixArgs2("a", "b");


/*****64********/
function mixArgs(first ,second = "b"){
	//console.log(arguments.length);
	//console.log(first === arguments[0]);
	//console.log(second === arguments[1]);

	first = "c";
	second = "d";

	//console.log(first === arguments[0]);
	//console.log(second === arguments[1]);
}

mixArgs("a");

/******68*******/
function  pick(object){
	let result = Object.create(null);
	//обход параметров, начиная со второго
	for (let i = 1, len = arguments.length; i <len; i++){
		result[arguments[i]] = object[arguments[i]];
	}
	return result;
}
let book = {
	title: "Understanding ECMAScript6",
	author: "Nicholas C.Zakaz",
	year: 2016
};

let bookData = pick(book, "author", "year");
console.log(bookData.author);
console.log(bookData.year);

/*******69********/

function  pick2(object, ...keys){
	let result = Object.create(null);
	//обход параметров, начиная со второго
	for (let i = 0, len = keys.length; i <len; i++){
		result[keys[i]] = object[keys[i]];
	}
	return result;
}
let book2 = {
	title: "Understanding ECMAScript6",
	author: "Nicholas C.Zakaz",
	year: 2016
};
let bookData2 = pick(book2, "author", "year");
//console.log(bookData2.author);

/*******74*******/
function doSomething(){

}
//console.log(doSomething.name);
//console.log((new Function()).name);


/*******75********/
function Person(name){
	this.name = name;
}

var person = new Person("Nicholas");
var notAPerson  = Person("Nicholas");

//console.log(person);
//console.log(notAPerson);

//console.log(Person);


/********76******/
//function Person2(anme){
//	if(this instanceof Person){
//		this.name = name;
//	}else{
//		throw  new Error("You must use new with Person")
//	}
//}
//
//var person2 = new Person2("Nicholas");
//var notAPerson2  = Person2("Nicholas");
/******82******/

let reflect1 = value => value;
let reflect2 = function(value){
	return value
};

let doNothing = () => {};

let getTempItem = id => ({id: id, name: "temp"});

/********87********/
function createArrowFunctionReturningFirstArg(){
	return () => arguments[0]
}
var arrowFunction  = createArrowFunctionReturningFirstArg(5);
//console.log(arrowFunction());


/********90*******/
"use strict";
function factorial(n){
	if(n <= 1){
		return 1;
	}else{
		//не оптимизируется
		return n * factorial(n - 1)
	}
}

function factorial2(n, p = 1){
	if(n <= 1){
		return 1 * p;
	}else{
		let result = n * p;
		return factorial(n - 1, result)
	}
}



