/**
 * APP.JS - PHIÊN BẢN FIX LỖI MOBILE LOGIN
 * 1. Tự động dùng Redirect cho Mobile (tránh lỗi chặn Popup/Màn hình trắng)
 * 2. Giữ nguyên logic Security & Domain Lock
 * 3. Giữ nguyên tính năng Yêu thích
 */

// ==========================================
// 0. BẢO MẬT NÂNG CAO (SECURITY LAYER)
// ==========================================
(function () {
    // A. KHÓA TÊN MIỀN (DOMAIN LOCK)
    // LƯU Ý QUAN TRỌNG: Bác hãy thêm domain hosting của mình vào mảng dưới đây:
    const allowedDomains = [
        'localhost', 
        '127.0.0.1', 
        'maytinhyhoc.github.io', 
        'may-tinh-y-hoc.firebaseapp.com',
    ];
    const currentDomain = window.location.hostname;

    // Chỉ chạy kiểm tra nếu không phải đang mở file local (file://)
    if (currentDomain !== '' && !allowedDomains.some(d => currentDomain.includes(d))) {
        document.body.innerHTML = `
            <div style="display:flex;justify-content:center;align-items:center;height:100vh;flex-direction:column;font-family:sans-serif;background:#f8fafc;color:#334155;padding:20px;text-align:center;">
                <h1 style="font-size:24px;margin-bottom:10px;">⚠️ Truy cập bị từ chối</h1>
                <p>Domain <strong>${currentDomain}</strong> chưa được cấp phép.</p>
                <p style="font-size:12px;color:#64748b;margin-top:10px;">Vui lòng thêm domain này vào mảng allowedDomains trong file app.js</p>
            </div>
        `;
        throw new Error("Domain restricted: " + currentDomain);
    }

    // B. CHỐNG DEBUGGER (ANTI-DEBUG) - Giữ nguyên
    setInterval(function () {
        const start = performance.now();
        (function () { }.constructor("debugger")());
        const end = performance.now();
        if (end - start > 100) {
            console.warn("DevTools detected.");
            // Có thể bỏ đoạn xóa body đi để bác dễ debug hơn trên mobile nếu cần
        }
    }, 1000);
})();


