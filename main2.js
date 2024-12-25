/*
  DOM 
  - What Is DOM ==> Document Object Model
  - DOM Selectors
  --- Find Element By ID
  --- Find Element By Tag Name
  --- Find Element By Class Name
  --- Find Element By CSS Selectors
  --- Find Element By Collection
  ------ title
  ------ body
  ------ images
  ------ forms
  ------ links
*/

let myIdElement = document.getElementById("my-div");
let myTagElements = document.getElementsByTagName("p");
let myClassElement = document.getElementsByClassName("my-span");
let myQueryElements = document.querySelector(".my-span"); //aktb fiha ai 7aga (Id, Tag, Class,...)
let myQueryElementsAll = document.querySelectorAll(".my-span");

//querySelector ==> select Only first class or tag or id with the same name
//querySelectorAll ==> select all of th id or classes or with the same name
console.log(myIdElement);
console.log(myTagElements);
console.log(myTagElements[1]);
console.log(myQueryElements);
console.log(myQueryElementsAll[1]);

console.log(document.title); //title page
console.log(document.body);
// console.log(document.forms[0].one.value);
console.log(document.links[1].href);

/*
  DOM [Get / Set Elements Content And Attributes]
  - innerHTML 
  - textContent 
  - Change Attributes Directly
  - Change Attributes With Methods
  --- getAttribute
  --- setAttribute

  Search
  - innerText
*/

let myElement = document.querySelector(".js");

console.log(myElement.innerHTML); //==> b return el html code with elements zai maho maktoob
console.log(myElement.textContent); //==> b return el text content zai mahi

myElement.innerHTML = "Text from <span>Main.js</span> File";
myElement.textContent = "Text from <span>Main.js</span> File"; //return as a text with tag <span> as a text w msh han7tag n3ml eltag kda (&lt;span&gt;)

//change attributes direct with Name
//attributeName (id, class, src, alt, ...)
document.images[0].src = ""; //ya3nii awl sora 3andi
document.images[0].alt = "Alternate";
document.images[0].title = "Picture";
document.images[0].id = "pic";
document.images[0].className = "img";

let myLink = document.querySelector(".link");
// myLink.getAttribute("class");
// myLink.getAttribute("herf");

console.log(myLink.getAttribute("class"));
console.log(myLink.getAttribute("href"));

myLink.setAttribute("href", "https://twitter.com"); //(attribute meen, value of attr,)
myLink.setAttribute("title", "Twitter"); // lw mafesh title aslun kda haikon feh

/*
  DOM [Check Attributes]
  - Element.attributes
  - Element.hasAttribute
  - Element.hasAttributes
  - Element.removeAttribute
*/
console.log(document.getElementsByTagName("p")[1].attributes); // a2dar a check 3ala kol el attributes bta3t p
let myP = document.getElementsByTagName("p")[1];

if (myP.hasAttribute("data-src")) {
  console.log("Found");
} else {
  console.log("Not Found");
}

if (myP.hasAttributes("data-src")) {
  if (myP.getAttribute("data-src") === "") {
    myP.removeAttribute("data-src");
  } else {
    myP.setAttribute("data-src", "New Value");
  }
} else {
  console.log("Not Found");
}

if (myP.hasAttributes()) {
  console.log(`Has Attributes`);
}

if (document.getElementsByTagName("div")[0].hasAttributes()) {
  console.log(`Has Attributes`);
} else {
  console.log(`Div Has No Attributes`);
}

/*
  DOM [Create Elements]
  - createElement
  - createComment
  - createTextNode
    - ElementNode ==> HTML Elements: (img, p, div,...)
    - TextNode ==> Text inside Elements
    - AttributeNode ==> (src, class, id, title, ...)
    - CommentNode


  - createAttribute
  - appendChild
*/

let myElement1 = document.createElement("div");
let myAttr = document.createAttribute("data-custom");
let myText = document.createTextNode("product One");
let myComment = document.createComment("This is Div");

myElement1.className = "product";
myElement1.setAttributeNode(myAttr);
myElement1.setAttribute("data-test", "Testing");

// Append Comment to Element
myElement1.appendChild(myComment);

// Insert or Append Text to Element
// Append ==> add to last, Prepend ==> add as first
// myElement1.appendChild(myText); // ya3nii ba7ot el my text "product one" gwa div myElement

//Append Element To Body
document.body.appendChild(myElement1);

console.log(myElement1);

/*
  DOM [Create Elements]
  - Practice Product With Heading And Paragraph
*/

let myMainElement = document.createElement("div");
let myHeading = document.createElement("h2");
let myParagraph = document.createElement("p");

let myHeadingText = document.createTextNode("Product Title");
let myParagraphText = document.createTextNode("Product Description");

// Add Heading Text
// myHeading.appendChild(myHeadingText);

// Add Heading to Main Element
myMainElement.appendChild(myHeading);

//Add Paragraph Text
// myParagraph.appendChild(myParagraphText);

// Add Paragraph to main Element
myMainElement.appendChild(myParagraph);

// for(i=0; i<100; i++){

// }

myMainElement.className = "product";

document.body.appendChild(myMainElement);

/*
  DOM [Deal With Childrens]
  - children
  - childNodes
  - firstChild
  - lastChild
  - firstElementChild
  - lastElementChild
*/
let myElement2 = document.querySelector(".div");

console.log(myElement2);
console.log(myElement2.children); // ya3nii 3aiz kol el elements elli mawgoda
console.log(myElement2.children[0]);
console.log(myElement2.childNodes); // btgeeb el Elements, Text, Comments, ...
console.log(myElement2.childNodes[1]);
console.log(myElement2.firstChild);
console.log(myElement2.lastChild);
console.log(myElement2.firstElementChild);
console.log(myElement2.lastElementChild);

/*
  DOM [Events]
  - Use Events On HTML
  - Use Events On JS
  --- onclick ==> Left Click
  --- oncontextmenu ==> Right Click
  --- onmouseenter ==> awl ama el mouse y3adi mn fo2 el btn just move without click
  --- onmouseleave ==> lama elmouse ygi 3ala btn w ymshi

  --- onload
  --- onscroll ==> when scrolling, w momken used in btn up to page
  --- onresize ==> when resize window

  For Form  
  --- onfocus ==> lama agii 3ala el field aknii haktb
  --- onblur ==> b3d ama katabt w 5aragt bara el field
  --- onsubmit ==> awl ama ados submit 
*/
let myBtn = document.getElementById("btn");

myBtn.onmouseleave = function () {
  // oncontextmenu ==> Right Click
  console.log("Clicked");
};

/*
  DOM [Events]
  - Validate Form Practice ==> valid:mota7 aw sale7 w b add elli matloob mni
  - Prevent Default
*/

let userInput = document.querySelector("[name='username']");
let ageInput = document.querySelector("[name='age']");

// lw el user aw  age mafhomsh 7aga yb2a matb3atsh Data
document.forms[0].onsubmit = function (e) {
  let userValid = false;
  let ageValid = false;

  if (userInput.value !== "" && userInput.value.length <= 10) {
    userValid = true;
  }

  if (ageInput.value !== "") {
    ageValid = true;
  }

  if (userValid === false || ageValid === false) {
    e.preventDefault();
  }
};
document.links[2].onclick = function (event) {
  console.log(event);
  event.preventDefult();
};

/*
  DOM [Events Simulation]
  - click
  - focus
  - blur
*/

let first = document.querySelector(".first");
let second = document.querySelector(".second");

window.onload = function () {
  second.focus();
};

first.onblur = function () {
  document.links[2].click();
};

/*
  DOM [Class List]
  - classList ==> ba3rf beha el classes elli 3ala el eelemnt 3an taree2 el id
  --- length ==>
  --- contains ==> b search 3an class mawgood 3andi wala l2
  --- item(index) ==> ba3rf beha class name by index
  --- add ==> add classes =>element.classlist.add("class-name")
  --- remove ==> remove classes
  --- toggle ==> be3ml add and remove (lw el class elli 7ateto mawgood hwa haishelo w lw msh mawgood hai3mlo add)
  */

let element = document.getElementById("two");

console.log(element.classList);
console.log(typeof element.classList);
console.log(element.classList.contains("osama"));
console.log(element.classList.contains("second"));
console.log(element.classList.item("0"));

element.onclick = function () {
  element.classList.toggle("show");
};

/*
  DOM [CSS]
  - style
  - cssText ==> nktb kol el properties mara wa7da
  - removeProperty(propertyName) [Inline, Stylesheet]
  - setProperty(propertyName, value, priority)
  - rules ==> ya3nii ai class fi tansekaat fil css
*/

let element2 = document.getElementById("sss");

element2.style.color = "red";
element2.style.fontWeight = "bold";

element2.style.cssText = "font-weight: bold; color: green; opacity: 0.9";

element2.style.removeProperty("color");
element2.style.setProperty("font-size", "40px", "important");

document.styleSheets[0].rules[0].style.removeProperty("line-height");
document.styleSheets[0].rules[0].style.setProperty(
  "background-color",
  "red",
  "important"
);

/*
  DOM [Deal With Elements]
  - before [Element || String]
  - after [Element || String]
  - append [Element || String]
  - prepend [Element || String]
  - remove
*/

let element3 = document.getElementById("cs");
let createdP = document.createElement("p");

element3.before("Hello from JS");
element3.after(createdP); //paragraph after element
element3.append(" After Text ");
element3.prepend("Before Text ");

// element3.remove();

/*
  DOM [Traversing]
  - nextSibling ==> el item elli ba3do "elshakeek altalii 7ata lw comment"
  - previousSibling ==> 3aksaha
  - nextElementSibling ==> el element elli ba3do "ya3nii lw feeh comment hai3adeeh w ya5od elba3do"
  - previousElementSibling ==> 3aksaha
  - parentElement
*/

let span = document.querySelector(".two1");

console.log(span.parentElement);

span.onclick = function () {
  span.parentElement.style.opacity = "0";
};

