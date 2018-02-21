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
