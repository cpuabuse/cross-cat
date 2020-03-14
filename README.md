**Azure Pipelines**

[![Azure DevOps builds](https://img.shields.io/azure-devops/build/cpuabuse/214fb8e6-083e-4136-b3fb-a012127b24f0/1)](https://dev.azure.com/cpuabuse/cross-cat)
[![Azure DevOps tests](https://img.shields.io/azure-devops/tests/cpuabuse/214fb8e6-083e-4136-b3fb-a012127b24f0/1)](https://dev.azure.com/cpuabuse/cross-cat)
[![Azure DevOps coverage](https://img.shields.io/azure-devops/coverage/cpuabuse/214fb8e6-083e-4136-b3fb-a012127b24f0/1)](https://dev.azure.com/cpuabuse/cross-cat)

**Codacy**

[![Codacy coverage](https://img.shields.io/codacy/coverage/c77a1061cb3446f6b9762c811b76341c)](https://app.codacy.com/gh/cpuabuse/cross-cat)
[![Codacy grade](https://img.shields.io/codacy/grade/c77a1061cb3446f6b9762c811b76341c)](https://app.codacy.com/gh/cpuabuse/cross-cat)

**Github**

[![Documentation](https://img.shields.io/badge/docs-gh--pages-informational)](https://cpuabuse.github.io/cross-cat/)

**NPM**

[![npm](https://img.shields.io/npm/v/cross-cat)](https://www.npmjs.com/package/cross-cat)
[![npm bundle size](https://img.shields.io/bundlephobia/min/cross-cat)](https://www.npmjs.com/package/cross-cat)
[![node](https://img.shields.io/node/v/cross-cat)](https://www.npmjs.com/package/cross-cat)
[![npm](https://img.shields.io/npm/dw/cross-cat)](https://www.npmjs.com/package/cross-cat)

# cross-cat

Cross-platform cat command.

## About

A JavaScript package, behaving exactly as Linux [cat](https://www.gnu.org/software/coreutils/cat) command, supporting all the options such as line numbering.
Written in TypeScript natively.


## Prerequisites

- [Node.js version 10 or higher](https://nodejs.org/en/download/)

## Installation

```bash
npm install cross-cat --global
```

## Usage

```bash
cat <filename>
```

### Example

```bash
cat my_awesome_file.txt
```

## Advanced usage

Command | Explanation
--- | ---
`cross-cat <filename>` | For example, in case of PowerShell, ensure that this module is run instead of `cat` built-in alias to `Get-Content`
`npx cross-cat <filename>` | To run without installation, although npm information would be displayed as well
`cat --help` | To get all the available options