/*
  DOM [Cloning]
  - cloneNode() ==> ban2el item mn mkano lmkan tani bs mn 8eer conent
  - cloneNode(true) ==> ban2el item mn mkano lmkan tani b elconent
  - cloneNode(Deep) 
*/

let myPp = document.querySelector(".clon").cloneNode(true);
let myDiv = document.querySelector(".d");

myPp.id = `${myP.id}-pp`;

myDiv.appendChild(myPp);

/*
  DOM [Add Event Listener]
  - addEventListener ==> add more than events "clicks, ..."
  - Use Without On
  - Attach Multiple Events
  - Error Test

  Search
  - Capture & Bubbling JavaScript
  - removeEventListener
*/

let eventListener = document.querySelector(".event");

// eventListener.onclick = one;
// eventListener.onclick = two;

// function one(){
//   console.log("From Onclick 1");
// }
// function two(){
//   console.log("From Onclick 2");
// }

// eventListener.addEventListener("click", function(){
//   console.log("From Onclick 1 Event");
// })

// eventListener.addEventListener("click", one);
// eventListener.addEventListener("click", two);

// // eventListener.addEventListener("click", "String"); //Error

eventListener.onclick = function () {
  let newP = eventListener.cloneNode(true);
  newP.className = "clone";
  document.body.appendChild(newP);
};
// let cloned = document.querySelector(".clone"); //Error

// cloned.onclick = function (){
//   console.log("I'm Cloned");
// }

document.addEventListener("click", function (e) {
  //e-element / target-elli ana b click 3aleeh
  if (e.target.className === "clone") {
    console.log("I'm Cloned");
  }
});

/* DOM Challenge */

let myArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
myArr.forEach(function (n) {
  document.write(
    `<div style="color: gray; font-size: 20px; margin: 5px; background-color: white;">Product ${n}</div>`
  );
});

/*
  BOM [Browser Object Model]
  - Introduction
  --- Window Object Is The Browser Window
  --- Window Contain The Document Object
  --- All Global Variables And Objects And Functions Are Members Of Window Object
  ------ Test Document And Console
  - What Can We Do With Window Object ?
  --- Open Window ==> new window
  --- Close Window 
  --- Move Window
  --- Resize Window
  --- Print Document 
  --- Run Code After Period Of Time Once Or More ==> zai el ads elli btezhar ba3d ama afta7 masln
  --- Fully Control The URL ==> change 
  --- Save Data Inside Browser To Use Later ==> mmken save properies like colors, lw ma3ndeesh account
*/

window.document.title = "Hello JS";

/*
  BOM [Browser Object Model]
  - alert(Message) => Need No Response Only Ok Available
  - confirm(Message) => Need Response And Return A Boolean
  - prompt(Message, Default Message) => Collect Data
*/

// alert("Test");
// console.log("Test");

// let confirmMsg = confirm("Are You Sure?");

// console.log(confirmMsg);

// if (confirmMsg === true) {
//   console.log("Item Deleted");
// } else {
//   console.log("Item Not Deleted");
// }

// let promptMsg = prompt("Good Day To You?", "Write Day With 3 Characters");

// console.log(promptMsg);

/*
  BOM [Browser Object Model]
  - setTimeout b3d spacific time, el function hatshta8al
  (Function, Timeout, Additional Params) ==> functio:anyName, Timeout:3000(3sec), AddPar: like user, age, ...
  - clearTimeout(Identifier)
*/

// setTimeout(function () { //print msg after 3 secs, w elli ta7taha the same
//   console.log("Msg");
// }, 3000);

// setTimeout(sayMsg, 3000);

// function sayMsg() {
//   console.log(`Iam Message`);
// }

// setTimeout(sayMsg, 3000, "Osama", 38);

// function sayMsg(user, age) {
//   console.log(`Iam Message For ${user} Age Is : ${age}`);
// }

let counter = setTimeout(sayMsg, 3000);

function sayMsg() {
  console.log(`Iam Message`);
}

let btn2 = document.querySelector(".stop");

btn2.onclick = function () {
  clearTimeout(counter); // (handeler => let counter)
};

/*
  BOM [Browser Object Model]
  - setInterval(Function, Millseconds, Additional Params) 
  - clearInterval(Identifier)
*/

// setInterval(function () { // kol 1sc hi3ml print ll Msg
//   console.log(`Msg`);
// }, 1000);

// setInterval(sayMsg, 1000);

// function sayMsg() {
//   console.log(`Iam Message`);
// }

// setInterval(sayMsg, 1000, "Osama", 38);

// function sayMsg(user, age) {
//   console.log(`Iam Message For ${user} His Age Is: ${age}`);
// }

let div = document.querySelector(".num5");

function countdown() {
  num5.innerHTML -= 1; // nafs el content bs sheel mno 1
  if (div.innerHTML === "0") {
    clearInterval(counter2);
  }
}

// let counter2 = setInterval(countdown, 1000);

/*
  BOM [Browser Object Model]
  - location Object
  --- href Get / Set [URL || Hash || File || Mail]
  --- host
  --- hash
  --- protocol
  --- reload() ==> location.reload() : be3ml reload for page
  --- replace() ==> replace page in history, el page elli ana fiha hattshal mn el history 
  --- assign() ==> new url with history, el page elli ana fiha hatfdal fil history + open new page
*/

console.log(location); //for URL
console.log(location.href);

// location.href = "https://google.com"; //hairoo7 3ala google
// location.href = "#two"; // beroo7 3ala el page eltania
// location.href = "https://developer.mozilla.org/en-US/docs/Web/JavaScript#reference"; // baro7 3ale el site dh direct

// console.log(location.host); //begeeb el port elli da5la mno
// console.log(location.hostname); //esm el site

// console.log(location.protocol); //http or https
// location.protocol = "http" // ya3nii lw site https, kda ba7wlo l http

// console.log(location.hash); //3lshan a3raf hwa gai mn page eh belzabt

/*
  BOM [Browser Object Model]
  - open(anyURL [Opt], Window Name Or Target Attr "_blank or _self" [Opt] , Win Features [Opt], History Replace [Opt])
  - close()
  - Window Features
  --- left [Num]
  --- top [Num]
  --- width [Num]
  --- height [Num]
  --- menubar [yes || no]

  Search
  - Window.Open Window Features
*/

// setTimeout(function () {
//   window.open("", "_self", "", false);
// }, 2000);

// setTimeout(function () {
//   window.open("https://google.com", "_blank", "width=400,height=400,left=200,top=100"); //top w left: makan el window in screen
// }, 2000);

/*
  BOM [Browser Object Model]
  - History API
  --- Properties
  ------ length ==> total elements in history
  --- Methods
  ------ back() ==> history.back(): backspace
  ------ forward() ==> history.forward(): arga3 tanii ba3d el back
  ------ go(Delta) ==> history.go(-1) Position In History, ya3nii -1 akni 3amalt back

  Search [For Advanced Knowledge]
  - pushState() + replaceState()
*/

console.log(history);

/*
  BOM [Browser Object Model]
  - stop() ==> window.stop(), be3ml stop ll reloading
  - print() ==> window.print(), 3lshan a3ml print
  - focus() ==> 
  - scrollTo(x, y || Options) ==> (500, 200) hai3mel shift ll scrolling 3ala 7asb el arkaam
  - scroll(x, y || Options) ==> badelo value w be3ml add 3aleha b rakam x,y
  - scrollBy(x, y || Options)
*/

// let myNewWindow = window.open("https://google.com", "", "width=500,height=500");
// myNewWindow.focus(); //be focus 3ala el new window
// myNewWindow.close(); // close new window

// window.scrollTo({
//   left: 500,
//   top: 200,
//   behavior: "smooth" // scrolling easy ease
// });

/*
  BOM [Browser Object Model]
  - Practice => Scroll To Top
  - scrollX [Alias => PageXOffset]
  - scrollY [Alias => PageYOffset]
*/

// console.log(window.scrollX === window.pageXOffset); //

let btn3 = document.querySelector(".scrollUp");

window.onscroll = function () {
  if (window.scrollY >= 600) {
    btn3.style.display = "block";
  } else {
    btn3.style.display = "none";
  }
};

btn3.onclick = function () {
  window.scrollTo({
    left: 0,
    top: 0,
    behavior: "smooth",
  });
};

/*
  BOM [Browser Object Model]
  Local Storage
  - setItem ==> window.localStorage.setItem("key", "value")
  - getItem
  - removeItem
  - clear
  - key

  Info
  - No Expiration Time
  - HTTP And HTTPS
  - Private Tab
*/

// Set
// window.localStorage.setItem("color", "#fee"); // first method
// window.localStorage.fontWeight = "bold"; // second method
// window.localStorage["fontSize"] = "20px"; // third method

// // Get
// console.log(window.localStorage.getItem("color")); // first method
// console.log(window.localStorage.color); // second method
// console.log(window.localStorage["color"]); // third method

// // Remove One
// // window.localStorage.removeItem("color"); //remove btsheel item by item by select it

// // Remove All
// // window.localStorage.clear(); // clear all items

// // Get Key
// console.log(window.localStorage.key(0)); // lw 3aiza a3raf el key gwah eh, by index

// // Set Color In Page
// document.body.style.backgroundColor = window.localStorage.getItem("color");

// console.log(window.localStorage);
// console.log(typeof window.localStorage);

/*
  BOM [Browser Object Model]
  Local Storage Practice ==> el local storage b save el data 7ata lw 2afalt el page w fat7taha
*/

let lis = document.querySelectorAll("ul li");
let exp = document.querySelector(".experiment");

if (window.localStorage.getItem("color")) {
  // if there os color in local storage
  // [1] Add Color to Div
  exp.style.backgroundColor = window.localStorage.getItem("color");
  //[2] Remove Active Class from All Lis
  //Remove Active Class from all lis
  lis.forEach((li) => {
    // lama a click 3ala ai li hae-remove al active mn 3ala ba2i el lis
    li.classList.remove("active");
  });
  // [3] Add Active Class to Current Color
  document
    .querySelector(`[data-color="${window.localStorage.getItem("color")}"]`)
    .classList.add("active");
}

