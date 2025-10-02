// Imports
const fs = require('fs');
const path = require('path');


const logsDir = path.join(__dirname, "Logs");
let deleteFail = false;

// Formatted output w/ question title
console.log("");
console.log("Question 3: Remove directory and files")

try {
  for (let i = 1; i <= 10; i++) {
    const logFileName = `log${i}.omar`;
    const logFilePath = path.join(logsDir, logFileName);

    // Remove files one by one with verbose output
    fs.unlink(logFilePath, (error) => {
      if (error) {
        console.log(`  Error deleting ${logFileName}`);
        deleteFail = true;   // Flag any errors with deletion
      } else {
        console.error(`  File ${logFileName} was successfully deleted.`);
      }
    });
  }
} catch (error) {
  console.error(`  Something went wrong, fam!`);
}

// Delete empty directory if deletion was successful
try {
  if (!deleteFail) {
    fs.rmdir(logsDir, (error) => {
      if (error) {
        console.log(`  Error deleting directory ${logsDir}`);
        console.error(error);
      } else {
        console.error(`  ${logsDir} directory was successfully deleted.`);
      }
    });
  }
} catch (e) {
  console.error(`  Something went wrong, fam! ${e}`);
}


