#!/usr/bin/env pwsh
# Deploys github release

# Start-Pipeline
. $(Join-Path -Path $PSScriptRoot -ChildPath "common" "Start-Pipeline.ps1")

# Install-Dependencies
& $Paths.InstallDependencies

# Variables
[ValidateNotNullOrEmpty()][String]$GithubOrganization = "cpuabuse"
[ValidateNotNullOrEmpty()][String]$GithubRepository = "cross-cat"
[ValidateNotNullOrEmpty()][String]$RepoPushURL = "https://$($env:GITHUB_PAT)@github.com/cpuabuse/cross-cat"
[ValidateNotNullOrEmpty()][String]$UserName = "El Gato Bot"
[ValidateNotNullOrEmpty()][String]$UserEmail = "60073838+elgatobot@users.noreply.github.com"
[ValidateNotNullOrEmpty()][String]$Version = (Get-Content -Path $PackageFilePath | ConvertFrom-Json).version; `
	[ValidateNotNullOrEmpty()][String]$Tag = "v$Version"; `
	[ValidateNotNullOrEmpty()][String]$Message = "Release: $Tag
	
	$(git log --oneline --no-decorate release..HEAD | Out-String; if (-not $?) { throw })
	"

# Config git
git config user.name $UserName; if (-not $?) { throw }
git config user.email $UserEmail; if (-not $?) { throw }

# Publish release
npx github-release upload --token $env:GITHUB_PAT --owner $GithubOrganization --repo $GithubRepository --tag $Tag --name $Tag --body $Message; if (-not $?) { throw }

# Retag
git tag release --force; if (-not $?) { throw }
git push $RepoPushURL release --force; if (-not $?) { throw }

# Stop-Pipeline
& $Paths.StopPipeline