lis.forEach((li) => {
  li.addEventListener("click", (e) => {
    // console.log(e.currentTarget.dataset.color);
    // Remove Active Class From all Lis
    lis.forEach((li) => {
      li.classList.remove("active");
    });
    // Add Active Class to Current Element
    e.currentTarget.classList.add("active"); // lama a click 3ala item haikon hwa el active
    //Add Current Color to Local Storage
    window.localStorage.setItem("color", e.currentTarget.dataset.color); // el localstorage hatfdal bnafs a5er color ana dost 3aleeh
    // Change Div Background Color
    exp.style.backgroundColor = e.currentTarget.dataset.color;
  });
});

/*
  BOM [Browser Object Model]
  Session Storage ==>  b save el data fil session el 7alia bs, used akter fil forms lw 3amlt reload bel 3'alat
  - setItem
  - getItem
  - removeItem
  - clear
  - key

  Info
  - New Tab = New Session
  - Duplicate Tab = Copy Session
  - New Tab With Same Url = New Session
*/

// window.localStorage.setItem("color", "red");
// window.sessionStorage.setItem("color", "blue");

document.querySelector(".name").onblur = function () {
  // console.log(this.value); // ama a input value fil form e3mel print fil console b el value
  window.localStorage.setItem("input-name", this.value); // ama a input value fil form e3mel add ll value fil localStorage
};

/*
  Destructuring
  " is a JavaScript expression that allows us to extract data from arrays,
    objects, and maps and set them into new, distinct variables. "
  - Destructuring Array
*/

// let myFriends = ["Ahmed", "Sayed", "Ali", "Maysa"];
// let [a, b, c, d] = myFriends; // hai7ot kol name fil 7arf elmokabl (a=Ahmed, b=Sayed, ...)

let a = 1;
let b = 2;
let c = 3;
let d = 4;

let myFriends = ["Ahmed", "Sayed", "Ali", "Maysa"];

[a = "A", b, c, d, e = "Osama"] = myFriends;

console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);

// console.log(myFriends[4]);

let [, y, , z] = myFriends;

console.log(y);
console.log(z);

/*
  Destructuring
  - Destructuring Array Advanced Examples
*/

let myFriends2 = [
  "Ahmed",
  "Sayed",
  "Ali",
  ["Shady", "Amr", ["Mohamed", "Gamal"]],
];

// console.log(myFriends2[3][2][1]); // 3lshan awsal l Gamal with index

let [, , , [a2, , [, b2]]] = myFriends2;

console.log(a2); // Shady
console.log(b2); //Gamal

// let [, , , [a2, , [, b2]]] = myFriends2;

// console.log(a2); // Shady
// console.log(b2); // Gamal

/*
  Destructuring
  - Destructuring Array => Swapping Variables
*/

let book = "Video";
let video = "Book";

// Save Book Value In Stash // old method
// let stash = book; // Video

// Change Book Value
// book = video; // Book

// Change Video Value
// video = stash; // Video

[book, video] = [video, book];

console.log(book);
console.log(video);

/*
  Destructuring
  - Destructuring Object
*/

const user = {
  theName: "Osama",
  theAge: 39,
  theTitle: "Developer",
  theCountry: "Egypt",
};

// console.log(user.theName);
// console.log(user.theAge);
// console.log(user.theTitle);
// console.log(user.theCountry);

// let theName = user.theName;
// let theAge = user.theAge;
// let theTitle = user.theTitle;
// let theCountry = user.theCountry;

// console.log(theName);
// console.log(theAge);
// console.log(theTitle);
// console.log(theCountry);

// ({ theName, theAge, theTitle, theCountry } = user);
const { theName, theAge, theCountry } = user;

console.log(theName);
console.log(theAge);
console.log(theCountry);

/*
  Destructuring
  - Destructuring Object
  --- Naming The Variables
  --- Add New Property
  --- Nested Object
  --- Destructuring The Nested Object Only
*/

const user2 = {
  theName2: "Osama",
  theAge2: 39,
  theTitle: "Developer",
  theCountry: "Egypt",
  theColor: "Black",
  skills: {
    html: 70,
    css: 80,
  },
};

const {
  theName2: n,
  theAge2: a3,
  theCountry2,
  theColor: co = "Red",
  skills: { html: h, css },
} = user2;
// theName2:n ==> ya3nii ba2olo en theName2 mkan var n

console.log(n);
console.log(a3);
console.log(theCountry2);
console.log(co);
console.log(`My HTML Skill Progress Is ${h}`);
console.log(`My CSS Skill Progress Is ${css}`);

const { html: skillOne, css: skillTwo } = user2.skills;

console.log(`My HTML Skill Progress Is ${skillOne}`);
console.log(`My CSS Skill Progress Is ${skillTwo}`);

/*
  Destructuring
  - Destructuring Function Parameters
*/

const user3 = {
  theName3: "Osama",
  theAge3: 39,
  skills3: {
    html: 70,
    css: 80,
  },
};

showDetails(user3);

// function showDetails(obj) {
//   console.log(`Your Name Is ${obj.theName3}`);
//   console.log(`Your Age Is ${obj.theAge3}`);
//   console.log(`Your CSS Skill Progress Is ${obj.skills3.css}`);
// }

function showDetails({ theName3: n, theAge3: a, skills3: { css: c } } = user3) {
  console.log(`Your Name Is ${n}`);
  console.log(`Your Age Is ${a}`);
  console.log(`Your CSS Skill Progress Is ${c}`);
}

/*
  Destructuring
  - Destructuring Mixed Content
*/
const user4 = {
  theName4: "Raghad",
  theAge4: 29,
  skills4: ["HTML", "CSS", "JS"],
  addresses: {
    egypt: "Cairo",
    ksa: "Riyadh",
  },
};

const {
  theName4: n2,
  theAge4: a4,
  skills4: [, two, three],
  addresses: { egypt: e4 },
} = user4;

console.log(`Your name is: ${n2}`);
console.log(`Your Age is: ${a4}`);
console.log(`Your Skills is: ${two}, ${three}`);
console.log(`Your Live in: ${e4}`);

/*
  Destructuring
  - Challenge
*/

let chosen = 3;

let myFriends3 = [
  { title: "Osama", age: 39, available: true, skills: ["HTML", "CSS"] },
  { title: "Ahmed", age: 25, available: false, skills: ["Python", "Django"] },
  { title: "Sayed", age: 33, available: true, skills: ["PHP", "Laravel"] },
];

let {
  title: o,
  age: g,
  available: av,
  skills: [first2, second2],
} = myFriends3[chosen - 1];

console.log(`Your Title is: ${o}`);
console.log(`Your Age is: ${g}`);

if (av === true) {
  console.log(`Available`);
} else {
  console.log(`Not Available`);
}
console.log(`Your Skills: ${first2}, ${second2}`);

/*
  - Set Data Type ==> btsheel el elements el mokarra
  Syntax: new Set(Iterable)
  -- Object To Store Unique Values
  -- Cannot Access Elements By Index

  Properties:
  - size

  Methods:
  - add
  - delete
  - clear
  - has
*/

let myData = [1, 1, 1, 2, 3, "A"];
// let myUniqueData = new Set([1, 1, 1, 2, 3]);
// let myUniqueData = new Set(myData);
// let myUniqueData = new Set().add(1).add(1).add(1).add(2).add(3);
let myUniqueData = new Set();

myUniqueData.add(1).add(1).add(1);
myUniqueData.add(2).add(3).add("A");

console.log(`Is Set Has => A ${myUniqueData.has("a".toUpperCase())}`);

console.log(myData);
console.log(myUniqueData);

console.log(myUniqueData.size);

console.log(myData[0]);
console.log(myUniqueData[0]);

// myUniqueData.delete(2);
console.log(myUniqueData.delete(2));

console.log(myUniqueData);
console.log(myUniqueData.size);

myUniqueData.clear();

console.log(myUniqueData);
console.log(myUniqueData.size);

/*
  - Set vs WeakSet
  "
    The WeakSet is weak,
    meaning references to objects in a WeakSet are held weakly.
    If no other references to an object stored in the WeakSet exist,
    those objects can be garbage collected.

    ==> el oBj elli malosh select bet3mlo clean
  "
  --
  Set     => Can Store Any Data Values
  WeakSet => Collection Of Objects Only
  --
  Set     => Have Size Property
  WeakSet => Does Not Have Size Property
  --
  Set     => Have Keys, Values, Entries
  WeakSet => Does Not Have clear, Keys, Values And Entries
  --
  Set     => Can Use forEach
  WeakSet => Cannot Use forEach

  Usage: Store objects and removes them once they become inaccessible
*/

// Type Of Data

let mySet = new Set([1, 1, 1, 2, 3, "A", "A"]);

console.log(mySet);

// Size
console.log(`Size Of Elements Inside Set Is: ${mySet.size}`);

// Values + Keys [Alias For Values]
let iterator = mySet.keys();

console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next());

// forEach

mySet.forEach((el) => console.log(el));

console.log("#".repeat(20));

// Type Of Data

let myws = new WeakSet([{ A: 1, B: 2 }]);

console.log(myws);

/*
  - Map Data Type
  Syntax: new Map(Iterable With Key/Value)
  -- Map vs Object
  --
  ------ Map => Does Not Contain Key By Default
  ------ Object => Has Default Keys
  --
  ------ Map => Key Can Be Anything [Function, Object, Any Primitive Data Types]
  ------ Object => String Or Symbol
  --
  ------ Map => Ordered By Insertion
  ------ Object => Not 100% Till Now
  --
  ------ Map => Get Items By Size
  ------ Object => Need To Do Manually
  --
  ------ Map => Can Be Directly Iterated
  ------ Object => Not Directly And Need To Use Object.keys() And So On
  --
  ------ Map => Better Performance When Add Or Remove Data
  ------ Object => Low Performance When Comparing To Map
*/

let myObject = {};
let myEmptyObject = Object.create(null);
let myMap = new Map();

