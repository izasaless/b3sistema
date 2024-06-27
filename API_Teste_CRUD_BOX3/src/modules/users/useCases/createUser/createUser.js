// createUser.js

const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  try {
    const newUser = await prisma.usuario.create({
      data: {
        email: 'exemplo@email.com',
        cpf: '12345678900',
        telefone: '999999999',
        nome: 'Nome do Usuário',
        categoria: 'Categoria do Usuário',
        status: true, // ou false, dependendo do status desejado
      },
    });
    console.log('Usuário criado:', newUser);
  } catch (error) {
    console.error('Erro ao criar usuário:', error);
  } finally {
    await prisma.$disconnect();
  }
}

main();
