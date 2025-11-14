# build files
npm run docs:build

# copy files
ROOT=/var/www/zappool.org
cp -R .vitepress/dist/* $ROOT

# copy nostr.json
mkdir -p $ROOT/.well-known
cp well-known/nostr.json $ROOT/.well-known

ls -alt /var/www/zappool.org
systemctl restart nginx