// ==========================================
// 1. CHUỖI HTML GIAO DIỆN (GIỮ NGUYÊN)
// ==========================================
const appInterface = `
    <header class="hidden md:flex fixed top-0 w-full bg-white shadow-sm z-50 h-16 items-center px-8 justify-between">
        <div class="flex items-center gap-3">
            <a href="index.html" class="flex items-center gap-3 group">
                <img src="logo.png" alt="Logo" class="w-10 h-10 object-contain group-hover:scale-105 transition" onerror="this.src='https://placehold.co/40x40?text=Logo'">
                <h1 class="text-xl md:text-3xl font-bold text-blue-600">Máy Tính Y Học</h1>
            </a>
        </div>
        
        <div class="flex items-center gap-6">
            <nav id="desktop-nav" class="flex gap-8 text-sm md:text-lg font-medium text-gray-600">
                <a href="index.html" class="nav-link hover:text-teal-600 transition" data-page="home">Trang chủ</a>
                <a href="cong-cu.html" class="nav-link hover:text-teal-600 transition" data-page="tools">Công cụ</a>
                <a href="yeu-thich.html" class="nav-link hover:text-teal-600 transition" data-page="favorites">Yêu thích</a>
                <a href="#" onclick="openDrawer(event)" class="hover:text-teal-600 transition">Thêm</a>
            </nav>

            <div class="pl-6 border-l border-gray-200 min-w-[210px] flex justify-end">
                <button id="login-btn-desktop" class="hidden md:flex bg-teal-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-teal-700 transition items-center gap-2 shadow-sm">
                    <i class="fa-brands fa-google"></i> Đăng nhập
                </button>

                <div id="user-info-desktop" class="hidden items-center gap-3 cursor-pointer relative group">
                    <div class="text-right hidden lg:block">
                        <p id="user-name" class="text-sm font-bold text-gray-800 leading-tight">User</p>
                        <p class="text-xs text-green-600 font-medium">Online</p>
                    </div>
                    <img id="user-avatar" src="" class="w-9 h-9 rounded-full border border-gray-200 ring-2 ring-transparent group-hover:ring-teal-100 transition">
                    
                    <div class="absolute right-0 top-6 w-56 pt-7 hidden group-hover:block z-50">
                        <div class="bg-white shadow-xl rounded-xl p-2 border border-gray-100 animate-fade-in">
                            <button id="logout-btn" class="w-full text-left text-red-500 text-sm px-3 py-2.5 hover:bg-red-50 rounded-lg flex items-center transition">
                                <i class="fa-solid fa-arrow-right-from-bracket mr-2"></i>Đăng xuất
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>

   <div id="drawer-overlay" onclick="closeDrawer()" class="fixed inset-0 bg-black/50 z-[60] hidden transition-opacity opacity-0"></div>
    <div id="drawer-menu" class="fixed top-0 right-0 h-full w-80 bg-white shadow-2xl z-[70] transform transition-transform translate-x-full duration-300 ease-in-out flex flex-col">
        <div class="p-5 flex justify-between items-center border-b border-gray-100 bg-gray-50">
            <h2 class="font-bold text-xl text-gray-800">Menu</h2>
            <button onclick="closeDrawer()" class="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-200 text-gray-500 transition"><i class="fa-solid fa-xmark text-lg"></i></button>
        </div>

        <div class="flex flex-col h-full overflow-y-auto">
            <div id="mobile-auth-section" class="m-4 p-4 bg-teal-50 rounded-xl border border-teal-100 shadow-sm">
                <button id="login-btn-mobile" class="w-full bg-white text-teal-600 font-bold py-2.5 px-4 rounded-lg shadow-sm border border-teal-200 flex items-center justify-center gap-2 hover:bg-teal-600 hover:text-white transition">
                    <i class="fa-brands fa-google"></i> Đăng nhập Google
                </button>
                <div id="user-info-mobile" class="hidden flex-col gap-4">
                    <div class="flex items-center gap-3">
                        <img id="mobile-avatar" src="" class="w-12 h-12 rounded-full bg-gray-200 border-2 border-white shadow-sm">
                        <div class="flex-1 min-w-0">
                            <p class="text-xs text-gray-500 mb-0.5">Xin chào,</p>
                            <p id="mobile-name" class="font-bold text-gray-800 text-sm truncate">Người dùng</p>
                        </div>
                    </div>
                    <button id="logout-btn-mobile" class="w-full text-sm text-red-500 bg-white border border-red-100 py-2 rounded-lg font-medium hover:bg-red-50 transition flex items-center justify-center gap-2">
                        <i class="fa-solid fa-arrow-right-from-bracket"></i> Đăng xuất
                    </button>
                </div>
            </div>
            
            <div class="px-4 pb-4 flex flex-col gap-2">
                <a href="gioi-thieu.html" class="flex items-center gap-4 p-3 hover:bg-teal-50 hover:text-teal-600 rounded-xl transition group text-gray-700">
                    <div class="w-8 h-8 rounded-full bg-teal-100 flex items-center justify-center text-teal-600"><i class="fa-solid fa-circle-info"></i></div>
                    <span class="font-medium">Giới thiệu</span>
                </a>
                <a href="lien-he.html" class="flex items-center gap-4 p-3 hover:bg-green-50 hover:text-green-600 rounded-xl transition group text-gray-700">
                    <div class="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-600"><i class="fa-solid fa-envelope"></i></div>
                    <span class="font-medium">Liên hệ</span>
                </a>
                <a href="dieu-khoan-dich-vu.html" class="flex items-center gap-4 p-3 hover:bg-blue-50 hover:text-blue-600 rounded-xl transition group text-gray-700">
                    <div class="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600"><i class="fa-solid fa-file-contract"></i></div>
                    <span class="font-medium">Điều khoản</span>
                </a>
                <a href="chinh-sach-bao-mat.html" class="flex items-center gap-4 p-3 hover:bg-purple-50 hover:text-purple-600 rounded-xl transition group text-gray-700">
                    <div class="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center text-purple-600"><i class="fa-solid fa-shield-halved"></i></div>
                    <span class="font-medium">Chính sách</span>
                </a>
                <div class="my-2 border-t border-gray-100"></div>
                <a href="ung-ho.html" class="flex items-center gap-4 p-3 hover:bg-rose-50 hover:text-rose-600 rounded-xl transition group text-gray-700">
                    <div class="w-8 h-8 rounded-full bg-rose-100 flex items-center justify-center text-rose-600"><i class="fa-solid fa-heart"></i></div>
                    <span class="font-medium">Ủng hộ</span>
                </a>
            </div>
        </div>
    </div>
    <nav class="md:hidden fixed bottom-0 left-0 z-50 w-full h-16 bg-white border-t border-gray-100 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)]">
        <div class="grid h-full max-w-lg grid-cols-4 mx-auto font-medium">
            <a href="index.html" class="nav-item-mobile text-gray-500 inline-flex flex-col items-center justify-center px-5 group hover:text-teal-600" data-page="home">
                <i class="fa-solid fa-house text-xl mb-1 transition-transform group-hover:-translate-y-1"></i>
                <span class="text-[10px]">Trang chủ</span>
            </a>
            <a href="cong-cu.html" class="nav-item-mobile text-gray-500 inline-flex flex-col items-center justify-center px-5 group hover:text-teal-600" data-page="tools">
                <i class="fa-solid fa-calculator text-xl mb-1 transition-transform group-hover:-translate-y-1"></i>
                <span class="text-[10px]">Công cụ</span>
            </a>
            <a href="yeu-thich.html" class="nav-item-mobile text-gray-500 inline-flex flex-col items-center justify-center px-5 group hover:text-teal-600" data-page="favorites">
                <i class="fa-solid fa-heart text-xl mb-1 transition-transform group-hover:-translate-y-1"></i>
                <span class="text-[10px]">Yêu thích</span>
            </a>
            <button onclick="openDrawer(event)" class="text-gray-500 inline-flex flex-col items-center justify-center px-5 group hover:text-teal-600">
                <i class="fa-solid fa-bars text-xl mb-1 transition-transform group-hover:-translate-y-1"></i>
                <span class="text-[10px]">Thêm</span>
            </button>
        </div>
    </nav>
`;

