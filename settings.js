(function () {
    // --- Global Function để Apply Settings (có thể gọi từ UI update) ---
    window.applyMtyhSettings = function () {
        try {
            // --- 0. Config Tailwind Dark Mode Global ---
            if (!window.tailwind) window.tailwind = {};
            if (!window.tailwind.config) window.tailwind.config = {};
            if (!window.tailwind.config.darkMode) window.tailwind.config.darkMode = 'class';

            // --- 1. Inject Global CSS for Dark Mode & Transitions ---
            const styleId = 'mtyh-global-styles';
            if (!document.getElementById(styleId)) {
                const style = document.createElement('style');
                style.id = styleId;
                style.textContent = `
                    /* --- GLOBAL SCROLLBAR STYLES (Sync with cong-cu.html) --- */
                    ::-webkit-scrollbar { width: 6px; height: 6px; }
                    ::-webkit-scrollbar-track { background: transparent; }
                    ::-webkit-scrollbar-thumb { background: #cbd5e1; border-radius: 10px; }
                    ::-webkit-scrollbar-thumb:hover { background: #94a3b8; }
                    .dark ::-webkit-scrollbar-thumb { background: #475569; }
                    .dark ::-webkit-scrollbar-thumb:hover { background: #64748b; }

                    /* Glass Effect Dark Mode */
                .dark .search-glass {
                    background: rgba(30, 41, 59, 0.9) !important; /* Slate-800 with opacity */
                    /* Removed border-bottom as requested */
                }
                
                /* Transition mượt mà cho theme */
                    html, body { transition: background-color 0.3s ease, color 0.3s ease; }
                    
                    /* Global Dark Mode Overrides */
                    .dark body { background-color: #0f172a !important; color: #f8fafc !important; } /* Nền tối hơn (Slate-900) */
                    .dark .bg-pattern { background-image: none !important; } /* Xóa chấm trắng ở nền Dark Mode */
                    .dark .text-dark-muted { color: #cbd5e1 !important; } /* Text màu sáng (Slate-300) cho sub-header dễ đọc trên nền tối */
                    .dark .bg-white { background-color: #1e293b !important; border-color: #334155 !important; color: #f8fafc !important; }
                    .dark .bg-slate-50, .dark .bg-gray-50, .dark .bg-gray-100, .dark .bg-slate-100, 
                    .dark .bg-red-50, .dark .bg-orange-50, .dark .bg-amber-50, .dark .bg-yellow-50, .dark .bg-lime-50, .dark .bg-green-50, .dark .bg-emerald-50, .dark .bg-teal-50, .dark .bg-cyan-50, .dark .bg-sky-50, .dark .bg-blue-50, .dark .bg-indigo-50, .dark .bg-violet-50, .dark .bg-purple-50, .dark .bg-fuchsia-50, .dark .bg-pink-50, .dark .bg-rose-50 { background-color: #0f172a !important; }
                    
                    /* Text Contrast Fixes */
                    .dark .text-slate-800, .dark .text-gray-800, .dark .text-gray-900, .dark .text-black { color: #f1f5f9 !important; }
                    .dark .text-slate-700, .dark .text-gray-700 { color: #e2e8f0 !important; }
                    .dark .text-slate-600, .dark .text-gray-600 { color: #cbd5e1 !important; }
                    .dark .text-slate-500, .dark .text-gray-500 { color: #94a3b8 !important; }
                    .dark .text-slate-400, .dark .text-gray-400 { color: #cbd5e1 !important; }
                    
                    /* Colored Text Lightening for Dark Mode (High Contrast - 100 shades) */
                    .dark .text-slate-900, .dark .text-slate-800, .dark .text-slate-700 { color: #f1f5f9 !important; }
                    .dark .text-gray-900, .dark .text-gray-800, .dark .text-gray-700 { color: #f3f4f6 !important; }
                    .dark .text-zinc-900, .dark .text-zinc-800, .dark .text-zinc-700 { color: #f4f4f5 !important; }
                    .dark .text-neutral-900, .dark .text-neutral-800, .dark .text-neutral-700 { color: #f5f5f5 !important; }
                    .dark .text-stone-900, .dark .text-stone-800, .dark .text-stone-700 { color: #f5f5f4 !important; }
                    
                    .dark .text-red-900, .dark .text-red-800, .dark .text-red-700 { color: #fee2e2 !important; }
                    .dark .text-orange-900, .dark .text-orange-800, .dark .text-orange-700 { color: #ffedd5 !important; }
                    .dark .text-amber-900, .dark .text-amber-800, .dark .text-amber-700 { color: #fef3c7 !important; }
                    .dark .text-yellow-900, .dark .text-yellow-800, .dark .text-yellow-700 { color: #fef9c3 !important; }
                    .dark .text-lime-900, .dark .text-lime-800, .dark .text-lime-700 { color: #ecfccb !important; }
                    .dark .text-green-900, .dark .text-green-800, .dark .text-green-700 { color: #dcfce7 !important; }
                    .dark .text-emerald-900, .dark .text-emerald-800, .dark .text-emerald-700 { color: #d1fae5 !important; }
                    .dark .text-teal-900, .dark .text-teal-800, .dark .text-teal-700 { color: #ccfbf1 !important; }
                    .dark .text-cyan-900, .dark .text-cyan-800, .dark .text-cyan-700 { color: #cffafe !important; }
                    .dark .text-sky-900, .dark .text-sky-800, .dark .text-sky-700 { color: #e0f2fe !important; }
                    .dark .text-blue-900, .dark .text-blue-800, .dark .text-blue-700 { color: #dbeafe !important; }
                    .dark .text-indigo-900, .dark .text-indigo-800, .dark .text-indigo-700 { color: #e0e7ff !important; }
                    .dark .text-violet-900, .dark .text-violet-800, .dark .text-violet-700 { color: #ede9fe !important; }
                    .dark .text-purple-900, .dark .text-purple-800, .dark .text-purple-700 { color: #f3e8ff !important; }
                    .dark .text-fuchsia-900, .dark .text-fuchsia-800, .dark .text-fuchsia-700 { color: #fae8ff !important; }
                    .dark .text-pink-900, .dark .text-pink-800, .dark .text-pink-700 { color: #fce7f3 !important; }
                    .dark .text-rose-900, .dark .text-rose-800, .dark .text-rose-700 { color: #ffe4e6 !important; }
                    
                    /* Headings & Strong Text */
                    .dark h1, .dark h2, .dark h3, .dark h4, .dark h5, .dark h6, .dark strong, .dark b { color: #f8fafc !important; }
                    
                    /* Borders */
                    .dark .border-slate-100, .dark .border-gray-100, .dark .border-slate-200, .dark .border-gray-200 { border-color: #334155 !important; }
                    
                    /* Inputs & Forms */
                    .dark input, .dark select, .dark textarea { 
                        background-color: #1e293b !important; 
                        border-color: #475569 !important; 
                        color: #fff !important; 
                    }
                    .dark input::placeholder, .dark textarea::placeholder { color: #94a3b8 !important; }
                    
                    /* Shadows & Highlights */
                    .dark .shadow-sm, .dark .shadow-md, .dark .shadow-lg { box-shadow: none !important; border: 1px solid #334155 !important; }
                    
                    /* Specific fixes for gradient texts or icons that might disappear */
                    .dark .text-white { color: #ffffff !important; }
                    .dark .bg-white\/10 { background-color: rgba(255,255,255,0.1) !important; }
    
                    /* --- FIX: Text on Light Colored Backgrounds --- */
                    .dark .from-slate-50, .dark .from-gray-50, .dark .from-white { --tw-gradient-from: #1e293b !important; --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to) !important; }
                    .dark .to-white, .dark .to-slate-50, .dark .to-gray-50 { --tw-gradient-to: #1e293b !important; }
    
                    /* Removed "Force text to be DARK" rule as conflicts with dark mode overrides */
    
                    /* More aggressive reset for Buttons inside Light Containers */
                    .dark .bg-teal-50 button, .dark .bg-blue-50 button, .dark .bg-gray-50 button {
                        color: inherit !important;
                    }
                    
                    /* FIXED: Drawer Menu Hover Contrast Override */
                    /* Force dark text on hover in dark mode for drawer links, overriding global text rules */
                    .dark .drawer-link:hover { color: #0f172a !important; background-color: #f1f5f9; } /* Default slate */
                    .dark .drawer-link:hover[href*="gioi-thieu"] { color: #0f766e !important; background-color: #f0fdfa !important; } /* Teal-700 on Teal-50 */
                    .dark .drawer-link:hover[href*="lien-he"] { color: #15803d !important; background-color: #f0fdf4 !important; } /* Green-700 on Green-50 */
                    .dark .drawer-link:hover[href*="dieu-khoan"] { color: #1d4ed8 !important; background-color: #eff6ff !important; } /* Blue-700 on Blue-50 */
                    .dark .drawer-link:hover[href*="chinh-sach"] { color: #7e22ce !important; background-color: #faf5ff !important; } /* Purple-700 on Purple-50 */
                    .dark .drawer-link:hover[href*="ung-ho"] { color: #be123c !important; background-color: #fff1f2 !important; } /* Rose-700 on Rose-50 */
    
                    .dark button.bg-white { background-color: #334155 !important; color: #f8fafc !important; border-color: #475569 !important; }
                    .dark button.text-red-500 { color: #ef4444 !important; }
                    
                    /* Re-apply colored text if specifically set inside these light containers */
                    .dark :is(.bg-blue-50, .bg-blue-100, .bg-green-50, .bg-green-100, .bg-teal-50, .bg-teal-100) :is(.text-slate-500, .text-gray-500) {
                         color: #475569 !important;
                    }
                `;
                document.head.appendChild(style);
            }

            const settings = JSON.parse(localStorage.getItem('mtyh_settings'));
            if (settings) {
                // 2. Theme (Dark Mode)
                if (settings.theme === 'dark') {
                    document.documentElement.classList.add('dark');
                } else {
                    document.documentElement.classList.remove('dark');
                }

                // 3. Font Size
                const sizeMap = { 'small': '14px', 'medium': '16px', 'large': '18px', 'xl': '20px' };
                if (settings.fontSize && sizeMap[settings.fontSize]) {
                    document.documentElement.style.fontSize = sizeMap[settings.fontSize];
                }

                // 4. Font Family
                const fontMap = {
                    'inter': "'Inter', sans-serif",
                    'roboto': "'Roboto', sans-serif",
                    'opensans': "'Open Sans', sans-serif",
                    'lora': "'Lora', serif",
                    'nunito': "'Nunito', sans-serif",
                    'patrick': "'Patrick Hand', cursive",
                    'system': "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif"
                };
                if (settings.fontFamily && fontMap[settings.fontFamily]) {
                    document.documentElement.style.setProperty('--font-main', fontMap[settings.fontFamily]);

                    const setFont = () => { document.body.style.fontFamily = fontMap[settings.fontFamily]; };
                    if (document.body) {
                        setFont();
                    } else {
                        window.addEventListener('DOMContentLoaded', setFont);
                    }
                }
            }
        } catch (e) { console.error("Settings init error:", e); }
    };

    // Chạy lần đầu ngay lập tức
    window.applyMtyhSettings();
})();
