# Desafio-Tecnico-TurmaXP-Trybe

Neste projeto foi desenvolvido um banco de dados e uma API (Interface de Programação de Aplicação) para a produção de um aplicativo de investimento em ações, com algumas funcionalidades de conta digital.

## características

- Cadastro de usuário.
- Login na aplicação.
- Listar ações disponíveis e a quantidade investida em cada uma.
- Comprar ou vender uma ação
- Conta digital.
- Saque e depósito.

## Tecnologias, ferramentas e bibliotecas


As seguintes ferramentas foram usadas na construção do projeto:

- Javascript
- SQL (Standard Query Language)
- MySQL server
- Node.js
- Express
- JWT (JSON Web Token)
- Bcrypt
- Joi

## Requisitos para rodar o projeto


- ter o ode instalado na sua máquina.
- ter o MySQl instalado na sua máquina.
- ter o MySQL Workbench

## Rodando o projeto

1. Clone o repositório

  ```
  git clone https://github.com/jessica-sant/api-investimentos.git
  ```

2. Entre na pasta do repositório que você acabou de clonar:
    
  ```
  cd api-investimentos
  ```

3. Instale as dependências
  
  ```
  npm install
  ```

4. Agora estamos prontos para executar o projeto
  
  ```
  npm run dev
  ```


### Antes de começar 


- Na raíz do projeto existe um arquivo '.env.example', você deve configurá-lo com os seus dados, só não altere o nome do DATABASE.

### Instruções para restaurar o banco de dados


- Na raíz do projeto tem um arquivo chamado 'appInvest.sql', selecione todo o conteúdo usando CTRL-A, abra o mySQL workbench e em uma nova janela de query, cole todo o conteúdo e execute a query, atualize a listagem de bancos e pronto.



## Tomadas de decisões


Optei por usar  javascript porque é a linguagem que eu mais domino e tenho segurança para trabalhar  no momento, para validar o login do usuário usei o Jwt que é simples e nos dá uma resposta rápida.
Utilizei a arquitetura MSC, dividindo a aplicação em camadas, pois facilita muito a manutenção, a adição de novas funcionalidades e a organização geral do código.
