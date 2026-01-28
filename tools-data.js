/**
 * FILE: tools-data.js
 * CHỨC NĂNG: Chứa dữ liệu và logic hiển thị danh sách công cụ (Đã phân loại lại)
 */

window.toolsLibrary = [
    {
        categoryTitle: "Cấp cứu & Hồi sức",
        categoryIcon: "fa-truck-medical",
        categoryColor: "red",
        items: [

            { id: "aa-gradient", name: "A-a O₂ Gradient", desc: "Chênh áp Oxy phế nang - động mạch", url: "aa-gradient.html", icon: "fa-lungs", color: "red" },
            { id: "abc-score", name: "ABC Score", desc: "Dự đoán truyền máu khối lượng lớn", url: "abc-score.html", icon: "fa-droplet", color: "red" },
            { id: "abcdef", name: "ABCDEF Bundle", desc: "Gói giải phóng khỏi ICU", url: "abcdef-bundle.html", icon: "fa-list-check", color: "red" },
            { id: "apache2", name: "APACHE II", desc: "Tiên lượng tử vong ICU", url: "apache-ii.html", icon: "fa-notes-medical", color: "red" },
            { id: "ards-berlin", name: "ARDS (Berlin 2012)", desc: "Tiêu chuẩn chẩn đoán ARDS", url: "ards-berlin.html", icon: "fa-lungs-virus", color: "red" },
            { id: "balthazar", name: "Balthazar Score", desc: "Mức độ nặng viêm tụy cấp trên CT", url: "balthazar.html", icon: "fa-x-ray", color: "red" },
            { id: "bisap", name: "BISAP Score", desc: "Tiên lượng viêm tụy cấp sớm", url: "bisap.html", icon: "fa-pancreas", color: "red" },
            { id: "burn", name: "Diện tích bỏng (Parkland)", desc: "Tính diện tích & dịch bù", url: "dien-tich-bong.html", icon: "fa-fire", color: "red" },
            { id: "cam-icu", name: "CAM-ICU", desc: "Đánh giá sảng (Delirium)", url: "cam-icu.html", icon: "fa-head-side-virus", color: "red" },
            { id: "checklist-er", name: "Checklists Cấp cứu", desc: "STEMI, NSTEMI, Đặt NKQ...", url: "checklists-er.html", icon: "fa-clipboard-list", color: "red" },

            { id: "cpis", name: "CPIS Score", desc: "Điểm nhiễm trùng phổi (VAP)", url: "cpis.html", icon: "fa-bacterium", color: "red" },
            { id: "cpot", name: "CPOT Score", desc: "Đánh giá đau (BN không giao tiếp)", url: "cpot.html", icon: "fa-face-grimace", color: "red" },
            { id: "curb65", name: "CURB-65", desc: "Tiên lượng viêm phổi cộng đồng", url: "curb65.html", icon: "fa-lungs", color: "red" },

            { id: "hacor", name: "HACOR Score", desc: "Dự đoán thất bại NIV", url: "hacor.html", icon: "fa-mask-ventilator", color: "red" },
            { id: "hscore", name: "HScore", desc: "Chẩn đoán hội chứng thực bào máu", url: "hscore.html", icon: "fa-dna", color: "red" },
            { id: "icdsc", name: "ICDSC", desc: "Sàng lọc sảng (Delirium)", url: "icdsc.html", icon: "fa-brain", color: "red" },
            { id: "marshall", name: "Marshall (Sửa đổi)", desc: "Suy tạng trong viêm tụy cấp", url: "marshall.html", icon: "fa-file-medical", color: "red" },
            { id: "murray", name: "Murray Score (LIS)", desc: "Tổn thương phổi (Chỉ định ECMO)", url: "murray-lis.html", icon: "fa-heart-pulse", color: "red" },
            { id: "news2", name: "NEWS2", desc: "Cảnh báo sớm bệnh nặng", url: "news2.html", icon: "fa-tower-broadcast", color: "red" },
            { id: "pbw-vt", name: "PBW & Vt", desc: "Cân nặng lý tưởng & Vt ARDSnet", url: "pbw-vt.html", icon: "fa-weight", color: "red" },

            { id: "qsofa", name: "qSOFA", desc: "Sàng lọc nhiễm trùng huyết nhanh", url: "qsofa.html", icon: "fa-bacteria", color: "red" },
            { id: "ranson", name: "Ranson Criteria", desc: "Tiên lượng viêm tụy cấp", url: "ranson.html", icon: "fa-flask-vial", color: "red" },
            { id: "sepsis-bundle", name: "Sepsis Bundle (1h)", desc: "Gói 1 giờ nhiễm trùng huyết", url: "sepsis-bundle.html", icon: "fa-hourglass-start", color: "red" },
            { id: "shock-index", name: "Shock Index (SI)", desc: "Chỉ số sốc (Mạch/HA)", url: "shock-index.html", icon: "fa-heart-circle-bolt", color: "red" },
            { id: "sic-score", name: "SIC Score", desc: "Rối loạn đông máu do nhiễm trùng", url: "sic-score.html", icon: "fa-droplet", color: "red" },
            { id: "sofa", name: "SOFA Score", desc: "Đánh giá suy tạng (Sepsis)", url: "sofa.html", icon: "fa-bed", color: "red" },
            { id: "stress-ulcer", name: "Stress Ulcer", desc: "Chỉ định PPI dự phòng", url: "loet-do-stress.html", icon: "fa-shield-halved", color: "red" },
            { id: "vap-bundle", name: "VAP Bundle", desc: "Gói phòng ngừa viêm phổi thở máy", url: "vap-bundle.html", icon: "fa-shield-virus", color: "red" },
            { id: "vip-score", name: "VIP Score", desc: "Điểm viêm tĩnh mạch", url: "vip-score.html", icon: "fa-syringe", color: "red" },
            { id: "phac-do-sxh", name: "Phác đồ Sốt xuất huyết (BYT)", desc: "Phân độ, bù dịch, điều trị (Người lớn/Trẻ em)", url: "phac-do-sxh.html", icon: "fa-mosquito", color: "red" }
        ]
    },
    {
        categoryTitle: "Tim mạch",
        categoryIcon: "fa-heart-pulse",
        categoryColor: "pink",
        items: [
            { id: "acuity", name: "ACUITY Score", desc: "Nguy cơ chảy máu trong ACS", url: "acuity.html", icon: "fa-heart-crack", color: "pink" },
            { id: "aub-has2", name: "AUB-HAS2", desc: "Nguy cơ tim mạch phẫu thuật", url: "aub-has2.html", icon: "fa-heart-pulse", color: "pink" },
            { id: "cardiac-output", name: "Cardiac Output (Echo)", desc: "Đo cung lượng tim qua siêu âm", url: "cardiac-output.html", icon: "fa-wave-square", color: "pink" },
            { id: "chads", name: "CHA₂DS₂-VASc", desc: "Nguy cơ đột quỵ rung nhĩ", url: "chads-vasc.html", icon: "fa-heart-circle-exclamation", color: "pink" },
            { id: "crusade", name: "CRUSADE Score", desc: "Xuất huyết trong hội chứng vành cấp", url: "crusade.html", icon: "fa-droplet-slash", color: "pink" },
            { id: "geneva", name: "Geneva Score", desc: "Nguy cơ thuyên tắc phổi (PE)", url: "geneva.html", icon: "fa-lungs", color: "pink" },
            { id: "h2fpef", name: "H2FPEF Score", desc: "Chẩn đoán HFpEF (Suy tim EF bảo tồn)", url: "h2fpef.html", icon: "fa-heart", color: "pink" },
            { id: "hasbled", name: "HAS-BLED", desc: "Nguy cơ chảy máu rung nhĩ", url: "hasbled.html", icon: "fa-droplet", color: "pink" },
            { id: "hestia", name: "HESTIA Criteria", desc: "Tiêu chuẩn điều trị PE ngoại trú", url: "hestia.html", icon: "fa-house-medical", color: "pink" },
            { id: "individualized-hf", name: "Cá thể hóa Suy tim", desc: "Phác đồ EF ≤ 40%", url: "suy-tim-ca-the-hoa.html", icon: "fa-user-doctor", color: "pink" },
            { id: "killip", name: "Killip Class", desc: "Phân độ suy tim trong NMCT", url: "killip.html", icon: "fa-stairs", color: "pink" },
            { id: "ldlc", name: "Mục tiêu LDLc", desc: "Phân loại theo ESC/EAS", url: "ldlc.html", icon: "fa-chart-line", color: "pink" },
            { id: "orbit", name: "ORBIT Score", desc: "Nguy cơ chảy máu (Rung nhĩ)", url: "orbit.html", icon: "fa-circle-notch", color: "pink" },
            { id: "pesi", name: "PESI / sPESI", desc: "Tiên lượng tử vong thuyên tắc phổi", url: "pesi.html", icon: "fa-bed-pulse", color: "pink" },
            { id: "rcri", name: "RCRI Index", desc: "Nguy cơ tim mạch phẫu thuật", url: "rcri.html", icon: "fa-heart-pulse", color: "pink" },
            { id: "scai-shock", name: "SCAI Shock", desc: "Phân độ sốc tim", url: "scai-shock.html", icon: "fa-bolt", color: "pink" },
            { id: "score2", name: "SCORE2 / SCORE2-OP", desc: "Nguy cơ tim mạch 10 năm", url: "score2.html", icon: "fa-chart-pie", color: "pink" },
            { id: "timi", name: "TIMI Score", desc: "Tiên lượng NMCT cấp", url: "timi.html", icon: "fa-file-medical", color: "pink" },
            { id: "wells", name: "Wells Score", desc: "Nguy cơ DVT và PE", url: "wells.html", icon: "fa-user-shield", color: "pink" }
        ]
    },
    {
        categoryTitle: "Hô hấp",
        categoryIcon: "fa-lungs",
        categoryColor: "sky",
        items: [
            { id: "cat-score", name: "CAT Score", desc: "Đánh giá triệu chứng COPD", url: "cat-score.html", icon: "fa-lungs", color: "sky" },
            { id: "edlips", name: "EDLIPS Score", desc: "Dự đoán tổn thương phổi (ER)", url: "edlips.html", icon: "fa-x-ray", color: "sky" },
            { id: "abg", name: "Khí máu (ABG)", desc: "Phân tích toan kiềm & Oxy", url: "phan-tich-khi-mau.html", icon: "fa-vial", color: "sky" },
            { id: "rox", name: "ROX Index", desc: "Đáp ứng thở HFNC", url: "rox-index.html", icon: "fa-mask", color: "sky" },
            { id: "ti-ratio", name: "Ti & I:E Ratio", desc: "Tính thời gian hít vào máy thở", url: "ti-ratio.html", icon: "fa-stopwatch", color: "sky" },
            { id: "vent-init", name: "Cài đặt máy thở", desc: "Hướng dẫn cài đặt ban đầu", url: "cai-dat-may-tho.html", icon: "fa-wind", color: "sky" }
        ]
    },
    {
        categoryTitle: "Thần kinh",
        categoryIcon: "fa-brain",
        categoryColor: "purple",
        items: [
            { id: "abcd2", name: "ABCD² Score", desc: "Nguy cơ đột quỵ sau TIA", url: "abcd2-score.html", icon: "fa-brain", color: "purple" },
            { id: "aspects", name: "ASPECTS Score", desc: "Đánh giá tổn thương CT đột quỵ", url: "aspects.html", icon: "fa-layer-group", color: "purple" },
            { id: "fisher", name: "Fisher (Scale)", desc: "Xuất huyết dưới nhện trên CT", url: "fisher.html", icon: "fa-skull", color: "purple" },
            { id: "glasgow", name: "Glasgow (GCS)", desc: "Đánh giá tri giác", url: "glasgow.html", icon: "fa-eye", color: "purple" },
            { id: "gos", name: "GOS (Outcome)", desc: "Kết cục thần kinh", url: "gos.html", icon: "fa-person-walking-with-cane", color: "purple" },
            { id: "guss", name: "GUSS Test", desc: "Đánh giá rối loạn nuốt", url: "guss.html", icon: "fa-mug-hot", color: "purple" },
            { id: "ich-score", name: "ICH Score", desc: "Tiên lượng xuất huyết nội sọ", url: "ich-score.html", icon: "fa-brain", color: "purple" },
            { id: "nihss", name: "NIHSS", desc: "Mức độ đột quỵ não", url: "nihss.html", icon: "fa-wheelchair", color: "purple" },
            { id: "rankins", name: "mRS (Rankin)", desc: "Đánh giá di chứng đột quỵ", url: "rankins.html", icon: "fa-user-injured", color: "purple" },
        ]
    },
    {
        categoryTitle: "Tiêu hóa & Gan mật",
        categoryIcon: "fa-utensils",
        categoryColor: "amber",
        items: [
            { id: "diet", name: "Chế độ ăn", desc: "Tra cứu dinh dưỡng", url: "tra-cuu-che-do-an.html", icon: "fa-utensils", color: "amber" },
            { id: "aims65", name: "AIMS65", desc: "Tiên lượng XH tiêu hóa trên", url: "aims65.html", icon: "fa-file-medical", color: "amber" },
            { id: "alvarado", name: "Alvarado Score", desc: "Chẩn đoán viêm ruột thừa", url: "alvarado.html", icon: "fa-bacteria", color: "amber" },
            { id: "air-score", name: "AIR Score", desc: "Điểm đáp ứng viêm (Ruột thừa)", url: "air-score.html", icon: "fa-temperature-arrow-up", color: "amber" },
            { id: "child-pugh", name: "Child-Pugh", desc: "Đánh giá mức độ suy gan", url: "child-pugh.html", icon: "fa-liver", color: "amber" },
            { id: "fib4", name: "FIB-4 Index", desc: "Chỉ số xơ hóa gan", url: "fib4.html", icon: "fa-calculator", color: "amber" },
            { id: "gbs", name: "Glasgow-Blatchford", desc: "Nguy cơ XH tiêu hóa trên", url: "gbs.html", icon: "fa-droplet", color: "amber" },
            { id: "gerdq", name: "GerdQ", desc: "Sàng lọc trào ngược dạ dày", url: "gerdq.html", icon: "fa-fire-burner", color: "amber" },
            { id: "glasgow-imrie", name: "Glasgow Imrie", desc: "Tiên lượng viêm tụy cấp", url: "glasgow-imrie.html", icon: "fa-pancreas", color: "amber" },
            { id: "meld", name: "MELD / MELD-Na", desc: "Tiên lượng bệnh gan giai đoạn cuối", url: "meld.html", icon: "fa-hourglass-end", color: "amber" },
            { id: "mpi", name: "MPI (Mannheim)", desc: "Chỉ số viêm phúc mạc", url: "mpi.html", icon: "fa-bacteria", color: "amber" },
            { id: "oakland", name: "Oakland Score", desc: "An toàn xuất viện (XH tiêu hóa dưới)", url: "oakland.html", icon: "fa-house-user", color: "amber" },
            { id: "rockall", name: "Rockall Score", desc: "Nguy cơ XH tiêu hóa (Soi)", url: "rockall.html", icon: "fa-microscope", color: "amber" }
        ]
    },
    {
        categoryTitle: "Thận & Tiết niệu",
        categoryIcon: "fa-filter",
        categoryColor: "cyan",
        items: [
            { id: "akin", name: "AKIN", desc: "Phân loại tổn thương thận cấp", url: "akin.html", icon: "fa-filter", color: "cyan" },
            { id: "cauti-bundle", name: "CAUTI Bundle", desc: "Ngừa nhiễm trùng tiết niệu", url: "cauti.html", icon: "fa-shield-virus", color: "cyan" },
            { id: "egfr", name: "eGFR (CKD-EPI)", desc: "Độ lọc cầu thận", url: "do-loc-cau-than.html", icon: "fa-calculator", color: "cyan" },
            { id: "fena", name: "FeNa", desc: "Phân suất thải Natri", url: "fena.html", icon: "fa-flask", color: "cyan" },
            { id: "kdigo-aki", name: "KDIGO (AKI)", desc: "Phân độ suy thận cấp", url: "kdigo-aki.html", icon: "fa-table", color: "cyan" },
            { id: "rifle", name: "RIFLE", desc: "Tiêu chuẩn suy thận cấp cũ", url: "rifle.html", icon: "fa-ruler", color: "cyan" }
        ]
    },
    {
        categoryTitle: "Huyết học & Ung bướu",
        categoryIcon: "fa-vial-virus",
        categoryColor: "fuchsia",
        items: [
            { id: "4t", name: "4T Score", desc: "Sàng lọc HIT", url: "4tscore.html", icon: "fa-syringe", color: "fuchsia" },
            { id: "arc-hbr", name: "ARC-HBR", desc: "Nguy cơ chảy máu cao", url: "arc-hbr.html", icon: "fa-triangle-exclamation", color: "fuchsia" },
            { id: "bat-score", name: "BAT (ISTH)", desc: "Đánh giá chảy máu", url: "bat-score.html", icon: "fa-droplet", color: "fuchsia" },
            { id: "compass-cat", name: "COMPASS-CAT", desc: "Nguy cơ VTE (Ung thư)", url: "compass-cat.html", icon: "fa-ribbon", color: "fuchsia" },
            { id: "impede-vte", name: "IMPEDE-VTE", desc: "Huyết khối đa u tủy", url: "impede-vte.html", icon: "fa-bone", color: "fuchsia" },
            { id: "improve", name: "IMPROVE Score", desc: "Nguy cơ VTE", url: "improve.html", icon: "fa-hospital-user", color: "fuchsia" },
            { id: "isth", name: "ISTH DIC", desc: "Chẩn đoán DIC", url: "isth-dic.html", icon: "fa-vials", color: "fuchsia" },
            { id: "khorana", name: "Khorana Score", desc: "Nguy cơ VTE hóa trị", url: "khorana.html", icon: "fa-pills", color: "fuchsia" },
            { id: "mascc", name: "MASCC", desc: "Sốt giảm bạch cầu hạt", url: "mascc.html", icon: "fa-temperature-high", color: "fuchsia" },
            { id: "padua", name: "PADUA Score", desc: "Nguy cơ VTE nội khoa", url: "padua.html", icon: "fa-list-check", color: "fuchsia" },
            { id: "plasmic", name: "PLASMIC Score", desc: "Chẩn đoán TTP", url: "plasmic.html", icon: "fa-dna", color: "fuchsia" },
            { id: "tpe", name: "Thay huyết tương", desc: "Thể tích TPE", url: "tpe.html", icon: "fa-recycle", color: "fuchsia" },
            { id: "trip-cast", name: "TRiP(cast)", desc: "Huyết khối sau bó bột", url: "trip-cast.html", icon: "fa-crutch", color: "fuchsia" },
            { id: "villalta", name: "Villalta Score", desc: "Hội chứng hậu huyết khối", url: "villalta.html", icon: "fa-socks", color: "fuchsia" },
        ]
    },
    {
        categoryTitle: "Nhi khoa",
        categoryIcon: "fa-baby",
        categoryColor: "orange",
        items: [
            { id: "apgar", name: "APGAR Score", desc: "Sức khỏe sơ sinh", url: "apgar.html", icon: "fa-baby-carriage", color: "orange" },
            { id: "humpty", name: "Humpty Dumpty", desc: "Nguy cơ té ngã trẻ em", url: "humpty-dumpty.html", icon: "fa-child-reaching", color: "orange" },

            { id: "pews", name: "PEWS / NEWS", desc: "Cảnh báo sớm nhi/sơ sinh (Vinmec)", url: "pews.html", icon: "fa-bell", color: "orange" },
            { id: "pas", name: "PAS Score", desc: "Viêm ruột thừa trẻ em", url: "pas.html", icon: "fa-bacteria", color: "orange" },
            { id: "pts", name: "PTS Score", desc: "Chấn thương trẻ em", url: "pts.html", icon: "fa-user-injured", color: "orange" },
            { id: "rumack", name: "Rumack-Matthew", desc: "Đồ thị ngộ độc Paracetamol", url: "rumack.html", icon: "fa-capsules", color: "orange" },
            { id: "sipa", name: "SIPA (Shock Index)", desc: "Chỉ số sốc nhi khoa", url: "sipa.html", icon: "fa-heart-crack", color: "orange" }
        ]
    },
    {
        categoryTitle: "Chấn thương & Ngoại khoa",
        categoryIcon: "fa-user-injured",
        categoryColor: "slate",
        items: [
            { id: "add-rs", name: "ADD-RS", desc: "Bóc tách động mạch chủ", url: "add-rs.html", icon: "fa-heart-crack", color: "slate" },
            { id: "asa", name: "ASA PSCS", desc: "Phân loại thể chất tiền phẫu", url: "asa.html", icon: "fa-notes-medical", color: "slate" },
            { id: "caprini", name: "Caprini Score", desc: "Nguy cơ VTE ngoại khoa", url: "caprini.html", icon: "fa-list-ol", color: "slate" },
            { id: "last", name: "LAST (Lipid Rescue)", desc: "Ngộ độc thuốc tê", url: "last-lipid.html", icon: "fa-syringe", color: "slate" },
            { id: "lrinec", name: "LRINEC Score", desc: "Viêm cân mạc hoại tử", url: "lrinec.html", icon: "fa-bacterium", color: "slate" },
            { id: "possum", name: "POSSUM", desc: "Tử vong phẫu thuật", url: "possum.html", icon: "fa-skull-crossbones", color: "slate" }
        ]
    },
    {
        categoryTitle: "Dược & Điều dưỡng",
        categoryIcon: "fa-user-nurse",
        categoryColor: "blue",
        items: [
            { id: "bacs", name: "BACS Score", desc: "Chảy máu do tiêu sợi huyết", url: "bacs.html", icon: "fa-droplet", color: "blue" },
            { id: "braden", name: "Braden Scale", desc: "Nguy cơ loét tỳ đè", url: "braden.html", icon: "fa-bed", color: "blue" },
            { id: "candida", name: "Candida Index", desc: "Nguy cơ nhiễm nấm", url: "candida.html", icon: "fa-fungi", color: "blue" },
            { id: "central-line", name: "Central Line Bundle", desc: "Ngừa nhiễm trùng huyết dòng", url: "central-line.html", icon: "fa-grip-lines-vertical", color: "blue" },
            { id: "charlson", name: "Charlson Index", desc: "Chỉ số bệnh nền", url: "charlson.html", icon: "fa-clipboard-list", color: "blue" },
            { id: "corticoid", name: "Chuyển liều Corticoid", desc: "So sánh hiệu lực", url: "doilieu-corticoid.html", icon: "fa-pills", color: "blue" },
            { id: "dirc", name: "DIRC", desc: "Chuyển đổi tốc độ truyền", url: "dirc.html", icon: "fa-calculator", color: "blue" },
            { id: "dem-giot", name: "Đếm giọt dịch truyền", desc: "Tính tốc độ giọt/phút", url: "dem-giot-dich-truyen.html", icon: "fa-droplet", color: "blue" },
            { id: "infusion", name: "Dịch truyền & Tốc độ", desc: "Tính thời gian/tốc độ", url: "tinh-toc-do-truyen.html", icon: "fa-clock", color: "blue" },
            { id: "thoi-gian-truyen", name: "Thời gian truyền dịch", desc: "Tính thời gian kết thúc", url: "tinh-thoi-gian-truyen-dich.html", icon: "fa-hourglass-end", color: "blue" },
            { id: "airway", name: "Đường thở khó", desc: "Checklist đánh giá", url: "duong-tho-kho.html", icon: "fa-lungs", color: "blue" },
            { id: "glucose", name: "Glucose Control", desc: "Kiểm soát đường huyết ICU", url: "glucose-control.html", icon: "fa-cube", color: "blue" },
            { id: "heparin", name: "Heparin Nomogram", desc: "Chỉnh liều Heparin", url: "heparin.html", icon: "fa-syringe", color: "blue" },
            { id: "antibiotic", name: "Kháng sinh & Virus", desc: "Tra cứu liều", url: "khang-sinh.html", icon: "fa-capsules", color: "blue" },
            { id: "mcmahon", name: "McMahon Score", desc: "Tiên lượng tiêu cơ vân", url: "mcmahon.html", icon: "fa-dumbbell", color: "blue" },
            { id: "morse", name: "Morse Scale", desc: "Nguy cơ ngã", url: "morse.html", icon: "fa-person-falling", color: "blue" },
            { id: "nahco3", name: "NaHCO3 Deficit", desc: "Bù kiềm toan chuyển hóa", url: "nahco3.html", icon: "fa-flask", color: "blue" },
            { id: "natri-corr", name: "Natri Correction", desc: "Hiệu chỉnh Na (Đường cao)", url: "natri-correction.html", icon: "fa-flask", color: "blue" },
            { id: "nrs-nut", name: "NRS 2002 / MNA", desc: "Sàng lọc dinh dưỡng", url: "nrs-nutrition.html", icon: "fa-apple-whole", color: "blue" },
            { id: "muscle", name: "Sức cơ (MRC)", desc: "Đánh giá thần kinh vận động", url: "suc-co.html", icon: "fa-hand-fist", color: "blue" },
            { id: "atropin", name: "Thang Atropin", desc: "Ngộ độc lân hữu cơ", url: "bang-diem-atropin.html", icon: "fa-eye-dropper", color: "blue" },
            { id: "pain-scale", name: "Thang đau (NPRS/VAS)", desc: "Đánh giá đau", url: "thang-dau.html", icon: "fa-face-frown", color: "blue" },
            { id: "drug-lookup", name: "Tra cứu thuốc", desc: "Danh mục thuốc & VTYT", url: "danh-muc-thuoc.html", icon: "fa-book-medical", color: "blue" },
            { id: "vancomycin", name: "Vancomycin Tools", desc: "AUC/MIC & TDM", url: "vancomycin.html", icon: "fa-bacterium", color: "blue" },
            { id: "wben", name: "WBEN", desc: "Nhu cầu năng lượng", url: "wben.html", icon: "fa-bolt", color: "blue" }
        ]
    },
    {
        categoryTitle: "Nội tiết & Tổng quát",
        categoryIcon: "fa-stethoscope",
        categoryColor: "green",
        items: [
            { id: "acr-tirads", name: "ACR TI-RADS 2017", desc: "Phân loại nhân giáp", url: "acr-tirads.html", icon: "fa-wave-square", color: "green" },
            { id: "ai-tirads", name: "AI TI-RADS 2019", desc: "Nhân giáp (AI)", url: "ai-tirads.html", icon: "fa-microchip", color: "green" },
            { id: "bmi", name: "BMI & BSA", desc: "Thể trạng & Diện tích da", url: "bmi.html", icon: "fa-weight-scale", color: "green" },

            { id: "karnofsky", name: "Karnofsky Score", desc: "Tình trạng hoạt động", url: "karnofsky.html", icon: "fa-person-walking", color: "green" }
        ]
    }
];

