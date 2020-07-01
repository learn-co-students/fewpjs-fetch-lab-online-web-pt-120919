//function fetchBooks() {
//  fetch('https://anapioficeandfire.com/api/books')
//  .then(resp  => resp.json())
//  .then(json => renderBooks(json))
//  //.then(json => console.log(json));
//  return resp.json();
//}

function fetchBooks() {
  return fetch('https://anapioficeandfire.com/api/books')
  .then(function(response) {
    return response.json();
  }).then(function(json) {
      renderBooks(json);
  });
}

function fetchCharacters() {
  return fetch('https://anapioficeandfire.com/api/characters')
  .then(function(response) {
    return response.json();
  }).then(function(json) {
      renderCharacters(json);
  });
}


function renderBooks(books) {
  const main = document.querySelector('main')
  books.forEach(book => {
    const h2 = document.createElement('h2')
    h2.innerHTML = book.name
    main.appendChild(h2)
  })
}

function renderCharacters(characters) {
  const ul = document.querySelector('ul')
  characters.forEach(character => {
    const li = document.createElement('li')
    li.innerHTML = character.name
    ul.appendChild(li)
  })
}

//function renderCharacters(characters) {
//  const ul = document.querySelector('ul')
//  for (i = 0; i < characters.length; i++) {
//    const li = document.createElement('li')
//    li.innerHTML = characters[i].name;
//    ul.appendChild(li);
//  }
//}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
  fetchCharacters();
})
