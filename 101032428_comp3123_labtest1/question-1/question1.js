const mixedArray = ['PIZZA', 10, true, 25, false, 'Wings'];

function lowerCaseWords(array) {
  console.log("  The provided array: ", array);

  // Create a new Promise object
  return new Promise((resolve, reject) => {
    // Filter strings from the array
    const filteredStrings = array.filter(element => typeof element === 'string');

    // Change each string to all lowercase if values exist
    if (filteredStrings.length > 0) {
      resolve(filteredStrings.map(string => string.toLowerCase()));
    } else {
      reject("  There were no strings in the provided array!");
    }
  });
}

console.log("");
console.log("Question 1:");
lowerCaseWords(mixedArray)
    .then(data => console.log("  The final array: ", data))
    .catch(error => console.error(error));
