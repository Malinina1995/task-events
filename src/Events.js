/*
   1. Создайте функцию createButton(). Необходимо, чтобы эта функция осуществила вставку в body тег button с текстом: "Удали меня".
      При клике по button удалить этот button.
*/
export function createButton() {
    let btn = document.body.appendChild(document.createElement("button"));
    btn.innerHTML = "Удали меня";
    btn.onclick = () => {
        btn.remove();
    };

}

/*
   2. Создайте функцию createArrList(arr), в которую передается 1 параметр: arr - массив строк.
      Функция выводит этот массив в виде маркированного списка внутри тега body.
      При наведении курсора мыши на элемент списка у этого элемента создается атрибут title, в котором записан его текст.
*/
export function createArrList(arr) {
    const ul = document.body.appendChild(document.createElement('ul'));

    for (let i = 0, ln = arr.length; i < ln; i++) {
        const li = document.createElement('li');
        li.innerHTML = arr[i];

        li.addEventListener('mouseover', (event) => {
            event.target.setAttribute('title', event.target.innerHTML);
        });

        ul.appendChild(li);
    }
}

/*
   3. Создайте функцию createLink(), которая сгенерирует следующую разметку и вставит ее в body:

      <a href="https://tensor.ru/">tensor</a>

      При первом клике по ссылке в конец ее текста через пробел дописывается ее href.
      При следующем клике происходит действие по умолчанию (переход по ссылке в текущей вкладке).
*/
export function createLink() {
    let a = document.body.appendChild(document.createElement("a"));
    a.href = 'https://tensor.ru/';
    a.innerHTML = 'tensor';
    let firstClick = true;
    a.onclick = (event) => {
        if (firstClick) {
            event.preventDefault();
            event.target.innerHTML = event.target.innerHTML + ' ' + event.target.href;
            firstClick = false;
        }
    };
}

/*
   4. Создайте функцию createList(), которая сгенерирует следующую разметку и вставит ее в body:

      <ul>
         <li>Пункт</li>
      </ul>
      <button>Добавить пункт</button>

      При клике по элементу li ему в конец текста добавляется восклицательный знак.
      При клике по button в конец списка добавляется новый элемент li с текстом: "Пункт".
      Клик по новому li также добавляет восклицательный знак в конец текста.
*/
export function createList() {
    const ul = document.body.appendChild(document.createElement('ul'));
    const li = document.createElement('li');
    li.innerHTML = 'Пункт';
    ul.appendChild(li);

    ul.onclick = (event) => {
        if (event.target && event.target.nodeName === 'LI') {
            event.target.innerHTML += '!';
        }
    };

    const btn = document.body.appendChild(document.createElement('button'));
    btn.innerHTML = 'Добавить пункт';

    btn.onclick = () => {
        const li = document.createElement('li');
        li.innerHTML = 'Пункт';
        ul.appendChild(li);
    };
}
