# Update => Build => Package => Install extension locally
# Also updates vsce

cls

Powershell -ExecutionPolicy Bypass -File $PSScriptRoot\package.ps1

Powershell -ExecutionPolicy Bypass -File $PSScriptRoot\install-local.ps1

Pause
cls