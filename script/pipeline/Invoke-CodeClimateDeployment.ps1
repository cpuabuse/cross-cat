#!/usr/bin/env pwsh
# Deploy Code Climate pipeline.
# Currently supports only Linux and Windows with WSL deployment.

# Start-Pipeline
. $(Join-Path -Path $PSScriptRoot -ChildPath "common" "Start-Pipeline.ps1" -Resolve)

# Executable name; Url location; Download reporter
[ValidateNotNullOrEmpty()][String]$ExecutablePath = Join-Path -Path "." -ChildPath "cc-test-reporter"
[ValidateNotNullOrEmpty()][String]$CodeClimateUrl = "https://codeclimate.com/downloads/test-reporter/test-reporter-latest-linux-amd64"
Invoke-WebRequest -Uri $CodeClimateUrl -OutFile $ExecutablePath
if (-not $IsWindows) {
	chmod +x $ExecutablePath
}

# Set WSL vars
$ExecutableBashPath = if ($IsWindows) { $ExecutablePath -replace '\\', '/' } else { $ExecutablePath }
$InstallDependencies = if ($IsWindows) { $Paths.InstallDependencies -replace '\\', '/' } else { $Paths.InstallDependencies }
$RequirementsPath = if ($IsWindows) { $Paths.RequirementsPath -replace '\\', '/' } else { $Paths.RequirementsPath }

# Invokes bash scripts
function Invoke-PipelineCommand {
	param([String[]]$Arguments)

	# Make sure we have what to call
	if ($Arguments.Count -eq 0) {
		throw
	}

	# Get effective argument
	[ValidateNotNullOrEmpty()][String]$EffectiveArgument = ($Arguments -join " ")

	if ($IsWindows) {
		& $Paths.InvokeBashWrapper -Argument $EffectiveArgument
	}
	else {
		# Call operator does not work for PS scripts, where the flag is a variable
		Invoke-Expression $EffectiveArgument
	}
}

# Install-Dependencies
Invoke-PipelineCommand -Arguments @($InstallDependencies, "-FilePath", $RequirementsPath)

# Code Climate prepare; Invoked using bash script as it bugs if run from the PS
& $Paths.InvokeBashWrapper -Argument "$ExecutableBashPath before-build"

# Run coverage and get lcov
Invoke-PipelineCommand -Arguments @("npm", "run", "coverage")

# Code Climate deploy; Invoked using bash script as it bugs if run from the PS
& $Paths.InvokeBashWrapper  -Argument "$ExecutableBashPath after-build --coverage-input-type lcov"

# Stop-Pipeline
& $Paths.StopPipeline