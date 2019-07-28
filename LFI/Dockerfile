FROM nimmis/apache-php5

MAINTAINER SemaphoreCI <dev@semaphoreci.com>

COPY 000-default.conf /etc/apache2/sites-available/000-default.conf

EXPOSE 80
RUN mkdir /var/www/public
COPY src/. /var/www/public/


CMD ["/usr/sbin/apache2ctl", "-D", "FOREGROUND"]
