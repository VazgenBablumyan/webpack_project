import { renderSudoku } from "./renderSudoku.js";
import { createElement } from "../helper/createElement.js";

 export let gameProcess = false;
 export let gameIsLoaded = false;

 export const easyMode = createElement("button",{class: "easyMode mode"}, "Easy")
 export const mediumMode = createElement("button",{class: "mediumMode mode"}, "Medium")
 export const hardMode = createElement("button",{class: "hardMode mode"}, "Hard")
export const modes = createElement("div",{class: "modes"},easyMode,mediumMode,hardMode)

  




 easyMode.addEventListener("click", () => {
  if (!gameProcess) {
    gameProcess = true
     renderSudoku(15,gameIsLoaded);
  }
  });

mediumMode.addEventListener("click", () => {
  if (!gameProcess) {
    renderSudoku(35,gameIsLoaded);

  }
});
hardMode.addEventListener("click", () => {
    if (!gameProcess) {
      renderSudoku(55,gameIsLoaded);

    }
  });
