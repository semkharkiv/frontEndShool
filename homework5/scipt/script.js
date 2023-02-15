// const value = +prompt("Write a value")
// let a=value*0.1
// console.log(a);
//================================================
// const value_1=prompt("Write a first value")
// const value_2=prompt("Write a second value")
// if(value_1<value_2){
//     console.log(value_1);
// }else console.log(value_2);
//================================================
// const value = prompt("Write a value")
// if (value<100){
//     console.log("Число меньше 100");
// }else if (value>100){
//     console.log("Число больше 100");
// }else console.log("Число равно 100");
//================================================
// const name = prompt("Write your name")
// const age = +prompt("Write your age")
// if(age<18){
//     console.log("Hi " + name);
// }else console.log("Hello " + name);
//================================================
let array = ['Sem',27,'Java',{name:' Erik'},23,{name:' Suzanna'}, NaN]   
// console.log(array);
// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
//     if(isNaN(element)){
//         console.log(index + " element's of array is string");
//     }else if (typeof element){
//         console.log(index + " element's of array is number");
//     }else console.log(index + " elemet's of array is not a NaN or typeof");
// }
sumOfElement=0;
for (let index = 0; index < array.length; index++) {
    const element = array[index];
    if(!isNaN(element)){
        sumOfElement +=element 
    }
}
console.log(sumOfElement);