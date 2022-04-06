function insertDash(word) {
  // TODO: implement the method and return word with dashes
  const vowels = ["A", "E", "I", "O", "U", " "];
  const finalWord = [];

  for (let i = 0; i < word.length; i += 1) {
    if (vowels.includes(word[i].toUpperCase()) || i === word.length - 1) {
      finalWord.push(word[i]);
    } else if (vowels.includes(word[i + 1].toUpperCase())) {
      finalWord.push(word[i]);
    } else {
      finalWord.push(`${word[i]}-`);
    }
  }
  return finalWord.join('');
}

module.exports = insertDash;
