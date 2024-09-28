
'use strict';


console.log(document.body.firstElementChild);
console.log(document.body.children[1]);
console.log(document.body.children[1].lastElementChild);


let elems = document.querySelectorAll('li');
for(let elem of elems){
    elem.classList.add('list-item');
}
console.log(elems);



let a = prompt('Введите кол-во блоков');

for(let i = 1;i <= a; i++){
    let div = document.createElement('div');
    div.className = 'block';
    div.innerHTML = `${i}-ый блок`;
    document.body.append(div);
}


let form = document.createElement('form');
let inp = document.createElement('input')
let inp2 = document.createElement('input')
let btn = document.createElement('button');
btn.className = 'btn';

document.body.append(form);
document.body.lastElementChild.append(inp, inp2, btn);
btn.innerHTML = 'Отправть';
inp.placeholder = 'Ваше имя';
inp2.placeholder = 'Email';