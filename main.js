// Ctrl + / ==> comment

// window.alert("Hello")

/*
    Console Methods
        log
        error
        table

    Web API
    
    Styling Console
        Directive %c ==> for syle spacific item
*/

/*
    Es6 ==> ECMAScript
*/

/*
    Data Types Intro
        String
        Number
*/

/* 
Varibles
--id and global variable
-- Loosely Typed Vs Strongly Typed

*/
console.log("Raghad Said");
console.log(typeof "Raghad Said");
console.log(typeof 5000);
console.log(typeof [10, 15, 17]);
console.log(typeof ["Ra", "Moh", "Sa"]);
console.log(typeof { name: "Raghad", age: 17, country: "Eg" });
console.log(typeof true);
console.log(typeof false);
console.log(typeof undefined);
console.log(typeof null);

var user = "Test",
  age = 30;
console.log(user);
console.log(user);
console.log(age);
console.log("hello");

console.log(test);
test.innerHTML = "Option";

/*
    var
        - Redeclare (Yes)
        - Access Before Declare (Undefined)
        - Variable Scope Drama [Added To Window] ()
        - Block or Function Scope

        
    let
        - Redeclare (No => Error)
        - Access Before Declare (Error)
        - Variable Scope Drama ()
        - Block or Function Scope

        
    const
        - Redeclare (No => Error)
        - Access Before Declare (Error)
        - Variable Scope Drama ()
        - Block or Function Scope

*/
/*
    String Syntax + character escape sequences
    \ Escape + Line Continue 
    \n ==> new line
*/

/*
    Concatenation
    
*/
let a = "We Love";
let b = "JavaScript";

document.write(a + " " + b);
console.log(a, b);

/*
    Template Literals (Template Strings)

*/

let c = "We Love";
let d = "JavaScript";
let e = "and";
let f = "Programming";

console.log(c + " " + d + "\n" + e + " " + f);

console.log(`${c} ${d} 
${e} ${f}`);

// Add Variables Here
let NumberOne = 10;
let NumberTwo = 20;

// Ouput
console.log(NumberOne, NumberTwo); // Normal Concatenate => 1020
console.log("NumberOne NumberTwo"); // Normal Concatenate => String
console.log(`${NumberOne} ${NumberTwo}`); // Template Literals Way => 1020
console.log("NumberOne" + " " + "NumberTwo"); // Template Literals Way => String

console.log(NumberTwo + "\n" + NumberOne);
/*
Normal Concatenate
20
10
*/

console.log(`${NumberTwo}
${NumberOne}`);
/*
Template Literals Way
20
10
*/

console.log(
  typeof { TheTitle: "Elzero", Description: "Elzero Web School", Date: "25/10" }
);

// let mark = `
// <div class="card">
//     <div class="child>
//         <h3>${TheTitle}</h3>
//             <p>${Description}</p>
//                 <span>${Date}</span>
//     </div>
// </div>
// `;
/*


Arithmetic Operators
+ Addition
- Subtraction
* Multiplication
/ Division
** Exponentiation (ES7)
% Modulus (Division Remainder)
++ Increment [ Post / Pre ] ==> ++pre bezod rakm 2abl el print | post++ print 2abl ama yzawd
-- Decrement [ Post / Pre ]
*/

console.log(10 + 20);
console.log(10 + "Osama");

console.log(10 - 20);
console.log(10 - "Osama"); // NaN
console.log(typeof NaN);

console.log(10 * 20);
console.log(10 * -20);

console.log(20 / 5);
console.log(20 / 3);

console.log(2 ** 4);
console.log(2 * 2 * 2 * 2);

console.log(10 % 2);
console.log(11 % 2); // Remove 1

/*
- + Unary Plus [Return Number If Its Not Number]
- - Unary Negation [Return Number If Its Not Number + Negates It]
Tests
- Normal Number
- String Number
- String Negative Number
- String Text
- Float
- Hexadecimal Numeral System => 0xFF
- null
- false
- true
*/

console.log(+100);
console.log(+"100");
console.log(+"-100");
console.log(+"Osama");
console.log(+"15.5");
console.log(+0xff);
console.log(+null);
console.log(+false);
console.log(+true);

