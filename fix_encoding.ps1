
$path = "dich-sxh.html"
$content = [System.IO.File]::ReadAllText($path, [System.Text.Encoding]::UTF8)

# Fix JS Links
$content = $content -replace 'src="app.core.js"', 'src="app.js"'
$content = $content -replace 'src="settings.core.js"', 'src="settings.js"'
$content = $content -replace '<title>.*?</title>', '<title>Phác đồ Sốt xuất huyết 2760 - Công Cụ Y Học</title>'

# Fix Mojibake (Regex) mainly for UI text
# "Ph?n" -> "Phân"
$content = $content -replace 'Ph\?n', 'Phân'
$content = $content -replace 'Ngu\?i l\?n', 'Người lớn'
$content = $content -replace 'Tr\? em', 'Trẻ em'
$content = $content -replace 'N\?', 'Nữ'  # Nam / N? -> Nam / Nữ
$content = $content -replace 'C\?n n\?ng', 'Cân nặng'
$content = $content -replace 'Chi\?u cao', 'Chiều cao'
$content = $content -replace 'Ph\?n d\?', 'Phân độ'
$content = $content -replace 'i\?u tr\?', 'Điều trị'
$content = $content -replace 'i\?u tr\? kh\?c', 'Điều trị khác'
$content = $content -replace 'S\?t xu\?t huy\?t', 'Sốt xuất huyết'
$content = $content -replace 'SXH DENGUE N\?NG', 'SXH DENGUE NẶNG'
$content = $content -replace 'S\?C N\?NG', 'SỐC NẶNG'
$content = $content -replace 'M\?T B\?', 'MẤT BÙ' # M?T B? -> MẤT BÙ
$content = $content -replace 'M\?ch', 'Mạch'
$content = $content -replace 'Huy\?t p', 'Huyết áp'
$content = $content -replace 'Huy\?t \?p', 'Huyết áp' # Variant
$content = $content -replace 'huy\?t p', 'huyết áp'
$content = $content -replace 'T\?i kh\?m', 'Tái khám' # T?i kh?m
$content = $content -replace 'c\?p', 'cấp' # T?i kh?m c?p ?
$content = $content -replace 'D\?u hi\?u', 'Dấu hiệu'
$content = $content -replace 's\?c', 'sốc'
$content = $content -replace 'c\?n b\?', 'còn bù'
$content = $content -replace 'nang', 'nặng' # Sometimes 'nang'
$content = $content -replace 'Suy t\?ng', 'Suy tạng'
$content = $content -replace 'D\?U HI\?U C\?NH B\?O', 'DẤU HIỆU CẢNH BÁO' 
$content = $content -replace 'au b\?ng', 'Đau bụng'
$content = $content -replace 'v\?ng gan', 'vùng gan'
$content = $content -replace 'N\?n', 'Nôn'
$content = $content -replace 'l\?n/1h', 'lần/1h' # >3 l?n/1h
$content = $content -replace 'XH ni\?m m\?c', 'XH niêm mạc'
$content = $content -replace 'Hct tang/TC gi\?m', 'Hct tăng/TC giảm'
$content = $content -replace 'V\?t v\?', 'Vật vã'
$content = $content -replace 'L\? d\?', 'Lừ đừ'
$content = $content -replace 'K\?T LU\?N PH\?N Đ\?', 'KẾT LUẬN PHÂN ĐỘ' # PH?N D? -> PHÂN ĐỘ (Check caps)
$content = $content -replace 'K\?T LU\?N', 'KẾT LUẬN'
$content = $content -replace 'PH\?N D\?', 'PHÂN ĐỘ'

# Recovering specific context in JS logic which is visible in cards
$content = $content -replace 'Truy\?n', 'Truyền'
$content = $content -replace 'd\?ch', 'dịch'
$content = $content -replace 'gi\?', 'giờ' # 1-2 gi?
$content = $content -replace 'Nh\?nh', 'Nhánh'
$content = $content -replace 'C\?i thi\?n', 'Cải thiện'
$content = $content -replace 'th\?t b\?i', 'thất bại'
$content = $content -replace 'b\?', 'bù' # b -> bù ?  usually maps to ù/à/etc
$content = $content -replace 'b', 'bù' # if char is present
$content = $content -replace 'ngung', 'ngưng'
$content = $content -replace 'Duy tr', 'Duy trì'
$content = $content -replace 'Khng', 'Không' 
$content = $content -replace 'Tang', 'Tăng' # Tang co bop -> Tang co bóp
$content = $content -replace 'co bp', 'co bóp'
$content = $content -replace 'Gi?m', 'Giảm'
$content = $content -replace 'i\?n gi\?i', 'Điện giải'
$content = $content -replace 'Ph ph\?i', 'Phù phổi'
$content = $content -replace 'Gian m\?ch', 'Giãn mạch'
$content = $content -replace 'Ngo\?i tr\?', 'Ngoại trú'
$content = $content -replace 'Theo doi', 'Theo dõi' # Theo doi dau hieu

# Write back
[System.IO.File]::WriteAllText($path, $content, [System.Text.Encoding]::UTF8)
Write-Host "Fixed encoding and links in $path"
