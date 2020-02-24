#!/usr/bin/env pwsh

# Start-Pipeline
. $(Join-Path -Path $PSScriptRoot -ChildPath "common" "Start-Pipeline.ps1")

# Install-Dependencies
& $Paths.InstallDependencies

# Test
npm run test:js:mocha; if (-not $?) { throw }
npm run test:ts:mocha; if (-not $?) { throw }

# Stop-Pipeline
$Paths.StopPipeline