FROM mysql:latest

MAINTAINER Lahtachev <lahtachev@gmail.com>

WORKDIR /var/www/backup

ADD my.cnf /etc/mysql/my.cnf
ADD conf.d/my.cnf /etc/mysql/conf.d/my.cnf

#RUN 'mysql -uroot -proot -e "ALTER DATABASE sitemanager CHARACTER SET utf8 COLLATE utf8_unicode_ci;"'; exit 0
#RUN 'mysql -uroot -proot -e "SET GLOBAL sql_mode = '';"'; exit 0
#RUN 'mysql -uroot -proot -e "SET SESSION sql_mode = '';"'; exit 0

CMD ["mysqld"]

EXPOSE 3306