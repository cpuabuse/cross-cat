#!/usr/bin/env pwsh
# Publish npm

# Start-Pipeline
. $(Join-Path -Path $PSScriptRoot -ChildPath "common" "Start-Pipeline.ps1")

[ValidateNotNullOrEmpty()][String]$Branch = "dev"
[ValidateNotNullOrEmpty()][String]$Message = "Release"
[ValidateNotNullOrEmpty()][String]$NPMRCValue = "//registry.npmjs.org/:_authToken=$($env:NPM_TOKEN)"
[ValidateNotNullOrEmpty()][String]$NPMRCPath = ".npmrc"
[bool]$Patch = $True
[ValidateNotNullOrEmpty()][String]$PatchLevel = "patch"
[ValidateNotNullOrEmpty()][String]$PackageFilePath = "package.json"
[ValidateNotNullOrEmpty()][String]$RepoPushURL = "https://$($env:GITHUB_PAT)@github.com/cpuabuse/cross-cat"
[ValidateNotNullOrEmpty()][String]$UserName = "El Gato Bot"
[ValidateNotNullOrEmpty()][String]$UserEmail = "60073838+elgatobot@users.noreply.github.com"
[ValidateNotNullOrEmpty()][String]$Version = (Get-Content -Path $PackageFilePath | ConvertFrom-Json).version; `
	[ValidateNotNullOrEmpty()][String]$Tag = "v$Version"

# Set patch level
if ($env:COMMIT_MESSAGE.Contains("[version minor]")) {
	$PatchLevel = "minor"
}
elseif ($env:COMMIT_MESSAGE.Contains("[version major]")) {
	$PatchLevel = "major"
}
elseif (-not $env:COMMIT_MESSAGE.Contains("[version patch]")) {
	$Patch = $False
}

if ($Patch) {
	# Config git
	git config user.name $UserName; if (-not $?) { throw }
	git config user.email $UserEmail; if (-not $?) { throw }

	# Git checkout
	git checkout $Branch

	# Patch, commit and tag
	npm version patch --no-git-tag-version; if (-not $?) { throw }
	$Version = (Get-Content -Path $PackageFilePath | ConvertFrom-Json).version
	$Tag = "v$Version"
	$Message = "Release: Next $Tag"
	git commit --all --message $Message; if (-not $?) { throw }
	git tag $Tag --message $Message; if (-not $?) { throw }

	# Push
	git push $RepoPushURL; if (-not $?) { throw }
	git push $RepoPushURL $Tag; if (-not $?) { throw }

	# Install-Dependencies
	& $Paths.InstallDependencies

	# Run build
	npm run build; if (-not $?) { throw }

	# Replace NPM config
	Add-Content -Path $NPMRCPath -Value $NPMRCValue

	# Publish to NPM
	npm publish --tag next; if (-not $?) { throw }

	# Remove config with token, just in case
	git reset HEAD --hard; if (-not $?) { throw }
}

# Stop-Pipeline
& $Paths.StopPipeline