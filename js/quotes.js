const loadQuote = () => {
  fetch("https://api.kanye.rest/")
    .then((res) => res.json())
    .then((data) => displayQuote(data))
    .catch((error) => console.log(error));
};

const loadQuote2 = async () => {
  try {
    const res = await fetch("https://api.kanye.rest/");
    const data = await res.json();
    displayQuote(data);
  } catch (error) {
    console.log(error);
  }
};

// const loadQuote2 = async() => {
//   const res = await fetch("https://api.kanye.rest/")
//   const data = await res.json();
//   displayQuote(data)
// }

const displayQuote = (quote) => {
  const blockQuote = document.getElementById("quotae");
  blockQuote.innerHTML = quote.quote;
};

loadQuote();
