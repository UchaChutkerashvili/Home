function deepCopyObject(obj) {
    return new Promise((resolve, reject) => {
      if (typeof obj !== 'object' || obj === null) {
        reject(new Error('Argument is not an object.'));
      } else {
        try {
          const copiedObj = JSON.parse(JSON.stringify(obj));
          resolve(copiedObj);
        } catch (error) {
          reject(new Error('Error occurred while making a deep copy.'));
        }
      }
    });
  }
  
