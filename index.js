function fetchBooks() {
  return fetch('https://anapioficeandfire.com/api/books')
  .then(resp => resp.json())
  .then(json => renderBooks(json))
}

function renderBooks(books) {
  const main = document.querySelector('main')
  
  for (let book of books){
    const h2 = document.createElement('h2')
    h2.innerHTML = book.name
    main.appendChild(h2)
  }
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks()
})

