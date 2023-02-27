// Функция, которая принимает два числовых аргумента и возвращает наименьшее из них.
function min(a, b) {
  return a < b ? a : b;
  }
  
  // Функция, которая принимает два числовых аргумента и выводит в консоль все четные числа от большего к меньшему.
  function printEvenNumbers(a, b) {
  if (a < b) {
  for (let i = b; i >= a; i--) {
  if (i % 2 === 0) {
  console.log(i);
  }
  }
  } else {
  for (let i = a; i >= b; i--) {
  if (i % 2 === 0) {
  console.log(i);
  }
  }
  }
  }

  // Функция power, которая принимает два числовых аргумента (основание степени и саму степень) и возвращает число в указанной степени.
function power(base, exponent = 2) {
  return Math.pow(base, exponent);
  }
  
  // Функция, которая принимает числовой аргумент n и считает сумму чисел от 1 до n.
  function sumFromOneToN(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
  sum += i;
  }
  return sum;
  }

  // Функция, которая принимает два числовых аргумента n и m и считает сумму четных чисел и нечетных чисел от n до m.
function sumEvenAndOddNumbers(n, m) {
  let evenSum = 0;
  let oddSum = 0;
  for (let i = n; i <= m; i++) {
  if (i % 2 === 0) {
  evenSum += i;
  } else {
  oddSum += i;
  }
  }
  console.log("Sum of even numbers:", evenSum);
  console.log("Sum of odd numbers:", oddSum);
  }