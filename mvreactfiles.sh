#!/bin/bash

rm -rf ./src/main/resources/templates/*
rm -rf ./src/main/resources/static/*
#mkdir ./src/main/resources/static/page
mv ./connectionreactfrontend/build/index.html ./src/main/resources/templates
mv ./connectionreactfrontend/build/* ./src/main/resources/static/
