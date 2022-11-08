let form = document.querySelector("#form")
let input = document.querySelector("#text")
let clearBtn = document.querySelector("#clear_list")
let inputRemove = document.querySelector("#text_remove")
let removeBtn = document.querySelector("#remove_list")


form.addEventListener("submit", (e)=>{
    e.preventDefault() // .preventDefaulf отменяет отправку данных на сервер!!!
    let list = JSON.parse(localStorage.getItem("list")) || []
    list.push(input.value)
    localStorage.setItem("list",JSON.stringify(list))
    input.value = ""
})

removeBtn.addEventListener("click", () =>{
    let list = JSON.parse(localStorage.getItem("list")) || []
    list.splice(inputRemove.value, 1)
    localStorage.setItem("list",JSON.stringify(list))
})

clearBtn.addEventListener("click", ()=>{
    let list = JSON.parse(localStorage.getItem("list")) || []
    localStorage.clear()
    console.log(localStorage.getItem("list",list))
})