console.log(-100);
console.log(-"100");
console.log(-"-100");
console.log(-"Osama");
console.log(-"15.5");
console.log(-0xff);
console.log(-null);
console.log(-false);
console.log(-true);

console.log(Number("100"));

/*
Type Coercion (Type Casting)
- +
- -
- "" - 2
- false - true
*/

let g = "100";
let h = 20;
let i = true;

console.log(+g + h + i);

/*
Assignment Operators
*/

let aa = 10;

aa = aa + 20;

aa = aa + 70;

aa += 100; // aa = aa + 100

aa -= 50; // aa = aa - 50

aa /= 50; // aa = aa / 50
console.log(aa);

/*
Challenge 1
*/

let aaa = 10;
let bb = "20";
let cc = 80;

console.log(++aaa + +bb++ + +cc++ - +aaa++); //11 + 20 + 80 - 10 = 101
console.log(++aaa + -bb + +cc++ - -aaa++ + +aaa); //12 - 21 + 81 + 12 + 13 = 64
console.log(
  [--cc] + [+bb] + [--aaa] * [+bb++] - [+bb] * [aaa] + [--aaa] - [+true]
); // [79 + 20 + 9] * [20 - 20] * [10 + 9 -1] = 0

/*
[++a] [+]
[++a]
- Value:
- Explain:
[+]
- Explain:
*/

/*
Challenge 2
*/

let dd = "-100";
let ee = "20";
let ff = 30;
let gg = true;

// Only Use Variables Value
// Do Not Use Variable Twice

console.log(+dd * -ee); // 2000
console.log(); // 173

/*
Number
- Double Precision
- Syntactic Sugar "_"
- e
- **
- With Decimal
- Number + BigInt
- Number Min Value
- Number Max Value
*/

console.log(1000000);
console.log(1_000_000);
console.log(1e6); //e=0 ==>1000000
console.log(10 ** 6); // 10^6
console.log(10 * 10 * 10 * 10 * 10 * 10);
console.log(1000000.0);

console.log(Number.MAX_SAFE_INTEGER); // ==>
console.log(Number.MAX_VALUE); // ==> max number in js
console.log(Number.MAX_VALUE + 23434343434);

/*
Number Methods
- Two Dots To Call A Methods
- toString()
- toFixed()
- parseInt()
- parseFloat()
- isInteger() [ES6]
- isNaN() [ES6]
*/

console.log((100).toString());
console.log((100.1).toString());

console.log((100.554555).toFixed(2)); // ==> ya3nii 2 b3d el3lama bs, w el tofixed berag3 l

console.log(Number("100 Osama")); // ==> NaN ya3nii mafeesh rakm lw7do
console.log(+"100 Osama"); // NaN ya3nii mafeesh rakm lw7do
console.log(parseInt("100 Osama")); // analysis data and print number
console.log(parseInt("Osama 100 Osama")); // Nan (not a number)
console.log(parseInt("100.500 Osama")); //analysis data and print integer number
console.log(parseFloat("100.500 Osama")); // analysis data and print float number

console.log(Number.isInteger("100")); // ya3ni elrakm dh integer? ==> false
console.log(Number.isInteger(100.5)); // ya3ni elrakm dh integer? ==> false
console.log(Number.isInteger(100)); // ya3ni elrakm dh integer? ==> True

console.log(Number.isNaN("Osama" / 20)); // NaN (Not a Number) ==> sTrue

/*
Math Object
- round()
- ceil()
- floor()
- min()
- max()
- pow()
- random()
- trunc() [Es6]
*/

console.log(Math.round(99.2)); // lw el rakm b3ad el dot < 5 haikon 99
console.log(Math.round(99.5)); // w lw >= 5 hatkoon 100

console.log(Math.ceil(99.2)); // haia5od 2a3la rakm b3d el dot ya3nii hai3tbro 99.9 msh 99.2 ==> 100 "sa2f"
console.log(Math.floor(99.9)); //haia5od a2al rakm b3d el dot ya3nii hai3tbro 99.0 msh 99.9 ==> 100 "ard"

console.log(Math.min(10, 20, 100, -100, 90)); // ==> -100
console.log(Math.max(10, 20, 100, -100, 90)); // ==> 100

console.log(Math.pow(2, 4)); // power 2^4
console.log(Math.random()); // random number
console.log(Math.trunc(99.5)); // remove after dot | lw 3aiza asheel ai kosoor

