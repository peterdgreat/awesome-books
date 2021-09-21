const btn = document.querySelector('#bsub');
const title = document.querySelector('#title');
const author = document.querySelector('#author');
const bks = document.querySelector('.books');
let id = 0;
let books = [

];

class BksClass {
  constructor(authorC, titleC, idC) {
    this.authorC = authorC;
    this.titleC = titleC;
    this.idC = idC;
  }

  // eslint-disable-next-line class-methods-use-this
  saveLocal() {
    localStorage.setItem('data', JSON.stringify(books));
  }

  createBks() {
    const li = document.createElement('li');
    li.setAttribute('id', `id${this.idC}`);
    const titleText = document.createElement('div');
    const authorText = document.createElement('div');
    const btn = document.createElement('button');
    const div = document.createElement('div');
    titleText.innerText = this.titleC;
    authorText.innerText = this.authorC;
    btn.innerText = 'remove';
    div.innerText = 'by';
    li.appendChild(titleText);
    li.appendChild(div);
    li.appendChild(authorText);
    li.appendChild(btn);
    bks.appendChild(li);
    btn.setAttribute('onclick', `removeBk(${this.idC})`);
    title.value = '';
    author.value = '';
    this.saveLocal();
  }

  addBooks() {
    books.push({
      author: this.authorC,
      title: this.titleC,
      id: this.idC,
    });
    this.createBks();
  }
}

// create a funtion to remove the book
// eslint-disable-next-line no-unused-vars
function removeBk(id) {
  const li = document.querySelector(`#id${id}`);
  const isIndex = (ele) => ele.id === id;
  bks.removeChild(li);
  // remove the book from the array and save it to local storage

  const myIndex = books.findIndex(isIndex);
  books.splice(myIndex, 1);
  BksClass.saveLocal();
}

function ReadLocalStorage() {
  const temp = JSON.parse(localStorage.getItem('data'));

  if (temp !== null) {
    books = temp;
  }
}

window.onload = function load() {
  function AddAllRowBooks() {
    if (books === null) {
      return null;
    }
    books.forEach((e) => {
      const classBk = new BksClass(e.author, e.author, id += 1);
      classBk.createBks();
    });
  }
  ReadLocalStorage();
  AddAllRowBooks();
};
btn.addEventListener('click', (e) => {
  const classBk = new BksClass(title.value, author.value, id += 1);
  classBk.addBooks();
  e.preventDefault();
});
