#!/usr/bin/env pwsh
# Deploys github release

# Start-Pipeline
. $(Join-Path -Path $PSScriptRoot -ChildPath "common" "Start-Pipeline.ps1")

# Variables
[ValidateNotNullOrEmpty()][String]$GithubOrganization = "cpuabuse"
[ValidateNotNullOrEmpty()][String]$GithubRepository = "cross-cat"
[ValidateNotNullOrEmpty()][String]$PackageFilePath = "package.json"
[ValidateNotNullOrEmpty()][String]$RepoPushURL = "https://$($env:GITHUB_TOKEN)@github.com/cpuabuse/cross-cat"
[ValidateNotNullOrEmpty()][String]$UserName = "El Gato Bot"
[ValidateNotNullOrEmpty()][String]$UserEmail = "60073838+elgatobot@users.noreply.github.com"
[ValidateNotNullOrEmpty()][String]$Version = (Get-Content -Path $PackageFilePath | ConvertFrom-Json).version; `
	[ValidateNotNullOrEmpty()][String]$Tag = "v$Version"; `
	[ValidateNotNullOrEmpty()][String]$Message = "## Release: $Tag

$(git log --oneline --no-decorate release..HEAD | ForEach-Object -Process {"- " + $_} | Out-String; if (-not $?) { throw })
"

# Config git
git config user.name $UserName; if (-not $?) { throw }
git config user.email $UserEmail; if (-not $?) { throw }

# Publish release
go get github.com/aktau/github-release
github-release release --user $GithubOrganization --repo $GithubRepository --tag $Tag --name $Tag --description $Message; if (-not $?) { throw }

# Retag
git tag release --force; if (-not $?) { throw }
git push $RepoPushURL release --force; if (-not $?) { throw }

# Stop-Pipeline
& $Paths.StopPipeline