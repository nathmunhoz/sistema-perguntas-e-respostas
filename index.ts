const { Pool } = require('pg');
const readlineSync = require('readline-sync');

const dbConfig = {
    user: 'aluno',
    host: 'BRJND02P2L1W041',
    database: 'db_profedu',
    password: '102030',
    port: 5432,
};

const pool = new Pool(dbConfig);

async function perguntasRespostas() {
    let pontuacao = 0;

    console.log("--- Sistema de perguntas e respostas ---");

    const nome = readlineSync.question('Digite o nome: ');

    console.log('Qual é o maior planeta do Sistema Solar?\n');
    console.log('1. Vênus\n');
    console.log('2. Júpiter\n');
    console.log('3. Terra\n');
    const digitar = readlineSync.question('Digite a sua resposta: ').trim();

    if (digitar === '2') {
        pontuacao += 2;
    } else {
        console.log('0 pontos.')
    }

    console.log('Quantos continentes existem no mundo?\n');
    console.log('1\n');
    console.log('5\n');
    console.log('6\n');
    const digitar1 = readlineSync.question('Digite a sua resposta: ').trim();

    if (digitar1 === '6')  {
        pontuacao += 2;
    } else {
        console.log('0 pontos.')
    }

    console.log('Qual é o nome do rio que passa pela cídade do Rio de Janeiro?\n');
    console.log('1. Rio Paraíba do Sul\n');
    console.log('2. Rio Tiête\n');
    console.log('3. Rio Solimões\n');
    const digitar2 = readlineSync.question('Digite a sua resposta: ').trim();

    if (digitar2 === '1') {
        pontuacao += 2;
    } else {
        console.log('0 pontos.')
    }

    console.log('Quem pintou a famosa obra Mona Lisa?\n');
    console.log('1. Leonardo DiCaprio\n');
    console.log('2. Leonardo da Vinci\n');
    console.log('3. Leonardo da Silva\n');
    const digitar3 = readlineSync.question('Digite a sua resposta: ').trim();

    if (digitar3 === '2') {
        pontuacao += 2;
    } else {
        console.log('0 pontos.')
    }

    console.log('Qual é o metal usado para fabricar latas de refrigerante?\n');
    console.log('1. Ouro\n');
    console.log('2. Alumínio\n');
    console.log('3. Cobre\n');
    const digitar4 = readlineSync.question('Digite a sua resposta: ').trim();
    
    if (digitar4 === '2') {
        pontuacao += 2;
    } else {
        console.log('0 pontos.')
    }

    try {
        console.log("\nConectando ao banco de dados...");
        const client = await pool.connect();
        console.log("Conexão bem-sucedida! Inserindo dados...");

        const insertQuery = `
            INSERT INTO public.usuarios (nome, pontuacao_usuario)
            VALUES ($1, $2)
        `;
        const values = [nome, pontuacao];

        await client.query(insertQuery, values);
        client.release();

        console.log("-----------------------------------------");
        console.log(`Dados inseridos com sucesso!`);
        console.log(`Nome: ${nome}, Pontuação: ${pontuacao}`);
        console.log("-----------------------------------------");

    } catch (error) {
        console.error("Ocorreu um erro ao interagir com o banco de dados:", error);
    } finally {
        await pool.end();
        console.log("Conexão com o banco de dados encerrada.");
    }
}

perguntasRespostas();