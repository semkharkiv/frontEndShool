// const div = document.querySelector("div");
// div.style.width = "100px";
// div.style.height = "100px";
// div.style.backgroundColor = "black";
// div.addEventListener("mouseover",function() {
//     div.style.backgroundColor="yellow"
// })
// div.addEventListener("mouseout",function() {
//     div.style.backgroundColor="black"
// })
// console.log(Math.random() * 3);  //от [0,3)  не целые числа 
// console.log(Math.floor(Math.random() * 20));  //целые числа

//Квадрат разноцветный из раномных цветов
// const div = document.querySelector("div");
// div.style.width = "150px";
// div.style.height = "150px";
// div.style.border = "1px solid black";
// div.addEventListener("mouseover", function() {
//    const r = Math.floor(Math.random() * 256);
//    const g = Math.floor(Math.random() * 256);
//    const b = Math.floor(Math.random() * 256);
// //    const rgb = `rgb(${r}, ${g}, ${b})`;
//    const rgb = "rgb("+r+","+g+","+b+")";
//    div.style.backgroundColor = rgb;
// })
//     div.addEventListener("mouseout",function() {
//         div.style.backgroundColor="black";
//     })

//Написать цикл,который создает 5 дивов с цветами от rgb(128, 128, 0) до rgb(128, 128, 255),
//и добавить в див с классом main

  // Создание цикла для создания 5 дивов
//   for (let i = 0; i < 5; i++) {
//     // Создание нового дива
//     const newDiv = document.createElement("div");
//     newDiv.style.width = "100px";
//     newDiv.style.height = "100px";
//     // Задание фона нового дива с использованием rgb значений
//     newDiv.style.backgroundColor = `rgb(128, 128, ${Math.floor(Math.random() * 256)})`;
//     // Добавление нового дива в див с классом "main"
//     document.querySelector(".main").appendChild(newDiv);
//   }

//Работа с формами

// const form = document.querySelector("form");

// form.addEventListener("submit", function(event){
//     event.preventDefault();
   
//     console.log("Submitted");

//     const productName = document.querySelector("#productName");
//     const productPrice = document.querySelector("#productPrice");

//     console.log("productName: " + productName.value);
//     console.log("productPrice: " + productPrice.value);
// });


//написать процессс таким оьразом,чтобы при откправке формы данные ищ нее добавлялись в массив с продуктами в виде объекта.
// const form = document.querySelector("form");
// let arrayProd = [];
// form.addEventListener("submit", function(event){
//     event.preventDefault();

//     const productName = document.querySelector("#productName");
//     const productPrice = document.querySelector("#productPrice");

//     const product = {
//         name: productName.value,
//         price: productPrice.value
//     }
//     arrayProd.push(product)

//     console.log(arrayProd);

//     form.reset();
// });

//=================================
const form = document.querySelector("form");
const productsDiv = document.querySelector("#products")
const products = [];
form.addEventListener("submit", function(event){
    event.preventDefault();

    const productName = document.querySelector("#productName");
    const productPrice = document.querySelector("#productPrice");

    const product = {
        name: productName.value,
        price: productPrice.value
    }
    products.push(product)
    const productCardElem=createProductCard(productName.value, productPrice.value)
    // const productCardElem = document.createElement("div")
    // const productPriceElem = document.createElement("h2")
    // const productTitleElem = document.createElement("p")
    // productPriceElem.innerText = productPrice.value
    // productTitleElem.innerText = productName.value
    // productCardElem.append(productTitleElem, productPriceElem)
    productCardElem.classList.add("card")
    productsDiv.append(productCardElem)
    
    form.reset()
})

//===================
//написать функцию, которая получает название продукта и цену продукта и для названия создает h2, для цены создает p потом оборачивает их в новый див и возвращает его, название функции createProductCard

function createProductCard(name, price) {
    // Создание новых элементов с использованием переданных данных
    const productName = document.createElement("h2");
    productName.textContent = name;
    const productPrice = document.createElement("p");
    productPrice.textContent = price;
  
    // Создание нового дива и добавление в него созданных элементов
    const productCard = document.createElement("div");
    productCard.appendChild(productName);
    productCard.appendChild(productPrice);
  
    // Возвращение созданного дива
    return productCard;
  }







