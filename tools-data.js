/**
 * FILE: tools-data.js
 * CHỨC NĂNG: Chứa dữ liệu và logic hiển thị danh sách công cụ
 */

// 1. DỮ LIỆU CÔNG CỤ (JSON)
// GẮN VÀO WINDOW ĐỂ TRUY CẬP TOÀN CỤC
window.toolsLibrary = [
    {
        categoryTitle: "Cấp cứu & Hồi sức",
        categoryIcon: "fa-truck-medical",
        categoryColor: "red",
        items: [
            { id: "burn", name: "Diện tích bỏng & Bù dịch", desc: "Parkland & Quy tắc số 9", url: "dien-tich-bong.html", icon: "fa-fire", color: "orange" },
            { id: "glasgow", name: "Thang điểm Glasgow (GCS)", desc: "Đánh giá tri giác", url: "glasgow.html", icon: "fa-brain", color: "red" },
            { id: "sofa", name: "Thang điểm SOFA", desc: "Đánh giá suy tạng (Sepsis)", url: "sofa.html", icon: "fa-bed-pulse", color: "red" },
            { id: "apache2", name: "Thang điểm APACHE II", desc: "Tiên lượng tử vong tại ICU", url: "apache-ii.html", icon: "fa-notes-medical", color: "red" },
            { id: "news2", name: "Thang điểm NEWS2", desc: "Cảnh báo sớm bệnh nặng", url: "news2.html", icon: "fa-tower-broadcast", color: "red" },
            { id: "pbw-vt", name: "Cân nặng lý tưởng & Vt", desc: "Cài đặt máy thở ARDSnet", url: "pbw-vt.html", icon: "fa-lungs-virus", color: "red" },
            { id: "stress-ulcer", name: "Dự phòng loét Stress", desc: "Chỉ định dùng PPI (ICU)", url: "loet-do-stress.html", icon: "fa-shield-halved", color: "red" },
            { id: "abg", name: "Phân tích Khí máu (ABG)", desc: "Toan kiềm & Oxy hóa máu", url: "phan-tich-khi-mau.html", icon: "fa-lungs", color: "rose" },
            { id: "fena", name: "Phân suất thải Natri (FeNa)", desc: "Phân biệt nguyên nhân suy thận", url: "fena.html", icon: "fa-flask", color: "rose" },
            { id: "atropin", name: "Thang điểm Atropin", desc: "Theo dõi ngộ độc lân hữu cơ", url: "bang-diem-atropin.html", icon: "fa-biohazard", color: "rose" },
            { id: "bps", name: "Thang điểm đau BPS", desc: "Đánh giá đau (BN thở máy)", url: "thang-dau-bps.html", icon: "fa-face-grimace", color: "rose" }
        ]
    },
    {
        categoryTitle: "Tim mạch & Huyết học",
        categoryIcon: "fa-heart-pulse",
        categoryColor: "pink",
        items: [
            { id: "chads", name: "Thang điểm CHA₂DS₂-VASc", desc: "Nguy cơ đột quỵ rung nhĩ", url: "chads-vasc.html", icon: "fa-heart-crack", color: "pink" },
            { id: "hasbled", name: "Thang điểm HAS-BLED", desc: "Nguy cơ chảy máu", url: "hasbled.html", icon: "fa-droplet-slash", color: "pink" },
            { id: "padua", name: "Thang điểm PADUA", desc: "Nguy cơ huyết khối tĩnh mạch", url: "padua.html", icon: "fa-user-shield", color: "pink" },
            { id: "improve", name: "Thang điểm IMPROVE", desc: "Nguy cơ VTE & Chảy máu", url: "improve.html", icon: "fa-file-medical", color: "pink" },
            { id: "timi", name: "Thang điểm TIMI", desc: "Tiên lượng NMCT cấp", url: "timi.html", icon: "fa-heart-pulse", color: "pink" },
            { id: "ldlc", name: "Phân loại LDLc (ESC/EAS)", desc: "Mục tiêu điều trị mỡ máu", url: "ldlc.html", icon: "fa-chart-line", color: "pink" },
            { id: "orbit", name: "Thang điểm ORBIT", desc: "Nguy cơ chảy máu (Rung nhĩ)", url: "orbit.html", icon: "fa-circle-notch", color: "pink" },
            { id: "nihss", name: "Thang điểm NIHSS", desc: "Đánh giá mức độ đột quỵ não", url: "nihss.html", icon: "fa-user-injured", color: "purple" },
            { id: "4t", name: "Thang điểm 4T", desc: "Sàng lọc HIT (Giảm tiểu cầu)", url: "4tscore.html", icon: "fa-syringe", color: "purple" },
            { id: "isth", name: "Thang điểm ISTH DIC", desc: "Chẩn đoán DIC", url: "isth-dic.html", icon: "fa-vial", color: "purple" },
            { id: "tpe", name: "Thay huyết tương (TPE)", desc: "Tính thể tích huyết tương", url: "tpe.html", icon: "fa-hand-holding-droplet", color: "purple" }
        ]
    },
    {
        categoryTitle: "Dược & Điều dưỡng",
        categoryIcon: "fa-pills",
        categoryColor: "blue",
        items: [
            { id: "corticoid", name: "Chuyển đổi liều Corticoid", desc: "So sánh hiệu lực thuốc", url: "doilieu-corticoid.html", icon: "fa-pills", color: "blue" },
            { id: "antibiotic", name: "Kháng sinh, Kháng nấm & Virus", desc: "Tra cứu liều dùng", url: "khang-sinh.html", icon: "fa-capsules", color: "blue" },
            { id: "drug-lookup", name: "Tra cứu thuốc & VTYT", desc: "Danh mục thuốc & Vật tư", url: "danh-muc-thuoc.html", icon: "fa-book-medical", color: "blue" },
            { id: "drip-rate", name: "Đếm giọt dịch truyền", desc: "Tính số giọt/phút", url: "dem-giot-dich-truyen.html", icon: "fa-droplet", color: "cyan" },
            { id: "infusion-time", name: "Tính thời gian truyền dịch", desc: "Dự báo thời gian hết dịch", url: "tinh-thoi-gian-truyen-dich.html", icon: "fa-clock", color: "cyan" },
            { id: "infusion-rate", name: "Tính tốc độ truyền thuốc", desc: "ml/h hoặc mcg/kg/phút", url: "tinh-toc-do-truyen.html", icon: "fa-gauge-high", color: "cyan" }
        ]
    },
    {
        categoryTitle: "Tổng quát & Dinh dưỡng",
        categoryIcon: "fa-apple-whole",
        categoryColor: "green",
        items: [
            { id: "bmi", name: "Chỉ số khối (BMI)", desc: "Đánh giá thể trạng cơ thể", url: "bmi.html", icon: "fa-weight-scale", color: "green" },
            { id: "egfr", name: "Độ lọc cầu thận (eGFR)", desc: "Đánh giá chức năng thận", url: "do-loc-cau-than.html", icon: "fa-filter", color: "green" },
            { id: "diet", name: "Tra cứu chế độ ăn", desc: "Dinh dưỡng cho bệnh lý", url: "tra-cuu-che-do-an.html", icon: "fa-utensils", color: "green" }
        ]
    }
];

