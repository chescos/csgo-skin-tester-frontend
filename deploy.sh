#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd dist

# we are deploying to a custom domain
echo 'csgoskins.gg' > CNAME

git init
git add -A
git commit -m 'deploy'

# we are deploying to https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:chescos/csgo-skin-tester-frontend.git master:gh-pages

cd -
