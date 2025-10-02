const fs = require('fs');
const path = require('path');
const logsDir = path.join(__dirname, "Logs");
let deleteFail = false;

console.log("");
console.log("Question 3: Remove directory and files")

try {
  // process.chdir(logsDir);
  // console.log(`Current process change to: ${process.cwd()}`);

  for (let i = 1; i <= 10; i++) {
    const logFileName = `log${i}.omar`;
    const logFilePath = path.join(logsDir, logFileName);

    //
    fs.unlink(logFilePath, (error) => {
      if (error) {
        console.log(`  Error deleting ${logFileName}`);
        deleteFail = true;
      } else {
        console.error(`  File ${logFileName} was successfully deleted.`);
      }
    });
  }
} catch (error) {
  console.error(`  Something went wrong, fam!`);
}

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


