This repository contains static assets for `symfony-tr.com`.It must be aliased / symlinked with following Nginx configuration directive:

    location /assets {
        alias /var/www/symfony-tr.com/private/assets/;
    }
