#!/usr/bin/env pwsh

# Start-Pipeline
. $(Join-Path -Path $PSScriptRoot -ChildPath "common" "Start-Pipeline.ps1")

# Set vars
[ValidateNotNullOrEmpty()][String]$BuildPath = Join-Path -Path "build" -ChildPath "docs"
[ValidateNotNullOrEmpty()][String]$CommitMessage = "Change: Documentation"
[ValidateNotNullOrEmpty()][String]$DocsPath = "docs"
[ValidateNotNullOrEmpty()][String]$GitDirectory = ".git"
[ValidateNotNullOrEmpty()][String]$JekyllPath = Join-Path -Path "build" -ChildPath "docs" ".nojekyll"
[ValidateNotNullOrEmpty()][String]$PagesBranch = "gh-pages"
[ValidateNotNullOrEmpty()][String]$RepoPullURL = "https://github.com/cpuabuse/cross-cat"
[ValidateNotNullOrEmpty()][String]$RepoPushURL = "https://$($env:GITHUB_PAT)@github.com/cpuabuse/cross-cat"
[ValidateNotNullOrEmpty()][String]$UserName = "El Gato Bot"
[ValidateNotNullOrEmpty()][String]$UserEmail = "60073838+elgatobot@users.noreply.github.com"

# Install-Dependencies
& $Paths.InstallDependencies

# Create directory
New-Item -ItemType "Directory" -Path $DocsPath

# Set up git and undo commit
Push-Location -Path $DocsPath
git init; if (-not $?) { throw }
git config user.name $UserName; if (-not $?) { throw }
git config user.email $UserEmail; if (-not $?) { throw }
git remote add origin $RepoPullURL; if (-not $?) { throw }
git fetch
git checkout $PagesBranch
git reset --hard HEAD^; if (-not $?) { throw }
Pop-Location

# Remove all the files in case there is inconsistency
Get-ChildItem -Path $DocsPath -Exclude $GitDirectory | Remove-Item -Recurse

# Create docs
npm run build:docs; if (-not $?) { throw }

# Copy docs
Get-ChildItem -Path $BuildPath | Copy-Item -Destination $DocsPath -Recurse

# Fix jekyll
New-Item $JekyllPath -type file

# Git
Push-Location -Path $DocsPath
git add *; if (-not $?) { throw }
git commit --message $CommitMessage; if (-not $?) { throw }
git push --force $RepoPushURL; if (-not $?) { throw }
Pop-Location

# Stop-Pipeline
$Paths.StopPipeline