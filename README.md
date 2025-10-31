# Sistema de Perguntas e Respostas (Quiz)

Este é um projeto simples construído em Node.js que implementa um jogo de perguntas e respostas (quiz) e registra a pontuação final de cada usuário em um banco de dados PostgreSQL.

- Breno Miguel de Souza Afonso - RA: 2500998
- Nathalia Batista Munhoz - RA: 2501617
- Vanessa da Silva Santos - RA: 2520743
- Winley Jeanty - RA: 2525564

## Tecnologias Utilizadas

* **Node.js**: Ambiente de execução.
* **JavaScript**: Linguagem principal.
* **`pg` (Node-Postgres)**: Driver para conexão com o banco de dados PostgreSQL.
* **`readline-sync`**: Para capturar a entrada de dados do usuário via terminal.
* **PostgreSQL**: Banco de dados utilizado para persistência dos dados (nomes e pontuações).

## Como Instalar e Executar

Siga os passos abaixo para configurar e rodar o projeto localmente.

### 1. Pré-requisitos

Certifique-se de ter instalado em sua máquina:
* [Node.js](https://nodejs.org/)
* [PostgreSQL](https://www.postgresql.org/download/)

### 2. Instalação das Dependências

1.  Clone este repositório.
2.  Acesse o diretório do projeto no terminal.
3.  Instale as dependências Node.js:

    ```bash
    npm install pg readline-sync
    ```

### 4. Execução do Projeto

Execute o arquivo principal (`nome_do_seu_arquivo.js`) usando o Node:

```bash
node nome_do_seu_arquivo.js
