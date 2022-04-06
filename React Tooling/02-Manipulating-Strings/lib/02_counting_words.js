// TEXT AND WORD TO UPCASE
// DEFINE COUNTER
// SORT THE, SELECTION SORT O(n^2) | O(n^2) [QUICKSORT USING SORT USES (n log n)]
/// DEFINE SWAP, INDEX_OF_MINIMUM, AND SELECTION SORT FUNCTIONS
// BINARY SEARCH (FIND BY FIRST LETTER) Complexity: O(log n) | O(1)
// CHECK IF LETTER FOUND === WORD, IF IT DOES, COUTER += 1

function occurrences(text, targetValue) {
  const uppcasedText = text.toUpperCase();
  const word = targetValue.toUpperCase();
  const array = uppcasedText.split(" ");
  let counter = 0;

  for (let i = 0; i < array.length; i += 1) {
    if (array[i] === word) {
      counter += 1;
    }
  }

  return counter;
  // const swap = (firstIndex, secondIndex) => {
  //   const temp = array[firstIndex];
  //   array[firstIndex] = array[secondIndex];
  //   array[secondIndex] = temp;
  // };

  // const indexOfMinimum = (startIndex) => {
  //   let minValue = array[startIndex];
  //   let minIndex = startIndex;

  //   for (let i = minIndex + 1; i < array.length; i += 1) {
  //     if (array[i] < minValue) {
  //       minIndex = i;
  //       minValue = array[i];
  //     }
  //   }
  //   return minIndex;
  // };

  // const selectionSort = () => {
  //   let value;
  //   for (let i = 0; i < array.length; i += 1) {
  //     value = indexOfMinimum(i);
  //     swap(i, value);
  //   }
  //   return array;
  // };

  // const binarySearch = () => {
  //   // Define min and max values
  //   let min = 0;
  //   let max = array.length - 1;
  //   let guess;
  //   while (max >= min) {
  //     guess = Math.floor((max + min) / 2);
  //     if (array[guess] === word) {
  //       counter += 1;
  //     }

  //     if (array[guess] < word) {
  //       min = guess + 1;
  //     } else {
  //       max = guess - 1;
  //     }
  //   }
  //   return guess;
  // };

  // selectionSort();
  // binarySearch();

  // console.log(word);
  // console.log(array);
  // console.log(counter);
}

occurrences("a fat cat sat on a mat and ate a fat rat", "fat"); // => 2
module.exports = occurrences;
