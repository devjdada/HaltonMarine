# make-deploy-zip.ps1
# Run from the HaltonMarine project root:
#   .\make-deploy-zip.ps1

$source = Get-Location
$dest = Join-Path (Split-Path $source -Parent) "HaltonMarine-deploy.zip"

if (Test-Path $dest) { Remove-Item $dest -Force }

Write-Host "📦 Building deployment zip..." -ForegroundColor Cyan
Write-Host "   Source: $source"
Write-Host "   Output: $dest"

$excludePatterns = @('node_modules', '.git', 'make-deploy-zip.ps1')

Get-ChildItem -Path $source -Recurse -Force -File |
    Where-Object {
        $rel = $_.FullName.Substring($source.Path.Length + 1)
        $skip = $false
        foreach ($p in $excludePatterns) {
            if ($rel -like "$p*" -or $rel -like "*\$p\*") {
                $skip = $true; break
            }
        }
        -not $skip
    } |
    Compress-Archive -DestinationPath $dest -Update

$size = [math]::Round((Get-Item $dest).Length / 1MB, 1)
Write-Host ""
Write-Host "✅ Done! HaltonMarine-deploy.zip created ($size MB)" -ForegroundColor Green
Write-Host "   Upload this zip to your cPanel public_html/ and extract it there."
