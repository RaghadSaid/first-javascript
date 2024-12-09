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
let i1 = true;

console.log(+g + h + i1);

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

/*
  Switch Statement
  switch(expression) {
    Case 1:
      // Code Block
      break;
    Case 2:
      // Code Block
      break;
    Default: ==> ya3ni lw mafeesh ai case hai7ot el default
      // Code Block
  }
  - Default Ordering
  - Multiple Match
  - ===
*/

let day = "A";

switch (day) {
  default:
    console.log("Unknown Day");
    break;
  case 0:
    console.log("Saturday");
    break;
  case 1:
    console.log("Sunday");
    break;
  case 2:
  case 3:
    console.log("Monday");
    break;
}

/*
  Switch Challenge
*/
let job2 = "Manager";
let salary2 = 0;
switch (job2) {
  case "Manager":
    salary2 = 8000;
    console.log(`My Salary is ${salary2}`);
    break;
  case "IT" || "Support":
    salary2 = 6000;
    console.log(`My Salary is ${salary2}`);
    break;
  case "Developer" || "Designer":
    salary2 = 7000;
    console.log(`My Salary is ${salary2}`);
    break;

  default:
    salary2 = 4000;
    console.log(`Salary is ${salary2}`);
    break;
}

let job = "Manager";
let salary = 0;

if (job === "Manager") {
  salary = 8000;
} else if (job === "IT" || job === "Support") {
  salary = 6000;
} else if (job === "Developer" || job === "Designer") {
  salary = 7000;
} else {
  salary = 4000;
}
console.log(salary);

/*
  If Challenge
*/
let holidays2 = 0;
let money2 = 0;

if (holidays2 === 0) {
  money2 = 5000;
  console.log(`My Money is ${money2}`);
} else if (holidays2 === 1 || holidays2 === 2) {
  money2 = 3000;
  console.log(`My Money is ${money2}`);
} else if (holidays2 === 3) {
  money = 2000;
  console.log(`My Money is ${money2}`);
} else if (holidays2 === 4) {
  money2 = 1000;
  console.log(`My Money is ${money2}`);
} else if (holidays2 === 5) {
  money2 = 0;
  console.log(`My Money is ${money2}`);
} else {
  money2 = 0;
  console.log(`Money is ${money2}`);
}

let holidays = 0;
let money = 0;

switch (holidays) {
  case 0:
    money = 5000;
    console.log(`My Money is ${money}`);
    break;
  case 1:
  case 2:
    money = 3000;
    console.log(`My Money is ${money}`);
    break;
  case 3:
    money = 2000;
    console.log(`My Money is ${money}`);
    break;
  case 4:
    money = 1000;
    console.log(`My Money is ${money}`);
    break;
  case 5:
    money = 0;
    console.log(`My Money is ${money}`);
    break;
  default:
    money = 0;
    console.log(`My Money is ${money}`);
}

/*
  Arrays
  - Create Arrays [Two Methods] new Array() + []
  - Access Arrays Elements
  - Nested Arrays
  - Check For Array ==> Array.isArray(arr);
*/

let myFriends = ["Ahmed", "Mohamed", "Sayed", ["Marwan", "Ali"]];

console.log(`Hello ${myFriends[0]}`);
console.log(`Hello ${myFriends[2]}`);
console.log(`${myFriends[1][2]}`);
console.log(`Hello ${myFriends[3][1]}`);
console.log(`${myFriends[3][1][2]}`);

console.log(myFriends);
myFriends[1] = "Gamal"; //Change Arrays Elements
console.log(myFriends);
myFriends[3] = ["Sameh", "Ameer"];
console.log(myFriends);

console.log(Array.isArray(myFriends)); //Check For Array

/*
  Array Methods
  - Length
*/
// console.log (myFriends.length); ==> number of array
// Index Start From 0 [ 0, 1, 2, 3, 4 ]

let myFriends2 = ["Ahmed", "Mohamed", "Sayed", "Alaa"];

//myFriends[myFriends2.length] ="Osama"; ==> ya3nii add Osama in array sequance
//myFriends[myFriends2.length-1] ="Osama"; ==> ya3nii replace Alaa by Osama
myFriends2.length = 2; // control array ==> print two element ["Ahmed", "Mohamed"]

console.log(myFriends2);

/*
  Arrays Methods [Adding And Removing]
  - unshift("", "") Add Element To The First
  - push("", "") Add Element To The End
  - shift() Remove First Element From Array
  - pop() Remove Last Element From Array
*/

