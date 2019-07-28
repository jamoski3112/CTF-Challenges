FROM debian:jessie
MAINTAINER Tomas Jasek<tomsik68 (at) gmail (dot) com>

ENV DEBIAN_FRONTEND noninteractive
RUN apt-get update --fix-missing

# curl is needed to download the xampp installer, net-tools provides netstat command for xampp
RUN apt-get -y install curl net-tools

RUN curl -o xampp-linux-installer.run "https://downloadsapachefriends.global.ssl.fastly.net/xampp-files/5.6.21/xampp-linux-x64-5.6.21-0-installer.run?from_af=true"
RUN chmod +x xampp-linux-installer.run
RUN bash -c './xampp-linux-installer.run'
RUN ln -sf /opt/lampp/lampp /usr/bin/lampp
RUN rm xampp-linux-installer.run
# Enable XAMPP web interface(remove security checks)
RUN sed -i.bak s'/Require local/Require all granted/g' /opt/lampp/etc/extra/httpd-xampp.conf

# Enable includes of several configuration files
RUN mkdir /opt/lampp/apache2/conf.d && \
    echo "IncludeOptional /opt/lampp/apache2/conf.d/*.conf" >> /opt/lampp/etc/httpd.conf

# Create a /www folder and a symbolic link to it in /opt/lampp/htdocs. It'll be accessible via http://localhost:[port]/www/
# This is convenient because it doesn't interfere with xampp, phpmyadmin or other tools in /opt/lampp/htdocs
COPY app/. /opt/lampp/htdocs/
RUN rm -rf /opt/lampp/htdocs/applications.html
RUN rm -rf /opt/lampp/htdocs/dashboard
RUN rm -rf /opt/lampp/htdocs/webalizer
RUN rm /opt/lampp/htdocs/favicon.ico
RUN chown -R daemon:daemon /opt/lampp/htdocs/*
RUN chmod 755 /opt/lampp/htdocs/*
RUN echo -n "dc04710x03{Im@63_UPLO4D_VU1n$_STi1L_ExI$T$}" >8518340871_flag.txt

# Few handy utilities which are nice to have
RUN apt-get -y install nano vim less --no-install-recommends

RUN apt-get clean
VOLUME [ "/var/log/mysql/", "/var/log/apache2/" ]

EXPOSE 80
EXPOSE 443

# write a startup script
RUN echo '/opt/lampp/lampp start' >> /startup.sh
RUN chmod +x startup.sh

CMD ["bash", "/startup.sh"]
