// Peta terjemahan dari huruf ke Bahasa Ikane
const translationMap = {
  A: "BLUK",
  B: "BUL",
  C: "BULK",
  D: "BLUB",
  E: "BLUKBLUK",
  F: "BLUKBUL",
  G: "BLUKBULK",
  H: "BLUKBLUB",
  I: "BULBLUK",
  J: "BULBUL",
  K: "BULBULK",
  L: "BULBLUB",
  M: "BULKBLUK",
  N: "BULKBUL",
  O: "BULKBULK",
  P: "BULKBLUB",
  Q: "BLUBBLUK",
  R: "BLUBBUL",
  S: "BLUBBULK",
  T: "BLUBBLUB",
  U: "BLUKBLUKBLUK",
  V: "BLUKBLUKBUL",
  W: "BLUKBLUKBULK",
  X: "BLUKBLUKBLUB",
  Y: "BLUKBULBLUK",
  Z: "BLUKBULBUL",
};

// Invers peta terjemahan dari Bahasa Ikane ke huruf
const reverseTranslationMap = Object.fromEntries(
  Object.entries(translationMap).map(([key, value]) => [value, key])
);

document
  .getElementById("translateToIkane")
  .addEventListener("click", function () {
    const inputText = document.getElementById("inputText").value.toUpperCase();
    let resultText = "";

    for (let char of inputText) {
      if (translationMap[char]) {
        resultText += translationMap[char] + " ";
      } else {
        resultText += "[?] ";
      }
    }

    document.getElementById("resultIkane").textContent = resultText.trim();
  });

document
  .getElementById("translateToAlphabet")
  .addEventListener("click", function () {
    const inputIkane = document
      .getElementById("inputIkane")
      .value.toUpperCase();
    const ikaneWords = inputIkane.split(" ");
    let resultText = "";

    for (let word of ikaneWords) {
      if (reverseTranslationMap[word]) {
        resultText += reverseTranslationMap[word];
      } else {
        resultText += "[?]";
      }
    }

    document.getElementById("resultAlphabet").textContent = resultText.trim();
  });
