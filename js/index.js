// DOM
const testText = document.getElementById("test-text").innerText;
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
// start inputting text
document.getElementById("start").addEventListener("click", (e) => {
  e.target.innerText = "Stop";

  inputText.focus();

  startTyping();
});

// start typing
function startTyping() {
  let charIndex = 0;

  window.addEventListener("keydown", (e) => {
    // Alpha Numeric key
    const alphaNumericKey =
      e.code.toLowerCase().startsWith("key") ||
      e.code.toLowerCase("digit").startsWith("key") ||
      e.code.toLowerCase("numpad").startsWith("key") ||
      specialChar.includes(e.code.toLocaleLowerCase());

    if (alphaNumericKey) {
      // console.log(`${e.key} == ${testText[charIndex]}`);
      charIndex++;
    }

    // pressing backspace
    if (0 < charIndex && e.code === "Backspace") {
      charIndex--;
    }
  });
}
