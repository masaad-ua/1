/**********281**********/

let target = {};
let proxy = new Proxy(target, {});

proxy.name = 'proxy';
console.log(proxy.name);
console.log(target.name);


target.name = 'target';
console.log(proxy.name);
console.log(target.name);

console.log(proxy);
console.log(target);

/**********283**********/
let target2 = {};
let proxy2 = new Proxy(target2, {
	set(trapTarget, key, value, receiver){

		//игнорировать существующие св-ва объекта б
		// на которые действия ловушки не распростроняется
		if(!trapTarget.hasOwnProperty(key)){
			if(isNaN(value)){
				throw new TypeError("Property must be a number")
			}
		}

		return Reflect.set(trapTarget, key, value, receiver);
	}
});

proxy2.count = 1;

console.log(proxy2.count);
console.log(target2.count);

/**********285**********/
let proxy3 = new Proxy({}, {
	get(trapTarget, key, receiver){

		if(!(key in receiver)){
			throw new TypeError("Property" + key + " doesn`t exist.")
		}

		return Reflect.get(trapTarget, key, receiver);
	}
});

//допускается добавление свойства
proxy3.name = 'proxy';
console.log(proxy3.name);

// console.log(proxy3.nme);

let target4 = {
	value: 42
};

console.log("value" in target4);
console.log("toString" in target4);

/**********288**********/


let target5 = {
	name: "target",
	value: 42
};

let proxy5 = new Proxy(target5, {
	deleteProperty(trapTarget, key){

		if(key === "value"){
			return false;
		}else{
			return Reflect.deleteProperty(trapTarget, key);
		}
	}
});
//попытаться удалит свойство proxy.value
console.log("value" in proxy5);
let result5 = delete proxy5.value;

console.log(result5);
console.log("value" in proxy5);

/**********295**********/

let proxy6 = new Proxy({}, {
	defineProperty(trapTarget, key, descriptor){

		if( typeof key === "symbol"){
			return false;
		}
		return Reflect.defineProperty(trapTarget, key, descriptor);
	}
});

Object.defineProperty(proxy6, "name", {
	value: "proxy"
});
console.log(proxy6.name);
let nameSymbol = Symbol("name");
//
// Object.defineProperty(proxy6, nameSymbol,{
// 	value: "proxy"
// });


/**********299**********/

let proxy7 = new Proxy({},{
	ownKeys(trapTarget){
		return Reflect.ownKeys(trapTarget).filter(key => {
			return typeof key !== "string" || key[0] !== "_"
		});
	}
});

let nameSymbol6 = Symbol("name");

proxy7.name = "proxy";
proxy7._name = "private";
proxy7[nameSymbol] = 'symbol';

let names7 = Object.getOwnPropertyNames(proxy7),
	keys7 = Object.keys(proxy7),
	symbols7 = Object.getOwnPropertySymbols(proxy7);

console.log(names7.length);
console.log(names7[0]);

console.log(keys7.length);
console.log(keys7[0]);

console.log(symbols7.length);
console.log(symbols7[0]);

/**********301**********/

let target8 = function () { return 42},
	proxy8  = new Proxy(target8, {
		apply: function (trapTarget, thisArg, argumentList) {
			return Reflect.apply(trapTarget, thisArg, argumentList);
		},
		construct: function (trapTarget, argumentList) {
			return Reflect.construct(trapTarget, argumentList);
		}
});
//прокси-объект, целью которого является функция, выглядит как функция
console.log(typeof proxy8);
console.log(proxy8());

var instance8 = new proxy8();
console.log(instance8 instanceof proxy8);
console.log(instance8 instanceof target8);

/**********303**********/

function Numbers9(...values){
	if( typeof new.target === "undefined"){
		throw new TypeError("This function must be called with new.");
	}
	this.values = values;
}


let NumberProxy9 = new Proxy(Numbers9,{
	apply: function (trapTarget, thisArg, argumentsList) {
		return Reflect.construct(trapTarget, argumentsList);
	}
});

let instance9 = NumberProxy9(1, 2, 3, 4);
console.log(instance9.values);

class AbstractNumbers {
	constructor(...values){
		if(new.target === AbstractNumbers){
			throw new TypeError ("This function must be inherit from.")
		}
		this.values = values;
	}
}

class Numbers10 extends AbstractNumbers{}

let instance10 = new Numbers10(1, 2, 3, 4);
console.log(instance10.values);

/**********308**********/

function  toUint32(value) {
	return Math.floor(Math.abs(Number(value))) % Math.pow(2, 32);
}

function isArrayIndex(key) {
	let numericKey = toUint32(key);
	return String(numericKey) == key && numericKey < (Math.pow(2, 32) - 1);
}

function  createMyArray(length = 0) {
	return new Proxy({length}, {
		set(trapTarget, key, value){
			let currentLength  = Reflect.get( trapTarget, "length");
			//специальный случай

			if(isArrayIndex(key)){
				let numericKey = Number(key);

				if(numericKey >= currentLength){
					Reflect.set(trapTarget ,"length", numericKey + 1)
				}
			}

			//следующая интсрукция выполняется всегда
			// независимо от типа ключа
			return Reflect.set(trapTarget, key, value);
		}
	})
}

let colors = createMyArray(3);
console.log(colors.length);

colors[0] = 'red';
colors[1] = 'green';
colors[2] = 'blue';
console.log(colors.length);

colors[3] = "black";

console.log(colors.length);
console.log(colors[3]);

/**********310**********/


function  createMyArray2(length = 0) {
	return new Proxy({length}, {
		set(trapTarget, key, value){
			let currentLength  = Reflect.get( trapTarget, "length");
			//специальный случай

			if(isArrayIndex(key)){
				let numericKey = Number(key);

				if(numericKey >= currentLength){
					Reflect.set(trapTarget ,"length", numericKey + 1)
				}
			}
			else if(key === 'length'){

				if(value < currentLength){
					for(let index = currentLength - 1; index >= value; index --){
						Reflect.deleteProperty(trapTarget, index);
					}
				}
			}

			//следующая интсрукция выполняется всегда
			// независимо от типа ключа
			return Reflect.set(trapTarget, key, value);
		}
	})
}

let colors2 = createMyArray2(3);
console.log(colors2.length);

colors2[0] = 'red';
colors2[1] = 'green';
colors2[2] = 'blue';
colors2[3] = 'black';
console.log(colors2.length);

colors2.length = 2;

console.log(colors2.length);
console.log(colors2[3]);
console.log(colors2[2]);
console.log(colors2[1]);
console.log(colors2[0]);

/**********312**********/

class Thing{
	constructor(){
		return new Proxy(this,{})
	}
}

let myThing = new Thing();
console.log(myThing instanceof Thing);

/**********313**********/
var obj = Object.create({name: "red"});
console.log(obj);

/**********318**********/

function NoSuchProperty() {
	
}
NoSuchProperty.prototype = new Proxy({},{
	get(trapTarget, key, recweiver){
		throw new ReferenceError(`${key} doesn't  exist`)
	}
});


let thing = new NoSuchProperty();
//вызовет ошибку в ловушке `get`


/**********318**********/