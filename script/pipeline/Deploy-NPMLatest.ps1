#!/usr/bin/env pwsh
# Sets npm tag

# Start-Pipeline
. $(Join-Path -Path $PSScriptRoot -ChildPath "common" "Start-Pipeline.ps1")

[ValidateNotNullOrEmpty()][String]$NPMRCValue = "//registry.npmjs.org/:_authToken=$($env:NPM_TOKEN)"
[ValidateNotNullOrEmpty()][String]$NPMRCPath = ".npmrc"
[ValidateNotNullOrEmpty()][String]$PackageFilePath = "package.json"
[ValidateNotNullOrEmpty()][String]$PackageName = "cross-cat"
[ValidateNotNullOrEmpty()][String]$Version = (Get-Content -Path $PackageFilePath | ConvertFrom-Json).version; `
	[ValidateNotNullOrEmpty()][String]$Tag = "v$Version"

# Set current version as latest
npm dist-tag add "$($PackageName)@$($Version)" latest

# Stop-Pipeline
& $Paths.StopPipeline