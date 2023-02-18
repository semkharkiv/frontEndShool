// DOM = Document Object Model

// const pValue = document.querySelector("p");
// console.log(pValue.innerText);

// const paragraphs = document.querySelectorAll("p");
// console.log(paragraphs);

// for (let index = 0; index < paragraphs.length; index++) {
//     const p = paragraphs[index]
//     console.log(p.innerText);
// }

// const pMainInfo = document.querySelector(".main .info_1"| "");
// pMainInfo.innerText="Hello world!"

//=====================================

// const pInfo_1=document.querySelectorAll(".info_1");
// const arr = [];

// for (let index = 0; index < pInfo_1.length; index++) {
//     arr.push(pInfo_1[index].innerText);
// }
// console.log(arr);

//=====================================

// const img = document.querySelectorAll(".main img");
// console.log(img.src);
// console.log(img.alt);
// img.setAttribute("src", "https://e7.pngegg.com/pngimages/595/774/png-clipart-leopard-leopard.png")
// console.log(img.src);
// for (let index = 0; index < 5; index++) {
//     img[index].setAttribute("src", "https://w7.pngwing.com/pngs/185/163/png-transparent-snow-leopard-felidae-leopard-mammal-image-file-formats-animals.png")
// }
// console.log(img.src);

//=====================================
// const div = document.querySelector(".main")
// const p = document.createElement("p");
// p.innerText = "Hello World"
// div.append(p)  //добавляет элемент после всех дочерних элементов

//=====================================
const div = document.querySelector(".main")   //
const paragraphsTexts = ["Day 1", "Day 2", "Day 3", "Day 4"];
for (let index = 0; index < paragraphsTexts.length; index++) {
    const p = document.createElement("p");  //создаем пустой параграф
    p.innerText = paragraphsTexts[index];  //вставляем элемент массива в параграф
    div.append(p);  //добавляем в див с классом маин
}