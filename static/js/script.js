'use strict'; 
let elementMin = document.getElementsByClassName('min-range')[0].value
let elementMax = document.getElementsByClassName('max-range')[0].value
const fn = () => {
        return document.getElementsByClassName('inp1').innerHTML = 'указали' || 'не указано';
        //  document.getElementsByClassName('inp2').innerHTML = elementMax || '';


}



// const inputValue = document.querySelectorAll('.container-1 input')
// for (let i; i < inputValue.length; i++) {
//     inputValue[i].addEventListener('input', e => { //е - объект события, который передается в функцию-обработчик
//         let minValue = parseInt(inputValue[0].value);
//         let maxValue = parseInt(inputValue[1].value);
//         let diff = maxValue - minValue;
//         if (minValue < 0) {
//             alert('минимальная цена не может быть меньше 0');
//             minValue = 0;
//         }
//         if (maxValue > 10000) {
//             alert('максимальное значение не может быть больше 10000');
//             maxValue = 10000;
//         }
        
//     }

//     )

// }
// const Post = () => { addedAt: Date(),
//                      ...post }

// const fnWithError = () => {
//     throw new Error('Some error')
// }
// try {
//     fnWithError()
// } catch(error) {
//     console.error(error)
//     error.message
// }


// let b = 'nika';
// let c = 21;
// const a = `My name is ${b} i'm ${c} years old`
// function changeText(e) {
//     const textElement = document.getElementById('modifiedText');
//     textElement.textContent = 'А теперь я измененный текст'

// }
// const userName = {
//     a: 'nika',
//     b: {
//         c: false
//     }
// }
// const person = Object.assign({}, userName)
// person.a = 'vika'
// userName.e = 'vika'; // свойство объекта можно легко поменять, даже если оно конст, потому что объект - ссылочный тип, в переменных хранится не значение, а ссылка(область памяти) на объект
// userName['e'] = 'tugoserya'
// мутирование объекта и мутирование копий(когда одной переменной  присваивается значение другой переменной с ссылкой на объект )
// console.log(person)
// console.table(userName)

// const brokenLinks = ['vk', 'youtube', 'facebook']
//     const correctLink = (linksArray) => {
//         const correctLinks = [];
//         linksArray.forEach((link) => {
//             const fixedLink = 'https://' + link + '.com'
//             correctLinks.push(fixedLink);
//     })
      
//         // const res = console.log(a)
//     return correctLinks;
// }
// console.log(correctLink(brokenLinks));

// function calculateCircleArea(Value) {
//     let x = Value;
//     let area = 3.14 * x ** 2;
//     return area;
// }
// const a = calculateCircleArea(3);
// console.log(a);

// function createHTMLElement(tag, text, id) {
//     const element = document.createElement(tag);
//     if (id) {
//         element.id = id;

//     }
//     element.innerText= text;
//     return element;
// }

// const h1Element = createHTMLElement('h1','pidoras');
// console.log(h1Element);
// document.body.append(h1Element);
// for(let argument of arguments) {
//     console.log(argument);
// }







// 'use strict'; // 
// // const items = ['пчёлы','мёд','пчелиный мёд'];
// const searchInput = document.getElementById('searchInput');
// const results = document.getElementById('results');
// const searchBody = document,querySelector('.search-body');
// function displayResults(resultsArray) {
//     results.innerHTML = '';
//     resultsArray.forEach(result => {
//         const li = document.createElement('li');
//         li.textContent = result.name;
//         results.appendChild(li);
//     });
// }

// fetch('./data.json') // отправляет GET-запрос на сервер с целью получить ответ
//     .then(response => response.json())
//     .then(data => {
//         searchInput.addEventListener('input', () => { // создает обработчик событий
//             const query = searchInput.value.toLowerCase(); 
//             const filteredResults = data.filter(item => 
//                 item.name.toLowerCase.includes(query) // проверяет, имеет ли строка указанное значение( true/false )
//             );
//         displayResults(filteredResults);
//         })
//     })
// console.log('filteredResults');

// function ask(question, yes, no) {
//   if (confirm(question)) yes()
//   else no();
//   }
// ask(
//   "Вы согласны?",
//   () => { alert("Вы согласились."); },
//   () => { alert("Вы отменили выполнение."); }
// );
// function sayHi() {
//   alert( "Привет" );
// }

// alert( sayHi() ); 

// let x = prompt("введите число");
// let n = prompt("введите степень числа больше 1");
// function  pow(x, n) {
//     for (let i = 1; (n >= 1) && (i < n); i++) {
//         x *= x;
//     }
//     return alert(x);
// }
// pow(x, n);


