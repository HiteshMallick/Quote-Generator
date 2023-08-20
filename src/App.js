import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faQuoteLeft,
  faQuoteRight,
  faVolumeHigh,
  faCopy,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";

function App() {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  useEffect(() => {
    // fetch random data from API
    fetch("https://api.quotable.io/random")
      .then((res) => res.json())
      .then((quote) => {
        setQuote(quote.content);
        setAuthor(quote.author);
      });
  }, []);

  function newQuotes() {
    // onClick function
    fetch("https://api.quotable.io/random")
      .then((res) => res.json())
      .then((quote) => {
        setQuote(quote.content);
        setAuthor(quote.author);
      });
  }

  function soundBtn() {
    // the SpeechSynthesisUtterance is a web api that represent a speech request
    let utterance = new SpeechSynthesisUtterance(`${quote} by ${author}`);
    speechSynthesis.speak(utterance); // speak method of speechSynthesis speaks the utterance
  }

  function copyBtn() {
    navigator.clipboard.writeText(`${quote}`);
  }

  function linkBtn() {
    let link = `https://github.com/HiteshMallick`;
    window.open(link);
  }

  return (
    <div>
      <div className="wrapper">
        <h2 className="header">Quote of the Day</h2>
        <div className="content">
          <div className="quote-area">
            <div className="leftFont">
              <FontAwesomeIcon icon={faQuoteLeft} />
            </div>
            <p className="quote">{quote}</p>
            <div className="rightFont">
              <FontAwesomeIcon icon={faQuoteRight} />
            </div>
          </div>
          <div className="author">
            <span>__</span>
            <span className="name">{author}</span>
          </div>
        </div>
        <div className="button">
          <div className="features">
            <ul>
              <li className="sound" onClick={soundBtn}>
                <FontAwesomeIcon icon={faVolumeHigh} />
              </li>
              <li className="copy" onClick={copyBtn}>
                <FontAwesomeIcon icon={faCopy} />
              </li>
              <li className="gitHub" onClick={linkBtn}>
                <FontAwesomeIcon icon={faUser} />
              </li>
            </ul>
            <button onClick={newQuotes}>New Quote</button>
          </div>
        </div>
      </div>
      <div className="bottomText">
        <p>Download Source Code | Developed by Hitesh Kumar Mallick</p>
      </div>
    </div>
  );
}

export default App;
