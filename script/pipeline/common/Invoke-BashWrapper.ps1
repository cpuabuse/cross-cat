#!/usr/bin/env pwsh
# Take a parameter
param([String]$Argument)

# Set WSL vars
$BashWrapper = if ($IsWindows) { $Paths.BashWrapper -replace '\\', '/' } else { $Paths.BashWrapper }

# Intermediately assign to validated variables
[ValidateNotNullOrEmpty()][string]$EffectiveArgument = $Argument

# Call bash; Interactive option for connecting streams to console and reading .bashrc
bash -l $BashWrapper $EffectiveArgument; if (-not $?) { throw }