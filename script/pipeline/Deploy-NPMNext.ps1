#!/usr/bin/env pwsh
# Deploys Codacy coverage.

# Start-Pipeline
. $(Join-Path -Path $PSScriptRoot -ChildPath "common" "Start-Pipeline.ps1")

[ValidateNotNullOrEmpty()][String]$NPMRCValue = "//registry.npmjs.org/:_authToken=$env:NPM_TOKEN"
[ValidateNotNullOrEmpty()][String]$NPMRCPath = ".npmrc"

# Patch and push
npm version patch --no-git-tag-version --message "Release: Next v%s [ci skip]"; if (-not $?) { throw }
git push; if (-not $?) { throw }

# Replace NPM config
Add-Content -Path $NPMRCPath -Value $NPMRCValue

# Publish to NPM
npm publish --tag next; if (-not $?) { throw }

# Remove config with token, just in case
git reset HEAD --hard

# Stop-Pipeline
& $Paths.StopPipeline