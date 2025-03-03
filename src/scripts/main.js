'use strict';

const body = document.body;
const nodeList = body.querySelectorAll('.pupulation');
/* Nodelist  типу масив*/
const array = Array.from(nodeList);

let total = array.reduce((accum, item) => {
  return accum + +item.textContent;
},0);

let average = total / array.length;

let formattedTotal = total.toLocaleString();
let formattedAverage = average.toLocaleString();


ducument.querySelector('.total-population').textContent = formattedTotal;
ducument.querySelector('.average-population').textContent = formattedAverage;

