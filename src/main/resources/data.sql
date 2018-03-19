--USR(ADMIN)
insert into usr (USRID, CREATEDDATE, CREATOR, LASTUPDATED, UPDATOR, LOGINID, PASSWORD, isaccountnonexpired, isaccountnonlocked, iscredentialsnonexpired, isenabled) values ('f0193abf528db47301528db547520000', now(), 'SYSTEM', now(), 'SYSTEM', 'admin', '$2a$10$AMzmsivPF4eYT354j0dByecrgwXcOI.OsOTqzekgR7.h3sPTJmKgS', TRUE, FALSE , TRUE, TRUE );

--ROLE(DEFAULT)
insert into role (ROLEID, CREATOR, CREATEDDATE, UPDATOR, LASTUPDATED) values ('ROLE_USER', 'SYSTEM', now(), 'SYSTEM', now());
insert into role (ROLEID, CREATOR, CREATEDDATE, UPDATOR, LASTUPDATED) values ('ROLE_ADMIN', 'SYSTEM', now(), 'SYSTEM', now());

--USERROLE(ADMIN)
insert into usrrole (ROLEID, USRID, CREATEDDATE, CREATOR, LASTUPDATED, UPDATOR) values ('ROLE_USER', 'f0193abf528db47301528db547520000', now(), 'SYSTEM', now(), 'SYSTEM');
insert into usrrole (ROLEID, USRID, CREATEDDATE, CREATOR, LASTUPDATED, UPDATOR) values ('ROLE_ADMIN', 'f0193abf528db47301528db547520000', now(), 'SYSTEM', now(), 'SYSTEM');

--DICTIONARY
insert into dictionary (DICID, LANG, CREATEDDATE, CREATOR, LASTUPDATED, UPDATOR, ABBREVIATION, DESCRIPTION, NAME, SHORTNAME, MESSAGE) values ('SYS0001', 'KO', now(), 'ADMIN', now(), 'ADMIN', '', '', 'Invalid user.', '', 'Invalid user.');
insert into dictionary (DICID, LANG, CREATEDDATE, CREATOR, LASTUPDATED, UPDATOR, ABBREVIATION, DESCRIPTION, NAME, SHORTNAME, MESSAGE) values ('SYS0001', 'EN', now(), 'ADMIN', now(), 'ADMIN', '', '', 'Invalid user.', '', 'Invalid user.');

--MENU
--INSERT INTO procore.menu (MENUID, ACTIVE, CREATER, CREATETIME, DISPSEQ, ID, MENUCODE, UPDATER, UPDATETIME) VALUES ('ROOT', 'on', 'ADMIN', '2015-12-25', '0', '0', 'ROOT', 'ADMIN', '2015-12-25');