let myFriends3 = ["Ahmed", "Mohamed", "Sayed", "Alaa"];

console.log(myFriends3);

myFriends3.unshift("Osama", "Nabil");

console.log(myFriends3);

myFriends3.push("Samah", "Eman");

console.log(myFriends3);

let first = myFriends3.shift();

console.log(myFriends3);

console.log(`First Name Is ${first}`);

let last = myFriends3.pop();

console.log(myFriends3);

console.log(`Last Name Is ${last}`);

/*
  Arrays Methods [Search]
  - indexOf(Search Element, From Index [Opt]) => search from first index
  - lastIndexOf(Search Element, From Index [Opt]) => search from last index
  - includes(valueToFind, fromIndex [Opt]) [ES7]
*/

let myFriends4 = ["Ahmed", "Mohamed", "Sayed", "Alaa", "Ahmed"];

console.log(myFriends4);

console.log(myFriends4.indexOf("Ahmed"));
console.log(myFriends4.indexOf("Ahmed", 2));

console.log(myFriends4.lastIndexOf("Ahmed"));
console.log(myFriends4.lastIndexOf("Ahmed", -2));

console.log(myFriends4.includes("Ahmed"));
console.log(myFriends4.includes("Ahmed", 2));

if (myFriends4.lastIndexOf("Osama") === -1) {
  console.log("Not Found");
}

console.log(myFriends4.indexOf("Osama"));
console.log(myFriends4.lastIndexOf("Osama"));

/*
  Arrays Methods [Sort]
  - sort(Function [Opt])
  - reverse
*/

let myFriends5 = [10, "Sayed", "Mohamed", "90", 9000, 100, 20, "10", -20, -10];

console.log(myFriends5);
console.log(myFriends5.sort());
console.log(myFriends5.reverse());
console.log(myFriends5.sort().reverse());

/*
  Arrays Methods [Slicing]
  --- If Start Is Undefined => 0
  --- Negative Count From End
  --- If End Is Undefined || > Indexes => Slice To The End Array.length
  --- Return New Array
  - splice(Start [Mand], DeleteCount [Opt] [0 No Remove], The Items To Add [Opt])
  --- If Negative => Start From The End
*/

let myFriends6 = ["Ahmed", "Sayed", "Ali", "Osama", "Gamal", "Ameer"];
console.log(myFriends6);
console.log(myFriends6.slice()); // => All Array
console.log(myFriends6.slice(1)); // start from 1 ("Sayed")
console.log(myFriends6.slice(1, 3)); // slice(Start [Opt], End [Opt] Not Including End) ==> ("Sayed", "Ali")
console.log(myFriends6.slice(-3)); // from left ("Osama", "Gamal", "Ameer")
console.log(myFriends6.slice(1, -2)); // from left ("Sayed", "Ali", "Osama")
console.log(myFriends6.slice(-4, -2));
console.log(myFriends6); //Return New Array

myFriends6.splice(1, 2, "Sameer", "Samara");

console.log(myFriends6);

/*
  Arrays Methods [Joining]
  - concat(array, array) => Return A New Array ==> ya3ni badeef el NewFrindes w el schoolfriends m3 b3d fil allfriends

  - join(Separator) ==> bt7akm eh elli ykoun been kol item
*/

let myFriends7 = ["Ahmed", "Sayed", "Ali", "Osama", "Gamal", "Ameer"];
let myNewFriends = ["Samar", "Sameh"];
let schoolFriends = ["Haytham", "Shady"];

let allFriends = myFriends7.concat(
  myNewFriends,
  schoolFriends,
  "Gameel",
  [1, 2]
);
console.log(allFriends);

console.log(allFriends.join());
console.log(allFriends.join(""));
console.log(allFriends.join(" @ "));
console.log(allFriends.join("|"));
console.log(allFriends.join("|").toUpperCase());

/*
  Array Challenge
*/

let zero = 0;

let counter = 3;

let my = ["Ahmed", "Mazero", "Elham", "Osama", "Gamal", "Ameer"];

// Write Code Here

console.log(my);

// my.unshift("Osama");
console.log(my.slice(zero, counter).reverse());

console.log(my);
console.log(my.slice(0, 4).reverse());
// ["Osama", "Elham", "Mazero", "Ahmed"];

console.log(my.slice("????")); // ["Elham", "Mazero"]

