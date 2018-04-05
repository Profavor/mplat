--USR(ADMIN)
insert into usr (USRID, CREATEDDATE, CREATOR, LASTUPDATED, UPDATOR, LOGINID, PASSWORD, isaccountnonexpired, isaccountnonlocked, iscredentialsnonexpired, isenabled) values ('f0193abf528db47301528db547520000', now(), 'SYSTEM', now(), 'SYSTEM', 'admin', '$2a$10$AMzmsivPF4eYT354j0dByecrgwXcOI.OsOTqzekgR7.h3sPTJmKgS', TRUE, TRUE , TRUE, TRUE );

--ROLE(DEFAULT)
insert into role (ROLEID, CREATOR, CREATEDDATE, UPDATOR, LASTUPDATED) values ('ROLE_USER', 'SYSTEM', now(), 'SYSTEM', now());
insert into role (ROLEID, CREATOR, CREATEDDATE, UPDATOR, LASTUPDATED) values ('ROLE_ADMIN', 'SYSTEM', now(), 'SYSTEM', now());

--USERROLE(ADMIN)
insert into usrrole (ROLEID, USRID, CREATEDDATE, CREATOR, LASTUPDATED, UPDATOR) values ('ROLE_USER', 'f0193abf528db47301528db547520000', now(), 'SYSTEM', now(), 'SYSTEM');
insert into usrrole (ROLEID, USRID, CREATEDDATE, CREATOR, LASTUPDATED, UPDATOR) values ('ROLE_ADMIN', 'f0193abf528db47301528db547520000', now(), 'SYSTEM', now(), 'SYSTEM');


--Dictionary
insert into dictionary (createddate, creator, lastupdated, updator, dic_id) values (now(), 'f0193abf528db47301528db547520000', now(), 'f0193abf528db47301528db547520000', 'SYS0001');
insert into dictionary_lang (id, createddate, creator, lastupdated, updator, lang, message, dic_Id) values (uuid(), now(), 'f0193abf528db47301528db547520000', now(), 'f0193abf528db47301528db547520000', 'KO', 'API한글', 'SYS0001');
insert into dictionary_lang (id, createddate, creator, lastupdated, updator, lang, message, dic_Id) values (uuid(), now(), 'f0193abf528db47301528db547520000', now(), 'f0193abf528db47301528db547520000', 'EN', 'API영어', 'SYS0001');

--MENU
insert into menu (id, createddate, creator, lastupdated, updator, disp_seq,  path, dic_id, parent_id) values ('b388da88-3735-11e8-9f57-5989a59d25e0', now(), 'f0193abf528db47301528db547520000', now(), 'f0193abf528db47301528db547520000', '0', 'root', 'SYS0001', '');
insert into menu (id, createddate, creator, lastupdated, updator, disp_seq,  path, dic_id, parent_id) values ('172dfd3e-3746-11e8-9f57-5989a59d25e0', now(), 'f0193abf528db47301528db547520000', now(), 'f0193abf528db47301528db547520000', '1', '/dashboard', 'SYS0001', 'b388da88-3735-11e8-9f57-5989a59d25e0');
insert into menu (id, createddate, creator, lastupdated, updator, disp_seq,  path, dic_id, parent_id) values (uuid(), now(), 'f0193abf528db47301528db547520000', now(), 'f0193abf528db47301528db547520000', '2', '/dashboard/dashboard1', 'SYS0001', '172dfd3e-3746-11e8-9f57-5989a59d25e0');