document.body.insertAdjacentHTML('afterbegin', appInterface);

// ==========================================
// 2. LOGIC UI ELEMENTS & CACHE
// ==========================================
const ui = {
    d: { login: document.getElementById('login-btn-desktop'), info: document.getElementById('user-info-desktop'), avt: document.getElementById('user-avatar'), name: document.getElementById('user-name'), out: document.getElementById('logout-btn') },
    m: { login: document.getElementById('login-btn-mobile'), info: document.getElementById('user-info-mobile'), avt: document.getElementById('mobile-avatar'), name: document.getElementById('mobile-name'), out: document.getElementById('logout-btn-mobile') }
};

let currentUser = null;

function updateUI(user) {
    currentUser = user;
    if (user) {
        if (ui.d.login) { ui.d.login.classList.add('hidden'); ui.d.login.classList.remove('md:flex'); }
        if (ui.d.info) {
            ui.d.info.classList.remove('hidden'); ui.d.info.classList.add('flex');
            ui.d.avt.src = user.photoURL || 'https://placehold.co/40x40?text=BS';
            ui.d.name.textContent = user.displayName || 'Người dùng';
        }
        if (ui.m.login) ui.m.login.classList.add('hidden');
        if (ui.m.info) {
            ui.m.info.classList.remove('hidden'); ui.m.info.classList.add('flex');
            ui.m.avt.src = user.photoURL || 'https://placehold.co/40x40?text=BS';
            ui.m.name.textContent = user.displayName || 'Người dùng';
        }

        // Cập nhật danh sách yêu thích khi đăng nhập xong
        if (typeof window.loadFavorites === 'function') window.loadFavorites(user.uid);
        const currentToolId = document.body.getAttribute('data-tool-id');
        if (currentToolId && typeof window.checkFavoriteStatus === 'function') window.checkFavoriteStatus(currentToolId);

    } else {
        if (ui.d.login) { ui.d.login.classList.remove('hidden'); ui.d.login.classList.add('md:flex'); }
        if (ui.d.info) { ui.d.info.classList.add('hidden'); ui.d.info.classList.remove('flex'); }
        if (ui.m.login) ui.m.login.classList.remove('hidden');
        if (ui.m.info) { ui.m.info.classList.add('hidden'); ui.m.info.classList.remove('flex'); }

        const favContainer = document.getElementById('favorites-container');
        if (favContainer) favContainer.innerHTML = '<div class="text-center py-4 text-gray-400 italic">Đăng nhập để xem danh sách yêu thích.</div>';
    }
}