// Alias cục bộ để giữ tương thích code cũ trong file này
const toolsLibrary = window.toolsLibrary;

// 2. CÁC HÀM HỖ TRỢ (UTILS)
function removeVietnameseTones(str) {
    str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
    str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
    str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
    str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
    str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
    str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
    str = str.replace(/đ/g, "d");
    str = str.replace(/À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ/g, "A");
    str = str.replace(/È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ/g, "E");
    str = str.replace(/Ì|Í|Ị|Ỉ|Ĩ/g, "I");
    str = str.replace(/Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ/g, "O");
    str = str.replace(/Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ/g, "U");
    str = str.replace(/Ỳ|Ý|Ỵ|Ỷ|Ỹ/g, "Y");
    str = str.replace(/Đ/g, "D");
    str = str.replace(/\u0300|\u0301|\u0303|\u0309|\u0323/g, "");
    str = str.replace(/\u02C6|\u0306|\u031B/g, "");
    return str;
}

// 3. HÀM RENDER HTML (VIEW)
function createToolCard(tool) {
    // Tạo chuỗi tìm kiếm không dấu sẵn để tối ưu tốc độ search
    const searchString = removeVietnameseTones((tool.name + " " + tool.id).toLowerCase());

    return `
    <div onclick="useTool('${tool.id}', '${tool.name}', '${tool.icon}', '${tool.color}', '${tool.url}')"
        class="tool-item group bg-white p-4 rounded-2xl shadow-sm hover:shadow-[0_8px_30px_-5px_rgba(0,0,0,0.1)] border border-slate-100 cursor-pointer flex items-center gap-4 transition-all duration-300 hover:-translate-y-1 relative overflow-hidden"
        data-search="${searchString}">
        
        <button onclick="event.stopPropagation(); handleHeartClick(this, '${tool.id}', '${tool.name}', '${tool.url}', '${tool.icon}', '${tool.color}')"
            class="fav-btn absolute top-2 right-2 z-30 w-8 h-8 rounded-full bg-white/60 backdrop-blur-sm hover:bg-white shadow-sm border border-white/50 flex items-center justify-center group/btn transition-all"
            data-id="${tool.id}">
            <i class="fa-regular fa-heart text-slate-400 group-hover/btn:text-red-500 transition-colors"></i>
        </button>

        <div class="absolute top-0 right-0 w-12 h-12 bg-${tool.color}-50 rounded-bl-full -mr-6 -mt-6 transition-all group-hover:bg-${tool.color}-100"></div>
        
        <div class="w-12 h-12 flex-shrink-0 rounded-xl bg-gradient-to-br from-${tool.color}-50 to-${tool.color}-100 flex items-center justify-center text-${tool.color}-500 text-xl shadow-inner group-hover:scale-110 transition-transform">
            <i class="fa-solid ${tool.icon}"></i>
        </div>
        
        <div class="overflow-hidden relative z-10">
            <h4 class="font-semibold text-slate-700 text-sm md:text-base truncate group-hover:text-${tool.color}-600 transition-colors">
                ${tool.name}
            </h4>
            <p class="text-xs text-slate-400 truncate">${tool.desc}</p>
        </div>
    </div>
    `;
}

