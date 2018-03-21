/*************25**************/

let a = 12; // доступна глобально
function  myFunction(){
    console.log(a);
    let b = 13; //доступна в пределах функции\
    if(true){
        let c = 14; // достуна только в инструкции "if"
        console.log(b);
    }
    console.log(c);

}
//myFunction();


//var a = 0;
//var a =1;
//console.log(a);
function  myFunction2(){
    var b = 2;
    var b = 3;
    console.log(b);
}



//myFunction2();

/*************28**************/

const pi = 3.141;
var r = 2;
//console.log(pi * r  * r); //Выведет "12.564"
//pi = 12;

/*************31*************/
function myFunction3(a, b){
    return a + b;
}
var data = [1, 4];
var result = myFunction3.apply(null, data);
//console.log(result);

var result2 = myFunction3(...data);
//console.log(result2);


/*************32*************/

let array1 = [2,3,4];
let array2 = [1,...array1, 6, 7, 7];
//console.log(array2);

/*************33*************/

function  myFunction4(a, b){
    var args = Array.prototype.slice.call(arguments, myFunction4.length)
}


/*************35*************/

let myArray = [1, 2, 3];
let a2, b2, c2;
[a2, b2, c2] = myArray;

console.log(myArray);


let [a3,...b3] = [1, 2, 3, 4, 5, 6];
console.log(a3);
console.log(Array.isArray(b3));
console.log(b3);

/*************35*************/
let text1 = "hello1 hello2 hello3",
    pattern1 = /hello\d\s?/,
    result1 = pattern1.exec(text1),

    globalPattern = /hello\d\s?/g,
    globalResult = globalPattern.exec(text1),

    //stickyPattern = /hello\d\s?/y,
    stickyResult = globalPattern.exec(text1);

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

