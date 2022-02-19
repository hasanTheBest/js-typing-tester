const textToType =
  "In the case of UI events, this is important for security reasons, as it prevents scripts from simulating user actions that interact with the browser itself.";

// DOM
const testText = document.getElementById("test-text");
const inputText = document.getElementById("input-text");
const specialChar = [
  "semicolon",
  "equal",
  "comma",
  "minus",
  "period",
  "slash",
  "backquote",
  "bracketleft",
  "backslash",
  "bracketright",
  "quote",
  "space",
];

const wordsArr = textToType.split(" ");

document.addEventListener("DOMContentLoaded", () => {
  for (let word of wordsArr) {
    testText.innerHTML += `<span>${word} </span>`;
  }
});

// start inputting text
document.getElementById("start").addEventListener("click", (e) => {
  e.target.innerText = "Stop";
  inputText.focus();

  wordsNode = testText.children;
  wordsNode[0].classList.add("ready");

  startTyping(wordsNode);
});

// start typing
function startTyping(wordsNode) {
  let charIndex = 0,
    wordIndex = 0,
    word = "";

  inputText.addEventListener("keydown", (e) => {
    // e.preventDefault();

    // Alpha Numeric key
    const alphaNumericKey =
      e.code.toLowerCase().startsWith("key") ||
      e.code.toLowerCase("digit").startsWith("key") ||
      e.code.toLowerCase("numpad").startsWith("key") ||
      specialChar.includes(e.code.toLocaleLowerCase());

    // word index
    if ("Space" == e.code) {
      wordsNode[wordIndex].classList.remove("ready");

      wordIndex++;
      // console.log("word", wordsNode);
      // add ready class to next word
      wordsNode[wordIndex].classList.add("ready");
    }

    // alpha numeric key
    if (alphaNumericKey) {
      // console.log(`${e.key} == ${textToType[charIndex]}`);
      charIndex++;
    }

    // pressing backspace
    if (0 < charIndex && e.code === "Backspace") {
      charIndex--;
    }
  });
}
