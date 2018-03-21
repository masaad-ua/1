/*26*/
function getValue(condition){
	if(condition){
		var value = "blue";
		return value;
	}else {
		// console.log(value);
		return null;

	}
}
getValue();

/*27*/

let text = "界";

// console.log(text.length);
// console.log(/^.$/.test(text));

// console.log(text.charAt(0));
// console.log(text.charAt(1));

// console.log(text.charCodeAt(0));
// console.log(text.charCodeAt(1));

/*40*/
let text1 = "界a";
// console.log(text1.charCodeAt(0));
// console.log(text1.charCodeAt(1));
// console.log(text1.charCodeAt(2));

// console.log(text1.codePointAt(0));
// console.log(text1.codePointAt(1));
// console.log(text1.codePointAt(2));

let values = ["界", "界"];

let normalized = values.map( function (text) {
	return text.normalize();
});


/*42*/
let text2 = "洋";
// console.log(text2.length);
// console.log(/^.$/.test(text2));
// console.log(/^.$/u.test(text2));


function codePointLength(text) {
	let result = text.match(/[\s\S]/gu);
	return result ? result.length : 0;
}
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
console.log("x".repeat(3));
console.log("hello".repeat(2));
console.log("abc".repeat(4));

let text3 = "hello1 hello2 hello3",
	pattern = /hello\d\s?/,
	result = pattern.exec(text3),

	globalPattern = /hello\d\s?/g,
	globalResult = globalPattern.exec(text3),

	stickyPattern =/hello\d\s?/y,
	stickyResult = stickyPattern.exec(text3);

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
console.log(hasRegExpY());

/***********50***********/
function getFlags(re){
    var text = re.toString();
    return text.substring(text.lastIndexOf("/") + 1, text.length);
}
var re = /ab/g;
console.log(getFlags(re));

/*********51**********/
//var message = "Multiline\
// string";
//console.log(message);

var message2 = "Multiline \n\
string";
console.log(message2);

/************54*************/

let name = "Nickolas",
    message = `Hello, ${name}.`;
console.log(message);

let count1 = 10,
	price1 = 0.25,
	message1 = `${count1} items cost $${(count1 * price1).toFixed(2)}.`;
console.log(message1);

let name3 = "Nicholas",
	message3 = `Hello,  ${
			`my name is ${name}`
		}.`;
console.log(message3);

/*******56******/
let count4 = 10,
	price4 = 0.25;
	//message4 = passthru `${count} items cost $${(count * price).toFixed(2)}.` ;

/******62******/
function makeRequest(url, timeout = 2000, callback = function(){}){

}

/*****64********/
function mixArgs(first ,second = "b"){
	console.log(arguments.length);
	console.log(first === arguments[0]);
	console.log(second === arguments[1]);

	first = "c";
	second = "d";

	console.log(first === arguments[0]);
	console.log(second === arguments[1]);
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
console.log(bookData2.author);

/*******74*******/
function doSomething(){

}
console.log(doSomething.name);
