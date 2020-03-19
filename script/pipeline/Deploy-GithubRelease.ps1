#!/usr/bin/env pwsh
# Deploys github release

# Start-Pipeline
. $(Join-Path -Path $PSScriptRoot -ChildPath "common" "Start-Pipeline.ps1")

# Install-Dependencies
& $Paths.InstallDependencies

# Variables
[ValidateNotNullOrEmpty()][String]$GithubOrganization = "cpuabuse"
[ValidateNotNullOrEmpty()][String]$GithubRepository = "cross-cat"
[ValidateNotNullOrEmpty()][String]$Version = (Get-Content -Path $PackageFilePath | ConvertFrom-Json).version; `
	[ValidateNotNullOrEmpty()][String]$Tag = "v$Version"; `
	[ValidateNotNullOrEmpty()][String]$Message = "Release: Next $Tag"

# Publish release
npx github-release upload --token $env:GITHUB_PAT --owner $GithubOrganization --repo $GithubRepository --tag $Tag --name $Tag --body $Message

# Stop-Pipeline
& $Paths.StopPipeline