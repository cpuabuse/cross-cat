[![Build](https://img.shields.io/azure-devops/build/cpuabuse/214fb8e6-083e-4136-b3fb-a012127b24f0/1?logo=azure-pipelines)](https://dev.azure.com/cpuabuse/cross-cat)
[![Tests](https://img.shields.io/azure-devops/tests/cpuabuse/214fb8e6-083e-4136-b3fb-a012127b24f0/1?logo=azure-pipelines)](https://dev.azure.com/cpuabuse/cross-cat)
[![Code quality](https://img.shields.io/codacy/grade/05e07171ea0748d8b530a59ff4264492?logo=codacy)](https://app.codacy.com/gh/cpuabuse/cross-cat)
[![Coverage](https://img.shields.io/codacy/coverage/05e07171ea0748d8b530a59ff4264492?logo=codacy)](https://app.codacy.com/gh/cpuabuse/cross-cat)
[![Release date](https://img.shields.io/github/release-date/cpuabuse/cross-cat?logo=github)](https://github.com/cpuabuse/cross-cat/releases)
[![Docs](https://img.shields.io/badge/docs-gh--pages-informationa?logo=github)](https://cpuabuse.github.io/cross-cat)
[![License](https://img.shields.io/github/license/cpuabuse/cross-cat?logo=github)](https://choosealicense.com/licenses/isc/)
[![Testing](https://img.shields.io/badge/testing-mocha-informational?logo=mocha)](https://mochajs.org)
[![Node](https://img.shields.io/node/v/cross-cat?logo=node.js)](https://www.npmjs.com/package/cross-cat)
[![NPM](https://img.shields.io/npm/v/cross-cat?logo=npm)](https://www.npmjs.com/package/cross-cat)
[![Minified size](https://img.shields.io/bundlephobia/min/cross-cat?logo=npm)](https://www.npmjs.com/package/cross-cat)
[![Style](https://img.shields.io/badge/style-prettier-informational?logo=prettier)](https://prettier.io)
[![Chat](https://img.shields.io/badge/chat-slack-informational?logo=slack)](https://join.slack.com/t/cpuabuse/shared_invite/enQtNjYzMjQ4NjY1MTUzLTZjMTY1M2NiYmZkNzBjMzI0YTQ4OGVjZDA1ODJkNjFiNDU1NDQwYjViMjBjODA1Y2Y4ZjNiYmUzODA2YWI3NDM)
[![Twitter](https://img.shields.io/badge/twitter-cpuabuse-informational?logo=twitter)](https://twitter.com/cpuabuse)
[![commander](https://img.shields.io/npm/dependency-version/cross-cat/commander?logo=npm)](https://www.npmjs.com/package/commander)
[![get-stdin](https://img.shields.io/npm/dependency-version/cross-cat/get-stdin?logo=npm)](https://www.npmjs.com/package/get-stdin)

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

| Command                    | Explanation                                                                                                         |
| -------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| `cross-cat <filename>`     | For example, in case of PowerShell, ensure that this module is run instead of `cat` built-in alias to `Get-Content` |
| `npx cross-cat <filename>` | To run without installation                                                                                         |
| `cross-cat --help`         | To get all the available options                                                                                    |

### Escaping spaces in `package.json` scripts

```json
"scripts": {
	"show:awesome": "cross-cat \"/awesome folder/awesome filename\""
}
```

### Spaces and npx

Currently runs **via npx** of **locally** installed package cannot process filenames with spaces correctly due to npm behavior. Workaround:

```bash
node node_modules/cross-cat/src/cross-cat.js <filename>
```

#### Spaces support

`+`
: Working

`=`
: Non applicable

`-`
: Not working (workaround above)

| Command used                | Global | Local | Not installed |
| --------------------------- | ------ | ----- | ------------- |
| cat                         | +      | =     | =             |
| cat (from script)           | +      | +     | =             |
| cross-cat                   | +      | =     | =             |
| cross-cat (from script)     | +      | +     | =             |
| npx cross-cat               | -      | -     | +             |
| npx cross-cat (from script) | -      | -     | +             |
| node cross-cat.js           | +      | +     | =             |