console.log(myObject);
console.log(myEmptyObject);
console.log(myMap);

let myNewObject = {
  10: "Number",
  10: "String",
};

console.log(myNewObject[10]);

let myNewMap = new Map();
myNewMap.set(10, "Number");
myNewMap.set("10", "String");
myNewMap.set(true, "Boolean");
myNewMap.set({ a: 1, b: 2 }, "Object");
myNewMap.set(function doSomething() {}, "Function");

console.log(myNewMap.get(10));
console.log(myNewMap.get("10"));

console.log("####");

console.log(myNewObject);
console.log(myNewMap);

/*
  - Map Data Type
  Methods
  --- set ==> (key, value)
  --- get ==> get value of spacific key
  --- delete ==> delete spacific key, w lw etms7 hai3ml true w lw mafeesh key bnfs el name hai3ml false
  --- clear ==> clear all elements of map
  --- has ==> bat2akd beha lw el key mawgod wala l2 w lw mawgod bekon true w lw msh mawgood bekon false

  Properties
  --- size
*/

let myMap2 = new Map([
  [10, "Number"],
  ["Name", "String"],
  [false, "Boolean"],
]);

// myMap2.set(10, "Number");
// myMap2.set("Name", "String");

console.log(myMap2);

console.log(myMap2.get(10));
console.log(myMap2.get("Name"));
console.log(myMap2.get(false));

console.log("####");

console.log(myMap2.has("Name"));

console.log("####");

console.log(myMap2.size);

console.log(myMap2.delete("Name"));

console.log(myMap2.size);

myMap2.clear();

console.log(myMap2.size);

/*
  - Map vs WeakMap
  "
    WeakMap Allows Garbage Collector To Do Its Task But Not Map.
  "
  --
  Map     => Key Can Be Anything
  WeakMap => Key Can Be Object Only
  --
*/

let mapUser = { theName: "Elzero" };

let myMap3 = new Map();

myMap3.set(mapUser, "Object Value");

mapUser = null; // Override The Reference

console.log(myMap3);

console.log("#".repeat(20));

let wMapUser = { theName: "Elzero" };

let myWeakMap = new WeakMap();

myWeakMap.set(wMapUser, "Object Value");

wMapUser = null; // Override The Reference

console.log(myWeakMap);

/*
convert any object to real array
  Array Methods ==> Convert Objects likes Arrays => arguments
  - Array.from(Iterable, MapFunc, This) ==> itrable:Object betkarr
  - Array.from(arrayLike, mapFunction, thisArg) 
    -- arrayLike ==> el object elli 3aiza a7olo l array
    -- mapFunction(Opt.) ==> convert all elements in Object before add them to newArray
    -- This(Opt.) ==> value of this that pass to mapFunction

  --- Variable
  --- String Numbers
  --- Set
  --- Using The Map Function ==> for proccessing when converting
  --- Arrow Function
  --- Shorten The Method + Use arguments
*/

console.log(Array.from("Osama"));
console.log(
  Array.from("12345", function (n) {
    return +n + +n;
  })
);
console.log(Array.from("12345", (n) => +n + +n));

let myArray = [1, 1, 1, 2, 3, 4];

let mySet2 = new Set(myArray);

console.log(Array.from(mySet2));

// console.log([...new Set(myArray)]); // Future

function af() {
  // af ==> array from
  return Array.from(arguments);
}

console.log(af("Osama", "Ahmed", "sayed", 1, 2, 3));

/*
be3ml copy l ai element fil array w ban2lo fi mkan tanii fi nafs el array
  Array Methods
  - Array.copyWithin(Target, Start => Optional, End => Optional)
  "Copy Part Of An Array To Another Location in The Same Array"
  -- Any Negative Value Will Count From The End
  -- Target
  ---- Index To Copy Part To
  ---- If At Or Greater Than Array Length Nothing Will Be Copied
  -- Start
  ---- Index To Start Copying From
  ---- If Ommited = Start From Index 0
  -- End
  ---- Index To End Copying From
  ---- Not Including End
  ---- If Ommited = Reach The End
*/

let myArray3 = [10, 20, 30, 40, 50, "A", "B"];
// myArray3.copyWithin(3); // [10, 20, 30, 10, 20, 30, 40]

// myArray3.copyWithin(4, 6); // [10, 20, 30, 40, B, "A", "B"] msh m7taga a7ot el end l2n index 6 hwa lst element
// myArray3.copyWithin(-3, -1); // [10, 20, 30, 40, B, "A", "B"]
// myArray3.copyWithin(1, -2); // [10, "A", "B", 40, 50, "A", "B"]
// myArray3.copyWithin(1, 5, 6); //[10, "A", 30, 40, 50, "A", "B"]
myArray3.copyWithin(1, -2, -1); //[10, "A", 30, 40, 50, "A", "B"]

console.log(myArray3);

/*
search kol element l7d ama yosal ll motabek ll condition w b3deen yb2a true w lw 
wesl ll condetion b stop 3ando w msh bekaml Test
  Array Methods
  - Array.some(CallbackFunc(Element, Index, Array), This Argument)
  --- CallbackFunc => Function To Run On Every Element On The Given Array
  ------ Element => The Current Element To Process
  ------ Index => Index Of Current Element
  ------ Array => The Current Array Working With
  --- This Argument => Value To Use As This When Executing CallbackFunc
  --
  Using
  - Check if Element Exists In Array
  - Check If Number In Range
*/

let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let myNumber = 5;

// let check = nums.some(function(e){
//   console.log("Test"); // 3lshan ashof 3aml test 3ala kam element
//   return e > 5;
// });

let check = nums.some(function (e) {
  return e > this;
}, myNumber); // ba7ot myNumber hna badl ama aktb gwa e>5, w ba7ot badlha e>this

// let check = nums.some((e) => e > 5);

// console.log(check);

// function checkValues(arr, val){
//   return arr.some(function (e){
//     return e === val;
//   }
// )
// }
// console.log(checkValues(nums, 20));
// console.log(checkValues(nums, 5));

let range = {
  min: 10,
  max: 20,
};

let checkNumberRange = nums.some(function (e) {
  return e >= this.min && e <= this.max;
}, range); // this
console.log(checkNumberRange);

/*
lazm every element ykon motabek ll condition 3lshan y3ml true, 3aks el Array.some
  Array Methods
  - Array.every(CallbackFunc(Element, Index, Array), This Argument)
  --- CallbackFunc => Function To Run On Every Element On The Given Array
  ------ Element => The Current Element To Process
  ------ Index => Index Of Current Element
  ------ Array => The Current Array Working With
  --- This Argument => Value To Use As This When Executing CallbackFunc
  --
*/

const locations = {
  20: "Place 1",
  30: "Place 2",
  10: "Place 3",
  40: "Place 4",
};

let mainLocation = 15;

let locationsArray = Object.keys(locations);

console.log(locationsArray);
let locationArrayNumbers = locationsArray.map((n) => +n);
console.log(locationArrayNumbers);

let chek = locationArrayNumbers.every(function (e) {
  return e > this;
}, mainLocation);
console.log(chek);

/*
  Spread Operator => ...Iterable
  "Allow Iterable To Expand In Place"
*/

// Spread With String => Expand String

console.log("Raghad");
console.log(..."Raghad");
console.log([..."Raghad"]);

// Concatenate Arrays

let myArray1 = [1, 2, 3];
let myArray2 = [4, 5, 6];

let allArray = [...myArray1, ...myArray2];
console.log(allArray);

// Copy Array

let copyArray = [...myArray1];
console.log(copyArray);

// Push Inside Array

let allFriends = ["Osama", "Ahmed", "Sayed"];
let thisYearFriends = ["Sameh", "Mahmoud"];

allFriends.push(...thisYearFriends);

console.log(allFriends);

// Use With Math Object

let myNums = [10, 20, -100, 100, 1000, 500];
console.log(Math.max(...myNums)); // 3lshan ageeb max number in array

// Spread With Objects => Merge Objects

let objOne = {
  a: 1,
  b: 2,
};
let objTwo = {
  c: 3,
  d: 4,
};

console.log({ ...objOne, ...objTwo, e: 5 });

/*
  Map And Set + What You Learn => Challenge
  Requirements
  - You Cant Use Numbers Or True Or False
  - Don't Use Array Indexes
  - You Cant Use Loop
  - You Cant Use Any Higher Order Function
  - Only One Line Solution Inside Console
  - If You Use Length => Then Only Time Only
  Hints
  - You Can Use * Operator Only In Calculation
  - Set
  - Spread Operator
  - Math Object Methods
*/

let nu1 = [10, 30, 10, 20];
let nu2 = [30, 20, 10];

console.log(Math.max(...nu2) * nu1.concat(nu2).length); // 210
// bageeb el max fi nu2 w ba7ot nu1 w nu2 3ala ba3d w ba7sb el lenght bta3hom w bekoon 7
// w ba3deen adrabo fi max nu2 ==> 30*7=210

/*
  Regular Expression
  - Email
  - IP
  - Phone
  - URL
*/
let str1 = "10 20 100 1000 5000";
let str2 = "Os1 Os12 Os123 Os123Os Os12312Os123";

let invalidEmail = "Osama@@@gmail....com"; // Not valid
let validEmail = "o@nn.sa";

let ip = "192.168.2.1"; // ipv4

let url = "elzero.org";
// let url = 'elzero.org/';
// let url = 'http://elzero.org/';
// let url = 'http://www.elzero.org/';
// let url = 'https://.elzero.org/';
// let url = 'https://www.elzero.org/';
// let url = 'https://www.elzero.org/?facebookid=fdsjfhslkdjsfkjf';

/*
  Regular Expression

  Syntax
  /pattern/modifier(s);
  new RegExp("pattern", "modifier(s)")

  Modifiers => Flags
  i => case-insensitive ==> ya3ni msh haia5od Capital aw small w haigeeb a2rab index ll kelma
  g => global ==> ya3ni haigeeb kol el results, msh awl result bs
  m => Multilines

  Search Methods
  - match(Pattern)

  Match
  -- Matches A String Against a Regular Expression Pattern
  -- Returns An Array With The Matches
  -- Returns null If No Match Is Found.
*/

