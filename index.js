function fetchBooks() {

  return fetch('https://anapioficeandfire.com/api/books')
  .then(resp => resp.json())
  //call second function, renderBooks(), passing inthe API's returned JSON data as the argument
  .then(json => renderBooks(json));
}

function renderBooks(books) {
  const main = document.querySelector('main')
  books.forEach(book => {
    const h2 = document.createElement('h2')
    h2.innerHTML = book.name
    main.appendChild(h2)
  })
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks()
})
