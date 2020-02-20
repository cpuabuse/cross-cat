#!/usr/bin/env pwsh
# Deploys Codacy coverage.

# Start-Pipeline
. $(Join-Path -Path $PSScriptRoot -ChildPath "common" "Start-Pipeline.ps1")

# Publish to NPM
npm publish --tag next

# Stop-Pipeline
& $Paths.StopPipeline