'use strict';

const parentElement = document.querySelector('.container');
const lineInput = document.getElementById('input');
const btnX = document.querySelectorAll('.button');
// const y = document.querySelectorAll('.button');
const equal = document.getElementById("equal");
const delItem = document.getElementById("delete");
const subtr = document.getElementById("subtr");
const multi = document.getElementById("multi");
const deduc = document.getElementById("deduc");
const adds = document.getElementById("add");
let arr_X = [];
let arr_Y = [];
let xNum = null;
let yNum = null;
let second = false;
let question = null;
function addNumber(xNum, yNum) {

    class Calc {
        handleEvent(event) {
            switch(event.target.textContent) {
            case '+': 
                xNum = parseInt(arr_X.join(''));
                second = true;
                //arr_Y = [];
                console.log(xNum);
                lineInput.innerHTML += '+';
                break
            case 'del':
                lineInput.innerHTML = '';
                xNum = null;
                yNum = null;
                break
            case '=':
                yNum = parseInt(arr_Y.join(''));
                console.log(yNum);
                question = xNum + yNum;
                if (isFinite(question)) {
                lineInput.innerHTML = question;
                arr_X = [];
                arr_Y = [];
                xNum = null;
                yNum = null;
                second = false;}
                else {lineInput.innerHTML = 'ошибка';}
                break
            case '1':
                lineInput.innerHTML += 1;
                if (second){
                    arr_Y.push(lineInput.textContent);
                }
                else {
                    arr_X.push(lineInput.textContent);
                }

                break
            case '2':

                lineInput.innerHTML += 2;
                if (second){
                    arr_Y.push(lineInput.textContent);
                }
                else {
                    arr_X.push(lineInput.textContent);
                }
                break
            case '3':
                lineInput.innerHTML += 3;
                if (second){
                    arr_Y.push(lineInput.textContent);
                }
                else {
                    arr_X.push(lineInput.textContent);
                }
                break
            case '4':
                lineInput.innerHTML += 4;
                if (second){
                    arr_Y.push(lineInput.textContent);
                }
                else {
                    arr_X.push(lineInput.textContent);
                }
                break
            case '5':

                lineInput.innerHTML += 5;
                if (second){
                    arr_Y.push(lineInput.textContent);
                }
                else {
                    arr_X.push(lineInput.textContent);
                }
                break
            case '6':

                lineInput.innerHTML += 6;
                if (second){
                    arr_Y.push(lineInput.textContent);
                }
                else {
                    arr_X.push(lineInput.textContent);
                }
                break
            case '7':
   
                lineInput.innerHTML += 7;
                if (second){
                    arr_Y.push(lineInput.textContent);
                }
                else {
                    arr_X.push(lineInput.textContent);
                }
                break
            case '8':
                lineInput.innerHTML += 8;
                if (second){
                    arr_Y.push(lineInput.textContent);
                }
                else {
                    arr_X.push(lineInput.textContent);
                }
                break
            case '9':
                lineInput.innerHTML += 9;
                if (second){
                    arr_Y.push(lineInput.textContent);
                }
                else {
                    arr_X.push(lineInput.textContent);
                }
                break
            case '0':
                lineInput.innerHTML += 0;
                if (second){
                    arr_Y.push(lineInput.textContent);
                }
                else {
                    arr_X.push(lineInput.textContent);
                }
                break
    }}}
    let calc = new Calc();
    adds.addEventListener("click", calc);
    equal.addEventListener("click", calc);
    delItem.addEventListener("click", calc);
    btnX.forEach(btn => {
            btn.addEventListener("click", calc)});
    // function equaly() {
    //                 question = parseInt(xNum) + parseInt(yNum);
    //                 lineInput.innerHTML = question;
    //     }
    }
addNumber()
    