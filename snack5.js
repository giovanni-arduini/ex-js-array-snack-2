// Usando la l'API https://boolean-spec-frontend.vercel.app/freetestapi/books/{id}
// usa la combinazione di .map() e Promise.all(), per creare una funzione (getBooks)
//  che a partire da un array di id (ids), ritorna una promise che risolve un array di libri (books).
// Testala con l’array [2, 13, 7, 21, 19] .

const books = [
  {
    title: "React Billionaire",
    pages: 250,
    author: {
      name: "Alice",
      age: 35,
    },
    available: false,
    price: "101€",
    tags: ["advanced", "js", "react", "senior"],
  },
  {
    title: "Advanced JS",
    pages: 500,
    author: {
      name: "Bob",
      age: 20,
    },
    available: true,
    price: "25€",
    tags: ["advanced", "js", "mid-senior"],
  },
  {
    title: "CSS Secrets",
    pages: 320,
    author: {
      name: "Alice",
      age: 17,
    },
    available: true,
    price: "8€",
    tags: ["html", "css", "junior"],
  },
  {
    title: "HTML Mastery",
    pages: 200,
    author: {
      name: "Charlie",
      age: 50,
    },
    available: false,
    price: "48€",
    tags: ["html", "advanced", "junior", "mid-senior"],
  },
];

const ids = [2, 13, 7, 21, 19];

async function getBooks(array) {
  // const baseUrl = `https://boolean-spec-frontend.vercel.app/freetestapi/books/`;

  const selectedBooksResponse = await Promise.all(
    (promises = array.map((id) => {
      return fetch(
        `https://boolean-spec-frontend.vercel.app/freetestapi/books/${id}`
      ).then((res) => res.json());
    }))
  );
  return selectedBooksResponse;
}

getBooks(ids).then((books) => console.log(books));
