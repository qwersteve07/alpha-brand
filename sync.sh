echo 'start to sync to server...'

rsync -avhzr -e 'ssh -p 18765 -o UserKnownHostsFile=./null -o StrictHostKeyChecking=no' ./out/ u290-kv7ntqfmf0cj@alphabrand.tw:/home/u290-kv7ntqfmf0cj/www/alphabrand.tw/public_html/

echo 'sync complete!'