/*
Number Challenge
*/

let r = 100;
let q = 2_00.5; // 200.5
let w = 1e2; //l00
let v = 2.4;

// Find Smallest Number In All Variables And Return Integer
console.log(Math.trunc(Math.min(r, q, w, v)));
console.log(Math.min(r, q, w, v));
let ddd = Math.min(r, q, w, v);
console.log(Math.trunc(ddd));

// Use Variables r + v One Time To Get The Needed Output
console.log(Math.pow(r, v)); // 10000

// Get Integer "2" From d Variable With 4 Methods
console.log(Math.round(v));
console.log(Math.floor(v));
console.log(Math.trunc(v));
console.log();

// Use Variables q + v To Get This Valus
console.log(); // 66.67 => String
console.log(); // 67 => Number

/*
String Methods
- Access With Index ==> (theName[1]) ya3ni 3aiz el cell 2 mn el array => h | w lw mafeesh charachter bekon el output undefined
- Access With charAt() ==> (theName.charAt (1)) ==> el charachter elli fi position 1 => h | 
w lw mafeesh charachter bekon el output fady
- length ==> total letters 
- trim() ==> cutting string spaces (   )
- toUpperCase() ==> AHMED
- toLowerCase() ==>ahmed
- Chain Methods ==> aktr mn operation m3 b3d =>  console.log(theName.trim().charAt(2).toUpperCase())
*/

let theName = "  Ahmed  ";

console.log(theName);
console.log(theName[1]);
console.log(theName[5]);

console.log(theName.charAt(1));
console.log(theName.charAt(5));

console.log(theName.length);
console.log(theName.trim());

console.log(theName.toUpperCase());
console.log(theName.toLowerCase());

console.log(theName.trim().charAt(2).toUpperCase());

/*
String Methods
- indexOf(Value [Mand], Start [Opt] 0) ==> Mand -> required | Opt -> Optional
- lastIndexOf(Value [Mand], Start [Opt] Length) ==> Lastindex - ya3nii mn el a5er ll awl
- slice(Start [Mand], End [Opt] Not Include End) ==> be2at3
- repeat(Times) [ES6] ==> hattkarr kam mara
- split(Separator [Opt], Limit [Opt]) ==> to array and cutting tool
*/

let eee = "Elzero Web School";

console.log(eee.indexOf("Web"));
console.log(eee.indexOf("Web", 8));
console.log(eee.indexOf("o")); // 5
console.log(eee.lastIndexOf("o")); // 15

console.log(eee.slice(2, 6));
console.log(eee.slice(-5, -3)); // - ya3nii hai3d mn el a5er

console.log(eee.repeat(5));

console.log(eee.split("", 6));

/*
String Methods
- substring ==> cut 
- substring(Start [Mand], End [Opt] Not Including End)
--- Start > End Will Swap
--- Start < 0 It Start From 0
--- Use Length To Get Last Character

- substr(Start [Mand], Characters To Extract)
--- Start >= Length = ""
--- Negative Start From End
- includes(Value [Mand], Start [Opt] Default 0) [ES6] ==> true or false
- startsWith(Value [Mand], Start [Opt] Default 0) [ES6] ==> btbd2 b letter 
- endsWith(Value [Mand], Length [Opt] Default Full Length) [ES6]
*/

let ccc = "Elzero Web School";

console.log(ccc.length);

console.log(ccc.substring(2, 6)); // zero
console.log(ccc.substring(6, 2)); // hai3ml swap w y5alii el start hia 2 => zero
console.log(ccc.substring(-10, 6)); // 0 - 6
console.log(ccc.substring(ccc.length - 5, ccc.length - 3)); // ==> 3lshan el index mn 1 msh 0

console.log(ccc.substr(0, 6));
console.log(ccc.substr(17));
console.log(ccc.substr(-3));
console.log(ccc.substr(-5, 2));

console.log(ccc.includes("Web")); // ==> start from index 0
console.log(ccc.includes("Web", 8)); // ==> start from index 8

console.log(ccc.startsWith("E")); // ==> start from index 0 -> true
console.log(ccc.startsWith("E", 2)); // ==> start from index 2 -> false
console.log(ccc.startsWith("z", 2)); // ==> true
console.log(ccc.startsWith("zero", 2)); // ==> true

