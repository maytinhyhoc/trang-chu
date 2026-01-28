/**
 * FILE: protection.js
 * CHỨC NĂNG: Bảo vệ trang web (Chống chuột phải, copy, F12, Zoom...)
 */

(function () {
    // 1. CHẶN SELECT TEXT (BÔI ĐEN) QUA CSS
    const style = document.createElement('style');
    style.innerHTML = `
        body {
            -webkit-user-select: none !important;
            -moz-user-select: none !important;
            -ms-user-select: none !important;
            user-select: none !important;
            -webkit-touch-callout: none !important; /* Chặn menu context trên iOS */
        }
        /* Cho phép select trong input/textarea để nhập liệu */
        input, textarea {
            -webkit-user-select: text !important;
            -moz-user-select: text !important;
            -ms-user-select: text !important;
            user-select: text !important;
        }
    `;
    document.head.appendChild(style);

    // 2. CHẶN CHUỘT PHẢI (CONTEXT MENU)
    document.addEventListener('contextmenu', function (e) {
        e.preventDefault();
        return false;
    });

    // 3. CHẶN PHÍM TẮT (F12, CTRL+C, CTRL+U...)
    document.addEventListener('keydown', function (e) {
        // F12
        if (e.key === 'F12' || e.keyCode === 123) {
            e.preventDefault();
            return false;
        }

        // Ctrl + Shift + I/J/C (DevTools)
        if (e.ctrlKey && e.shiftKey && (
            e.key === 'I' || e.key === 'i' ||
            e.key === 'J' || e.key === 'j' ||
            e.key === 'C' || e.key === 'c'
        )) {
            e.preventDefault();
            return false;
        }

        // Ctrl + U (View Source), S (Save), P (Print), A (Select All), C (Copy)
        if (e.ctrlKey && (
            e.key === 'u' || e.key === 'U' ||
            e.key === 's' || e.key === 'S' ||
            e.key === 'p' || e.key === 'P' ||
            e.key === 'a' || e.key === 'A' ||
            e.key === 'c' || e.key === 'C' ||
            e.key === 'x' || e.key === 'X' || // Cut
            e.key === 'v' || e.key === 'V'    // Paste (Tùy chọn, chặn Paste có thể gây khó chịu)
        )) {
            e.preventDefault();
            return false;
        }
    });

    // 4. CHẶN ZOOM (CTRL + WHEEL, CTRL + +/-)

    // Chặn Ctrl + Scroll
    document.addEventListener('wheel', function (e) {
        if (e.ctrlKey) {
            e.preventDefault();
        }
    }, { passive: false });

    // Chặn Ctrl + +, Ctrl + -, Ctrl + 0
    document.addEventListener('keydown', function (e) {
        if (e.ctrlKey && (
            e.key === '+' ||
            e.key === '-' ||
            e.key === '=' ||
            e.key === '0'
        )) {
            e.preventDefault();
        }
    });

    // Chặn Pinch Zoom (Cảm ứng) - Chỉ chặn trên Safari/Chrome Mobile nếu cần thiết
    // (Lưu ý: Chặn pinch zoom có thể ảnh hưởng trải nghiệm accessibility)
    document.addEventListener('gesturestart', function (e) {
        e.preventDefault();
    });

})();
