const form = document.querySelector("form")
const input = document.querySelector("#new_item_input")
const list = document.querySelector("#todo_list")
const dateInput = document.querySelector("#new_date_input")

//Добавить обработчик события для ивента (submit) у формы и предотвратить перезагрузку странички и сохранить в переменной text значение которое ввел пользователь и очистить инпут.
//1 добавить обработчик (addEventListener) на form для ивента submit 
//2 воспользоваться методом у объекта event чтобы предотвратить перезагрузку,название метода preventDefault 
//3 создать переменную text с помощью const и сохранить туда значение из input ,чтобы получить это значение использовав свойство value
//4 очистить инпут с помощью метода reset у объекта form

// form.addEventListener("submit", function(event){   //1
//     event.preventDefault()                         //2
//     const text = input.value                       //3
//     form.reset()                                   //4
//     console.log(text);
// })

//============================

const todoItems = []


function addItem(event){
    event.preventDefault()
    let itemDate = dateInput.value
    let text = input.value
    form.reset()
    text = text.trim()  //удаляет пробелы в начале и в конце строки

    if (text ==="") {
        return
    }

    const todoItem = {
        text: text,
        status: false,
        date: itemDate

    }
    todoItems.push(todoItem)
    updateList()
}

function itemRemoveHandler(event){const index = event.target.dataset.index;
    todoItems.splice(index,1)
    updateList()
    }

function toggleStatusHandler(event) {
    const index = event.target.dataset.index;
    todoItems[index].status = !todoItems[index].status;
    updateList()
 
}
//========================================
//cоздать для каждого todo объекта html элемент li,input,label,button
function updateList() {
    list.innerHTML = ""

    for (let index = 0; index < todoItems.length; index++) {
        const {text,status, date} = todoItems[index]
        const li = document.createElement("li")
        const input = document.createElement("input")
        const label = document.createElement("label")
        const button = document.createElement("button")
        button.innerText = "Remove"
        label.innerText = text
        input.setAttribute("type", "checkbox")
        input.setAttribute("id", `item_${index}`)
        input.setAttribute("data-index",index)
        input.checked = status
        input.addEventListener("change", toggleStatusHandler)
        label.setAttribute("for", `item_${index}`)
        if (status) {
            label.style.textDecoration ="line-through"
        }
        button.setAttribute("data-index", index)
        button.classList.add("remove_item")
        button.addEventListener("click" , itemRemoveHandler)
        li.setAttribute("data-date", date)
        li.append(input,label,button)

        list.append(li)
    }
}

//========================================
form.addEventListener("submit", addItem)

