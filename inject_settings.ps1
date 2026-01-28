$files = Get-ChildItem -Path . -Filter "*.html"

foreach ($file in $files) {
    $content = Get-Content -Path $file.FullName -Raw -Encoding UTF8
    
    if ($content -match 'src="settings.js"') {
        Write-Host "Skipped (already injected): $($file.Name)"
        continue
    }

    if ($content -match '<head>') {
        $newContent = $content -replace '<head>', '<head>
    <script src="settings.js"></script>'
        Set-Content -Path $file.FullName -Value $newContent -Encoding UTF8
        Write-Host "Injected settings.js to: $($file.Name)"
    } else {
        Write-Host "No <head> tag found in: $($file.Name)"
    }
}
