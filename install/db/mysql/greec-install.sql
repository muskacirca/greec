--
-- DB: greec - MySql5
--

CREATE TABLE IF NOT EXISTS User (
  id bigint(20) NOT NULL AUTO_INCREMENT,
  creationDate datetime NOT NULL,
  updateDate datetime NULL,
  login varchar(255) NOT NULL,
  password varchar(100) NOT NULL,
  PRIMARY KEY (id),
  UNIQUE KEY UK_Login (login)
);
--
-- Default Users / Roles
--

INSERT INTO User (creationDate,  login, password)
VALUES ('2014-07-20 00:00:00', 'admin', 'liberate');
