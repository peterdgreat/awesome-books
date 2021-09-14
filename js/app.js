const form = document.querySelector('#form');
const title = document.querySelector('#title');
const author = document.querySelector('#author');
const bks = document.querySelector('.books');
let id = 0;
let books = [

];

function saveLocal() {
  localStorage.setItem('data', JSON.stringify(books));
}

function createBks(titleB, authorB, idI) {
  const li = document.createElement('li');
  li.setAttribute('id', `id${idI}`);
  const titleText = document.createElement('div');
  const authorText = document.createElement('div');
  const btn = document.createElement('button');
  titleText.innerText = titleB;
  authorText.innerText = authorB;
  btn.innerText = 'remove';
  li.appendChild(titleText);
  li.appendChild(authorText);
  li.appendChild(btn);
  bks.appendChild(li);
  btn.setAttribute('onclick', `removeBk(${idI})`);
  title.value = '';
  author.value = '';
  saveLocal();
}

function addBooks(e) {
  books.push({
    id: id += 1,
    title: title.value,
    author: author.value,
  });
  createBks(title.value, author.value, id += 1);
  e.preventDefault();
}

// eslint-disable-next-line no-unused-vars
function removeBk(index) {
  const li = document.querySelector(`#id${index}`);
  const isIndex = (ele) => ele.id === index;
  books.splice(books.findIndex(isIndex, 1));
  bks.removeChild(li);
  saveLocal();
}

function ReadLocalStorage() {
  const temp = JSON.parse(localStorage.getItem('data'));

  if (temp !== null) {
    books = temp;
  }
}

function AddAllRowBooks() {
  if (books === null) {
    return null;
  }
  books.forEach((e) => {
    createBks(e.title, e.author, e.index);
  });
}

window.onload = function load() {
  ReadLocalStorage();
  AddAllRowBooks();
};
form.addEventListener('submit', addBooks);
