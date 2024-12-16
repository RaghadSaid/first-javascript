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
  span.parentElement.style.opacity = '0';
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

eventListener.onclick = function(){
  let newP = eventListener.cloneNode(true);
  newP.className = "clone";
  document.body.appendChild(newP);
}
// let cloned = document.querySelector(".clone"); //Error

// cloned.onclick = function (){
//   console.log("I'm Cloned");
// }

document.addEventListener("click", function(e){ //e-element / target-elli ana b click 3aleeh 
  if (e.target.className === "clone"){
    console.log("I'm Cloned")

  }
})

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

let myNewWindow = window.open("https://google.com", "", "width=500,height=500");
myNewWindow.focus(); //be focus 3ala el new window
myNewWindow.close(); // close new window

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

if (window.localStorage.getItem("color")){ // if there os color in local storage
  // [1] Add Color to Div
  exp.style.backgroundColor = window.localStorage.getItem("color");
  //[2] Remove Active Class from All Lis
  //Remove Active Class from all lis
  lis.forEach((li) => { // lama a click 3ala ai li hae-remove al active mn 3ala ba2i el lis
    li.classList.remove("active");
  })
  // [3] Add Active Class to Current Color
  document.querySelector(`[data-color="${window.localStorage.getItem("color")}"]`).classList.add("active");
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
    window.localStorage.setItem("color", e.currentTarget.dataset.color) // el localstorage hatfdal bnafs a5er color ana dost 3aleeh
    // Change Div Background Color
    exp.style.backgroundColor = e.currentTarget.dataset.color;

  })
})

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

