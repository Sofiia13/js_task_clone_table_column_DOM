'use strict';

const table = document.querySelector('table');
const columnIndex = 1;

const columnValues = Array.from(table.rows).map(row => {
  return row.cells[columnIndex].textContent
});

Array.from(table.rows).forEach((row, i) => {
  const isHeaderOrFooter = row.parentElement.tagName === 'THEAD' || row.parentElement.tagName === 'TFOOT';

  const cell = isHeaderOrFooter ? document.createElement('th') : document.createElement('td');
  cell.textContent = columnValues[i];

  const insertIndex = Math.max(0, row.cells.length - 1);

  row.insertBefore(cell, row.cells[insertIndex]);
});