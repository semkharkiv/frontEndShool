// function beautyPrint(result) {
//     console.log(`Значение result: ${result}`);
// }

// function sum(a, b, callback) {
//     const c= a+b;
//     callback(c);
// }

// const aValue = 1;
// const bValue = 3;

// sum(aValue,bValue,beautyPrint)

//============================


// const arr=[1,2,3,4,5];

// function printArray(arr,callback) {
//     for (let i = 0; i < arr.length; i++) {
//     callback(arr[i]);
// }
    
// }

// function endResultPrint(a){
//     console.log(a**2);
// }
// printArray(arr,endResultPrint)

//======================

// const prgph = document.querySelector("p");
// function clicked(){
//     console.log("Clicked");
// }
// prgph.addEventListener("click",clicked);

//=======================
// const btn = document.querySelector("button.inc");
// const prgph = document.querySelector("p");
// let p = 0;
// function clickHandler() {
//     p = p + 1;
//     prgph.innerText=p;
// }
// const btn1 = document.querySelector("button.dec");
// function clickHandlerMinus() {
//     p = p - 1;
//     prgph.innerText=p;
// }
// btn.addEventListener("click", clickHandler)
// btn1.addEventListener("click", clickHandlerMinus)

//==========================

// const prgph = document.querySelector("p");
// function clicked(event){
//     console.log(event);
//     prgph.innerText += event.key;
// }
// prgph.addEventListener("click",clicked);

// document.addEventListener("keydown",clicked);

//===========================

// const array = ["я","ты","он","она","мы"];
// const div = document.querySelector("div.main")
// for (let index = 0; index < array.length; index++) {
//     const prg = document.createElement("p")
//     prg.addEventListener("click",function() {
//         prg.innerText="*****"
//     })
//     prg.innerText=array[index]
//     div.append(prg)
// }

//===========================

const images = ['https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg', 'https://cdn.pixabay.com/photo/2014/02/27/16/10/flowers-276014_960_720.jpg', 'https://cdn.pixabay.com/photo/2012/03/01/00/55/flowers-19830_960_720.jpg'];

const thumbnailsDiv = document.querySelector("#thumbnails");
const previewDiv=document.querySelector("#preview");
const emptyImgElem=document.createElement("img");
previewDiv.append(emptyImgElem)

for (let index = 0; index < images.length; index++) {
    const newImgElem = document.createElement("img");
    newImgElem.setAttribute("src" , images[index])
    newImgElem.addEventListener("click", function(){emptyImgElem.setAttribute("src",images[index])});
    thumbnailsDiv.append(newImgElem);
}