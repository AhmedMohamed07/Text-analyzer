import React, { useEffect, useState } from 'react';
import BottomBar from './BottomBar';
import './main-app.css';
import ResultBar from './ResultBar';

const MainApp = () => {
  const [text, setText] = useState('');
  const [charCounter, setCharCounter] = useState(0);
  const [wordCounter, setWordCounter] = useState(0);
  const [pronoun, setPronoun] = useState(0);
  const [longOne, setLongOne] = useState('hi');
  const [paragrph, setParagrph] = useState(0);

  const textHandler = (e) => setText(e.target.value);

  useEffect(() => {
    setCharCounter(text.length);

    const words = text.split(/[\s\n]/);
    const sentences = text.split('\n');
    console.log(words);

    let wordCount = 0;
    let pronouns = 0;
    let longest = '-';

    words.forEach((word) => {
      if (word.trim() !== '' || word.trim().includes('\n')) {
        wordCount++;
      }
      if (
        word === 'I' ||
        word === 'he' ||
        word === 'she' ||
        word === 'it' ||
        word === 'we' ||
        word === 'they' ||
        word === 'you'
      ) {
        pronouns++;
      }

      if (word.trim().length > longest.length) {
        longest = word;
        console.log(word.trim());
      }
    });
    let paragraphs = 0;
    sentences.forEach((sentence) => {
      if (sentence !== '') {
        paragraphs++;
      }
    });

    setParagrph(paragraphs);
    setLongOne(longest);

    setPronoun(pronouns);
    setWordCounter(wordCount);
  }, [text]);

  return (
    <div className="main-app">
      <ResultBar
        charCounter={charCounter}
        wordCounter={wordCounter}
        pronoun={pronoun}
        paragrph={paragrph}
      />

      <textarea
        onChange={textHandler}
        className="text-area"
        placeholder="Paste your text here..."
      ></textarea>
      <BottomBar longOne={longOne} />
    </div>
  );
};

export default MainApp;