console.log(); // "Elzero"

console.log(); // "rO"

/*
  Loop
  - For
  for ([1-initialization] [2-condition] [3-action after loop]) {
    // Block Of Code
  }
*/

for (let i = 0; i < 10; i++) {
  console.log(i);
}

/*
  Loop
  - Loop On Sequences
*/

let myFriends8 = [1, 2, "Osama", "Ahmed", 3, 4, "Sayed", 6, "Ali"];

let onlyNames = [];

for (let i = 0; i < myFriends8.length; i++) {
  if (typeof myFriends8[i] === "string") {
    onlyNames.push(myFriends8[i]);
  }
}

console.log(onlyNames);

// console.log(myFriends8[0]);
// console.log(myFriends8[1]);
// console.log(myFriends8[2]);
// console.log(myFriends8[3]);
// console.log(myFriends8[4]);

// for (let i = 0; i < myFriends8.length; i++) {
//   console.log(myFriends8[i]);
// }

/*
  Loop
  - Nested Loops
*/

let products = ["Keyboard", "Mouse", "Pen", "Pad", "Monitor"];

let colors = ["Red", "Green", "Black"];

let models = [2020, 2021];

for (let i = 0; i < products.length; i++) {
  console.log("#".repeat(15));
  console.log(`# ${products[i]}`);
  console.log("#".repeat(15));
  console.log("Colors: ");
  for (let j = 0; j < colors.length; j++) {
    console.log(`- ${colors[j]}`);
  }
  console.log("Models: ");
  for (let k = 0; k < models.length; k++) {
    console.log(`- ${models[k]}`);
  }
}
/*
  Loop Control
  - Break ==> stop on or befor element
  - Continue ==> pass without print like numbers
  - Label:
      mainloop ==> lable for main
      nestedloop ==> lable for nested loop
*/

let products2 = ["Keyboard", "Mouse", "Pen", "Pad", "Monitor"];

let colors2 = ["Red", "Green", "Black"];

mainLoop: for (let i = 0; i < products2.length; i++) {
  console.log(products2[i]);
  nestedLoop: for (let j = 0; j < colors2.length; j++) {
    console.log(`- ${colors2[j]}`);
    if (colors2[j] === "Green") {
      break mainLoop; // awl ama ywsal ll green t7t el keyboard hai3ml break
    }
  }
}

/*
  Loop For Advanced Example
*/

let products3 = ["Keyboard", "Mouse", "Pen", "Pad", "Monitor", "iPhone"];
let ii = 0;

for (;;) {
  //badl (let ii = 0; i < products3.length; i++)
  console.log(products3[ii]);
  ii++;
  if (ii === products3.length) break; // badl el i < products3.length ya3nii lama y7a22 kol content el array y3ml break
}

/*
  Products Practice
*/

let products4 = ["Keyboard", "Mouse", "Pen", "Pad", "Monitor", "iPhone"];
let colors3 = ["Red", "Green", "Blue"];
let showCount = 3;

document.write(`<h1>Show ${showCount} Products4</h1>`);

for (let i = 0; i < showCount; i++) {
  document.write(`<div>`);
  document.write(`<h3>[${i + 1}] ${products4[i]}</h3>`); // i+1 ==> be5ali el tarteeb mazboot
  for (let j = 0; j < colors3.length; j++) {
    document.write(`<p> - ${colors3[j]}</p>`); // hai5alii el colors ta7t b3d
  }
  document.write(`<p> - ${colors3.join(" | ")}</p>`); // hai5alii el colors gamb b3d w benhom |
  document.write(`</div>`);
}

/*
  Loop
  - While ==> like for
*/

let products5 = ["Keyboard", "Mouse", "Pen", "Pad", "Monitor", "iPhone2"];

let index = 0;

while (index < products5.length) {
  console.log(products5[index]);
  index += 1; // ==> index++
}

/*
  Loop
  - Do / While
*/

let products6 = ["Keyboard", "Mouse", "Pen", "Pad", "Monitor", "iPhone"];

let i = 0;

do {
  console.log(i);
  i++;
} while (false);

console.log(i);

/*
  Loop Challenge
*/
let myAdmins = ["Ahmed", "Osama", "Sayed", "Stop", "Samera"];
let myEmployees = [
  "Amgad",
  "Samah",
  "Ameer",
  "Omar",
  "Othman",
  "Amany",
  "Samia",
  "Anwar",
];
let startWithA = [];
let startWithO = [];
let startWithS = [];

