
const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://ajax.test-danit.com/api/swapi/films');
xhr.onreadystatechange = function() {
  if (xhr.readyState === XMLHttpRequest.DONE) {
    if (xhr.status === 200) {
      const movies = JSON.parse(xhr.responseText);
      display(movies);
    } else {
      console.error('Error:', xhr.status);
    }
  }
};
xhr.send();

function display(movies) {
  const container = document.getElementById('movies-container');
  movies.forEach(function(a) {
    const element = document.createElement('div');
    element.innerHTML = `
      <h1>Episode ${a.id}: ${a.name}</h1>
      <p>${a.openingCrawl}</p>
      <ul id="characters-${a.id}">
      <li class="loading...."></li>
      </ul>
    `;
    container.appendChild(element);

    const promises = a.characters.map(getting);
    Promise.all(promises)
      .then(characters => displaying(characters, a.id))
      .catch(error => console.error('Error:', error));
  });
}

function getting(url) {
  return new Promise((resolve, reject) => {
    const characterXhr = new XMLHttpRequest();
    characterXhr.open('GET', url);
    characterXhr.onreadystatechange = function() {
      if (characterXhr.readyState === XMLHttpRequest.DONE) {
        if (characterXhr.status === 200) {
          const character = JSON.parse(characterXhr.responseText);
          resolve(character);
        } else {
          reject(new Error(`Fail: ${url}`));
        }
      }
    };
    characterXhr.send();
  });
}

function displaying(characters, id) {
  const list = document.getElementById(`characters-${id}`);
  list.innerHTML = '';
  characters.forEach(character => {
    const i = document.createElement('li');
    i.textContent = character.name;
    list.appendChild(i);
  });
}


