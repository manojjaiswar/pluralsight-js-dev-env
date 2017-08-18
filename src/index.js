import './index.css';
import numeral from 'numeral'; // import library for numbering

const courseValue = numeral(1000).format('$0,0.00');
// debugger;
console.log(`I would pay ${courseValue} for this awesome course!`); //eslint-disable-line no-console
