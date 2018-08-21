# Update => Build => Package => Install extension locally
# Also updates vsce
Clear-Host
Powershell -ExecutionPolicy Bypass -File $PSScriptRoot\package.ps1
Powershell -ExecutionPolicy Bypass -File $PSScriptRoot\install-local.ps1
Pause