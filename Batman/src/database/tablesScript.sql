create database projetoIndividual;

use projetoIndividual;

create table cadastro
(idUsuario int primary key auto_increment,
usuario varchar(16),
nome varchar(24),
sobrenome varchar(24),
email varchar(45),
senha char(12));

create table login 
(idLogin int primary key auto_increment,
usuario varchar(16),
senha char(12),
fkCadastro int,
	constraint fkCadastro foreign key (fkCadastro) references cadastro (idUsuario));

create table equipamento 
(idEquipamento int primary key auto_increment,
nomeEquipamento varchar(45),
fkLogin int, 
	constraint fkLogin foreign key (fkLogin) references login (idLogin)) auto_increment = 100;

create table viloes 
(idVilao int primary key auto_increment,
nomeVilao varchar(45),
danoVilao int (2),
vidaVilao int (4)) auto_increment = 1000;

create table analytics
(idAnalytics int,
fkLoginEquipamento int,
fkViloes int, primary key (idAnalytics, fkLoginEquipamento, fkViloes),
danoCausado int (4),
danoRecebido int (4),
pontuacao int (4),
	constraint fkLoginEquipamento foreign key (fkLoginEquipamento) references equipamento (idEquipamento),
    constraint fkViloes foreign key (fkViloes) references viloes (idVilao));
    
describe cadastro;
describe login;
describe equipamento;
describe viloes;
describe analytics;
