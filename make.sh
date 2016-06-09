rm -rfd build
mkdir build
cp -r ./src/* ./build
rm -rfd build/js
babel src/js -d build/js

git add :/
git commit -m "More"
git subtree push --prefix build origin gh-pages-temp
git push origin