console.log(ccc.endsWith("l")); // ==> true

/*
String Challenge
All Solutions Must Be In One Chain
You Can Use Concatenate
*/

let a2 = "Elzero Web School";

// Include This Method In Your Solution [slice, charAt]
console.log(a2.substr(2, 6).toUpperCase()); // Zero

// 8 H
console.log(); // HHHHHHHH

// Return Array
console.log(); // ["Elzero"]

// Use Only "substr" Method + Template Literals In Your Solution
console.log(); // Elzero School

// Solution Must Be Dynamic Because String May Changes
console.log(); // eLZERO WEB SCHOOl

/*
Comparison Operators
- == Equal -->
- != Not Equal

- === Identical
- !== Not Identical

- > Larger Than
- >= Larger Than Or Equal

- < Smaller Than
- <= Smaller Than Or Equal
*/

console.log(10 == "10"); // Compare Value Only
console.log(-100 == "-100"); // Compare Value Only
console.log(10 != "10"); // Compare Value Only

console.log(10 === "10"); // Compare Value + Type
console.log(10 !== "10"); // Compare Value + Type
console.log(10 !== 10); // Compare Value + Type

console.log(10 > 20);
console.log(10 > 10);
console.log(10 >= 10);

console.log(10 < 20);
console.log(10 < 10);
console.log(10 <= 10);

console.log(typeof "Osama" === typeof "Ahmed");

/*
Logical Operators
- ! Not
- && And
- || Or
*/

console.log(true);
console.log(!true);

console.log(10 == "10"); // true
console.log(!(10 == "10")); // false

console.log(10 == "10" && 10 > 8 && 10 > 50); // lazem kol el shroot tt7a22 3lshan y3ml true

console.log(10 == "10" || 10 > 80 || 10 > 50); // ai shart mn el 3 ykon sa7 3lshan y3ml true, w lw 1 mnhom msh mt7a22 brdo haikoon true

/*
Control Flow
- if
- else if
- else

if (Condition) {
// Block Of Code
}

*/

let price = 100;
let discount = true;
let discountAmount = 30;
let country = "KSA";

if (discount === true) {
  price -= discountAmount; // price = price - discountAmount
} else if (country === "Egypt") {
  price -= 40;
} else if (country === "Syria") {
  price -= 50;
} else {
  price -= 10;
}

console.log(price);

/*
Nested If
*/

let price2 = 100;
let discount2 = false;
let discountAmount2 = 30;
let country2 = "Egypt";
let student = true;

if (discount2 === true) {
  price2 -= discountAmount2;
} else if (country2 === "Egypt") {
  if (student === true) {
    price2 -= discountAmount2 + 30;
  } else {
    price2 -= discountAmount2 + 10;
  }
} else {
  price2 -= 10;
}

console.log(price2);

/*
Conditional (Ternary) Operator
*/

let theName2 = "Mona";
let theGender = "Female";
let theAge = 30;

if (theGender === "Male") {
  console.log("Mr");
} else {
  console.log("Mrs");
}

// Condition ? If True : If False

theGender === "Male" ? console.log("Mr") : console.log("Mrs");

let result = theGender === "Male" ? "Mr" : "Mrs";

document.write(result);

console.log(theGender === "Male" ? "Mr" : "Mrs");

console.log(`Hello ${theGender === "Male" ? "Mr" : "Mrs"} ${theName2}`);

theAge < 20
  ? console.log(20)
  : theAge > 20 && theAge < 60
  ? console.log("20 To 60")
  : theAge > 60
  ? console.log("Larger Than 60")
  : console.log("Unknown");

/*
Logical Or ||
-- Null + Undefined + Any Falsy Value
Nullish Coalescing Operator ??
-- Null + Undefined
*/

console.log(Boolean(100));
console.log(Boolean(-100));
console.log(Boolean(0));
console.log(Boolean(""));
console.log(Boolean(null));

let price3 = 0;

console.log(`The price3 Is ${price3 || 200}`); // lw el price falsey value haikon el output 200
console.log(`The price3 Is ${price3 ?? 200}`); // lw el price Null + Undefined(let price;) haikon el output 200 3'eer kda haital3 ai 7aga maktoba
