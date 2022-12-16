CREATE TABLE tb_pessoa{
    cod_pessoa INTEGER GENERATED
    BY DEFAULT ON NULL AS IDENTITY
    PRIMARY KEY,
    -- VARCHAR PADRÃO ANSI
    -- VARCHAR2 PADRÃO Oracle
    nome VARCHAR2(500) NOT NULL,
    idade INTEGER NOT NULL,
    hobby VARCHAR2(200) NOT NULL
};

INSERT INTO tb_pessoa
(cod_pessoa, nome, idade, hobby)
VALUES
(NULL, 'Jonh', 22, 'Ler')