let myString = "Hello Elzero Web School I Love elzero";

// console.log(myString.match(/Elzero/)); // bashof eli been // mawgoda fi anhi index
//Or
// let regex = /Elzero/;
// let regex = /elzero/i;
let regex = /elzero/gi;
console.log(myString.match(regex));

/*
  Regular Expression

  Ranges

  - Part 1
  (X|Y) => X Or Y
  [0-9] => 0 To 9 ==> between
  [^0-9] => Any Character Not 0 To 9 ==> ai charachter ma3ada mn 0 to 9
  Practice

  - Part 2
  [a-z] ==> w lw fi nums msh haigbhom w haigeeb mn a to z
  [^a-z] ==> 3aksaha, msh haigeeb mn a-z w haigeeb ba2ii el charachters
  [A-Z]
  [^A-Z]
  [abc]
  [^abc]

*/

let tld = "Com Net Org Info Code Io";
let tldRe = /(org|info|io)/gi;
console.log(tld.match(tldRe));

let nums2 = "12345678910";
let nums2Re = /[0-2]/g;
console.log(nums2.match(nums2Re));

let specialNums = "1!2@3#4$5%678910";
let specialNumsRe = /[^0-9]/g; // ya3ni msh haigeb el nums w haigeb elspicaials
console.log(specialNums.match(specialNumsRe));

let practice = "Os1 Os1Os Os2 Os8 Os8Os";
let practiceRe = /Os[5-9]Os/g;
console.log(practice.match(practiceRe));

let myString2 = "AaBbcdefG123!234%^&*";

let atozSmall = /[a-z]/g;
console.log(myString2.match(atozSmall));

let notAtozSmall = /[^a-z]/g;
console.log(myString2.match(notAtozSmall));

let atozCap = /[A-Z]/g;
console.log(myString2.match(atozCap));

let notAtozCap = /[^A-Z]/g;
console.log(myString2.match(notAtozCap));

let aAndcAnde = /[ace]/g;
console.log(myString2.match(aAndcAnde));

let NotaAndcAnde = /[^ace]/gi;
console.log(myString2.match(NotaAndcAnde));

let lettersCapAndSmall = /[a-z]/gi; // [a-zA-Z]
console.log(myString2.match(lettersCapAndSmall));

let NotlettersCapAndSmall = /[^a-zA-Z]/g;
console.log(myString2.match(NotlettersCapAndSmall));

let special = /[^a-z^A-Z]/g; //ya3nii haigeeb kolo ma3ada elli ana katbah l2n feeh fil awal ^
console.log(myString2.match(special));

/*
  Regular Expression
  Character Classes
  . => matches any character, except newline or other line terminators.
  \w => matches word characters. [a-z, A-Z, 0-9 And Underscore] ==> without spaces and special chars
  \W => matches Non word characters ==> spaces and special chars without letters and nums
  \d => matches digits from 0 to 9.
  \D => matches non-digit characters.
  \s => matches whitespace character.
  \S => matches non whitespace character.
*/

let email = "O@@@g...com O@g.com O@g.net A@Y.com O-g.com o@s.org 1@1.com";
let dot = /./g;
let word = /\w/g;
let wordCap = /\W/g;
let valid = /\w@/g; //ya3ni ai word ba3daha @
let valid2 = /\w@\w.(com|net)/g; //ya3ni ai word ba3daha @ w ba3deen word ba3daha com aw net
console.log(email.match(dot));
console.log(email.match(word));
console.log(email.match(wordCap));
console.log(email.match(valid));
console.log(email.match(valid2));

/*
  Regular Expression
  Character Classes
  \b => matches at the beginning or end of a word.
  \B => matches NOT at the beginning/end of a word.

  Test Method ==> with if conditions
  pattern.test(input) ==> outputs: true or false
*/

let names = "Sayed 1Spam 2Spam 3Spam Spam4 Spam5 Osama Ahmed Aspamo";
let re = /(\bspam|spam\b)/gi;
console.log(names.match(re));

console.log(re.test(names));
console.log(/(\bspam|spam\b)/gi.test("Osama")); // Osama fi spam word?
console.log(/(\bspam|spam\b)/gi.test("1Spam"));

/*
  Regular Expression

  Quantifiers
  n+    => One Or More
  n*    => zero or more
  n?    => zero or one
*/

let mails = "o@nn.sa osama@gmail.com elzero@gmail.net osama@mail.ru"; // All Emails
// let mailsRe = /\w+@\w+.(com|net)/ig;
let mailsRe = /\w+@\w+.\w+/gi;
console.log(mails.match(mailsRe));

let nums3 = "0110 10 150 05120 0560 350 00"; // 0 Numbers Or No 0
let nums3Re = /0\d*0/gi;
console.log(nums3.match(nums3Re));

let urls = "https://google.com http://www.website.net web.com"; // http + https
let urlsRe = /(https?:\/\/)?(www.)?\w+.\w+/gi; // el ? ya3nii lw fi a5ro s hato w lw mafeesh s bardo hato
console.log(urls.match(urlsRe));

/*
  Regular Expression

  Quantifiers
  n{x}   => Number of
  n{x,y} => Range
  n{x,}  => At Least x
*/

let serials = "S100S S3000S S50000S S950000S";

console.log(serials.match(/s\d{3}s/gi)); // S[Three Number]S
console.log(serials.match(/s\d{4,5}s/gi)); // S[Four Or Five Number]S
console.log(serials.match(/s\d{4,}s/gi)); // S[At Least Four]S

/*
  Regular Expression

  Quantifiers
  $  => End With Something wala l2
  ^  => Start With Something wala l2
  ?= => Followed By Something
  ?! => Not Followed By Something
*/

let myString3 = "We Love Programming";
let names2 = "1OsamaZ 2AhmedZ 3Mohammed 4MoustafaZ 5GamalZ";

console.log(/ing$/gi.test(myString3));
console.log(/^we/gi.test(myString3));
console.log(/lz$/gi.test(names2));
console.log(/^\d/gi.test(names2));

console.log(names2.match(/\d\w{5}(?=Z)/gi));
console.log(names2.match(/\d\w{8}(?!Z)/gi));

/*
  Regular Expression

  - replace ==> be3ml replace l awl 7aga t2ablni bs 
  - replaceAll ==> be3ml replace l kolo
*/

let txt = "We Love Programming And @ Because @ Is Amazing";
console.log(txt.replace("@", "JavaScript"));
console.log(txt.replaceAll("@", "JavaScript"));
let ree = /@/gi;
console.log(txt.replaceAll(ree, "JavaScript"));
console.log(txt.replaceAll(/@/gi, "JavaScript"));

/*
  Regular Expression
  - Input Form Validation Practice
*/

document.getElementById("register").onsubmit = function () {
  let phoneInput = document.getElementById("phone").value;
  let phoneRe = /\(\d{4}\)\s\d{3}-\d{4}/; // (1234) 567-8910
  let validationResult = phoneRe.test(phoneInput);
  if (validationResult === false) {
    return false;
  }
  return true;
};

/*
  Regular Expression
  - Challenge
*/

let url1 = "elzero.org";
let url2 = "http://elzero.org";
let url3 = "https://elzero.org";
let url4 = "https://www.elzero.org";
let url5 = "https://www.elzero.org:8080/articles.php?id=100&cat=topics";

let re1 = /\w+.\w+/gi;
let re2 = /https?:\/\/\w+.\w+/gi;
let re3 = /https:\/\/\w+.\w+/gi;
let re4 = /https?:\/\/(www.)?\w+.\w+/gi;
let re5 = /(https?:\/\/)?(www.)?\w+.\w+/gi;

console.log(url1.match(re1));
console.log(url2.match(re2));
console.log(url3.match(re3));
console.log(url4.match(re4));
console.log(url5.match(re5));

//OOP
/*
  Constructor Function
*/

function User(id, username, salary) {
  this.i = id; //this 2asdi beha el user data elli hada5alo ta7t zai userOne
  this.u = username;
  this.s = salary + 1000; // ya3nii azawd 3ala salary kol el users 1000
}

let userOne = new User(100, "Elzero", 5000); // 5000+1000
let userTwo = new User(101, "Hassan", 6000); // 6000+1000
let userThree = new User(102, "Sayed", 7000); // 7000+1000

console.log(userOne.i);
console.log(userOne.u);
console.log(userOne.s);

console.log(userTwo.i);
console.log(userTwo.u);
console.log(userTwo.s);

console.log(userThree.i);
console.log(userThree.u);
console.log(userThree.s);

// const userOne = {
//   id: 100,
//   username: "Elzero",
//   salary: 5000,
// };

// const userTwo = {
//   id: 101,
//   username: "Hassan",
//   salary: 6000,
// };

// const userThree = {
//   id: 102,
//   username: "Sayed",
//   salary: 7000,
// };

/*
  Constructor Function
  - New Syntax
  - Deal With Properties And Methods
*/

class User1 {
  // 3amal convert ll function to class
  constructor(id, username, salary) {
    //Properties
    this.i = id;
    this.u = username || "Unknown"; //ya3nii lw el user maktabsh el name haiban mkanha Unknown
    this.s = salary < 6000 ? salary + 500 : salary; //  lw salary < 6000 ha7ot zyada 500 w lw l2 yb2a zi maho
    this.msg = function () {
      return `Hello ${this.u} Your Salary is ${this.s}`;
    };
  }
  // Methods
  writeMsg() {
    return `Hello ${this.u} Your Salary is ${this.s}`;
  }
}

let userOne1 = new User1(100, "Elzero", 5000);

console.log(userOne1.i);
console.log(userOne1.u);
console.log(userOne1.s);
console.log(userOne1.msg());
console.log(userOne1.writeMsg());

console.log(userOne1.msg); // Native Code
console.log(userOne1.writeMsg); // Native Code

