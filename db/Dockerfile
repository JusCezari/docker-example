FROM mysql:5.7.21

ENV MYSQL_DATABASE=people \
    MYSQL_ROOT_PASSWORD=root

ADD schema.sql /docker-entrypoint-initdb.d

EXPOSE 3306