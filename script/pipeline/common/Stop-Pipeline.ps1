#!/usr/bin/env pwsh
# File is to be dot-sourced

if ($null -ne (Get-Variable -Name "StartPipeline" -Scope "Script" -ErrorAction "Ignore")) {
	# Revert error action
	$ErrorActionPreference = $script:ErrorActionPreferenceOriginal
	Remove-Variable -Name "ErrorActionPreferenceOriginal" -Scope "Script"

	# Remove Paths var
	Remove-Variable -Name "Paths" -Scope "Script"
	
	# Return location
	Pop-Location

	# Guard
	Remove-Variable -Name "StartPipeline" -Scope "Script"
}