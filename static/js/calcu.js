'use strict';
// const parentElement = document.querySelector('.container');
const lineInput = document.getElementById('input');
const buttons = document.querySelectorAll('button');
const equal = document.getElementById("equal");
const delItem = document.getElementById("delete");


function del() {
    lineInput.innerHTML = "";
}

function equal() {
    lineInput.innerHTML = result;
}

function Calc() {  
        buttons.forEach(btn => {
            btn.addEventListener("click", () => {
                const num1 = btn.textContent;
                const num2 = btn.textContent;
                lineInput.innerHTML += num1;
                equal.addEventListener("click", equal)
                delItem.addEventListener("click", del);})
                // if (btn.classList.contains("delete")) { // удаление(важно)
                //     delItem.addEventListener("click", del);}
                // }) 
        }
    )
}


Calc()
