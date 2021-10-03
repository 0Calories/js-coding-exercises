// for (var i = 0; i < 5; i++) {
//   setTimeout(function () {
//     console.log(i);
//   }, 1000);
// }

document.getElementById('table-form').addEventListener('submit', (e) => {
  e.preventDefault();

  const rows = parseInt(e.target.elements.rows.value);
  const cols = parseInt(e.target.elements.cols.value);

  for (let i = 0; i < rows; i++) {
    const row = document.createElement('tr');
    for (let j = 0; j < cols; j++) {
      const col = document.createElement('td');
      col.textContent = '1'
      col.setAttribute('id', `${i}-${j}`);
      row.appendChild(col);
    }
    document.querySelector('#table').appendChild(row);
  }

  let curr = 1;
  for (let i = 0; i < cols; i++) {
    if (i % 2 === 0) {
      for (let j = 0; j < rows; j++) {
        document.getElementById(`${j}-${i}`).textContent = curr;
        curr++;
      }
    } else {
      for (let j = rows - 1; j >= 0; j--) {
        document.getElementById(`${j}-${i}`).textContent = curr;
        curr++;
      }
    }
  }


});
