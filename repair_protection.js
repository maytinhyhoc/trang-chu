const fs = require('fs');
const path = require('path');

const directoryPath = path.join(__dirname);

fs.readdir(directoryPath, (err, files) => {
    if (err) return console.log('Unable to scan directory: ' + err);

    let fixedCount = 0;
    let addedCount = 0;

    files.forEach((file) => {
        if (path.extname(file) === '.html') {
            const filePath = path.join(directoryPath, file);

            fs.readFile(filePath, 'utf8', (err, data) => {
                if (err) return console.error(err);

                let updatedData = data;
                let changed = false;

                // 1. REPAIR BROKEN PATTERN
                // Pattern: <script src="settings.js">...<script src="protection.js"></script></script> (with newlines/spaces)
                // We use a regex to catch cases where <script src="settings.js"> is followed by <script src="protection.js">
                // and the closing tags are messed up.

                // The specific breakage observed: <script src="settings.js">\n    <script src="protection.js"></script></script>
                // This means the old </script> for settings.js is at the very end.

                const brokenRegex = /<script src="settings\.js">\s*<script src="protection\.js"><\/script><\/script>/g;

                if (brokenRegex.test(data)) {
                    updatedData = updatedData.replace(brokenRegex, '<script src="settings.js"></script>\n    <script src="protection.js"></script>');
                    changed = true;
                    fixedCount++;
                    console.log(`Repaired malformed script in ${file}`);
                }

                // 2. CHECK IF MISSING (Fallback)
                if (!updatedData.includes('protection.js')) {
                    if (updatedData.includes('<script src="settings.js"></script>')) {
                        updatedData = updatedData.replace('<script src="settings.js"></script>', '<script src="settings.js"></script>\n    <script src="protection.js"></script>');
                        changed = true;
                        addedCount++;
                        console.log(`Added missing protection to ${file} (after settings.js)`);
                    } else if (updatedData.includes('<head>')) {
                        updatedData = updatedData.replace('<head>', '<head>\n    <script src="protection.js"></script>');
                        changed = true;
                        addedCount++;
                        console.log(`Added missing protection to ${file} (in head)`);
                    }
                }

                if (changed) {
                    fs.writeFile(filePath, updatedData, 'utf8', (err) => {
                        if (err) console.log(err);
                    });
                }
            });
        }
    });

    // Note: This console log effectively runs immediately because fs is async, 
    // but the logs inside callback will show progress.
});
