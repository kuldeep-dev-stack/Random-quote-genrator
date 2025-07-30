import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [quote, setQuote] = useState({ content: "", author: "" });
  const [fade, setFade] = useState(false);

  useEffect(() => {
    getQuote();
  }, []);

  function getQuote() {
    setFade(false);
    fetch("https://api.quotable.io/random")
      .then(res => res.json())
      .then(data => {
        setQuote({
          content: data.content,
          author: data.author
        });
        setTimeout(() => setFade(true), 100); // trigger fade in
      });
  }

  return (
    <div className="container">
      <div className={`quote-box ${fade ? "fade-in" : ""}`}>
        <p className="quote">"{quote.content}"</p>
        <p className="author">- {quote.author}</p>
        <button onClick={getQuote}>Get New Quote</button>
      </div>
    </div>
  );
}

export default App;
