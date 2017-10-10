// import _ from 'lodash'
import {cube } from './math.js'
console.log(process.env)
console.log(cube)
 if (process.env.NODE_ENV !== 'production') {
   console.log('Looks like we are in development mode!');
 }
function component() {
  let ele = document.createElement('pre');
  ele.innerHTML = [
    'Hello webpack!',
    'hcc',
    '5 cubed is equal to ' + cube(5)
  ].join('\n\n')
  return ele;
}

document.body.appendChild(component())


