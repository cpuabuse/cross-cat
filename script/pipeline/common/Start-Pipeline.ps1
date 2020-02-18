#!/usr/bin/env pwsh
# File is to be dot-sourced

if ($null -eq (Get-Variable -Name "StartPipeline" -Scope "Script" -ErrorAction "Ignore")) {
	# Guard
	New-Variable -Name "StartPipeline" -Scope "Script"

	# Set the error action
	$script:ErrorActionPreferenceOriginal = $ErrorActionPreference
	$ErrorActionPreference = "Stop"

	# Change path to repo root
	Push-Location -Path $(Join-Path -Path $PSScriptRoot -ChildPath ".." ".." "..")

	# Create paths hashtable
	[ValidateNotNull()][hashtable]$script:Paths += @{
		InvokeBashWrapper   = Join-Path -Path "script" -ChildPath "pipeline" "common" "Invoke-BashWrapper.ps1";
		BashWrapper         = Join-Path -Path "script" -ChildPath "pipeline" "common" "bash_wrapper.sh";
		InstallDependencies = Join-Path -Path "script" -ChildPath "pipeline" "common" "Install-Dependencies.ps1";
		StopPipeline        = Join-Path -Path "script" -ChildPath "pipeline" "common" "Stop-Pipeline.ps1";
		RequirementsPath    = Join-Path -Path "requirements" -ChildPath "dev.txt"
	}
}