const toolsLibrary = window.toolsLibrary;

// --- UTILS ---
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

function createToolCard(tool) {
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
        
        <div class="w-14 h-14 flex-shrink-0 rounded-xl bg-gradient-to-br from-${tool.color}-50 to-${tool.color}-100 flex items-center justify-center text-${tool.color}-500 text-2xl shadow-inner group-hover:scale-110 transition-transform">
            <i class="fa-solid ${tool.icon}"></i>
        </div>
        
        <div class="overflow-hidden relative z-10 pr-6">
            <h4 class="font-semibold text-slate-700 text-base md:text-base truncate group-hover:text-${tool.color}-600 transition-colors">
                ${tool.name}
            </h4>
            <p class="text-sm md:text-xs text-slate-400 truncate mt-0.5">${tool.desc}</p>
        </div>
    </div>
    `;
}

function renderLibrary() {
    const container = document.getElementById('library-container');
    if (!container) return;

    let htmlContent = '';

    toolsLibrary.forEach((category, index) => {
        const itemsHtml = category.items.map(item => createToolCard(item)).join('');
        const delay = index * 50;

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

    if (window.loadFavorites && window.auth) {
        window.loadFavorites(window.auth.currentUser?.uid);
    }
}

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

document.addEventListener('DOMContentLoaded', () => {
    renderLibrary();
});