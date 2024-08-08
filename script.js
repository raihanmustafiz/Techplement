let quote = document.getElementById("quote");
let author = document.getElementById("author");
let btn = document.getElementById("btn");


const url = "https://api.quotable.io/random";
let getQuote = () => {
  fetch(url)
    .then((data) => data.json())
    .then((item) => {
      quote.innerText = item.content;
      author.innerText = item.author;
    });
};
window.addEventListener("load", getQuote);
btn.addEventListener("click", getQuote);

function searchByAuthor() {
  const authorSearchInput = document.getElementById('author');
  const authorName = authorSearchInput.value.trim();

  // If the search input is not empty, fetch and display a quote by the specified author
  if (authorName !=='') {
      getQuoteByAuthor(author);
  } else {
      // If the search input is empty, fetch and display a random quote
      alert("Provide a correct author name!!!")
  }
}


function getQuoteByAuthor(author) {
  fetch(`https://api.quotable.io/quotes?author=${author}`)
      .then(response => response.json())
      .then(data => {
          const randomIndex = Math.floor(Math.random() * data.results.length);
          const quote = data.results[randomIndex];
          display(author);
      })
      .catch(error => {
          console.error(`Error fetching quotes by ${author}:`, error);
      });
}

getNewQuote();




