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

// Membalikkan translationMap untuk penerjemahan Bahasa Ikane ke alfabet
const reverseTranslationMap = {};
for (const [key, value] of Object.entries(translationMap)) {
  reverseTranslationMap[value] = key;
}

// Menambahkan event listener pada tombol
document.getElementById("translateBtn").addEventListener("click", function () {
  const translationType = document.getElementById("translationType").value;
  const inputText = document.getElementById("inputText").value.trim();

  let resultText = "";

  if (translationType === "toIkane") {
    // Menerjemahkan dari alfabet ke Bahasa Ikane
    for (let char of inputText.toUpperCase()) {
      if (translationMap[char]) {
        resultText += translationMap[char] + " ";
      } else {
        resultText += "[?] "; // Jika karakter tidak valid
      }
    }
  } else if (translationType === "toAlphabet") {
    // Menerjemahkan dari Bahasa Ikane ke alfabet
    const words = inputText.split(" ");
    for (let word of words) {
      if (reverseTranslationMap[word]) {
        resultText += reverseTranslationMap[word];
      } else {
        resultText += "[?]"; // Jika karakter tidak valid
      }
    }
  }

  // Menampilkan hasil terjemahan
  document.getElementById("result").textContent = resultText.trim();
});
