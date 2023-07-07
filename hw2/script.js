const books = [
  {
    author: "Lucy Foley",
    name: "List of Invitees",
    price: 70
  },
  {
    author: "Susanna Clarke",
    name: "Jonathan Strange & Mr Norrell",
  },
  {
    name: "Design. A Book for Non-Designers.",
    price: 70
  },
  {
    author: "Alan Moore",
    name: "Neonomicon",
    price: 70
  },
  {
    author: "Terry Pratchett",
    name: "Moving Pictures",
    price: 40
  },
  {
    author: "Angus Hyland",
    name: "Cats in Art",
  }
];

const root = document.getElementById("root");
const ul = document.createElement("ul");

function createBookList(books) {
  books.forEach(book => {
    if (validateBook(book)) {
      const li = document.createElement("li");
      const bookInfo = Object.entries(book).map(([key, value]) => `${key} - ${value}`).join(" / ");
      li.textContent = bookInfo;
      ul.appendChild(li);
    }
  });

  root.appendChild(ul);
}

function validateBook(book) {
  const requiredFields = ['author', 'name', 'price'];
  const missingFields = requiredFields.filter(field => !Object.keys(book).includes(field));
  if (missingFields.length > 0) {
    console.error("Missing: ", missingFields, book);
    return false;
  }
  return true;
}
createBookList(books);
