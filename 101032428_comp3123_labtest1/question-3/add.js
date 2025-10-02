const fs = require('fs');
const path = require('path');
const logsDir = path.join(__dirname, "Logs");
const fileContent = "This is a log file created by Omar";

console.log("");
console.log("Question 3: Create directory and files")

fs.mkdir(logsDir, { recursive: true }, (error) => {
  if (error) {
    console.error("  Directory could not be created");
  } else {
    console.log(`  Directory successfully created at ${logsDir}`);

    // Switch process to newly created folder
    try {
      process.chdir(logsDir);
      console.log(`  Current process change to: ${process.cwd()}`)
    } catch (error) {
      console.error(`  Something went wrong, fam!`);
    }

    for (let i = 1; i <= 10; i++) {
      const logFileName = `log${i}.omar`;
      const logFilePath = path.join(logsDir, logFileName);

      //
      fs.writeFile(logFilePath, fileContent, (error) => {
        if (error) {
          console.log(`  Error creating ${logFileName}`);
        } else {
          console.error(`  File ${logFileName} was successfully created.`);
        }
      });


    }
  }

});

const logsPath = path.join(__dirname, "Logs");


