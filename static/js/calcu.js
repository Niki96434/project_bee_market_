'use strict';
// const parentElement = document.querySelector('.container');
const lineInput = document.getElementById('input');
const buttons = document.querySelectorAll('button');
const equal = document.getElementById("equal");
const delItem = document.getElementById("delete");

// del.addEventListener("click", del);
function del() {
    lineInput.innerHTML = "";
}
function Calc() {  
        buttons.forEach(btn => {
            btn.addEventListener("click", () => {
                lineInput.innerHTML += btn.textContent;
                if (btn.classList.contains("delete")) { // удаление(важно)
                    delItem.addEventListener("click", del);}
                }) 
        }
    )
}
Calc()