console.log(userOne1 instanceof User1); // hwa userone1 ma3mol mn User? => True
console.log(userOne1.constructor === User1);

/*
  Constructor Function
  - Update Properties
  - Built In Constructors
*/

class User2 {
  constructor(id, username, salary) {
    this.i = id;
    this.u = username;
    this.s = salary;
  }
  updateName(newName) {
    // Method for update Name
    this.u = newName;
  }
}

let userOne2 = new User2(100, "Elzero", 5000);

console.log(userOne2.u);
userOne2.updateName("Osama");
console.log(userOne2.u);

let strOne = "Elzero";
let strTwo = new String("Elzero");

console.log(typeof strOne);
console.log(typeof strTwo);

console.log(strOne instanceof String);
console.log(strTwo instanceof String);

console.log(strOne.constructor === String);
console.log(strTwo.constructor === String);

/*
  Class
  - Static Properties And Methods
*/

class User3 {
  // Static Property
  static count = 0; // static ya3ni 7aga 5asa b el class, w bnadi 3aleeh ta7t b class name

  constructor(id, username, salary) {
    this.i = id;
    this.u = username;
    this.s = salary;
    User3.count++; //kol ama add user gdeed haizawd el count 1
  }

  // Static Methods
  static sayHello() {
    return `Hello From Class`;
  }
  static countMembers() {
    return `${this.count} Members Created`; // print Members Created w el count value
  }
}

let userOne3 = new User3(100, "Elzero", 5000);
let userTwo2 = new User3(101, "Ahmed", 5000);
let userThree2 = new User3(102, "Sayed", 5000);

console.log(userOne3.u);
console.log(userTwo2.u);
console.log(userOne3.count);
console.log(User3.count); // 3lshan static bnadii 3aleeh b class name
console.log(User3.sayHello());
console.log(User3.countMembers());

/*
  Class
  - Inheritance
*/

// Parent Class
class User4 {
  constructor(id, username) {
    this.i = id;
    this.u = username;
  }
  sayHello() {
    return `Hello ${this.u}`;
  }
}

// Derived Class
class Admin extends User4 { // ba5od mn class User l class el Admin
  constructor(id, username, permissions) {
    super(id, username); //super ya3ni hawreth mn el user, w bashoof ha5od eh w eh mn class User
    this.p = permissions;
  }
}

class Superman extends Admin {
  constructor(id, username, permissions, ability) {
    super(id, username, permissions);
    this.a = ability;
  }
}

let userOne4 = new User4(100, "Elzero");
let adminOne = new Admin(110, "Mahmoud", 1);

console.log(userOne4.u);
console.log(userOne4.sayHello());
console.log("####");
console.log(adminOne.i);
console.log(adminOne.u);
console.log(adminOne.p);
console.log(adminOne.sayHello());


/*
  Encapsulation ==> ta8leef el data
  - Class Fields Are Public By Default 
  - Guards The Data Against Illegal Access.
  - Helps To Achieve The Target Without Revealing Its Complex Details.
  - Will Reduce Human Errors.
  - Make The App More Flexible And Manageable.
  - Simplifies The App.
*/

class User5 {
  // Private Property
  #e; // lazm a3rfo
  constructor(id, username, eSalary) {
    this.i = id;
    this.u = username;
    this.#e = eSalary; 
  }
  getSalary() {
    return parseInt(this.#e); // method for analys mkan el eSalary "5000 Gneh" w bia5od mno el rakm bs
  }
}

let userOn = new User5(100, "Elzero", "5000 Gneh");

console.log(userOn.u);
console.log(userOn.getSalary() * 0.3);

/*
  Prototype
  - Introduction
  - Prototypes are the mechanism by which JavaScript objects
    inherit features from one another.
*/

class User6 {
  constructor(id, username) {
    this.i = id;
    this.u = username;
  }
  sayHello() {
    return `Hello ${this.u}`;
  }
}

let userOnee = new User6(100, "Elzero");
console.log(userOnee.u);

console.log(User6.prototype);

let strOne1 = "Elzero";

console.log(String.prototype);

/*
  Prototype
  - Add To Prototype Chain
  - Extend Built In Constructors Features
*/

class User7 {
  constructor(id, username) {
    this.i = id;
    this.u = username;
  }
  sayHello() {
    return `Hello ${this.u}`;
  }
}

let userOne5 = new User7(100, "Elzero");
console.log(userOne5.u);
console.log(User7.prototype); // el prototype bewreth mno
console.log(userOne5);

User7.prototype.sayWelcome = function () {
  return `Welcome ${this.u}`;
};

Object.prototype.love = "Elzero Web School"; // ya3nii ha5alii el love gwah value "Elzero wb Scool"

String.prototype.addDotBeforeAndAfter = function (val) {
  return `.${this}.`;
};

let myString1 = "Elzero";

/*
  Object Meta Data And Descriptor
  - writable
  - enumerable
  - configurable [Cannot Delete Or Reconfigure]
*/

const myObject1 = {
  a: 1,
  b: 2,
};

Object.defineProperty(myObject1, "c", { //defineProperty => add new property to Obj, aw Edit on property mawgoda
  // defult for elements : false, f lazm aktb elli m7tagah
  writable: false, // lw true=> ha2dr aktb 3aliha, lw false => msh ha3rf aktb w msh hai2bal edit
  enumerable: true, // lw false, yb2a ai 7aga fiha loop, el property di msh hattb2 3aleha
  configurable: false, // lw false ==> yb2a wala ha3rf amsa7 el property wala a3mel 3aleeh edit
  value: 3,
});

// Object.defineProperty(myObject1, "c", { // momken a3ml redefine w a8aer fil properties
//   writable: false,
//   enumerable: true,
//   configurable: true, => Cannot redefine property
//   value: 3,
// });

myObject1.c = 100;

console.log(delete myObject1.c); // 3aiz a3mel dalete ll c

for (let prop in myObject1) {
  console.log(prop, myObject1[prop]); // ==> h print el prop el awl w ba3deen el value gambha
}

console.log(myObject1);

/*
  Object Meta Data And Descriptor
  - Define Multiple Properties
  - Check Descriptors
*/

const myObject2 = {
  a: 1,
  b: 2,
};

Object.defineProperties(myObject2, {
  c: {
    configurable: true,
    value: 3,
  },
  d: {
    configurable: true,
    value: 4,
  },
  e: {
    configurable: true,
    value: 5,
  },
});

console.log(myObject2);

console.log(Object.getOwnPropertyDescriptor(myObject2, "d")); //Descriptor ==> el property "d" elli me7taga ageeb el data  bta3t el descriptor bta3ha 
console.log(Object.getOwnPropertyDescriptors(myObject2)); // Descriptors => kol 7aga t5os el Obj


/*
  Date And Time
  - Date Constructor

  Static Methods
  - Date.now()

  - To Track Time You Need Starting Point
  - Epoch Time Or Unix Time In Computer Science Is The Number of Seconds Since January 1, 1970.
    Epoch  Or Unix Time ==> ya3nii 3add secs elli mart mn awl jan,1970
  - Why 1970 [829 Days To 136 Years]

  Search For
  - Year 2038 Problem in Computer Science.
*/

let dateNow = new Date(); // el taree5 el 7alii b el youm w el wa2t

console.log(dateNow);

console.log(Date.now()); // 1000 Mill = 1 Second

let seconds = Date.now() / 1000; // Number Of Seconds
console.log(`Seconds ${seconds}`);

let minutes = seconds / 60; // Number Of Minutes
console.log(`Minutes ${minutes}`);

let hours = minutes / 60; // Number Of Hours
console.log(`Hours ${hours}`);

let days = hours / 24; // Number Of Days
console.log(`Days ${days}`);

let years = days / 365; // Number Of Years
console.log(`Years ${years}`);

/*
  Date And Time
  - getTime() => Number Of Milliseconds
  - getDate() => Day Of The Month (1-31)
  - getFullYear()
  - getMonth() => by index(0-11)
  - getDay() => Day Of The Week (0 => sunday, 6 => saturday)
  - getHours()
  - getMinutes()
  - getSeconds()
*/

let dateNow1 = new Date();
let birthday = new Date("Jul 23, 95");
let dateDiff = dateNow1 - birthday;

console.log(dateDiff);
console.log(dateDiff / 1000 / 60 / 60 / 24 / 365);

console.log(dateNow1);
console.log(dateNow1.getTime()); // bt return el time value b el milliseconds mn awl starf time to now
console.log(dateNow1.getDate()); //  day of month "today is 23 dec"
console.log(dateNow1.getFullYear()); // curntly year, momken use in copy write
console.log(dateNow1.getMonth()); // begeeb el month b el index, ya3nii shahr 12 haikon 11
console.log(dateNow1.getDay()); // day of the week ==>  by index, sun:0, monday:1 ...
console.log(dateNow1.getHours()); // currntly hour
console.log(dateNow1.getMinutes()); // currntly minutes
console.log(dateNow1.getSeconds()); // currntly seconds


/* set ==> edits
  Date And Time
  - setTime(Milliseconds)
  - setDate() => Day Of The Month [Negative And Positive]
  - setFullYear(year, month => Optional [0-11], day => Optional [1-31])
  - setMonth(Month [0-11], Day => Optional [1-31]) [Negative And Positive]
  - setHours(Hours [0-23], Minutes => Optional [0-59], Seconds => Optional [0-59], MS => Optional [0-999])
  - setMinutes(Minutes [0-59], Seconds => Optional [0-59], MS => Optional [0-999])
  - setSeconds(Seconds => [0-59], MS => Optional [0-999])
*/

let dateNow2 = new Date();
console.log(dateNow2);

console.log("#".repeat(66));

// dateNow2.setTime(0); // awl wa2t mn 1 jan,1970
// console.log(dateNow2);

// console.log("#".repeat(66));

// dateNow2.setTime(10000); // awl 10 sec mn bdait elwa2t
// console.log(dateNow2);

// console.log("#".repeat(66));

// dateNow2.setDate(35); // bat7akm fi elyoum,, 35 ya3nii ba3d el shahr b 5 ayam mn elshahr elli ba3do
// console.log(dateNow2);

// dateNow2.setFullYear(2020, 13); // (year, month by index) w 13 ya3nii feb 2021
// console.log(dateNow2);

dateNow2.setMonth(15); // 11 => Dec 2024, 15 => ya3nii shahr April 2025
console.log(dateNow2);

/*
  Date And Time

  new Date(timestamp)
  new Date(Date String)
  new Date(Numeric Values)

  Format
  - "Oct 25 1982"
  - "10/25/1982"
  - "1982-10-25" => ISO International Standard
  - "1982 10"
  - "1982"
  - "82"
  - 1982, 9, 25, 2, 10, 0
  - 1982, 9, 25
  - "1982-10-25T06:10:00Z"

  Date.parse("String") // Read Date From A String
*/

console.log(Date.parse("Oct 25 1982"));

let date1 = new Date(0);
console.log(date1);

let date2 = new Date(404344800000);
console.log(date2);

let date3 = new Date("10-25-1982");
console.log(date3);

let date4 = new Date("1982-10-25");
console.log(date4);

let date5 = new Date("1982-10");
console.log(date5);

let date6 = new Date("82");
console.log(date6);

let date7 = new Date(1982, 9, 25, 2, 10, 0);
console.log(date7);

let date8 = new Date(1982, 9, 25);
console.log(date8);

let date9 = new Date("1982-10-25T06:10:00Z"); // ==> T fasel been el date w el time, z hwa time zone
console.log(date9);

/*
  Date And Time
  - Track Operations Time

  Search
  - performance.now()
  - performance.mark()
*/

// Start Time
let start = new Date();

// Operation
for (let i = 0; i < 100000; i++) {
  // document.write(`<div>${i}</div>`); // hai3ml 100000 div
  // hia hia nafs eltare2a
  let div = document.createElement("div");
  div.appendChild(document.createTextNode(i));
  document.body.appendChild(div);
}

// Time End
let end = new Date();

// Operation Duration
let duration = end - start;

console.log(duration);

/*
  Generators ==> function* / keyword => yield
  - Generator Function Run Its Code When Required.
  - Generator Function Return Special Object [Generator Object]
  - Generators Are Iterable
*/

function* generateNumbers() {
  yield 1;
  console.log("Hello After Yield 1");
  yield 2;
  yield 3;
  yield 4;
}

let generator = generateNumbers();

console.log(typeof generator);
console.log(generator);

console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());

