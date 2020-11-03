#!/bin/bash
set -e
export NODE_ENV=production

echo "Node `node -v`"
echo "NPM v`npm -v`"

printf "\n\e[92m[*] Clean ./dist directory\e[0m\n"
rm -rf ./dist && echo "Done"

printf "\n\e[92m[*] Build w/ webpack\e[0m\n"
./node_modules/.bin/webpack --mode production --config scripts/webpack/webpack.prod.js --color -p --hide-modules --display-optimization-bailout
