const mixedArray = ['PIZZA', 10, true, 25, false, 'Wings'];

function lowerCaseWords(array) {
  console.log("  Original array: ", array);

  return new Promise((resolve, reject) => {
    // Filter strings from the array
    const filteredStrings = array.filter(element => typeof element === 'string');

    // Change each string to all lowercase
    if (filteredStrings.length > 0) {
      resolve(filteredStrings.map(string => string.toLowerCase()));
    } else {
      reject("  There were no strings in the provided array!");
    }
  });
}

// Formatted output w/ question title
console.log("");
console.log("Question 1:");
lowerCaseWords(mixedArray)
    .then(data => console.log("  Final array: ", data))
    .catch(error => console.error(error));
