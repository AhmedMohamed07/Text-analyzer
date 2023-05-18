import React from 'react';

const ResultBar = ({ charCounter, wordCounter, pronoun, paragrph }) => {
  return (
    <div className="result-bar">
      <div className="result-box">
        <span className="box-title">Words</span>
        <span className="box-value">{wordCounter}</span>
      </div>
      <div className="result-box">
        <span className="box-title">Characters</span>
        <span className="box-value">{charCounter}</span>
      </div>

      <div className="result-box">
        <span className="box-title">Paragraphs </span>
        <span className="box-value">{paragrph}</span>
      </div>
      <div className="result-box">
        <span className="box-title">Pronouns</span>
        <span className="box-value">{pronoun}</span>
      </div>
    </div>
  );
};

export default ResultBar;
