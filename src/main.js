let board = document.querySelector("#board")

for (i = 0; i < 8; i++) {
  for (j = 0; j < 4; j++) {
    if (i % 2 == 0) {
      if (j % 2 == 0) {
        board.innerHTML += "<div class='black'></div>"
      } else {
        board.innerHTML += "<div></div>"
      }
    } else {
      if (j % 2 == 0) {
        board.innerHTML += "<div></div>"
      } else {
        board.innerHTML += "<div class='black'></div>"
      }
    }
  }
}