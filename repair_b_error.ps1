
$path = "dich-sxh.html"
$content = [System.IO.File]::ReadAllText($path, [System.Text.Encoding]::UTF8)

# Revert broken 'b'
# First, revert ALL 'bù' to 'b'. This fixes code keywords like body, background, button, etc.
$content = $content -replace 'bù', 'b'

# Now restore specific Vietnamese terms that SHOULD be 'bù'
$content = $content -replace 'còn b ', 'còn bù '
$content = $content -replace 'còn b\.', 'còn bù.'
$content = $content -replace 'còn b,', 'còn bù,'
$content = $content -replace 'còn b<', 'còn bù<' # e.g. < .. >

$content = $content -replace 'Mất b ', 'Mất bù '
$content = $content -replace 'Mất b\.', 'Mất bù.'
$content = $content -replace 'Mất b<', 'Mất bù<'

$content = $content -replace 'b dịch', 'bù dịch'
$content = $content -replace 'b điện giải', 'bù điện giải'
$content = $content -replace 'b nước', 'bù nước'
$content = $content -replace 'b hoàn', 'bù hoàn'
$content = $content -replace 'b lại', 'bù lại'
$content = $content -replace 'B dịch', 'Bù dịch'
$content = $content -replace 'B điện giải', 'Bù điện giải'

# Also check for 'thất bại' if it was affected?
# 'th\?t b\?i' -> 'thất bại'. 'b' in 'bại' is 'b'. My bad regex was 'b' -> 'bù'.
# So 'thất bại' became 'thất bùại'.
# So replacing 'bù' -> 'b' fixes 'thất bùại' -> 'thất bại'. Correct.

# Write back
[System.IO.File]::WriteAllText($path, $content, [System.Text.Encoding]::UTF8)
Write-Host "Repaired 'b' error in $path"
