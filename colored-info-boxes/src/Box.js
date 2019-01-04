import React from 'react';

const Box = ({title, subTitle, info, isComplete}) => {
  return (
    <div style={{backgroundColor: isComplete ? 'green' : 'red'}}>
      <h1>Title: {title}</h1>
      <h2>SubTitle: {subTitle}</h2>
      <p>Information: {info}</p>
    </div>)
}

export default Box;
