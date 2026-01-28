
$toolsDataPath = "tools-data.js"
# Force UTF8 when reading
$toolsContent = Get-Content $toolsDataPath -Raw -Encoding UTF8

# Extract tools using Regex
$pattern = 'id:\s*"(?<id>[^"]+)",\s*name:\s*"(?<name>[^"]+)",\s*desc:\s*"(?<desc>[^"]+)",\s*url:\s*"(?<url>[^"]+)"'
$matches = [regex]::Matches($toolsContent, $pattern)

$updatedCount = 0

foreach ($match in $matches) {
    $url = $match.Groups['url'].Value
    $name = $match.Groups['name'].Value
    $desc = $match.Groups['desc'].Value
    
    # Process description for better flow (lowercase first letter if it's not a proper noun/acronym, simplistic check)
    # Actually, most descriptions start with a verb or noun phrase, safe to keep as is or just use. 
    # Let's keep it as is to allow proper nouns to stay capitalized.
    
    if (Test-Path $url) {
        $fileContent = Get-Content $url -Raw -Encoding UTF8
        
        # Check if it's a placeholder file by looking for the generic text we inserted earlier
        if ($fileContent -match "Công cụ này đang được cập nhật. Vui lòng quay lại sau!") {
            
            # Construct custom message
            # "Công cụ [Name] hỗ trợ [Desc]. Chúng tôi đang hoàn thiện..."
            $customMsg = "Công cụ <strong>$name</strong> giúp <strong>$desc</strong>.<br>Chúng tôi đang xây dựng các thuật toán lâm sàng chính xác cho tính năng này."
            
            # Regex Replace
            # Note: We replace the paragraph and potentially adjust the width class for better readability
            $patternRegex = '<p class="text-slate-500 max-w-md">.*?</p>'
            $replacement = "<p class=""text-slate-500 max-w-lg"">$customMsg</p>"
            
            $newContent = [regex]::Replace($fileContent, $patternRegex, $replacement)
            
            if ($newContent -ne $fileContent) {
                Set-Content -Path $url -Value $newContent -Encoding UTF8
                Write-Host "Customized content for: $url"
                $updatedCount++
            }
        }
    }
}

Write-Host "Total customized files: $updatedCount"
