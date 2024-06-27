// back-end/src/routes/authRoutes.js
import { Router } from 'express';
import { prisma } from '../prisma/client'; // Ajuste o caminho conforme necessário
import bcrypt from 'bcrypt'; // Para comparar senhas criptografadas
import jwt from 'jsonwebtoken'; // Para gerar tokens de autenticação

const router = Router();

router.post('/login', async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await prisma.usuario.findUnique({
      where: { username },
    });

    if (!user) {
      return res.status(401).json({ message: 'Usuário não encontrado' });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Senha incorreta' });
    }

    // Gerar um token de autenticação
    const token = jwt.sign({ id: user.id }, 'seu-segredo-jwt', { expiresIn: '1h' });

    res.json({ token, user });
  } catch (error) {
    res.status(500).json({ message: 'Erro ao tentar fazer login', error });
  }
});

export default router;
