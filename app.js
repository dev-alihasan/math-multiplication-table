let number = prompt("Enter a number for the multiplication table:");

function mlTable(number) {
  let tableContainer = document.getElementById("table-container");
  for (input = 1; input <= 10; input++) {
    let result = number * input;
    let equation = `${number} x ${input} = ${result}<br>`;
    tableContainer.innerHTML += equation;
  }
}

mlTable(number);