#!/usr/bin/env pwsh

<#
	File: script\pipeline\Deploy-Docs.ps1
	Author: cpuabuse.com
	Description: Deploys to GitHub pages
#>

<#
	Initialize
#>

# Start-Pipeline
. $(Join-Path -Path $PSScriptRoot -ChildPath "common" "Start-Pipeline.ps1")

# Set vars
[ValidateNotNullOrEmpty()][String]$BuildPath = Join-Path -Path "build" -ChildPath "typedoc"
[ValidateNotNullOrEmpty()][String]$CommitMessage = "Publish: Documentation"
[ValidateNotNullOrEmpty()][String]$GitDirectory = ".git"
[ValidateNotNullOrEmpty()][String]$Here = "."
[ValidateNotNullOrEmpty()][String]$MasterBranch = "master"
[ValidateNotNullOrEmpty()][String]$PagesBranch = "gh-pages"
[ValidateNotNullOrEmpty()][String]$RepoPath = Join-Path -Path "build" -ChildPath "docs"; `
	[ValidateNotNullOrEmpty()][String]$JekyllPath = Join-Path -Path $RepoPath -ChildPath ".nojekyll"
[ValidateNotNullOrEmpty()][String]$RepoPullURL = "https://github.com/cpuabuse/cross-cat"
[ValidateNotNullOrEmpty()][String]$RepoPushURL = "https://$($env:GITHUB_PAT)@github.com/cpuabuse/cross-cat"
[ValidateNotNullOrEmpty()][String]$UserName = "El Gato Bot"
[ValidateNotNullOrEmpty()][String]$UserEmail = "60073838+elgatobot@users.noreply.github.com"

# Install-Dependencies
& $Paths.InstallDependencies

<#
	Prepare repository
#>

# Create directory
if (Test-Path -Path $RepoPath) {
	# Force for hidden files
	Remove-Item $RepoPath -Recurse -Force
}
New-Item -ItemType "Directory" -Path $RepoPath

# Go to repo
Push-Location -Path $RepoPath

# Init repo
git init; if (-not $?) { throw }

# Config git
git config user.name $UserName; if (-not $?) { throw }
git config user.email $UserEmail; if (-not $?) { throw }

# Create branch from dev
git remote add origin $RepoPullURL; if (-not $?) { throw }
git fetch; if (-not $?) { throw }
git checkout $MasterBranch; if (-not $?) { throw }
git checkout -b $PagesBranch; if (-not $?) { throw }

# Remove all the files in repository; Force to remove potential hidden files
Get-ChildItem -Path $Here -Exclude $GitDirectory -Force | Remove-Item -Recurse -Force

# Go back to root
Pop-Location

<#
	Build
#>

# Empty build directory; Force to remove potential hidden files
if ((Test-Path -Path $BuildPath)) {
	Get-ChildItem -Path $BuildPath -Exclude $GitDirectory -Force | Remove-Item -Recurse -Force
}

# Create docs
npm run build:docs; if (-not $?) { throw }

# Copy docs
Get-ChildItem -Path $BuildPath | Copy-Item -Destination $RepoPath -Recurse

# Fix jekyll; Value seems to be required
New-Item -Path $JekyllPath -Type "File" -Value ""

<#
	Push
#>

# Git
Push-Location -Path $RepoPath
git add --all
git commit --message $CommitMessage; if (-not $?) { throw }
git push --force $RepoPushURL; if (-not $?) { throw }
Pop-Location

# Stop-Pipeline
$Paths.StopPipeline