let message = {'message': 'delayed success!'}

function resolvedPromise() {
  let success = true;   // Force a resolve

  return new Promise(resolve => {
    if (success) {
      // Delay success message
      setTimeout(()=> {
        resolve(message);
      }, 500)
    } else {
      setTimeout(() => {
        try {
          throw new Error("error: delayed exception!");
        } catch (e) {
          console.error(e);
        }
      }, 500)
    }
  });

}

function rejectedPromise() {
  let success = false;   // Force a reject

  return new Promise(resolve => {
      if (success) {
          resolve(message);
      } else {
        // Delay error rejection
        setTimeout(() => {
          try {
            throw new Error("error: delayed exception!");
          } catch (e) {
            console.error(e);
          }
        }, 500)
      }
  });
}

// Formatted output w/ question title
console.log("");
console.log("Question 2:")
resolvedPromise()
    .then(data => console.log(data))
    .catch(error => console.error(error));

rejectedPromise()
    .then(data => console.log(data))
    .catch(error => console.error(error));