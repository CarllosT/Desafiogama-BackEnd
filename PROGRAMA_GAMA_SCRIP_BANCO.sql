CREATE TABLE IF NOT EXISTS `mydb`.`Contato` (
  `idContato` INT NOT NULL AUTO_INCREMENT,
  `data` DATE NULL,
  `nome` VARCHAR(45) NULL,
  `cpf` VARCHAR(14) NULL,
  `cep` VARCHAR(9) NULL,
  `logradouro` VARCHAR(45) NULL,
  `numero` INT NULL,
  `bairro` VARCHAR(45) NULL,
  `cidade` VARCHAR(45) NULL,
  `uf` VARCHAR(45) NULL,
  `telefone` VARCHAR(45) NULL,
  `whatsapp` VARCHAR(45) NULL,
  `Status_Novo` INT NOT NULL,
  `Curso_idCurso` INT NOT NULL,
  PRIMARY KEY (`idContato`, `Status_Novo`, `Curso_idCurso`),
  INDEX `fk_Contato_Status_idx` (`Status_Novo` ASC) VISIBLE,
  INDEX `fk_Contato_Curso1_idx` (`Curso_idCurso` ASC) VISIBLE,
  CONSTRAINT `fk_Contato_Status`
    FOREIGN KEY (`Status_Novo`)
    REFERENCES `mydb`.`Status` (`Novo`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Contato_Curso1`
    FOREIGN KEY (`Curso_idCurso`)
    REFERENCES `mydb`.`Curso` (`idCurso`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB


CREATE TABLE IF NOT EXISTS `mydb`.`Status` (
  `Novo` INT NOT NULL,
  `EM_ATENDIMENTO` INT NULL,
  `CONTRATADO` INT NULL,
  `DESISTENTE` INT NULL,
  PRIMARY KEY (`Novo`))
ENGINE = InnoDB


CREATE TABLE IF NOT EXISTS `mydb`.`Curso` (
  `idCurso` INT NOT NULL,
  `nome` VARCHAR(45) NULL,
  PRIMARY KEY (`idCurso`))
ENGINE = InnoDB


CREATE TABLE IF NOT EXISTS `mydb`.`Categoria` (
  `EDUCACAO_BASICA` INT NULL,
  `GRADUACAO` INT NULL,
  `POS_GRAUDACAO` INT NULL,
  `EDUCACAO_DISTANCIA` INT NULL,
  `Curso_idCurso` INT NOT NULL,
  PRIMARY KEY (`Curso_idCurso`),
  CONSTRAINT `fk_Categoria_Curso1`
    FOREIGN KEY (`Curso_idCurso`)
    REFERENCES `mydb`.`Curso` (`idCurso`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB