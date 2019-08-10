# My Personal Website

### That is my personal website that I decide to create with node js




# Deploy app and configure it with Ngnix instruction

## 1.Install NGINX
```shell
sudo apt-get install nginx
```
## 2.Move your website to this folder
```
/var/www
```

## 3.Go to website folder and run this 
```shell
npm install
```

## 4.Install PM2
```shell
npm install pm2 -g
```

## 5.Run project with PM2
```shell
pm2 start app.js

```

## 6.Make PM2 to start at boot
```shell
pm2 startup
pm2 save
sudo reboot
```

## 7.Create configuration  file in `/etc/nginx/sites-available`
```shell
cd /etc/nginx/site-available
touch yourdomain.com
```

then open file with this command :

```shell
sudo nano yourdomain.com
```

and add the following text to it :

```shell
server {
  listen 80 default_server;
  listen [::]:80 default_server;
  server_name yourdomain.com www.yourdomain.com;
  root /var/www/yourdomain.com/public;
  location / {
    proxy_pass http://localhost:3000;
    try_files $uri $uri/ =404;
  }
   gzip on;
   gzip_types application/javascript image/* text/css;
   gunzip on;
   location ~* \.(jpg|jpeg|png|gif|ico)$ {
       expires 30d;
    }
    location ~* \.(css|js)$ {
       expires 3d;
    }
}
```

## 8.Add config file to `/etc/nginx/sites-enable` 

```shell
ln -s <SOURCE_FILE> <DESTINATION_FILE>
```

example :
```shell
ln -s /etc/nginx/sites-available/yourdomain.com /etc/nginx/sites-enabled/yourdomain.com
```

## 9.And then restart nginx
```shell
sudo systemctl restart nginx
```

## Well done,now everything should be OK!