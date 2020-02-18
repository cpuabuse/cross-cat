#!/usr/bin/env bash
# To be run from a repository root

# Error if no argument provided
if [ -z "$1" ]
  then
    exit 1
fi

# Run an argument
eval $1

# Exit with last error code
exit $?