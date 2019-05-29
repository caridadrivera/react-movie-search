import React from 'react';
import './LoadMoreBtn.css';

const LoadMoreBtn = ({ text, onClick }) => (
  //passing down this young text and onClick that were props I got from my Home parent
  <div className="rmdb-loadmorebtn" onClick={onClick}>
    <p>{text}</p>
  </div>
)


export default LoadMoreBtn;
