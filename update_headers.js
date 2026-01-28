const fs = require('fs');
const path = require('path');

const directoryPath = path.join(__dirname); // Current directory
const protectionScript = '<script src="protection.js"></script>';

fs.readdir(directoryPath, (err, files) => {
    if (err) {
        return console.log('Unable to scan directory: ' + err);
    }

    files.forEach((file) => {
        if (path.extname(file) === '.html') {
            const filePath = path.join(directoryPath, file);

            // Skip files that are already updated manually
            if (file === 'index.html' || file === 'cong-cu.html') {
                console.log(`Skipping ${file} (already updated)`);
                return;
            }

            fs.readFile(filePath, 'utf8', (err, data) => {
                if (err) {
                    console.error(err);
                    return;
                }

                if (data.includes('protection.js')) {
                    console.log(`Skipping ${file} (already has protection.js)`);
                    return;
                }

                // Insert after <head> or before <script src="settings.js"> if present
                let updatedData = data;

                if (data.includes('<script src="settings.js">')) {
                    updatedData = data.replace('<script src="settings.js">', '<script src="settings.js">\n    <script src="protection.js"></script>');
                } else if (data.includes('<head>')) {
                    updatedData = data.replace('<head>', '<head>\n    <script src="protection.js"></script>');
                } else {
                    console.log(`Could not find <head> or settings.js in ${file}`);
                    return;
                }

                fs.writeFile(filePath, updatedData, 'utf8', (err) => {
                    if (err) return console.log(err);
                    console.log(`Updated ${file}`);
                });
            });
        }
    });
});
