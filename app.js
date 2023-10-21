function mlTable(number) {
  let tableContainer = document.getElementById("table-container");
  tableContainer.innerHTML = ""; // Clear previous table
  for (input = 1; input <= 10; input++) {
    let result = number * input;
    let equation = `${number} x ${input} = ${result}<br>`;
    tableContainer.innerHTML += equation;
  }
}

function generateTable() {
  const numberInput = document.getElementById("numberInput");
  const number = numberInput.value;
  mlTable(number);
}
