#!/usr/bin/env pwsh
# Deploys github release

# Start-Pipeline
. $(Join-Path -Path $PSScriptRoot -ChildPath "common" "Start-Pipeline.ps1")

# Install-Dependencies
& $Paths.InstallDependencies

# Variables
[ValidateNotNullOrEmpty()][String]$PackageFilePath = "package.json"
[ValidateNotNullOrEmpty()][String]$PackageName = "cross-cat"
[ValidateNotNullOrEmpty()][String]$Version = (Get-Content -Path $PackageFilePath | ConvertFrom-Json).version; `
	[ValidateNotNullOrEmpty()][String]$Tag = "v$Version"; `
	[ValidateNotNullOrEmpty()][String]$Message = "$Tag of $PackageName released🚀

$PackageName is:
✅open source
✅cross platform
✅behaves exactly like #linux cat command
✅written natively in #typescript

changelog: https://github.com/cpuabuse/cross-cat/releases/tag/$Tag
#npm release: https://www.npmjs.com/package/cross-cat
https://github.com/cpuabuse/cross-cat"

# Tweet
node node_modules/chirpchirp/build/release/index.js send --message $Message

# Stop-Pipeline
& $Paths.StopPipeline