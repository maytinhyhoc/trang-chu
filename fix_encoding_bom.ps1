
$path = "dich-sxh.html"
$content = [System.IO.File]::ReadAllText($path, [System.Text.Encoding]::UTF8)

# Fix JS Links
$content = $content -replace 'src="app.core.js"', 'src="app.js"'
$content = $content -replace 'src="settings.core.js"', 'src="settings.js"'
$content = $content -replace '<title>.*?</title>', '<title>PhÃ¡c Ä‘á»“ Sá»‘t xuáº¥t huyáº¿t 2760 - CÃ´ng Cá»¥ Y Há»c</title>'

# Fix Mojibake (Regex) mainly for UI text
# "Ph?n" -> "PhÃ¢n"
$content = $content -replace 'Ph\?n', 'PhÃ¢n'
$content = $content -replace 'Ngu\?i l\?n', 'NgÆ°á»i lá»›n'
$content = $content -replace 'Tr\? em', 'Tráº» em'
$content = $content -replace 'N\?', 'Ná»¯'  # Nam / N? -> Nam / Ná»¯
$content = $content -replace 'C\?n n\?ng', 'CÃ¢n náº·ng'
$content = $content -replace 'Chi\?u cao', 'Chiá»u cao'
$content = $content -replace 'Ph\?n d\?', 'PhÃ¢n Ä‘á»™'
$content = $content -replace 'i\?u tr\?', 'Äiá»u trá»‹'
$content = $content -replace 'i\?u tr\? kh\?c', 'Äiá»u trá»‹ khÃ¡c'
$content = $content -replace 'S\?t xu\?t huy\?t', 'Sá»‘t xuáº¥t huyáº¿t'
$content = $content -replace 'SXH DENGUE N\?NG', 'SXH DENGUE Náº¶NG'
$content = $content -replace 'S\?C N\?NG', 'Sá»C Náº¶NG'
$content = $content -replace 'M\?T B\?', 'Máº¤T BÃ™' # M?T B? -> Máº¤T BÃ™
$content = $content -replace 'M\?ch', 'Máº¡ch'
$content = $content -replace 'Huy\?t p', 'Huyáº¿t Ã¡p'
$content = $content -replace 'Huy\?t \?p', 'Huyáº¿t Ã¡p' # Variant
$content = $content -replace 'huy\?t p', 'huyáº¿t Ã¡p'
$content = $content -replace 'T\?i kh\?m', 'TÃ¡i khÃ¡m' # T?i kh?m
$content = $content -replace 'c\?p', 'cáº¥p' # T?i kh?m c?p ?
$content = $content -replace 'D\?u hi\?u', 'Dáº¥u hiá»‡u'
$content = $content -replace 's\?c', 'sá»‘c'
$content = $content -replace 'c\?n b\?', 'cÃ²n bÃ¹'
$content = $content -replace 'nang', 'náº·ng' # Sometimes 'nang'
$content = $content -replace 'Suy t\?ng', 'Suy táº¡ng'
$content = $content -replace 'D\?U HI\?U C\?NH B\?O', 'Dáº¤U HIá»†U Cáº¢NH BÃO' 
$content = $content -replace 'au b\?ng', 'Äau bá»¥ng'
$content = $content -replace 'v\?ng gan', 'vÃ¹ng gan'
$content = $content -replace 'N\?n', 'NÃ´n'
$content = $content -replace 'l\?n/1h', 'láº§n/1h' # >3 l?n/1h
$content = $content -replace 'XH ni\?m m\?c', 'XH niÃªm máº¡c'
$content = $content -replace 'Hct tang/TC gi\?m', 'Hct tÄƒng/TC giáº£m'
$content = $content -replace 'V\?t v\?', 'Váº­t vÃ£'
$content = $content -replace 'L\? d\?', 'Lá»« Ä‘á»«'
$content = $content -replace 'K\?T LU\?N PH\?N Ä\?', 'Káº¾T LUáº¬N PHÃ‚N Äá»˜' # PH?N D? -> PHÃ‚N Äá»˜ (Check caps)
$content = $content -replace 'K\?T LU\?N', 'Káº¾T LUáº¬N'
$content = $content -replace 'PH\?N D\?', 'PHÃ‚N Äá»˜'

# Recovering specific context in JS logic which is visible in cards
$content = $content -replace 'Truy\?n', 'Truyá»n'
$content = $content -replace 'd\?ch', 'dá»‹ch'
$content = $content -replace 'gi\?', 'giá»' # 1-2 gi?
$content = $content -replace 'Nh\?nh', 'NhÃ¡nh'
$content = $content -replace 'C\?i thi\?n', 'Cáº£i thiá»‡n'
$content = $content -replace 'th\?t b\?i', 'tháº¥t báº¡i'
$content = $content -replace 'b\?', 'bÃ¹' # b -> bÃ¹ ?  usually maps to Ã¹/Ã /etc
$content = $content -replace 'b', 'bÃ¹' # if char is present
$content = $content -replace 'ngung', 'ngÆ°ng'
$content = $content -replace 'Duy tr', 'Duy trÃ¬'
$content = $content -replace 'Khng', 'KhÃ´ng' 
$content = $content -replace 'Tang', 'TÄƒng' # Tang co bop -> Tang co bÃ³p
$content = $content -replace 'co bp', 'co bÃ³p'
$content = $content -replace 'Gi?m', 'Giáº£m'
$content = $content -replace 'i\?n gi\?i', 'Äiá»‡n giáº£i'
$content = $content -replace 'Ph ph\?i', 'PhÃ¹ phá»•i'
$content = $content -replace 'Gian m\?ch', 'GiÃ£n máº¡ch'
$content = $content -replace 'Ngo\?i tr\?', 'Ngoáº¡i trÃº'
$content = $content -replace 'Theo doi', 'Theo dÃµi' # Theo doi dau hieu

# Write back
[System.IO.File]::WriteAllText($path, $content, [System.Text.Encoding]::UTF8)
Write-Host "Fixed encoding and links in $path"
