function triangle() {
  for (let i = 1; i <= 7; i++) {
    console.log("#".repeat(i))
  }
  for (let line = "#"; line.length < 8; line += "#")
    console.log(line);
}


function fizzBuzz() {
  for (let i = 1; i <= 100; i++) {
    console.log(fb(i))
  }

  function fb(number) {
    let msg = ""
    if (number % 3 === 0) msg += "Fizz"
    if (number % 5 === 0) msg += "Buzz"
    return msg || number
  }
}


function chessboard() {
  let size = 8
  let board = ""

  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      board += ((x + y) % 2 === 0) ? " " : "#"
    }
    board += "\n"
  }

  console.log(board)
}
