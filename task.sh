#!/bin/sh
npm run build;
cp /var/www/react-app/dist/base.html.twig /var/www/my-project/app/Resources/views/base.html.twig;
cp -ufr /var/www/react-app/dist/bundles/app/* /var/www/my-project/src/AppBundle/Resources/public;
cd /var/www/my-project;
php bin/console assets:install;
php bin/console cache:clear --env=prod --no-debug;
rm -rf var/cache/prod;
 