document.write(`<div>We Have X Admins</div>`);
document.write(`<div>We Have 3 Admins</div>`);
// for (let k = 0; k < 3; k++){
//   document.write(`<div>`);
//   document.write(`<h3>The Admin for Team ${k+1} is ${myAdmins[k]} </h3>`)
//   document.write(`<h2>Team Members</h3>`)

//   document.write(`</div>`);

// }
for (let l = 0; l < myEmployees.length; l++) {
  if (myEmployees[l].startsWith("A")) {
    startWithA.push(myEmployees[l]);

    // document.write(`<h4>- ${l+1} ${myEmployees[l]}</h4>`);
  } else if (myEmployees[l].startsWith("O")) {
    startWithO.push(myEmployees[l]);

    // document.write(`<h4>- ${l+1} ${myEmployees[l]}</h4>`);
  } else if (myEmployees[l].startsWith("S")) {
    startWithS.push(myEmployees[l]);

    // document.write(`<h4>- ${l+1} ${startWithS[l]}</h4>`);
  }
}

document.write(`<h3>The Admin for Team ${1} is ${myAdmins[0]} </h3>`);
document.write(`<h2>Team Members</h3>`);

document.write(`</div>`);
for (let l = 0; l < startWithA.length; l++) {
  document.write(`<h4>- ${l + 1} ${startWithA[l]}</h4>`);
}

document.write(`<h3>The Admin for Team ${1} is ${myAdmins[1]} </h3>`);
document.write(`<h2>Team Members</h3>`);

document.write(`</div>`);
for (let l = 0; l < startWithO.length; l++) {
  document.write(`<h4>- ${l + 1} ${startWithO[l]}</h4>`);
}

document.write(`<h3>The Admin for Team ${1} is ${myAdmins[2]} </h3>`);
document.write(`<h2>Team Members</h3>`);

document.write(`</div>`);
for (let l = 0; l < startWithS.length; l++) {
  document.write(`<h4>- ${l + 1} ${startWithS[l]}</h4>`);
}

/*
  Function
  - What Is Function ?
  - User-Defined vs Built In
  - Syntax + Basic Usage
  - Example From Real Life
  - Parameter + Argument ==> variable + value
  - Practical Example
*/

function sayHello(userName) {
  console.log(`Hi ${userName}`);
}

sayHello("Osama");
sayHello("Sayed");
sayHello("Ali");

/*
  Function Advanced Examples
*/

function sayHello(userName, age) {
  if (age < 20) {
    console.log(`App is Not Suitable For You`);
  } else {
    console.log(`Hello ${userName} Your Age is ${age}`);
  }
}

sayHello("Osama", 38);
sayHello("Sayed", 40);
sayHello("Ali", 18);

function generatYears(start, end, exclude) {
  // exclude ==> 3lshan a7dd beha el item elli msh 3aizah yzhar
  for (let i = start; i <= end; i++) {
    if (i === exclude) {
      continue;
    }
    console.log(i);
  }
}
generatYears(1995, 2017, 2016); // value of function parameter

/*
  Function
  - Return
  - Automatic Semicolon Insertion [No Line Terminator Allowed]
  - Interrupting
*/

function generate(start, end) {
  for (let i = start; i <= end; i++) {
    if (i === 15) {
      return `Interrupting`;
    }
    console.log(i);
  }
}

generate(10, 20);

/*
  Function
  - Default Function Parameters
  - Function Parameters Default [Undefined]
  - Old Strategies [Condition + Logical Or]
  - ES6 Method
*/

function sayHello(username = "Unknown", age = "Unknown") {
  // control parametes value lw mafeesh value haiktb Unknown
  // if (age === undefined) {
  //   age = "Unknown";
  // }
  // age = age || "Unknown";
  return `Hello ${username} Your Age Is ${age}`;
}

console.log(sayHello());

/*
  Function
  - Rest Parameters ==> ...numbers ==> lw ana msh 3arfa total el content
  - Only One Allowed
  - Must Be Last Element
*/

function calc(...numbers) {
  // caclculate numbers
  // console.log(Array.isArray(numbers));
  let result = 0;
  for (let i = 0; i < numbers.length; i++) {
    result += numbers[i]; // result = result + numbers[i] ==> ya3nii ba2olo ya5od el numbers step by step w ydefha 3ala el result
  }
  return `Final Result Is ${result}`;
}
console.log(calc(10, 20, 10, 30, 50, 30));