function renderLibrary() {
    const container = document.getElementById('library-container');
    if (!container) return; // Bảo vệ nếu không tìm thấy div

    let htmlContent = '';

    toolsLibrary.forEach((category, index) => {
        const itemsHtml = category.items.map(item => createToolCard(item)).join('');
        // Hiệu ứng xuất hiện lần lượt
        const delay = index * 100;

        htmlContent += `
        <div class="mb-8 tool-category animate-[fadeIn_0.5s_ease-out]" style="animation-delay: ${delay}ms">
            <h3 class="font-bold text-slate-800 text-lg md:text-xl mb-4 flex items-center gap-3">
                <span class="w-10 h-10 rounded-xl bg-${category.categoryColor}-100 text-${category.categoryColor}-500 flex items-center justify-center shadow-sm">
                    <i class="fa-solid ${category.categoryIcon}"></i>
                </span>
                ${category.categoryTitle}
            </h3>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                ${itemsHtml}
            </div>
        </div>
        `;
    });

    container.innerHTML = htmlContent;

    // Tải lại trạng thái tim yêu thích nếu user đã đăng nhập
    if (window.loadFavorites && window.auth) {
        window.loadFavorites(window.auth.currentUser?.uid);
    }
}

// 4. HÀM TÌM KIẾM MỚI (Tối ưu cho data-driven)
function filterTools() {
    const input = document.getElementById('search-input');
    const filter = removeVietnameseTones(input.value.toLowerCase());
    const items = document.querySelectorAll('.tool-item');
    const categories = document.querySelectorAll('.tool-category');

    items.forEach(item => {
        const searchData = item.getAttribute('data-search') || "";
        if (searchData.includes(filter)) {
            item.style.display = "flex";
        } else {
            item.style.display = "none";
        }
    });

    categories.forEach(cat => {
        const visibleItems = cat.querySelectorAll('.tool-item[style="display: flex;"]');
        if (visibleItems.length === 0 && filter !== "") {
            cat.style.display = "none";
        } else {
            cat.style.display = "block";
        }
    });
}

// KHỞI CHẠY
document.addEventListener('DOMContentLoaded', () => {
    renderLibrary();
});