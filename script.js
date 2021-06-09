'use strict';

let books = document.querySelector(".books"),
  book = document.querySelectorAll(".book"),
  book2 = document.querySelectorAll(".book")[2],
  book5 = document.querySelectorAll(".book")[5],
  adv = document.querySelector(".adv"),
  a = document.querySelectorAll("a"),
  li = document.querySelectorAll("ul > li"),
  newEl = document.createElement("li");

document.querySelector('body').style.backgroundImage = 'url(./image/you-dont-know-js.jpg)';

adv.remove();
books.prepend(book[1]);
book[0].insertAdjacentElement('afterend', book[4]);
book[5].after(book[2]);

a[4].textContent = "Книга 3. this и Прототипы Объектов";

console.log(li);

li[9].after(li[2]);
li[3].after(li[6]);
li[6].after(li[8]);


li[47].after(li[55]);
li[50].after(li[48]);
li[53].after(li[51]);

newEl.textContent = 'Глава 8: За пределами ES6';
li[25].after(newEl);