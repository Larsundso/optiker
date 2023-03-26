while [ true ]
do
node --trace-deprecation --trace-warnings --max-old-space-size=8192 ./dist/index.js
sleep 0s
done
exit