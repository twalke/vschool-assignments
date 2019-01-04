import React, { Component } from 'react';

import './App.css';
import Box from './Box';

const boxes = [{
  title: 'One',
  subTitle: 'one',
  info: 'nope',
  isComplete: true
}, {
  title: 'Two',
  subTitle: 'two',
  info: 'nope',
  isComplete: false
}, {
  title: 'Three',
  subTitle: 'three',
  info: 'nope',
  isComplete: true
}, {
  title: 'Four',
  subTitle: 'four',
  info: 'nope',
  isComplete: true
}, {
  title: 'Five',
  subTitle: 'five',
  info: 'nope',
  isComplete: true
}, {
  title: 'Six',
  subTitle: 'six',
  info: 'nope',
  isComplete: false
}, {
  title: 'Seven',
  subTitle: 'seven',
  info: 'nope',
  isComplete: true
}, {
  title: 'Eight',
  subTitle: 'eight',
  info: 'nope',
  isComplete: true
}, {
  title: 'Nine',
  subTitle: 'nine',
  info: 'nope',
  isComplete: false
}, {
  title: 'Ten',
  subTitle: 'ten',
  info: 'nope',
  isComplete: true
}]

// class App extends Component {
//   render () {
//     // const boxComponents = boxes.map((box, i) => <Box)
//     return (
//       <Box />
//     )
//   }
// }

const App = () => {
  const boxComponents = boxes.map((box, i) => <Box key = {i}{...box}/>);

  return (
    <div>
      {boxComponents}
    </div>
  )
}

export default App;
