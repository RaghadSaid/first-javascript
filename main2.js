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

let myLink = document.querySelector(".link")
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
myElement1.appendChild(myText) // ya3nii ba7ot el my text "product one" gwa div myElement



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
myHeading.appendChild(myHeadingText);

// Add Heading to Main Element
myMainElement.appendChild(myHeading);

//Add Paragraph Text
myParagraph.appendChild(myParagraphText);

// Add Paragraph to main Element
myMainElement.appendChild(myParagraph);

// for(i=0; i<100; i++){
  
// }

myMainElement.className ="product";

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

 myBtn.onmouseleave = function(){ // oncontextmenu ==> Right Click 
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
document.forms[0].onsubmit = function(e){
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
document.links[2].onclick = function(event){
  console.log(event);
  event.preventDefult();
};
