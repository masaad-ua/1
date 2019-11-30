/********196********/

function  PersonType() {
	var anotherName = "";
	this.name = name;
}
PersonType.prototype.sayName = function () {
	// console.log(this.name);
};

var person = new PersonType('Nicholas');
person.sayName();
//
//
// console.log(person instanceof PersonType);
// console.log(person instanceof Object);
// console.log(PersonType.anotherName);

/********197********/

class PersonClass{

	// эквивалент конструктора фукциии
	constructor(name){
		this.name = name;
	}

	//зквивалент метода PersonType.prototype.sayName
	sayName(){
		// console.log(this.name);
	}
}

let person2 = new PersonClass("Nicholas");
person2.sayName();
//
// console.log(person2 instanceof PersonClass);
// console.log(person2 instanceof Object);


/********199********/

let PersonType2 = (function () {
	"use strict";

	const PersonType2 = function () {
		if(typeof  new.target === 'undefined'){
			throw new Error ("Constructor must be called with new")
		}
		this.name = name;
	};
	Object.defineProperty(PersonType2.prototype, "sayName", {
		value: function () {
			// гарантировать новозможность вызова метода
			// с ключевым словом new
			if(typeof  new.target === 'undefined'){
				throw new Error ("Constructor must be called with new")
			}
			// console.log(this.name);
		},
		enumerable: false,
		writable: true,
		configurable: true
	});

	return PersonType2
}());

/********199********/

let  PersonClass3 = class {
	//эквивалент конструктора PersonType
	constructor(name){
		this.name = name;
	}

	// эквивалент PersonType.prototype.sayName
	sayName(){
		// console.log(this.name)
	}
};

let person3 = new PersonClass3("Nicholas");
person3.sayName();

// console.log(person3 instanceof PersonClass);
// console.log(person3 instanceof Object);
//
// console.log(typeof PersonClass);
// console.log(typeof PersonClass.prototype.sayName);


/********203********/

function createObject(classDef) {
	return new classDef();
}

let obj = createObject(class{
	sayHi(){
		// console.log("Hi MAX!")
	}
});

obj.sayHi();
//Синглтон

let person4 = new class{
	constructor(name){
		this.name = name;
	}
	sayName(){
		console.log(this.name)
	}
}("Nicholas");

person4.sayName();


/********204********/
class CustomHTMLElement {
	constructor(element){
		this.element = element;
	}

	get html(){
		return this.element.innerHTML;
	}

	set html(value){
		this.element.innerHTML = value;
	}
}

/********206********/


class MyClass {
	*createIterator(){
		yield  1;
		yield  2;
		yield  3;
	}
}

let instance = new MyClass();
let iterator = instance.createIterator();

class Collection{
	constructor(){
		this.items  = []
	}

	*[Symbol.iterator](){
		yield  *this.items.value()
	}
}

/********208********/

function  PersonType5(name) {
	this.name = name;
}

//статический  метод
PersonType5.create = function (name){
	return new PersonType5(name);
};

//метод экземплера
PersonType5.prototype.sayName = function(){
	console.log(this.name)
};

var person5 = PersonType5.create("Nicholas");

console.log(person5);

/********209********/
function Rectangle(length, width) {
	this.length = length;
	this.width = width;
}

Rectangle.prototype.getArea = function () {
	return this.length * this.width;
};

function Square(length) {
	Rectangle.call(this, length, length)
}

Square.prototype = Object.create(Rectangle.prototype, {
	constructor:{
		value: Square,
		enumerable: true,
		writable: true,
		configurable: true
	}
});

var square = new Square(3);

console.log(square.getArea());
console.log(square instanceof Square);
console.log(square instanceof Rectangle);

/********210********/

class Rectangle1 {
	constructor(length, width){
		this.length = length;
		this.width = width
	}

	getArea(){
		return  this.length * this.width;
	}
}

class Square1 extends Rectangle1 {
	constructor(length){
		super(length, length)
	}
}

/********211********/

function Rectangle2( length, width) {
	this.length = length;
	this.width = width
}

Rectangle2.prototype.getArea = function () {
	return this.length * this.width;
};

function  getBase2() {
	 return  new Rectangle2;
}

class Square2 extends getBase2 {
	constructor(length){
		super(length, length)
	}
}

var x2  = new Square2(3);

console.log(x2.getArea());
console.log(x2 instanceof  Rectangle2);


/********213********/

let SerializableMixin = {
	serialize(){
		return JSON.stringify(this)
	}
};


let AreaMixin = {
	getArea() {
		return this.length * this.width;
	}
};

function mixin(...mixins){
	var base  = function(){};
	Object.assign(base.prototype, ...mixins);
	return base;
}


class Square4 extends mixin(AreaMixin, SerializableMixin){
	constructor(length){
		super();
		this.length = length;
		this.width = length;
	}
}

var x3 = new Square4(3);
console.log(x3.getArea()); // 9
console.log(x3.serialize()); // ”{"1ength":3,”w1dth":3}”

