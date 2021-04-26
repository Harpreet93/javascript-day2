//IIFE - Immediately Invoked Function Expression
( function(){
console.log("%cApp Started", "font-size:40px;color:red;");

document.getElementById("mainHeading").textContent =  "Hello World" ;
 
let a ="First veriable";
let b ="Second veriable"
let c = a-b ;
//console.log("This is c " +c)

//airthmetic on int 
let x= 5;
let y= 10;
let z= x+y;
//console.log("Z is " +z)
//b00l
 let i= true;
 let j = false;
  let h= i + j;
  //console.log(h)
let mainDiv = document.getElementById("mainDiv");
mainDiv.style.color = "blue";

let paragraph = document.createElement("p")
paragraph.textContent = "This is created by Java Scripts";
paragraph.setAttribute("id","mainParagraph")
mainDiv.append(paragraph);

let ol = document.createElement("ol");
ol.style.listStyleType = "upper-roman";

let li = document.createElement("li");
li.textContent= "Apple";

let li1 = document.createElement("li");
li1.textContent= "Bannana";

ol.append(li);
ol.append(li1);
mainDiv.append(ol);





})();