/*
  Modules
  - Import And Export
  - Export Alias ==> esm mosta3ar
  - named Export ==> ba7ot el item b esmo
  - Defult Export ==> kol module leeh 1 defaul export 
  - Import All
*/

// export let a = 10;
// export let arr = [1, 2, 3, 4];

// export function saySomething(){
//     return `Something`;
// }

 let a = 10;
 let arr = [1, 2, 3, 4];

 function saySomething(){
    return `Something`;
}

export {a as myNumber, arr, saySomething} // change a to myNumber w ba8erha fil import brdo

export default function sayHello(){
    return `Hello`;
}