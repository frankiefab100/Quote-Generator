import React, { useState } from "react";
import axios from "axios";

function App() {
  const [quote, setQuote] = useState(
    "Never let your schooling interfere with your education."
  );
  const [author, setAuthor] = useState("Benjamin Franklin");

  function getRandomQuote() {
    axios
      .get("https://favqs.com/api/qotd")
      .then((response) => {
        const result = response.data.quote;
        setQuote(result.body);
        setAuthor(result.author);
      })
      .catch((error) => alert(error));
  }

  return (
    <div className="App">
      <div className="quote-container">
        <h1 className="title">Quote Generator</h1>
        <p className="quotes">&quot; {quote} &quot; </p>
        <span className="author">- {author} </span>
        <button onClick={getRandomQuote}>Get New Quote</button>
      </div>
    </div>
  );
}

export default App;
