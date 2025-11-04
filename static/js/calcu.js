'use strict';

const parentElement = document.querySelector('.container');
const lineInput = document.getElementById('input');
const x = document.querySelectorAll('.button');
const y = document.querySelectorAll('.button');
const equal = document.getElementById("equal");
const delItem = document.getElementById("delete");
const subtr = document.getElementById("subtr");
const multi = document.getElementById("multi");
const deduc = document.getElementById("deduc");
const adds = document.getElementById("add");
let question = null;

function addNumber() {

    class Calc {
        handleEvent(event) {
            switch(event.target.textContent) {
            case '+': 
                lineInput.innerHTML += '+';
                x = null;
                break
            case 'del':
                lineInput.innerHTML = '';
                x = null;
                break
            case '=':
                question += parseInt(x);
                lineInput.innerHTML = question;
                break
            case '1':
                x = event.target.textContent;
                lineInput.innerHTML += 1;
                break
            }}
}

            function equaly(x) {
                question = parseInt(x) + parseInt(y);
                lineInput.innerHTML = question;
            }
            
    let calc = new Calc();
    adds.addEventListener("click", calc);
    equal.addEventListener("click", calc);
    x.forEach(btnX => {
        btnX.addEventListener("click", calc)});
    }
    y.forEach(btnY => {
        btnY.addEventListener("click", calc)});

addNumber()
    
    
    
    
            // if (x === null) {
            //     btn.addEventListener("click", () => {
            //         x += btn.textContent;
            //         lineInput.innerHTML += btn.textContent;
            //     })}
            // else {
            //     btn.addEventListener("click", () => {
            //         y += btn.textContent;
            //         lineInput.innerHTML += btn.textContent;
            //     })
            // }}

//     action(action) {
//         switch (action) {
//         case adds:
//             this.question = this.x + this.y;
//             break
//         case equal:
//             return this.question
//             break
//         case del:
//             return this.question = null;
//     }
// }

// function del() {
//     lineInput.innerHTML = "";
// }

// function question(numberX,numberY) {
//     numberQuestion = numberX + numberY;
//     lineInput.innerHTML = numberQuestion;
// }

// function Calc() {  
//         buttons.forEach(btn => {
//         btn.addEventListener("click", function inputItem() {
//                     btnTextX = btn.textContent; // 1е число
//                     numberX = parseInt(btnTextX); // 1е число инт
//                     lineInput.innerHTML += btnTextX; // выводим
//                     btn.removeEventListener("click", inputItem)}) // удаляем эту функцию
//         adds.addEventListener("click", () => {
//                     lineInput.innerHTML = btnTextX + '+';
//                     btn.addEventListener("click", () => {
//                         btnTextY = btn.textContent; // 2е число
//                         numberY = parseInt(btnTextY); 
//                         lineInput.innerHTML += btnTextY;})
//                     })
//                 })

//         delItem.addEventListener("click", del);
//         equal.addEventListener("click", question);
//             }

// Calc()
