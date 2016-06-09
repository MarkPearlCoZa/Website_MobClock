rm -rfd build
mkdir build
cp -r ./src/* ./build
rm -rfd build/js
babel src/js -d build/js

