// for (let index = 0; index < 10; index += 2) {
//   console.log(index);
// }

//=============================

// for (let index = 55; index > 20; index--) {
//     console.log(index);
// }

//============================

const numbers = [3, 5, 11, 2, 8, 1, 6];
// for (let index = 0; index < numbers.length; index++) {
//     const element = numbers[index];
//     console.log(element);
// }

//============================

let numberssquared = [];
for (let index = 0; index < numbers.length; index++) {
    numberssquared[index]=numbers[index]**2;   
}
console.log(numberssquared);

//=============================
const lastelem = numberssquared[numberssquared.length-1];
console.log(lastelem);

//=============================
const user = { firstname: 'Sem', 
    lastname: 'Abdullayev', 
    age: 27, 
    salary: 4200 }

    console.log("User's name is " + user.firstname  +", He is " + user.age + " years old");