for (let value of generateNumbers()) {
  console.log(value);
}

for (let value of generator) {
  console.log(value);
}

/*
  Generators
  - Delegate Generator
*/

function* generateNums() {
  yield 1;
  yield 2;
  yield 3;
}

function* generateLetters() {
  yield "A";
  yield "B";
  yield "C";
}

function* generateAll() {
  yield* generateNums(); // * ya3nii print elli gwa generateNums
  yield* generateLetters(); // * ya3nii print elli gwa generateLetters
  yield* [4, 5, 6];
}

let generator1 = generateAll();

console.log(generator1.next());
console.log(generator1.next());
console.log(generator1.next());
console.log(generator1.next());
console.log(generator1.next());
console.log(generator1.next());
console.log(generator1.return("Z")); // return bt2fl el generator function fi kol elli gai
console.log(generator1.next());
console.log(generator1.next());
console.log(generator1.next());

/*
  Generators
  - Generate Infinite Numbers
  - Use Return Inside Generators
*/

 function* generateNumbers() {
  // yield 1;
  // yield 2;
  // return "A"; // msh hatgeeb elli ba3do
  // yield 3;
  // yield 4;
  let index = 0;

  // while (true) { // 3add la neha2i
  //   yield index++;
  }
// }

let generator2 = generateNumbers();

console.log(generator2.next());
console.log(generator2.next());
console.log(generator2.next());
console.log(generator2.next());


// JSON week-21
/*
  What Is JSON ?
  - JavaScript Object Notation
  - Format For Sharing Data Between Server And Client
  - JSON Derived From JavaScript
  - Alternative To XML
  - File Extension Is .json

  Why JSON ?
  - Easy To Use And Read
  - Used By Most Programming Languages And Its Frameworks
  - You Can Convert JSON Object To JS Object And Vice Versa

  JSON vs XML
  ===================================================
  = Text Based Format      = Markup Language        =
  = Lightweight            = Heavier                =
  = Does Not Use Tags      = Using Tags             =
  = Shorter                = Not Short              =
  = Can Use Arrays         = Cannot Use Arrays      =
  = Not Support Comments   = Support Comments       =
  ===================================================
*/

//video 170
/*
  JSON Syntax
  - Data Added Inside Curly Braces {  }
  - Data Added With Key : Value
  - Key Should Be String Wrapped In Double Quotes ==> "string"
  - Data Separated By Comma (,)
  - Square Brackets [] For Arrays
  - Curly Braces {} For Objects

  Available Data Types
  - String
  - Number
  - Object
  - Array
  - Boolean Values
  - null
*/

//video 171

/*
  JSON
  - API Overview
  - Tools To Test API
  - Preview Github API
*/

// video 172

/*
  JSON
  - JSON.parse => Convert Text Data To JS Object
  - JSON.stringify => Convert JS Object To JSON
*/

const myJsnonObjectFromServer = '{"Username": "Osama", "Age": 39}';
console.log(typeof myJsnonObjectFromServer);
console.log(myJsnonObjectFromServer);

const myJsObject = JSON.parse(myJsnonObjectFromServer) // convert json code to js
console.log(typeof myJsObject);
console.log(myJsObject);

myJsObject["Username"] = "Elzero";
myJsObject["Age"] = 40;

const myJsonObjectToServer = JSON.stringify(myJsObject) // convert js code to json
console.log(typeof myJsonObjectToServer);
console.log(myJsonObjectToServer);

/*
  To Understand Ajax, Fetch, Promises

  Asynchronous vs Synchronous Programming
  - Meaning

  Synchronous ==> lazm tasalsol
  - Operations Runs in Sequence
  - Each Operation Must Wait For The Previous One To Complete
  - Story From Real Life (metro-tickts)

  Asynchronous ==> momken b twazy (paralle )
  - Operations Runs In Parallel
  - This Means That An Operation Can Occur while Another One Is Still Being Processed
  - Story From Real Life (resturand-orders)

  - Facebook As Example
  - Simulation

  Search
  - JavaScript Is A Single-Threaded
  - Multi Threaded Languages
*/

// Synchronous

// console.log("1");
// console.log("2");
// window.alert("Operation");
// console.log("3");

// Asynchronous

console.log("1");
console.log("2");
setTimeout(() => console.log("Operations"), 3000);
console.log("3");

/*
  To Understand Ajax, Fetch, Promises

  Call Stack || Stack Trace
  -- JavaScript Engine Uses A Call Stack To Manage Execution Contexts
  -- Mechanism To Make The Interpreter Track Your Calls
  -- When Function Called It Added To The Stack
  -- When Function Executed It Removed From The Stack
  -- After Function Is Finished Executing The Interpreter Continue From The Last Point
  -- Work Using LIFO Principle => Last In First Out
  -- Code Execution Is Synchronous.
  -- Call Stack Detect Web API Methods And Leave It To The Browser To Handle It

  Web API
  -- Methods Available From The Environment => Browser
*/

setTimeout(() => {
  console.log("Web API");
}, 0);

function onee() {
  console.log("One");
}
function twoo() {
  onee();
  console.log("Two");
}
function threee() {
  twoo();
  console.log("Three");
}

threee();

/*
=================================
console.log("One");
=================================
function onee() {
  console.log("One");
}
=================================
function twoo() {
  onee();
  console.log("Two");
}
=================================
function threee() {
  twoo();
  console.log("Three");
}
=================================
*/

console.log("#####");
console.log("One");
console.log("Two");
console.log("Three");

/*
  To Understand Ajax, Fetch, Promises

  Event Loop + Callback Queue

  Story
  - JavaScript Is A Single Threaded Language "All Operations Executed in Single Thread"
  - Call Stack Track All Calls
  - Every Function Is Done Its Poped Out
  - When You Call Asynchronous Function It Sent To Browser API
  - Asynchronous Function Like Settimeout Start Its Own Thread
  - Browser API Act As A Second Thread
  - API Finish Waiting And Send Back The Function For Processing
  - Browser API Add The Callback To Callback Queue
  - Event Loop Wait For Call Stack To Be Empty
  - Event Loop Get Callback From Callback Queue And Add It To Call Stack
  - Callback Queue Follow FIFO "First In First Out" Rule
*/

console.log("One");
setTimeout(() => { // btkon a5er 7aga ttb3t
  console.log("Three");
}, 0);
setTimeout(() => {
  console.log("Four");
}, 0);

console.log("Two");

let myVar = 100;
myVar += 100;
console.log(myVar);

/*
  AJAX
  - Asynchronous JavaScript And XML
  - Approach To Use Many Technologies Together [HTML, CSS, Js, DOM]
  - It Use "XMLHttpRequest" Object To Interact With The Server
  - You Can Fetch Data Or Send Data Without Page Refresh
  - Examples
  --- Youtube Studio
  --- Google Drive
  --- Upload Article Photo
  --- Form Check Name

  Test new XMLHttpRequest();
  Request And Response
  Status Code
*/

let req = new XMLHttpRequest();
console.log(req);

/*
  Ajax
  - Ready State => Status Of The Request
    [0] Request Not Initialized
    [1] Server Connection Established
    [2] Request Received
    [3] Processing Request
    [4] Request Is Finished And Response Is Ready (*)
  - Status 
  [200] Response Is Successful (*)
  [404] Not Found
*/

let myRequest = new XMLHttpRequest();
myRequest.open("GET", "https://api.github.com/users/elzerowebschool/repos"); 
// open(method, url) w btosta5dm l ta7deed no3 el talab, like(POST, GET)
// GET ==> Get Data from Server
// URL ==> API Data from elzerowebschool
myRequest.send(); // send request to server
console.log(myRequest);

