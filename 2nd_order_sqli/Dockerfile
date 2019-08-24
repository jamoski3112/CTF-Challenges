FROM debian:jessie
MAINTAINER Rahul R

ENV DEBIAN_FRONTEND noninteractive
RUN apt-get update --fix-missing

# curl is needed to download the xampp installer, net-tools provides netstat command for xampp
RUN apt-get -y install wget net-tools

RUN wget -O xampp-linux-installer.run "https://www.apachefriends.org/xampp-files/7.1.31/xampp-linux-x64-7.1.31-2-installer.run"
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
RUN echo -n "FF81A23C329224138EF806960DDEDE3A">/flag.txt
RUN chmod +x /flag.txt
RUN chown -R daemon:daemon /opt/lampp/htdocs/*
RUN chmod 755 /opt/lampp/htdocs/*


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