/*
  Function Advanced Practice
  - Parameters
  - Default
  - Rest
  - Loop
  - Condition
*/

function showInfo(
  username = "Unknown",
  age = "Unknown",
  rate = 0,
  show = "Yes",
  ...skills
) {
  document.write(`<div>`);
  document.write(`<h2>Welcome, ${username}</h2>`);
  document.write(`<p>Age: ${age}<p>`);
  document.write(`<p>Hour Rate: ${rate}$<p>`);
  if (show === "Yes") {
    if (skills.length > 0) {
      document.write(`<p>Skills: ${skills.join(" | ")}</p>`);
    } else {
      document.write(`<p>Skills: No Skills</p>`);
    }
  } else {
    document.write(`<p>Skills is Hidden</p>`);
  }
  document.write(`</div>`);
}
showInfo("Raghad", 29, 20, "Yes", "Html", "Css");

/*
  Function - Random Argument Challenge
  ====================================
  Create Function showDetails
  Function Accept 3 Parameters [a, b, c]
  Data Types For Info Is
  - String => Name
  - Number => Age
  - Boolean => Status
  Argument Is Random
  Data Is Not Sorted Output Depend On Data Types
  - Use Ternary Conditional Operator
*/

function showDetails(name, age, hire) {
  document.write(`<div>`);
  for (i = 0; i < showDetails; i++) {
    if (showDetails[i] === "string") {
      document.write(`<h2>Welcome, ${name}</h2>`);
    }
  }

  document.write(`<p>Age: ${age}</p>`);
  document.write(`<p>Availabe for Hire: ${hire}</p>`);
  document.write(`</div>`);
}
// showDetails("Osama", 38, true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
showDetails(38, "Osama", true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
// showDetails(true, 38, "Osama"); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
// showDetails(false, "Osama", 38); // "Hello Osama, Your Age Is 38, You Are Not Available For Hire"

/*
  Function
  - Anonymous Function
  - Calling Named Function vs Anonymous Function
  - Argument To Other Function
  - Task Without Name
  - SetTimeout
*/
/*
  Function
  - Anonymous Function
  - Calling Named Function vs Anonymous Function
  - Argument To Other Function
  - Task Without Name
  - SetTimeout
*/

let calculator = function (num1, num2) {
  return num1 + num2;
};
console.log(calculator(10, 20));

function sayHello() {
  console.log("Hello Osama");
}
// document.getElementById ("cl").onclick= sayHello;

// document.getElementById("cl").onclick = function(){
//   console.log("click")
// }

/*
  Function
  - Function Inside Function
  - Return Function
*/

// Example 1

// function sayMsg(fName, lName){
//   let message = `Hello`;
//   //Nested Function
//   function concatMsg(){
//     message = `${message} ${fName} ${lName}`;
//   }
//   concatMsg();
//   return message;
// }

// console.log(sayMsg("Osama", "Mohamed"));

// Example 2

// function sayMsg(fName, lName){
//   let message = `Hello`;
//   //Nested Function
//   function concatMsg(){
//     return `${message} ${fName} ${lName}`;
//   }
//   return concatMsg();
// }

// console.log(sayMsg("Osama", "Mohamed"));

// Example 3

function sayMsg(fName, lName) {
  let message = `Hello`;
  //Nested Function
  function concatMsg() {
    function getFullName() {
      return `${fName} ${lName}`;
    }
    return `${message} ${getFullName()}`;
  }
  return concatMsg();
}

console.log(sayMsg("Osama", "Mohamed"));

/*
  Function
  - Arrow Function
  -- Regular vs Arrow [Param + No Param]
  -- Multiple Lines
*/

// let print = function(){ //function print()

//   return 10;
// }
// let print = () => 10;
// w lw 3andii one line of code momken asheel el {} and return w momken lw mafeesh parameters momken asheel el () w a7ot _

// let print = num => num; //lw 3andi one parameter momken asheel el (), lw aktar yb2a azem ()

let print = (num1, num2) => num1 + num2;

console.log(print(100, 50));

/*
  Scope
  - Global And Local Scope
*/

var a3 = 1;
let b2 = 2;

function showText() {
  // lazm el vairables tkon gwa el fn w msh mt3arfa gwa "local", haibd2 ydawr fi scope awsa3 w ygbha mn bara global'
  var a3 = 10;
  let b2 = 20;
  console.log(`Function - From Local ${a3}`);
  console.log(`Function - From Local ${b2}`);
}

console.log(`From Global ${a3}`);
console.log(`From Global ${b2}`);

showText();

/*
  Scope
  - Lexical Scope

  Search
  - Execution Context
  - Lexical Environment
*/

function parent() {
  let a = 10;

  function child() {
    console.log(a);
    console.log(`From Child ${b}`);

    function grand() {
      let b = 100;
      console.log(`From Grand ${a}`);
      console.log(`From Grand ${b}`);
    }
    grand();
  }
  child();
}
parent();

/*
  Function Arrow Challenges
*/

// [1] One Statement In Function
// [2] Convert To Arrow Function
// [3] Print The Output [Arguments May Change]

// let names = function () {
//   return `String [${Array.from(arguments).join("], [")}] => Done !`;
// };

let names = (...arguments) => `String [${arguments.join("], [")}] => Done!`;

console.log(names("Osama", "Mohamed", "Ali", "Ibrahim"));
// // String [Osama], [Mohamed], [Ali], [Ibrahim] => Done !

// /* ================================= */

// [1] Replace ??? In Return Statement To Get The Output
// [2] Create The Same Function With Regular Syntax
// [3] Use Array Inside The Arguments To Get The Output

// let myNumbers = [20, 50, 10, 60];

// let calc1 = (one, two, ...nums) => one + nums[0];

// console.log(calc1(10, "", ...myNumbers)); // 80

/*
  Higher Order Functions
  ---> is a function that accepts functions as parameters and/or returns a function.

  - Map
  --- method creates a new array
  --- populated with the results of calling a provided function on every element
  --- in the calling array.

  Syntax map(callBackFunction(Element, Index, Array) { }, thisArg)
  - Element => The current element being processed in the array.
  - Index => The index of the current element being processed in the array.
  - Array => The Current Array

  Notes
  - Map Return A New Array

  Examples
  - Anonymous Function
  - Named Function

*/

let myNums = [1, 2, 3, 4, 5, 6];

let newArray = [];

for (let i = 0; i < myNums.length; i++) {
  newArray.push(myNums[i] + myNums[i]);
}

console.log(newArray);

// Same Idea With Map

// let addSelf = myNums.map(function (element, index, arr) {
//   // console.log(`Current Element => ${element}`);
//   // console.log(`Current Index => ${index}`);
//   // console.log(`Array => ${arr}`);
//   // console.log(`This => ${this}`);
//   return element + element;
// }, 10);

// let addSelf = myNums.map((a) => a + a);

// console.log(addSelf);

function addition(ele) {
  return ele + ele;
}

let add = myNums.map(addition);

console.log(add);

/*
  Map
  - Swap Cases
  - Inverted Numbers
  - Ignore Boolean Value
*/

let swappingCases = "elZERo";
let invertedNumbers = [1, -10, -20, 15, 100, -30];
let ignoreNumbers = "Elz123er4o";

// let sw = swappingCases
//   .split("")
//   .map(function (ele) {
//     // Condition ? True : False
//     return ele === ele.toUpperCase() ? ele.toLowerCase() : ele.toUpperCase();
//   })
//   .join("");

// Arrow Function Version

let sw = swappingCases
  .split("")
  .map((a) => (a === a.toUpperCase() ? a.toLowerCase() : a.toUpperCase())) // dh 3lshan a5alii kol capital letter ykon small w kol small ykon capital
  .join("");

console.log(sw);

let inv = invertedNumbers.map(function (ele) {
  // dh 3lshan a5alii kol nigative ekon positive w el3aks
  return -ele;
});

console.log(inv);

//dh 3lshan asheel el numbers mn been el 7roof
let ign = ignoreNumbers
  .split("")
  .map(function (ele) {
    return isNaN(parseInt(ele)) ? ele : "";
  })
  .join("");

console.log(ign);

/*
  - Filter
  --- method creates a new array
  --- with all elements that pass the test implemented by the provided function.

  Syntax filter(callBackFunction(Element, Index, Array) { }, thisArg)
  - Element => The current element being processed in the array.
  - Index => The index of the current element being processed in the array.
  - Array => The Current Array
*/

// Get Friends With Name Starts With A
let friends = ["Ahmed", "Sameh", "Sayed", "Asmaa", "Amgad", "Israa"];

let filterdFriends = friends.filter(function (el) {
  return el.startsWith("A") ? true : false;
});

console.log(filterdFriends);

// Get Even Numbers Only
let numbers = [11, 20, 2, 5, 17, 10];

let evenNumbers = numbers.filter(function (el) {
  return el % 2 === 0;
});

console.log(evenNumbers);

// Test Map vs Filter

// let addMap = numbers.map(function (el) {
//   return el + el;
// });

// console.log(addMap);

// let addFilter = numbers.filter(function (el) {
//   return el + el;
// });

// console.log(addFilter);

/*
  Filter
  - Filter Longest Word By Number
*/

// Filter Words More Than 4 Characters
let sentence = "I Love Foood Code Too Playing Much";

let smallWords = sentence
  .split(" ")
  .filter(function (ele) {
    return ele.length <= 4;
  })
  .join(" ");

console.log(smallWords);

// Ignore Numbers
let ignoreNumberss = "Elz123er4o";

let igns = ignoreNumberss
  .split("")
  .filter(function (ele) {
    return isNaN(parseInt(ele));
  })
  .join("");

console.log(igns);

// Filter Strings + Multiply
let mix = "A13BS2ZX";

let mixedContent = mix
  .split("")
  .filter(function (ele) {
    return !isNaN(parseInt(ele));
  })
  .map(function (ele) {
    return ele * ele;
  })
  .join("");

console.log(mixedContent);

/*
  - Reduce
  --- method executes a reducer function on each element of the array,
  --- resulting in a single output value.

  Syntax
  reduce(callBackFunc(Accumulator, Current Val, Current Index, Source Array) { }, initialValue)
  - Accumulator => the accumulated value previously returned in the last invocation ==> awl value "10"
  - Current Val => The current element being processed in the array ==> el current value 2abl ama n7ot 3aleha el accu value elli hia "20"
  - Index => The index of the current element being processed in the array. ==> index of current value "1"
  ---------- Starts from index 0 if an initialValue is provided.
  ---------- Otherwise, it starts from index 1.
  - Array => The Current Array
*/

let nums = [10, 20, 15, 30];

let addd = nums.reduce(function (acc, current, index, arr) {
  console.log(`Acc => ${acc}`);
  console.log(`Current Element => ${current}`);
  console.log(`Current Element Index => ${index}`);
  console.log(`Array => ${arr}`);
  console.log(acc + current);
  console.log(`#############`);
  return acc + current;
}, 5);

console.log(addd);

/*
  Reduce
  - Longest Word
  - Remove Characters + Use Reduce
*/

let theBiggest = [
  "Bla",
  "Propaganda",
  "Other",
  "AAA",
  "Battery",
  "Test",
  "Propaganda_Two",
];

let check = theBiggest.reduce(function (acc, current) {
  console.log(`Acc => ${acc}`);
  console.log(`Current Element => ${current}`);
  console.log(acc.length > current.length ? acc : current);
  console.log(`#############`);
  return acc.length > current.length ? acc : current;
});

console.log(check);

let removeChars = ["E", "@", "@", "L", "Z", "@", "@", "E", "R", "@", "O"];

let finalString = removeChars
  .filter(function (ele) {
    return ele !== "@";
  })
  .reduce(function (acc, current) {
    return `${acc}${current}`;
  });

console.log(finalString);

/*
  - forEach
  --- method executes a provided function once for each array element.

  Syntax forEach(callBackFunction(Element, Index, Array) { }, thisArg)
  - Element => The current element being processed in the array.
  - Index => The index of the current element being processed in the array.
  - Array - The Current Array

  Note
  - Doesnt Return Anything [Undefined]
  - Break Will Not Break The Loop
*/

let allLis = document.querySelectorAll("ul li");
let allDivs = document.querySelectorAll(".content div");

allLis.forEach(function (ele) {
  ele.onclick = function () {
    // Remove Active Class From All Elements
    allLis.forEach(function (ele) {
      ele.classList.remove("active");
    });
    // Add Active Class To This Element
    this.classList.add("active");
    // Hide All Divs
    allDivs.forEach(function (ele) {
      ele.style.display = "none";
    });
  };
});

/*
  Higher Order Functions Challenges

  You Can Use
  - ,
  - _
  - Space
  - True => 1 => One Time Only In The Code

  You Cannot Use
  - Numbers
  - Letters

  - You Must Use [Filter + Map + Reduce + Your Knowledge]
  - Order Is Not Important
  - All In One Chain

*/

let myString = "1,2,3,EE,l,z,e,r,o,_,W,e,b,_,S,c,h,o,o,l,2,0,Z";

let solution = myString.split(",").filter((el) => isNaN(el) && el !== "_").map((el, index) => index === 0 ? el.toUpperCase() : el).reduce((acc, curr) => acc + curr) ;

console.log(solution); // Elzero Web School

/*
  Object
  - Intro and What Is Object
  - Testing Window Object
  - Accessing Object
*/

let userr = {
  // Properties
  theName: "Osama",
  theAge: 38,

  // Methods
  sayHello: function (){
    return `Hello`;
  }
}
console.log(userr.theName);
console.log(userr.theAge);
console.log(userr.sayHello());

/*
  Object
  - Dig Deeper
  - Dot Notation vs Bracket Notation
  - Dynamic Property Name
*/

let myVar = "country";

let useer = {
  theName: "Osama",
  country: "Egypt",
};

console.log(useer.theName);
console.log(useer.country); // useer.country
console.log(useer.myVar); // useer.country
console.log(useer[myVar]); // useer.country

/*
  Object
  - Nested Object And Trainings
*/
 let usser = {
  name: "Raghad",
  age: 29,
  skills: ["HTML", "CSS", "JS"],
  available: false,
  addresses: {
    ksa: "Riyadh",
    egypt: {
      one: "Cairo",
      two: "Giza",
    },
  },
  checkAv: function(){
    if(usser.available === true){
      return `Available for Work`;
    } else{
      return `Not Available`;
    }
  }
 }
 console.log(usser.name);
 console.log(usser.age);
 console.log(usser.skills);
 console.log(usser.skills[2]); //Access with index
 console.log(usser.addresses.ksa);
 console.log(usser.addresses.egypt.one);
 console.log(usser["addresses"]["egypt"]);
 console.log(usser["addresses"]["egypt"]["two"]);
 console.log(usser.checkAv());

/*
  Object
  - Create With New Keyword new Object();
*/
 let uuser = {
  age: 20,
 };

 //or let uuser = new Object({ age: 20, });


 console.log(uuser);
 
 uuser.age = 29;
 uuser["country"] = "Egypt";

 uuser.sayHello = function(){
  return `Hello`
 }


 console.log(uuser);
 console.log(uuser.age);
 console.log(uuser.country);
 console.log(uuser.sayHello());

 /*
  Function this Keyword
  - this Introduction
  - this Inside Object Method
  --- When a function is called as a method of an object,
  --- its this is set to the object the method is called on.
  - Global Object
  - Test Variables With Window And This
  - Global Context
  - Function Context

  Search
  - Strict Mode
*/

function sayHello(){
  console.log(this);
  return this;
}
sayHello();

console.log(sayHello() === window);

document.getElementById("cl").onclick = function(){
  console.log(this);
}
let user1 = {
  age: 38,
  ageInDays: function () {
    console.log(this);
    return this.age * 365;
  },
};

console.log(user1.age);
console.log(user1.ageInDays());

/*
  Object
  - Create Object With Create Method
*/

let user2 = {
  age: 20,
  doubleAge: function () {
    return this.age * 2;
  },
};

console.log(user2);
console.log(user2.age);
console.log(user2.doubleAge());

let obj = Object.create({});

obj.a = 100;

console.log(obj);

let copyObj = Object.create(user2);

copyObj.age = 50;

console.log(copyObj);
console.log(copyObj.age);
console.log(copyObj.doubleAge());

let person = {
  name: "Ali",
  greet: function () {
    console.log("Hello, " + this.name);
  }
};

let student1 = Object.assign({}, person); 
student1.name = "Ahmed";

console.log(student1.name);  
console.log(person.name);  
student1.greet();

/*
  Object
  - Create Object With Assign Method
*/

let obj1 = {
  prop1: 1,
  meth1: function () {
    return this.prop1;
  },
};

let obj2 = {
  prop2: 2,
  meth2: function () {
    return this.prop2;
  },
};

let targetObject = {
  prop1: 100,
  prop3: 3,
};

let finalObject = Object.assign(targetObject, obj1, obj2);

finalObject.prop1 = 200;
finalObject.prop4 = 4;

console.log(finalObject);

let newObject = Object.assign({}, obj1, { prop5: 5, prop6: 6 });

console.log(newObject);