myRequest.onreadystatechange = function () { // fuction hatshta8l kol ma request status et8ayrt
  // console.log(myRequest.readyState);
  // console.log(myRequest.status);
  if (this.readyState === 4 && this.status === 200) { // 3lshan at2akd en num 4 et7a22at w num 200
    console.log(this.responseText); // include data from server in form of text (JSON) (String)
  }
};
/*
  Ajax
  Loop On Data

  Search
  // mshakel 3an el 7maya
  - Cross Origin API [CORS] 
  - API Authentication
*/

let myRequest1 = new XMLHttpRequest();
myRequest1.open("GET", "https://api.github.com/users/elzerowebschool/repos");
myRequest1.send();
myRequest1.onreadystatechange = function () {
  if (this.readyState === 4 && this.status === 200) {
    // console.log(this.responseText);
    let jsData = JSON.parse(this.responseText); //convert to JS, 
    // console.log(jsData);
    for (let i = 0; i < jsData.length; i++) {
      let div = document.createElement("div");
      let repoName = document.createTextNode(jsData[i].full_name); // (like: elzerowebschool/repo-name)
      div.appendChild(repoName);
      document.body.appendChild(div);
    }
  }
};

/*
  To Understand Ajax, Fetch, Promises

  Pyramid Of Doom || Callback Hell

  - What Is Callback
  - Callback Hell Example

  What Is Callback
  - A Function That Is Passed Into Another One As An Argument To Be Executed Later
  - Function To Handle Photos
  --- [1] Download Photo From URL
  --- [2] Resize Photo
  --- [3] Add Logo To The Photo
  --- [4] Show The Photo In Website
*/

function makeItRed(e) {
  e.target.style.color = "red";
}

let p = document.querySelector(".test");
p.addEventListener("click", makeItRed);

function iamACallback() {
  console.log("Iam A Callback Function");
}

setTimeout(iamACallback, 2000);

setTimeout(() => {
  console.log("Download Photo From URL");
  setTimeout(() => {
    console.log("Resize Photo");
    setTimeout(() => {
      console.log("Add Logo To The Photo");
      setTimeout(() => {
        console.log("Show The Photo In Website");
      }, 1000);
    }, 1000);
  }, 1000);
}, 1000);

/*
  Promise Intro And Syntax
  - Promise In JavaScript Is Like Promise In Real Life
  - Promise Is Something That Will Happen In The Future
  - Promise Avoid Callback Hell
  - Promise Is The Object That Represent The Status Of An Asynchronous Operation And Its Resulting Value

  - Promise Status
  --- Pending: Initial State
  --- Fulfilled: Completed Successfully
  --- Rejected: Failed

  Story
  - Once A Promise Has Been Called, It Will Start In A Pending State
  - The Created Promise Will Eventually End In A Resolved State Or In A Rejected State
  - Calling The Callback Functions (Passed To Then And Catch) Upon Finishing.

  - Then
  --- Takes 2 Optional Arguments [Callback For Success Or Failure]
*/

// const myPromise = new Promise((resolveFunction, rejectFunction) => {
//   let connect = false;
//   if (connect) {
//     resolveFunction("Connection Established");
//   } else {
//     rejectFunction(Error("Connection Failed"));
//   }
// }).then(
//   (resolveValue) => console.log(`Good ${resolveValue}`),
//   (rejectValue) => console.log(`Bad ${rejectValue}`)
// );

const myPromise = new Promise((resolveFunction, rejectFunction) => {
  let connect = true;
  if (connect) {
    resolveFunction("Connection Established");
  } else {
    rejectFunction(Error("Connection Failed"));
  }
});

console.log(myPromise);

let resolver = (resolveValue) => console.log(`Good ${resolveValue}`);
let rejecter = (rejectValue) => console.log(`Bad ${rejectValue}`);

myPromise.then(resolver, rejecter);

myPromise.then(
  (resolveValue) => console.log(`Good ${resolveValue}`),
  (rejectValue) => console.log(`Bad ${rejectValue}`)
);

myPromise.then(
  (resolveValue) => console.log(`Good ${resolveValue}`),
  (rejectValue) => console.log(`Bad ${rejectValue}`)
);

/*
  Promise And XHR
*/

const getData = (apiLink) => {
  return new Promise((resolve, reject) => {
    let myRequest = new XMLHttpRequest();
    myRequest.onload = function () {
      if (this.readyState === 4 && this.status === 200) {
        resolve(JSON.parse(this.responseText)); // convert to js
      } else {
        reject(Error("No Data Found"));
      }
    };

    myRequest.open("GET", apiLink);
    myRequest.send();
  });
};

getData("https://api.github.com/users/elzerowebschool/repos")
  .then((result) => {
    result.length = 10;
    return result;
  })
  .then((result) => console.log(result[0].name))
  .catch((rej) => console.log(rej)); // catch ==> process any error

  /*
  Fetch API
  - Return A Representation Of the Entire HTTP Response
*/

fetch("https://api.github.com/users/elzerowebschool/repos")
.then((result) => {
  console.log(result);
  let myData = result.json(); // convert to js
  console.log(myData);
  return myData;
})
.then((full) => {
  full.length = 10;
  return full;
})
.then((ten) => {
  console.log(ten[0].name);
});

// const getData = (apiLink) => {
//   return new Promise((resolve, reject) => {
//     let myRequest = new XMLHttpRequest();
//     myRequest.onload = function () {
//       if (this.readyState === 4 && this.status === 200) {
//         resolve(JSON.parse(this.responseText));
//       } else {
//         reject(Error("No Data Found"));
//       }
//     };

//     myRequest.open("GET", apiLink);
//     myRequest.send();
//   });
// };

// getData("https://api.github.com/users/elzerowebschool/repos")
//   .then((result) => {
//     result.length = 10;
//     return result;
//   })
//   .then((result) => console.log(result[0].name))
//   .catch((rej) => console.log(rej));

/*
  Promise
  - All ==> awl ama yla2y reject b print w msh bikaml
  - All Settled ==> lw la2a rej besebo w ykaml ll 2a5er, w print kol promise swa2 rej aw reso
  - Race ==> b print awl 7aga by2ablha swa2 resovled aw rejected 
*/

const myFirstPromise = new Promise((res, rej) => {
  setTimeout(() => {
    res("Iam The First Promise");
  }, 5000);
});

const mySecondPromise = new Promise((res, rej) => {
  setTimeout(() => {
    rej("Iam The Second Promise");
  }, 1000);
});

const myThirdPromise = new Promise((res, rej) => {
  setTimeout(() => {
    res("Iam The Third Promise");
  }, 2000);
});

// Promise.all([myFirstPromise, mySecondPromise, myThirdPromise]).then(
//   (resolvedValues) => console.log(resolvedValues),
//   (rejectedValue) => console.log(`Rejected: ${rejectedValue}`)
// );

// Promise.allSettled([myFirstPromise, mySecondPromise, myThirdPromise]).then(
//   (resolvedValues) => console.log(resolvedValues),
//   (rejectedValue) => console.log(`Rejected: ${rejectedValue}`)
// );

Promise.race([myFirstPromise, mySecondPromise, myThirdPromise]).then(
  (resolvedValues) => console.log(resolvedValues),
  (rejectedValue) => console.log(`Rejected: ${rejectedValue}`)
);

/*
  Async
  - Async Before Function Mean This Function Return A Promise
  - Async And Await Help In Creating Asynchronous Promise Behavior With Cleaner Style
*/

// function getData() {
//   return new Promise((res, rej) => {
//     let users = [];
//     if (users.length > 0) {
//       res("Users Found");
//     } else {
//       rej("No Users Found");
//     }
//   });
// }

// getData().then(
//   (resolvedValue) => console.log(resolvedValue),
//   (rejectedValue) => console.log("Rejected " + rejectedValue)
// );

// function getData() {
//   let users = ["Osama"];
//   if (users.length > 0) {
//     return Promise.resolve("Users Found");
//   } else {
//     return Promise.reject("No Users Found");
//   }
// }

// getData().then(
//   (resolvedValue) => console.log(resolvedValue),
//   (rejectedValue) => console.log("Rejected " + rejectedValue)
// );

async function getData1() {
  let users = ["Osama"];
  if (users.length > 0) {
    return "Users Found";
  } else {
    throw new Error("No Users Found");
  }
}

console.log(getData1());

getData1().then(
  (resolvedValue) => console.log(resolvedValue),
  (rejectedValue) => console.log("Rejected " + rejectedValue)
);

/*
  Await
  - Await Works Only Inside Asnyc Functions
  - Await Make JavaScript Wait For The Promise Result
  - Await Is More Elegant Syntax Of Getting Promise Result
*/

const myPromise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve("Iam The Good Promise");
    reject(Error("Iam The Bad Promise"));
  }, 3000);
});

async function readData() {
  console.log("Before Promise");
  // myPromise1.then((resolvedValue) => console.log(resolvedValue));
  // console.log(await myPromise1);
  console.log(await myPromise1.catch((err) => err));
  console.log("After Promise");
}

readData();

/*
  Async & Await With Try, Catch, Finally
*/

 const myPromise2 = new Promise((resolve, reject) => {
  setTimeout(() =>{
    resolve("I'm The Godd Promise");
  }, 3000);
 });
 
//  async function readData() {
//   console.log("Before Promise");

//   try{
//   console.log(await myPromise2);
//   } catch (reason){
//     console.log(`Reason: ${reason}`);
//   } finally {
//     console.log("After Promise");
//   }
//  }

//  readData();
 
 async function fetchData() {
  console.log("Before Fetch");

  try{
  
    let myData = await fetch("https://api.github.com/users/elzerowebschool/repos");
    console.log(myData.json)
  } catch (reason){
    console.log(`Reason: ${reason}`);
  } finally {
    console.log("After Fetch");
  }
 }

 fetchData();


 /*
  The End
  - Other Information => Practice + Tutorials
  - Problem Solving => websites
  - Search In Lessons
  - Advanced Books
*/