/*********216********/

class MyArray extends  Array{

}
let items = new MyArray(1,2,3,4),
	subitems = items.slice(1, 2);
console.log(items instanceof  MyArray);
console.log(subitems instanceof  MyArray);

/*********218***********/

class MyClass5 {

	static get [Symbol.species](){
		return this;
	}

	constructor(value){
		this.value = value;
	}

	clone(){
		return new this.constructor[Symbol.species](this.value);
	}
}

class MyDerivedClass1 extends  MyClass{

}
class MyDerivedClass2 extends  MyClass{
	static  get [Symbol.species](){

	}
}
/*********220***********/

class Rectangle6{
	constructor(length, width){
		console.log(new.target === Rectangle6);
		this.length = length;
		this.width = width;
	}
}

var obj6 = new Rectangle6;
// console.log(obj6);
/*********220***********/
let items7 = Array.of(1, 2, 3);

console.log(items7.length);
console.log(items7[0]);
console.log(items7[1]);

/*********225***********/

function doSomething() {
	var args  = Array.from(arguments);
}

function translate() {
	return Array.from(arguments, (value) => value + 1)
}
let numbers = translate(8, 9, 10, 67);
console.log(numbers);

/*********227***********/

let helper8 = {
	diff: "aaa",
	add(value){
		return value + this.diff;
	}
};

function translate8() {
	return Array.from(arguments, helper8.add, helper8);
}
let numbers8 = translate8(1, 2, 3);
console.log(numbers8);

/*********228***********/

let numbers9 = [25, 30 ,35, 54];

console.log(numbers9.find(n => n > 33));
console.log(numbers9.findIndex(n => n > 33));


/*********229***********/

let numbers10 = [25, 30 ,35, 54];

numbers10.fill(1);
console.log(numbers10);

let numbers11 = [25, 30 ,35, 54];

numbers11.fill(1, "777");
console.log(numbers11);

let numbers12 = [2, 3 , 4, 5];
numbers12.copyWithin(2, 0);
console.log(numbers12);

/*********232***********/

let buffer = new ArrayBuffer(10);
console.log(buffer.byteLength);

/*********234***********/
let buffer2 = new ArrayBuffer(10);
let view2 = new DataView(buffer2);
console.log(view2.buffer === buffer2);

/*********235***********/

let buffer3 = new ArrayBuffer(2);
let view3 = new DataView(buffer3);

view3.setInt8(0, 5);
view3.setInt8(1 ,-1);

console.log(view3.getInt8(0));
console.log(view3.getInt8(1));
console.log(view3.getInt16(0));

console.log(view3);

/*********237***********/

let ints = new Int16Array(2),
	floats = new Float32Array(5);


console.log(ints.byteLength);
console.log(ints.length);

console.log(floats.byteLength);
console.log(floats.length);

/*********242***********/

let ints5 = new Int16Array([25, 50]);
console.log(ints5 instanceof Array);
console.log(Array.isArray(ints5));

/*********245*********/

let ints6 = new Int16Array(4);
ints6.set([25, 50]);
ints6.set([75, 100], 2);
console.log(ints6.toString());

let ints7 = new Int16Array([25, 50, 75, 100]),
	subints1 = ints7.subarray(),
	subints2 = ints7.subarray(2),
	subints3 = ints7.subarray(1, 3);

console.log(ints6.toString());

/*********246***********/

function readFile (arg, callBack){
	arg = arg + 10;

	callBack(arg);
}

readFile(10, function(arg) {
	console.log(arg)
});

/*********256***********/

let promise = Promise.resolve(42);
promise.then(function(value){
	console.log(value);
});

let promise2 = Promise.reject(420);
promise2.catch(function (value) {
	console.log(value);
});

/*********257***********/

let thenable = {
	then: function (resolve, reject) {
		resolve(6678);
	}
};

let p1 = Promise.resolve(thenable);
p1.then(function (value) {
	console.log(value);
});

// let promise3 = new Promise(function (resolve, reject) {
// 	throw  new Error("Explosion!");
// });



/**********262**********/

let rejected;

window.onunhandledrejection = function (event) {
	console.log(event.type);
	console.log(event.reason.message);
	console.log(rejected === event.promise);
};

window.onrejectionhandled = function (event) {
	console.log(event.type);
	console.log(event.reason.message);
	console.log(rejected === event.promise);
};

// rejected = Promise.reject(new Error("Explosion!"));

/**********264**********/

let p11 =  new Promise(function (resolve, reject) {
	resolve(5555555555);
});

p11.then(function (value){
	console.log(value);
}).then(function (){
	console.log("Finished");
});


/**********264**********/

let p12 = new Promise(function (resolve, reject) {
	throw new Error("Explosion!");
});

p12.catch(function (error) {
	console.log(error.message);
	throw new Error("Boom!");
}).catch(function (error) {
	console.log(error.message);
});
/**********264**********/
class  MyPromise extends Promise{
	success(){
		
	}
}