// Chống giật layout bằng cache
(function checkCache() {
    try {
        const cached = localStorage.getItem('mtyh_user_cache');
        if (cached) updateUI(JSON.parse(cached));
    } catch (e) { console.log(e); }
})();

// ==========================================
// 3. DRAWER & NAVIGATION
// ==========================================
window.openDrawer = function (e) { if (e) e.preventDefault(); const d = document.getElementById('drawer-menu'); const o = document.getElementById('drawer-overlay'); o.classList.remove('hidden'); setTimeout(() => o.classList.remove('opacity-0'), 10); d.classList.remove('translate-x-full'); document.body.style.overflow = 'hidden'; }
window.closeDrawer = function () { const d = document.getElementById('drawer-menu'); const o = document.getElementById('drawer-overlay'); d.classList.add('translate-x-full'); o.classList.add('opacity-0'); setTimeout(() => { o.classList.add('hidden'); document.body.style.overflow = ''; }, 300); }

document.addEventListener("DOMContentLoaded", () => {
    const path = window.location.pathname;
    let page = "other";
    if (path.includes("yeu-thich")) {
        page = "favorites";
    } else if (path.includes("cong-cu") || path.includes("tinh") || path.includes("khang-sinh") || path.includes("che-do-an") || path.includes("dem-giot")) {
        page = "tools";
    } else if (path.includes("index") || path === "/" || path.endsWith("/")) {
        page = "home";
    }
    document.querySelectorAll('#desktop-nav a').forEach(link => { if (link.dataset.page === page) link.classList.add('text-teal-600', 'font-bold'); });
    document.querySelectorAll('.nav-item-mobile').forEach(link => { if (link.dataset.page === page) link.classList.add('active', 'text-teal-600'); });
});

