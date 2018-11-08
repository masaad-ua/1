/*************94***************/

function createPerson(name, age){
	return{
		name: name,
		age: age
	}
}

function createPerson2(name, age){
	return{
		 name,
		 age
	}
}
//console.log(createPerson("Maksym", "40"));
//console.log(createPerson2("Maksym", "40"));

/************95********/

var person = {
	name: "Nicholas",
	sayName: function(){
		//console.log(this.name);
	}
};

var person2 = {
	name: "Nicholas",
	sayName(){
		//console.log(this.name);
	}
};

person2.sayName();
/********97********/

var suffix3 = "name";
var person3 = {
	["first" + suffix3]: "Nicholas",
	["last" + suffix3]: "Zakaz"
};

/********98********/

//console.log(+0 == -0);
//console.log(+0 === -0);
//console.log(Object.is(+0, -0));

function mixin(receiver, supplier){
	Object.keys(supplier).forEach(function(key){
		receiver[key] = supplier[key];
	});
	return receiver;
}

/*********102********/

var obj = {
	a: 1,
	0: 1,
	c: 1,
	2: 1,
	b: 1,
	1: 1
};
obj.d = 1;
//console.log(Object.getOwnPropertyNames(obj).join("")); //"012acbd"

/**********103**********/

let person4 = {
	getGreeting(){
		return "Hello"
	}
};

let dog4 = {
	getGreeting(){
		return "Woof";
	}
};

//прототип person
let friend4 = Object.create(person4);
//console.log(friend4.getGreeting());
//console.log(Object.getPrototypeOf(friend4) === person);

//сменить прототип на dog
Object.setPrototypeOf(friend4, dog4);
//console.log(friend4.getGreeting());
//console.log(Object.getPrototypeOf(friend4) === dog4);

/**********104**********/


/*********106**********/
let person5 = {
	getGreeting(){
		return "Hello";
	}
};

//прототип - person
let friend5 = {
	getGreeting(){
		return  Object.getPrototypeOf(this).getGreeting.call(this) + ", hi!";
	}
};

Object.setPrototypeOf(friend5, person5);

//прототип - friend
let relative5 = Object.create(friend5);

//console.log(person5.getGreeting()); //"Hello"
//console.log(friend5.getGreeting());  //"Hello, hi!"
//console.log(relative5.getGreeting());  //"Hello, hi!"

/************110*********/

let node = {
	type: "Identifier",
	name: "foo"
};

let {type , name } = node;

//console.log(type);
//console.log(name);


/**********113**********/
let node2 = {
	type: "Identifier",
	name: "foo"
};

let { type: localType ,name: localName } = node2;
//
//console.log(localType);
//console.log(localName);

/******115*******/
let node3 = {
	type: "Identifier",
	name: "foo",
	loc:{
		start: {
			line: 1,
			column: 1
		},
		end: {
			line: 1,
			column: 4
		}
	}
};


let colors = ["red", "green", "blue"];
let [ firstColor, secondColor] = colors;

console.log(firstColor);
console.log(secondColor);

/***********125*********/
let firstName6 =  Symbol();
let person6 = {};

person6[firstName6] = "Nicholas";
console.log(person6[firstName6] );

/*******127********/

let uid = Symbol.for("uid");
let object = {};

object[uid] = "12345";
console.log(object[uid]);
console.log(uid);

/*******127********/

let uid2 = Symbol.for("uid");
let object2 = {
	[uid2]: "12345"
};

let symbols = Object.getOwnPropertySymbols(object);
console.log(symbols.length);
console.log(symbols[0]);
console.log(object[symbols[0]]);

/*********132*********/
var arr = [];
console.log(arr instanceof  Array);
//Копия ------>
console.log(Array[Symbol.hasInstance](arr));

function MyObject(){
	//пустая
}

Object.defineProperty(MyObject, Symbol.hasInstance, {
	value: function(v){
		return false;
	}
});
/*********134*********/
let collection = {
	0: "Hello",
	1: "world",
	length: 2,
	[Symbol.isConcatSpreadable]: true
};

let messages = ["Hi"].concat(collection);

console.log(messages.length);
console.log(messages);

/*********136*********/
let hasLengthOf10 = {
	[Symbol.match]: function(value){
		return value.length === 10 ? [value.substring(0, 10)] : null;
	},
	[Symbol.replace]: function(value, replacement){
		return value.length === 10 ? replacement + value.substring(10) : value;
	},
	[Symbol.search]:function(value){
		return value.length === 10 ? 0 : -1;
	},
	[Symbol.split]: function(value){
		return value.length === 10 ? ["", ""]: [value];
	}
};

let message1 = "Hello world",
	message2 = "Hello John";

let match1 = message1.match(hasLengthOf10),
	match2 = message2.match(hasLengthOf10);

console.log(match1);
console.log(match2);

/*******137********/
function Temperature(degrees){
	this.degrees = degrees;
}

Temperature.prototype[Symbol.toPrimitive] = function(hint){
	switch (hint){
		case "string":
			return this.degrees  + "\u00b0";
		case "number":
			return this.degrees;
		case "default":
			return this.degrees + "degrees";
	}
};

var freezing = new Temperature(32);

console.log(freezing + "!");
console.log(freezing / 2);
console.log(String(freezing));


/*******140*******/

