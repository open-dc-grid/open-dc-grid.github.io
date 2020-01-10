#!/bin/bash
#
# SPDX-License-Identifier: Apache-2.0
#
# Copyright (c) 2019 Martin Jäger
#
# This script deploys source branch commits to master root directory and other branches to
# sub-directory /branches/<branch-name>.
#
# Rendered branches can be accessed via https://dc-grid.github.io/branch/<branch-name>
#
# See here for documentation of Travis CI environment variables:
# https://docs.travis-ci.com/user/environment-variables/


# adjust link/directory settings in vuepress
if [ $TRAVIS_PULL_REQUEST != "false" ]; then
    printf "\nPreparing deployment for pull-request #$TRAVIS_PULL_REQUEST\n"
    sed -i -e "s/base: '\/'/base: '\/pr\/$TRAVIS_PULL_REQUEST\/'/g" docs/.vuepress/config.js
    sed -i -e "s^docsRepo: 'dc-grid/dc-grid.github.io'^docsRepo: '$TRAVIS_PULL_REQUEST_SLUG'^g" docs/.vuepress/config.js
    sed -i -e "s/docsBranch: 'source'/docsBranch: '$TRAVIS_BRANCH'/g" docs/.vuepress/config.js
elif [ $TRAVIS_BRANCH != "source" ]; then
    printf "\nPreparing deployment for branch $TRAVIS_BRANCH\n"
    sed -i -e "s/base: '\/'/base: '\/branch\/$TRAVIS_BRANCH\/'/g" docs/.vuepress/config.js
    sed -i -e "s/docsBranch: 'source'/docsBranch: '$TRAVIS_BRANCH'/g" docs/.vuepress/config.js
else
    printf "\nPreparing deployment for source\n"
fi

# build the website
npm run docs:build
printf "\n\n"

# get previous master deployment including all PR and branch folders
rm -rf master
git clone -b master https://github.com/dc-grid/dc-grid.github.io master

# compile folders correctly
if [ $TRAVIS_PULL_REQUEST != "false" ]; then
    mkdir -p master/pr
    rm -rf "master/pr/$TRAVIS_PULL_REQUEST"
    cp -r docs/.vuepress/dist "master/pr/$TRAVIS_PULL_REQUEST"
elif [ $TRAVIS_BRANCH != "source" ]; then
    mkdir -p master/branch
    rm -rf "master/branch/$TRAVIS_BRANCH"
    cp -r docs/.vuepress/dist "master/branch/$TRAVIS_BRANCH"
else
    if [ -d "master/branch" ]; then
        mv master/pr docs/.vuepress/dist/
        mv master/branch docs/.vuepress/dist/
    fi
    rm -rf master
    mv docs/.vuepress/dist master
fi

echo "Preparation and build done."

exit 0
