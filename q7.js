const fs = require('fs');

function promisifiedUnlink(filePath) {
    return new Promise((resolve, reject) => {
        fs.unlink(filePath, (err) => {
            if (err) {
                reject(err);
            } else {
                resolve();
            }
        });
    });
}

async function deleteFile(filePath) {
    try {
        await promisifiedUnlink(filePath);
        console.log(`File '${filePath}' deleted successfully.`);
    } catch (error) {
        console.error(`Error deleting the file '${filePath}': ${error.message}`);
    }
}

// Call the deleteFile function with the file path
const filePathToDelete = './test.txt';
deleteFile(filePathToDelete);
