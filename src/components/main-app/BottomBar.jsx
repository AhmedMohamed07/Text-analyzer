import React from 'react';

const BottomBar = ({ longOne }) => {
  return (
    <div className="bottom-result-bar">
      <div className="result-box">
        <span className="box-title">Longest word</span>
        <span className="box-value">{longOne}</span>
      </div>
    </div>
  );
};

export default BottomBar;
