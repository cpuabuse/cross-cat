#!/usr/bin/env pwsh
# Deploys Codacy coverage.

# Start-Pipeline
. $(Join-Path -Path $PSScriptRoot -ChildPath "common" "Start-Pipeline.ps1")

[ValidateNotNullOrEmpty()][String]$Branch = "dev"
[ValidateNotNullOrEmpty()][String]$NPMRCValue = "//registry.npmjs.org/:_authToken=$($env:NPM_TOKEN)"
[ValidateNotNullOrEmpty()][String]$NPMRCPath = ".npmrc"
[ValidateNotNullOrEmpty()][String]$PackageFilePath = "package.json"
[ValidateNotNullOrEmpty()][String]$RepoPushURL = "https://$($env:GITHUB_PAT)@github.com/cpuabuse/cross-cat"
[ValidateNotNullOrEmpty()][String]$UserName = "El Gato Bot"
[ValidateNotNullOrEmpty()][String]$UserEmail = "60073838+elgatobot@users.noreply.github.com"
[ValidateNotNullOrEmpty()][String]$Tag = "v0.0.1"

# Config git
git config user.name $UserName; if (-not $?) { throw }
git config user.email $UserEmail; if (-not $?) { throw }

# Git checkout
git checkout $Branch

# Patch
npm version patch --no-git-tag-version; if (-not $?) { throw }
$Tag = "v$((Get-Content -Path $PackageFilePath | ConvertFrom-Json).version)"
git commit --all --message "Release: Next $Tag" --message "[ci skip]"
git tag $Tag

# Push
git push $RepoPushURL $Tag; if (-not $?) { throw }

# Replace NPM config
Add-Content -Path $NPMRCPath -Value $NPMRCValue

# Publish to NPM
npm publish --tag next; if (-not $?) { throw }

# Remove config with token, just in case
git reset HEAD --hard; if (-not $?) { throw }

# Stop-Pipeline
& $Paths.StopPipeline