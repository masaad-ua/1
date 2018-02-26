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


let pattern2 = /hello\d/y;
console.log(pattern2.sticky);


