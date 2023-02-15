// const value = +prompt("Write your numb")
// if (value > 0) {
//     console.log("Numb is positive");
// }
// else if (value<0) {
//     console.log("Numb is negative");
// }
// else {
//     console.log("Value equals 0");
// }

//============================

// const value = +prompt("Write a value")

// if (isNaN(value)){
//     console.log("Это значчение нельзя преобразовать в число");
// }else {
//     console.log("Это значение можно преобразовать в число");
// }

//==============================

// const year = prompt("Write a year");

// if (year % 400 === 0 || (year % 4 ===0 && year % 100 !== 0)) {
// 	console.log("високосный");
// }else {
//     console.log("не високосный");
// }
//===============================

// const arr = [23, 34, 64, 23, 34]; 
// arr[4] = 500;
// arr[5] = 600;  //добавить в индекс(5) новое число
// // console.log(arr);
// arr.push(700);   //добавить в последующий индекс число
// // console.log(arr); //вывести на консоль 
// console.log(arr.pop()); //get last element of array and rm it from array
// arr.unshift(11, 16, 37); //get numb in first element of array 
// console.log(arr.shift()); //get first element of array and rm it from array
// console.log(arr);
//===============================
//запросить у пользователя числа и создать из них массив
// const arr = [];

// const value_1 = +prompt("Write a number")
// const value_2 = +prompt("Write a number")
// const value_3 = +prompt("Write a number")

// arr.push(value_1, value_2, value_3)
// console.log(arr);

//================================
// const arr = [1, 4, 2, 5, 3];
// const arr1 = [arr[0]**2, arr[1]**2 ,arr[2]**2 ,arr[3]**2, arr[4]**2];
// console.log(arr1);
//================================

// const arr=[9, 15, 4, -8, -65, 0, 85, -32];

// for (let i=0; i < arr.length; i=i+1){
//     if(arr[i]>=0){
// console.log(arr[i]);
// }
// }
//=================================

let arr = [9, 15, 4, -8, -65, 0, 85, -32];
for (let i =arr.length - 1; i>=0; i--){
    console.log(arr[i]);
}