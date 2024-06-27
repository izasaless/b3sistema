import React, { useState } from 'react';
import axios from 'axios';
import InputMask from 'react-input-mask';

const Cadastro = () => {
  const [usuario, setUsuario] = useState({
    nome: '',
    email: '',
    cpf: '',
    telefone: '',
    categoria: '',
    status: true, 
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUsuario({ ...usuario, [name]: value });
  };

  const handleCadastro = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('/api/auth/cadastro', usuario);
      const { token, user } = response.data;

      localStorage.setItem('token', token);
      window.location.href = '/Login'; 
    } catch (err) {
      setError('Erro ao cadastrar usuário');
    }
  };

  return (
    <div className="flex min-h-screen justify-center items-center px-6 py-12 lg:px-8 bg-gray-200">
      <div className="flex flex-1 flex-col lg:flex-row justify-center items-center w-full max-w-screen-md z-10 relative rounded-lg bg-white shadow-lg p-6">
        <div className="sm:mx-auto sm:w-full sm:max-w-md flex flex-col items-center space-y-4">
          <div className="flex items-center space-x-4">
            <img src="public/Vector.png" alt="Vector" className="h-12 w-12" />
            <h2 className="text-3xl font-bold leading-9 tracking-tight text-gray-900 font-montserrat">
              Tela de Cadastro
            </h2>
          </div>
          <p className="text-lg text-black font-nunito leading-[47.74px] font-bold text-[32px]">
            Cadastre-se aqui
          </p>
        </div>

        <form className="mt-8 space-y-6 text-customBlue font-nunito relative w-full" onSubmit={handleCadastro}>
          <div className="w-custom mx-auto">
            <div className="mt-2 relative">
              <img
                src="/user.png"
                alt="Ícone de usuário"
                className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5"
              />
              <input
                id="nome"
                name="nome"
                type="text"
                autoComplete="nome"
                required
                className="font-nunito pl-10 block w-full rounded-md border-0 py-1.5 text-customBlue shadow-sm ring-1 ring-inset ring-customBlue placeholder:text-customBlue focus:ring-2 focus:ring-inset focus:ring-customBlue sm:text-sm sm:leading-6"
                placeholder="Nome"
                value={usuario.nome}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="w-custom mx-auto">
            <div className="mt-2 relative">
              <img
                src="/email.svg"
                alt="Ícone de e-mail"
                className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-customBlue"
              />
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="font-nunito pl-10 block w-full rounded-md border-0 py-1.5 text-customBlue shadow-sm ring-1 ring-inset ring-customBlue placeholder:text-customBlue focus:ring-2 focus:ring-inset focus:ring-customBlue sm:text-sm sm:leading-6"
                placeholder="E-mail"
                value={usuario.email}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="w-custom mx-auto">
            <div className="mt-2 relative">
              <img
                src="/cpf.svg"
                alt="Ícone de CPF"
                className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5"
              />
              <InputMask
                id="cpf"
                name="cpf"
                type="text"
                autoComplete="cpf"
                mask="999.999.999-99"
                required
                className="font-nunito pl-10 block w-full rounded-md border-0 py-1.5 text-customBlue shadow-sm ring-1 ring-inset ring-customBlue placeholder:text-customBlue focus:ring-2 focus:ring-inset focus:ring-customBlue sm:text-sm sm:leading-6"
                placeholder="CPF"
                value={usuario.cpf}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="w-custom mx-auto">
            <div className="mt-2 relative">
              <img
                src="/tel.svg"
                alt="Ícone de telefone"
                className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5"
              />
              <InputMask
                id="telefone"
                name="telefone"
                type="text"
                autoComplete="telefone"
                mask="(99) 9 9999-9999"
                className="font-nunito pl-10 block w-full rounded-md border-0 py-1.5 text-customBlue shadow-sm ring-1 ring-inset ring-customBlue placeholder:text-customBlue focus:ring-2 focus:ring-inset focus:ring-customBlue sm:text-sm sm:leading-6"
                placeholder="Telefone"
                value={usuario.telefone}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="w-custom mx-auto">
            <div className="mt-2 relative">
              <img
                src="/categoria.svg"
                alt="Ícone de categoria"
                className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5"
              />
              <input
                id="categoria"
                name="categoria"
                type="text"
                autoComplete="categoria"
                className="font-nunito pl-10 block w-full rounded-md border-0 py-1.5 text-customBlue shadow-sm ring-1 ring-inset ring-customBlue placeholder:text-customBlue focus:ring-2 focus:ring-inset focus:ring-customBlue sm:text-sm sm:leading-6"
                placeholder="Categoria"
                value={usuario.categoria}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="flex items-center justify-between w-custom mx-auto">
            <div className="flex items-center">
              <input
                id="terms"
                name="terms"
                type="checkbox"
                className="h-4 w-4 ring-customBlue text-customBlue focus:ring-customBlue border-customBlue rounded-full"
                required
              />
              <label htmlFor="terms" className="ml-2 block text-sm text-customBlue font-nunito">
                Concordo com os termos
              </label>
            </div>
          </div>
          <div className="mt-4 w-custom mx-auto">
            <input
              type="submit"
              className="font-poppins flex justify-center w-full rounded-full bg-customBlue px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-customBlue focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-customBlue"
              value="Cadastrar"
            />
            {error && (
              <p className="mt-2 text-sm text-center text-red-600 flex items-center justify-center">
                {error}
              </p>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}

export default Cadastro;
