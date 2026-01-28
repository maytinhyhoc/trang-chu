const fs = require('fs');
const path = require('path');

const directoryPath = __dirname; // Chạy ngay trong thư mục hiện tại

function injectSettings() {
    fs.readdir(directoryPath, (err, files) => {
        if (err) {
            return console.log('Unable to scan directory: ' + err);
        }

        files.forEach((file) => {
            if (path.extname(file) === '.html') {
                const filePath = path.join(directoryPath, file);

                // Bỏ qua file settings.js (dĩ nhiên) và các file không cần thiết nếu có

                fs.readFile(filePath, 'utf8', (err, data) => {
                    if (err) return console.log(err);

                    if (data.includes('src="settings.js"')) {
                        console.log(`Skipped (already injected): ${file}`);
                        return;
                    }

                    // Inject vào ngay sau <head> hoặc trước các file css/js khác để chạy sớm nhất có thể
                    // Tìm thẻ <head>
                    let content = data;
                    if (content.includes('<head>')) {
                        // Chèn ngay sau <head> để ưu tiên cao nhất (hoặc sau charset)
                        content = content.replace('<head>', '<head>\n    <script src="settings.js"></script>');

                        fs.writeFile(filePath, content, 'utf8', (err) => {
                            if (err) return console.log(err);
                            console.log(`Injected settings.js to: ${file}`);
                        });
                    } else {
                        console.log(`No <head> tag found in: ${file}`);
                    }
                });
            }
        });
    });
}

injectSettings();