function Person(name){
	this.name = name;
}
Person.prototype[Symbol.toStringTag] = "Person";
var  me = new Person("Nicholas");

console.log(me.toString());
console.log(Object.prototype.toString.call(me));

/******142********/

Array.prototype[Symbol.toStringTag] = "Magic";
var values = [];
console.log(Object.prototype.toString.call(values));

/*******146*******/
var set = Object.create(null);
set.foo = true;




/*******148*******/

let set2 = new Set();
set2.add(5);
set2.add("5");

console.log(set2.size); //2

/*********150********/
let set3 = new Set();
set3.add(5);
set3.add("5");

console.log(set3.has(5));
set3.clear();

let set4 = new Set([1, 2]);

let processor = {
	output(value){
		console.log(value);
	},
	process(dataSet){
		dataSet.forEach(function(value){
			this.output(value);
		}, this);
	}
};

processor.process(set4);

/**********153**********/
function  eliminateDuplicates(items){
	return [...new Set(items)];
}

let numbers = [1, 2, 3, 3, 3, 4 ,5],
	noDuplicates = eliminateDuplicates(numbers);

console.log(noDuplicates);
/**********155**********/

let map = new Map();
map.set("title", "Understanding ECMAScript 6");
map.set("year", 2016);

console.log(map.get("title"));
console.log(map.get("year"));
/******160*********/

let map2 = new WeakMap(),
	element = document.querySelector(".element");

map2.set(element, "Original");

let value = map2.get(element);
console.log(value);

element.parentNode.removeChild(element);
element = null;

console.log(map2.has(element));


/*******163*******/

var Person = (function () {
	var privateData = {},
		privateID = 0;
	function Person(name){
		Object.defineProperty(this, "_id",{value: privateID++});
		privateData[this._id] = {
			name: name
		};
	}

	Person.prototype.getName = function(){
		return privateData[this._id].name;
	};
	return Person;
}());

/*********167*********/
/********Итератор на EcmaScript 5******/

function  createIterator(items){
	var i = 0;
	return{
		next: function(){
			var done = (i >= items.length);
			var value = !done ? items[i++] : undefined;

			return {
				done: done,
				value: value
			}
		}

	}
}

var iterator = createIterator([1, 2, 3]);

console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());

/**Генератор****/
function  *createIterator2(){
	yield 1;
	yield 2;
	yield 3;
}
let iterator2 = createIterator2();

console.log(iterator2.next().value);
console.log(iterator2.next().value);
console.log(iterator2.next().value);

/******169**********/

function *createIterator3(items){
	for(let i = 0; i < items.length; i++ ){
		yield items[i];
	}
}

let iterator3 = createIterator3();

/*********172**********/

let values4 = [11, 22, 33];

for(let num4 of values4){
	console.log(num4);
}
console.log(values4);

let iterator4 = values4[Symbol.iterator]();

console.log(iterator4.next());
console.log(iterator4.next());
console.log(iterator4.next());

/*********173**********/
let collection5 = {
	items: [],
	*[Symbol.iterator](){
		for(let item of this.items){
			yield item;
		}
    }
};

collection5.items.push(1);
collection5.items.push(2);
collection5.items.push(3);

for(let x of collection5){
	console.log(x);
}

/*********175**********/

let colors6 = ["red", "green", "blue"];
let tracking6 = new Set([1234, 5678, 9012 ]);
let data6 = new Map();

data6.set("title", "Understanding ECMAScript 6");
data6.set("format", "ebook");

for(let entry of colors6.entries()){
	console.log(entry);
}
for(let entry of tracking6.entries()){
	console.log(entry);
}
for(let entry of data6.entries()){
	console.log(entry);
}

/***********178***********/

let data = new Map();

data.set("title",  "Understanding ECMAScript 6");
data.set("format", "ebook");

for (let [key, value] of data){
	console.log(key + `=` + value);
}

/***********181***********/

let smallNumber = [1, 2, 3],
	bigNumber = [100, 101, 102],
	allNumber = [0,...smallNumber,...bigNumber];
console.log(allNumber.length);
console.log(allNumber);

/***********182***********/

function *createIterator7(){
	let first = yield 1;
	let second = yield first + 2;
	yield second + 3;
}

let iterator7 = createIterator7();
console.log(iterator7.next());

/***********184***********/

function *createIterator8(){
	let first = yield 1;
	let second = yield first + 2;
	yield second + 3;
}

let iterator8 = createIterator8();

console.log(iterator8.next());
console.log(iterator8.next(4));
//console.log(iterator8.throw(new Error("Boom")));

/*******185*********/
function *createIterator9(){
	yield 91;
	return 942;
}

let iterator9 = createIterator9();

console.log(iterator9.next());
console.log(iterator9.next());
console.log(iterator9.next());



/*******187*********/
function  *createNumberIterator(){
	yield 1;
	yield 2;
}

function *createColorIterator(){
	yield "red";
	yield "green";
}

function *createCombinedIterator(){
	yield *createNumberIterator();
	yield *createColorIterator();
	yield  true;
}

var iterator10 = createCombinedIterator();
console.log("/********187**********/");
console.log(iterator10.next());
console.log(iterator10.next());
console.log(iterator10.next());
console.log(iterator10.next());
console.log(iterator10.next());
console.log(iterator10.next());

/*********188**********/
console.log("/********188**********/");



