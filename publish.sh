./make.sh

git add :/
git commit -m "More"
git subtree push --prefix build origin gh-pages-temp
git push origin
