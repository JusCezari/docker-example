CREATE DATABASE IF NOT EXISTS `people`

DROP TABLE IF EXISTS `people`;
CREATE TABLE `people` (
  `uuid` char(36) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  PRIMARY KEY (`uuid`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;