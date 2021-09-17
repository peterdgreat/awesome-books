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

  createBks() {
    const li = document.createElement('li');
    li.setAttribute('id', `id${this.idC}`);
    const titleText = document.createElement('div');
    const authorText = document.createElement('div');
    const btn = document.createElement('button');
    titleText.innerText = this.titleC;
    authorText.innerText = this.authorC;
    btn.innerText = 'remove';
    li.appendChild(titleText);
    li.appendChild(authorText);
    li.appendChild(btn);
    bks.appendChild(li);
    btn.setAttribute('onclick', `removeBk(${this.idC})`);
    title.value = '';
    author.value = '';
    saveLocal();
  }

  addBooks() {
    books.push({
      author: this.authorC,
      title: this.titleC,
      id: this.idC,
    });
    console.log(books);
    this.createBks();
  }
}

function saveLocal() {
  localStorage.setItem('data', JSON.stringify(books));
}

// create a funtion to remove the book
function removeBk(id) {
  const li = document.querySelector(`#id${id}`);
  const isIndex = (ele) => ele.id === id;
  // li.remove();
  bks.removeChild(li);
  // remove the book from the array and save it to local storage

  const myIndex = books.findIndex(isIndex);
  if (myIndex === -1) {
    //     must change alert for an validation
    alert('index mismatch');
    return 0;
  }
  books.splice(myIndex, 1);
  saveLocal();
}

function ReadLocalStorage() {
  const temp = JSON.parse(localStorage.getItem('data'));

  if (temp !== null) {
    books = temp;
  }
}

// console.log (classBk.addBooks());

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
