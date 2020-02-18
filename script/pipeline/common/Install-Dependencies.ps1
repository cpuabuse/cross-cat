#!/usr/bin/env pwsh
# To be run from a repository root

param([ValidateNotNullOrEmpty()][string]$FilePath = (Join-Path -Path "." -ChildPath "requirements.txt"))

npm install; if (-not $?) { throw }