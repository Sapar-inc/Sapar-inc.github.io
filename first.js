let form = document.querySelector("#form")
let input = document.querySelector("#text")

form.addEventListener("submit", (e)=>{
    e.preventDefault() // .preventDefaulf отменяет отправку данных на сервер!!!
    let list = JSON.parse(localStorage.getItem("list")) || []
    list.push(input.value)
    localStorage.setItem("list",JSON.stringify(list))
    input.value = ""
})