// function checkAge(age) {
//  return (age > 18) || confirm('Родители разрешили?') 
// }
// (age > 18) ? true : confirm('Родители разрешили?');
// const number = +prompt('Введите число между 0 и 3', '');
// switch(number) {
//     case 0:
//         alert('Вы ввели число 0');
//         break;
//     case 1:
//         alert('Вы ввели число 1');
//         break;
//     case 2:
//     case 3:
//         alert('Вы ввели число 2, а может и 3');
//         break;
// }
// if (number === 0) {
//   alert('Вы ввели число 0');
// }

// if (number === 1) {
//   alert('Вы ввели число 1');
// }

// if (number === 2 || number === 3) {
//   alert('Вы ввели число 2, а может и 3');
// }
// switch(a) {
//     case 1:
//         break;
//     case 2:
//         break;
//     case 3:
//         break;
//     default:
//         alert('нет таких значений')
    
// }
// let browser = prompt('введите свой браузер')
// if (browser==='Edge') {
//     alert("You've got the Edge!" );
// }
// else if ((browser=='Chrome') 
//     || (browser=='Firefox') 
//     || (browser=='Safari') 
//     || (browser=='Opera')) {
//     alert( 'Okay we support these browsers too' );
// }
// else {
//      alert( 'We hope that this page looks ok!' );
// }


// switch (browser) {
//   case 'Edge':
//     alert( "You've got the Edge!" );
//     break;

//   case 'Chrome':
//   case 'Firefox':
//   case 'Safari':
//   case 'Opera':
//     alert( 'Okay we support these browsers too' );
//     break;

//   default:
//     alert( 'We hope that this page looks ok!' );
// }

// const items = ['пчёлы','мёд','пчелиный мёд'];
// const searchInput = document.getElementById('searchInput');
// const results = document.getElementById('results');

// searchInput.addEventListener('input', () => {
//     const query = searchInput.value.toLowerCase(); // нижний регистр у запроса
//     results.innerHTML = ''; // очищаем результат прошлого запроса

//     items.forEach(item => {
//         if (item.toLowerCase().includes(query)) { //проверка на соответствие запросу элемента
//             const li = document.createElement('li');
//             li.textContent = item; // добавляем в list item текст из словаря items
//             results.appendChild(li); // элемент li в списке результатов
//         }
//     });
// });


//     let videoId = null;

//     // Регулярные выражения для различных форматов
//     const youtubeRegex = /^(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|(?:youtu\.be\/))([^&\n]{11})/;

//     const match = url.match(youtubeRegex);
//     if (match) {
//         videoId = match[1]; // Получаем ID видео
//     }

//     return videoId;
// }

// const url1 = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
// const url2 = "https://youtu.be/dQw4w9WgXcQ";
// const url3 = "https://www.youtube.com/embed/dQw4w9WgXcQ";

// const cursor = document.querySelector('.cursor') /*возвращает 1й элемент, соответствующий данному селектору*/
// document.addEventListener('mousemove', (e) => {/* вызывает функцию каждый раз, когда событие достигает цели(?) */
//     cursor.style.top = `${e.clientY}px`; /* через метод style появляется доступ к стилям переменной */
//     cursor.style.left = `${e.clientX}px`;
// });

// document.addEventListener('click', () => {
//     cursor.classList.add('click'); /* добавляем класс click ко всем атрибутам 'класс' элемента */
//     setTimeout(() => cursor.classList.remove('click'), 150); /* удаляет класс click 1 раз через 0.15 секунд? */
// });
// const hoverables = document.querySelectorAll('a');
// hoverables.forEach(el => {
//     el.addEventListener('mouseenter', () => cursor.classList.add('hover'));
//     el.addEventListener('mouseleave', () => cursor.classList.remove('hover'));
// });

// let login = prompt('Введите логин');
// // psw = prompt('Напишите пароль');
// if (login === 'Админ') {
//     let psw = prompt('Напишите пароль');
//     if (psw == 'Я главный') {
//         alert('Здравствуйте');
//     }
//     else {
//         if (psw === '' || psw === null) {
//             alert('Отменено');
//         }
//         else {
//             alert('Неверный пароль');
//         }
//     }
// } else {
//     if (login === '' || login === null) {
//         alert('Отменено');
// } else {
//     alert('Я вас не знаю');
//    }
// }

// четные числа от 2 до 10
// let number = 2;
// for (number; number <= 10; number++) {
//     if (number % 2 == 0) {
//         alert(number);
//     }
// }

// for (let i = 0; i < 3; i++) {
//   alert( `number ${i}!` );
// }
// let i = 0;
// while (i < 3) {
//     alert(`number ${i}`);
//     i++;
// }

// let num = +prompt('Введите число больше 100', 101);

// if (num) {
//     while (num <= 100) {
//         num = prompt('Введите число больше 100', 101);
//         if (num <=100) continue;
//     }
// }

// let num;
// do {
//     if ((num % num == 0) && (num % 1 == 0) && (num % 2 != 0)) {
//         alert(num++);
//     }
// } while (num>2)
