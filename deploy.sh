# #!/bin/bash

rm -rf public/*
yarn build
cd public && git add --all && git commit -m "Publishing"
git push origin master
cd ..