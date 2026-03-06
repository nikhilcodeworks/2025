$root = "c:\Users\nikhi\github"
Get-ChildItem -Path $root -Recurse -Include README.md,readme.md -File | ForEach-Object {
    $path = $_.FullName
    try {
        $content = Get-Content -Raw -Encoding UTF8 -LiteralPath $path
    } catch {
        $content = Get-Content -Raw -LiteralPath $path
    }
    if ($content -notmatch 'Last updated:') {
        $header = "<!-- Auto-updated README -->`n_Last updated: 2026-03-06_`n`n"
        $new = $header + $content
        Set-Content -Path $path -Value $new -Encoding UTF8
        Write-Output "Updated: $path"
    } else {
        Write-Output "Skipped (already updated): $path"
    }
}