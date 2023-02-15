// const arr = [5, 6, 8, 1, -51, 2, -51, -52]
//  let sumOfElementsChet = 0;
//  let sumOfNechet = 0;

// for (let i = 0; i < arr.length; i++) {
// const element = arr[i];
// sumOfElements += element
// }

// console.log(sumOfElements);

// for (let i = 0; i < arr.length; i++) {
//     if ( arr[i] > 0 )
//      sumOfElements +=arr[i];
//          }
//          console.log(sumOfElements);


//========Найти сумму четных и нечетных чисел из массива и вывести разницу межу ними.Сделать проверку какая из сыммы(чет или нечет) больше.


// for (let i = 0; i < arr.length; i++) {
// if(arr[i]%2===0)  //четное
// sumOfElementsChet +=arr[i];
// else if(arr[i]%2 != 0)  //нечетное
// sumOfNechet +=arr[i];
// }

//проверка какая из сумм больше
// let diff = 0;  
    // if (sumOfElementsChet>sumOfNechet) {    //проверка какая из сумм больше
//     diff = sumOfElementsChet - sumOfNechet;
// }else {
//     diff =sumOfNechet - sumOfElementsChet;
// }
//      console.log(diff);

//=========================== Найти сумму чисел,чей индекс равен значению элемента

// const arr = [1, 34, 52, 4, 9, -5, 6, 59, 52, 9];
// sum = 0;
// for (let i = 0; i < arr.length; i++) {
//     if(arr[i] === i){
//         sum = arr[i] + i;   
//     }
//     }
//     console.log(sum);

//============================

// const person = ["John","Smith",37,175];
// console.log(`Name - ${person[0]}`);

//===========

// const person = {
//     name: "John",
//     secondName: "Smith",
//     age: 37,
//     height: 175
// }
// console.log(`Name ${person['name']}`);
// console.log("Age " +person.age);

//===========
// const product ={
//     name: "Pakhlava",
//     price: "two euro",
//     weight: "250gr",
//     level: "VIP"
// }
// console.log(product);

//=========================
const product = [
    {
        title: "Notebook",
        price: 1500,
        discount: 17,
        type: "electronix"
    },
    {
        title: "Pc",
        price: 2000,
        discount: 12,
        type: "electronix"
    },
    {
        title: "Blender",
        price: 500,
        discount: 25,
        type: "electronix"
    },
    {
        title: "Blender",
        price: 500,
        discount: 25,
        type: "sport"
    },
    {
        title: "Blender",
        price: 500,
        discount: 25,
        type: "sport"
    }
]
// let sumOfprice=0;
const newProduct = [];
for (let index = 0; index < product.length; index++) {
    // const {title,price,discount,type} = product[index];
    // console.log("Name " + title + " Price " + price)     
    // console.log("Name " + product[index].title + " Price "+ product[index].price);                       //оба варианта одинаковы

    // sumOfprice =product[index].price- (product[index].price * product[index].discount / 100)
    // sumOfprice = price - (price * discount / 100)
    // console.log("summa posle skidki " + sumOfprice);
    const {type} = product[index];
    if (type === "sport"){
        newProduct.push(product[index])
    }
}
console.log(newProduct);
// console.log("Sum of prices = " +sumOfprice);