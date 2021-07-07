cd images\photos
ls *.jpg | grep -v '^min_' | xargs -i echo "AddPhoto('{}');" > ..\..\script\photos.js
cd ../..
