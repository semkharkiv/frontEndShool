// Создание параграфов с каждым десятым числом в промежутке от 100 до 50
const numbersDiv = document.querySelector('.numbers');

for (let i = 100; i >= 50; i -= 10) {
const p = document.createElement('p');
p.textContent = i;
numbersDiv.appendChild(p);
}

// Создание параграфов для массива строк
const stringsDiv = document.querySelector('.stringscontainer');
const stringsArr = ['Lorem ipsum', 'dolor sit amet', 'consectetur adipiscing', 'elit'];

for (let i = 0; i < stringsArr.length; i++) {
const p = document.createElement('p');
p.textContent = stringsArr[i];
stringsDiv.appendChild(p);
}

// Создание карточек для объектов с информацией о пользователях
const users = [
{firstname: 'John', lastname: 'Doe', age: 25},
{firstname: 'Jane', lastname: 'Doe', age: 17},
{firstname: 'Bob', lastname: 'Smith', age: 33},
{firstname: 'Alice', lastname: 'Johnson', age: 21}
];

const usersDiv = document.querySelector('.userscontainer');

for (let i = 0; i < users.length; i++) {
if (users[i].age >= 18) {
    const card = document.createElement('div');
card.classList.add('usercard');
const name = document.createElement('p');
name.textContent = users[i].firstname + ' ' + users[i].lastname;
const age = document.createElement('p');
age.textContent = 'Age: ' + users[i].age;
card.appendChild(name);
card.appendChild(age);
usersDiv.appendChild(card);
}
}