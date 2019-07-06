#!/bin/bash

echo "Let's check project by code climate"
output="$(codeclimate analyze /src)"

if echo "$output" | grep "[1-9]."; then
    echo ERROR: There are codeclimate warnings 1>&2
    exit 1 # terminate and indicate error
fi
