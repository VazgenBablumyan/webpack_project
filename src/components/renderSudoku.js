import { modes } from "./chooseMode.js";
import { createElement } from "../helper/createElement.js";
import { counterForGameEnd, hiddenNumbers, playMode } from "./makeSudoku.js";
import { Box } from "../helper/singleBox.js";






export function renderSudoku(empties,gameIsLoaded) {
  
  
  const section = createElement("section",{id:"sudoku"}) 
  root.appendChild(section)
  root.removeChild(modes)
  const boxes = new playMode(empties,gameIsLoaded );
  for (let i = 0; i < 9; i++) {
    const square = createElement("div", { class: "square", id: "square" + i });

    section.appendChild(square);
    for (let idx = 0; idx < 9; idx++) {
      square
        .appendChild(Box({ value: boxes[i][idx] }))
        .classList.add(`${i + `` + idx}`);
    }

    section.appendChild(square);
  }
const inputes = document.querySelectorAll(".manualWrite");
let counter = 0
let counterForInput = 0

inputes.forEach((input) => {
  input.addEventListener("keyup", (event) => {
    let i = input.className[21];
    let idx = input.className[22];
    if (event.target.value == hiddenNumbers[i][idx]) {
      counterForInput++;
      if (counterForInput == counterForGameEnd){
       GameEnd("win")

      }
      console.log("YEEEEEES");
    } else {
      counter++;
      console.log("NOOOOO")
    if(counter == 3){
      closeGameIf3Mistakes()
      }
    }
  
  });
});
  return section;
}
