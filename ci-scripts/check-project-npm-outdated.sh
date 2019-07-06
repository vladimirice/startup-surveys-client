#!/bin/bash

echo "Let's check project - are any outdated packages"
output="$(npm outdated)"

if [[ -z "$output" ]]; then
echo "All packages are up to date"
else
    echo ERROR: There are a couple of outdated packages. 1>&2
    exit 1 # terminate and indicate error
fi
