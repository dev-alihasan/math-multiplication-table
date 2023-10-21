let number = prompt(
  " If you'd like to know a specific multiplication table, just let me know which one you're interested in, and I'll be happy to help."
);

function mlTable(number) {
  for (input = 1; input <= 10; input++) {
    document.write(`$ {number} x $ {input} = $ {number} * $ {input} `);
  }
}