// ==========================================
// 4. FIREBASE SDK 11.6.1 & AUTH LOGIC (ĐÃ NÂNG CẤP)
// ==========================================
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-app.js";
// NÂNG CẤP: Import thêm signInWithRedirect và getRedirectResult
import { getAuth, signInWithPopup, signInWithRedirect, getRedirectResult, GoogleAuthProvider, signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-auth.js";
import { getFirestore, doc, setDoc, getDoc } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyAIhH7oLBX9eG5GvdhDJ4YemvoPwltIMis",
    authDomain: "may-tinh-y-hoc.firebaseapp.com",
    projectId: "may-tinh-y-hoc",
    storageBucket: "may-tinh-y-hoc.firebasestorage.app",
    messagingSenderId: "407413077096",
    appId: "1:407413077096:web:580342bd72f2758ceab7dd",
    measurementId: "G-QFRDTFYLDH"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const provider = new GoogleAuthProvider();

// --- XỬ LÝ ĐĂNG NHẬP SAU KHI REDIRECT (QUAN TRỌNG CHO MOBILE) ---
getRedirectResult(auth)
    .then((result) => {
        if (result) {
            // Đăng nhập thành công trên Mobile!
            // UI sẽ tự cập nhật nhờ onAuthStateChanged ở dưới
            console.log("Mobile login success:", result.user.displayName);
        }
    })
    .catch((error) => {
        console.error("Lỗi Redirect:", error);
        // Không alert lỗi nếu chỉ là hủy thao tác
        if (error.code !== 'auth/popup-closed-by-user' && error.code !== 'auth/cancelled-popup-request') {
            // alert("Đăng nhập thất bại: " + error.message);
        }
    });

// --- HÀM ĐĂNG NHẬP THÔNG MINH (HYBRID) ---
const handleLogin = async () => {
    // Phát hiện thiết bị di động
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

    try {
        if (isMobile) {
            // Nếu là Mobile: Chuyển hướng trang để đăng nhập (Tránh lỗi chặn Popup)
            await signInWithRedirect(auth, provider);
        } else {
            // Nếu là PC: Dùng Popup cho tiện
            await signInWithPopup(auth, provider);
        }
    } catch (e) {
        console.error(e);
        alert("Lỗi khởi tạo đăng nhập: " + e.message);
    }
};

const handleLogout = async () => {
    localStorage.removeItem('mtyh_user_cache');
    await signOut(auth);
    location.reload();
};

// --- GÁN SỰ KIỆN ---
if (ui.d.login) ui.d.login.addEventListener('click', handleLogin);
if (ui.m.login) ui.m.login.addEventListener('click', handleLogin);
if (ui.d.out) ui.d.out.addEventListener('click', handleLogout);
if (ui.m.out) ui.m.out.addEventListener('click', handleLogout);

// --- THEO DÕI TRẠNG THÁI NGƯỜI DÙNG ---
onAuthStateChanged(auth, (user) => {
    if (user) {
        localStorage.setItem('mtyh_user_cache', JSON.stringify({
            displayName: user.displayName,
            photoURL: user.photoURL,
            uid: user.uid
        }));
        updateUI(user);
    } else {
        localStorage.removeItem('mtyh_user_cache');
        updateUI(null);
    }
});

// --- HÀM FIRESTORE: YÊU THÍCH ---
window.toggleFavorite = async function (id, name, url, icon, color) {
    if (!currentUser) {
        alert("Bạn cần đăng nhập để sử dụng tính năng Yêu thích!");
        throw new Error("Người dùng chưa đăng nhập");
    }
    try {
        const userRef = doc(db, "users", currentUser.uid);
        const docSnap = await getDoc(userRef);
        let favorites = [];
        if (docSnap.exists()) favorites = docSnap.data().favorites || [];

        const index = favorites.findIndex(t => t.id === id);
        if (index > -1) {
            favorites.splice(index, 1);
        } else {
            favorites.unshift({ id, name, url, icon, color });
        }
        await setDoc(userRef, { favorites }, { merge: true });

        if (typeof window.loadFavorites === 'function') window.loadFavorites(currentUser.uid);
        if (typeof window.checkFavoriteStatus === 'function') window.checkFavoriteStatus(id);
    } catch (e) {
        console.error("Lỗi Firestore:", e);
        throw e;
    }
};

window.checkFavoriteStatus = async function (toolId) {
    if (!currentUser) return;
    try {
        const docSnap = await getDoc(doc(db, "users", currentUser.uid));
        if (docSnap.exists()) {
            const favs = docSnap.data().favorites || [];
            const isFav = favs.some(t => t.id === toolId);
            const btn = document.getElementById('fav-btn');
            if (btn) {
                const icon = btn.querySelector('i');
                if (isFav) {
                    icon.classList.replace('fa-regular', 'fa-solid');
                    icon.classList.add('text-red-500');
                } else {
                    icon.classList.replace('fa-solid', 'fa-regular');
                    icon.classList.remove('text-red-500');
                }
            }
        }
    } catch (e) { console.log(e); }
};

window.getUserFavorites = async function (callback) {
    if (!currentUser) return callback([]);
    try {
        const docSnap = await getDoc(doc(db, "users", currentUser.uid));
        callback(docSnap.exists() ? (docSnap.data().favorites || []) : []);
    } catch (e) { callback([]); }
};
