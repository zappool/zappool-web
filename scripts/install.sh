npm run docs:build
cp -R .vitepress/dist/* /var/www/zappool.org
ls -alt /var/www/zappool.org
systemctl restart nginx
