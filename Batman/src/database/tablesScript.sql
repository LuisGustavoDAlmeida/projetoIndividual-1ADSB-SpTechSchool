create database projetoIndividual;

use projetoIndividual;

drop database projetoindividual;

create table usuario
(idUsuario int primary key auto_increment,
username varchar(16) not null,
nome varchar(24) not null,
sobrenome varchar(24) not null,
email varchar(45) not null,
senha char(12) not null);

select * from usuario;

create table loadout
(idEquipamento int primary key auto_increment,
equip1 varchar(45),
equip2 varchar(45),
equip3 varchar(45),
dataBaseHp int,
dataBaseDamage int,
dataBaseDefense int,
dataBaseEvasion int,
fkLogin int, 
	constraint fkLogin foreign key (fkLogin) references usuario (idUsuario)) auto_increment = 100;
    
select * from loadout;

create table analytics
(idAnalytics int auto_increment,
points int(12),
actualBatman varchar (45),
sendDamage float (4),
sendHealth float (4),
actualVillain varchar(45),
fkEquipamento int, constraint fkEquipamento foreign key (fkEquipamento) references loadout (idEquipamento),
fkLoginEquipamento int, constraint fkLoginEquipamento foreign key (fkLoginEquipamento) references loadout (fkLogin),
primary key (idAnalytics, fkEquipamento, fkLoginEquipamento)) auto_increment = 300;

select * from analytics;
