const form = document.querySelector('#form');
const title = document.querySelector('#title');
const author = document.querySelector('#author');
const bks = document.querySelector('.books');
let id = 0;
const books = [

];

function addBooks(e) {
  books.push({
    id: id += 1,
    title: title.value,
    author: author.value,
  });
  e.preventDefault();
  // bks.setAttribute('id', `id${index}`);
  const li = document.createElement('li');
  li.setAttribute('id', `id${id}`);
  const titleText = document.createElement('div');
  const authorText = document.createElement('div');
  const btn = document.createElement('button');
  titleText.innerText = title.value;
  authorText.innerText = author.value;
  btn.innerText = 'remove';
  li.appendChild(titleText);
  li.appendChild(authorText);
  li.appendChild(btn);
  bks.appendChild(li);
  btn.setAttribute('onclick', `removeBk(${id})`);
  console.log(bks);
  console.log(books);
}

function removeBk(index) {
  const li = document.querySelector(`#id${index}`);
  const isIndex = (ele) => ele.id === index;
  books.splice(books.findIndex(isIndex, 1));
  bks.removeChild(li);
  console.log(books);
}

form.addEventListener('submit', addBooks);