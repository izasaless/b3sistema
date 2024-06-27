import React from 'react';


const Sidebar = () => {
  const handleLogout = () => {
    console.log('Usuário fez logout');
  };

  return (
    <div className="fixed left-4 top-4 bottom-4 w-56 bg-customBlue text-white p-4 rounded-xl shadow-lg">
      <div className="mb-4 flex items-center justify-center">
        <img src="/Group.svg" alt="Group" className="h-8 w-auto" />
      </div>

      <div className="flex items-center mb-4">
        <button className="flex items-center text-base font-bold truncate font-nunito bg-transparent hover:bg-blue-800 text-white hover:text-white py-2 px-4 border border-transparent rounded-xl transition duration-300 ease-in-out">
          <img src="/Vector (2).svg" alt="" className="h-6 w-auto mr-2" />
          Monitoramento
        </button>
      </div>


      <div className="mb-4">
        <h3 className="font-semibold mb-2 font-nunito text-base">Pessoas</h3>
        <ul className="space-y-2 text-base font-normal font-nunito">
          <li className="p-2 rounded-xl flex items-center transition duration-300 ease-in-out hover:bg-blue-800 hover:text-white hover:shadow-lg">
            <span className="bg-blue-800 w-8 h-8 rounded-full flex items-center justify-center overflow-hidden">
              <img src="/Union.svg" alt="Usuários" className="h-4 w-auto" />
            </span>
            <span className="ml-2">Usuários</span>
          </li>
          <li className="p-2 rounded-xl flex items-center transition duration-300 ease-in-out hover:bg-blue-800 hover:text-white hover:shadow-lg">
            <span className="bg-blue-800 w-8 h-8 rounded-full flex items-center justify-center overflow-hidden">
              <img src="/Vector (3).svg" alt="Clientes" className="h-4 w-auto" />
            </span>
            <span className="ml-2">Clientes</span>
          </li>
          <li className="p-2 rounded-xl flex items-center transition duration-300 ease-in-out hover:bg-blue-800 hover:text-white hover:shadow-lg">
            <span className="bg-blue-800 w-8 h-8 rounded-full flex items-center justify-center overflow-hidden">
              <img src="/Union (2).svg" alt="Funcionário" className="h-4 w-auto" />
            </span>
            <span className="ml-2">Funcionários</span>
          </li>
        </ul>
      </div>


      <div className="mb-4">
        <h3 className="font-semibold mb-2 font-nunito text-base">Tarefas</h3>
        <ul className="space-y-2 text-base font-normal font-nunito">
          <li className="p-2 rounded-xl flex items-center transition duration-300 ease-in-out hover:bg-blue-800 hover:text-white hover:shadow-lg">
            <span className="bg-blue-800 w-8 h-8 rounded-full flex items-center justify-center overflow-hidden">
              <img src="/Union (1).svg" alt="Todas" className="h-4 w-auto" />
            </span>
            <span className="ml-2">Todas</span>
          </li>
          <li className="p-2 rounded-xl flex items-center transition duration-300 ease-in-out hover:bg-blue-800 hover:text-white hover:shadow-lg">
            <span className="bg-blue-800 w-8 h-8 rounded-full flex items-center justify-center overflow-hidden">
              <img src="/caixa.svg" alt="Finalizadas" className="h-4 w-auto" />
            </span>
            <span className="ml-2">Finalizadas</span>
          </li>
          <li className="p-2 rounded-xl flex items-center transition duration-300 ease-in-out hover:bg-blue-800 hover:text-white hover:shadow-lg">
            <span className="bg-blue-800 w-8 h-8 rounded-full flex items-center justify-center overflow-hidden">
              <img src="/caixa.svg" alt="Em Andamento" className="h-4 w-auto" />
            </span>
            <span className="ml-2">Em Andamento</span>
          </li>
        </ul>
      </div>

      <div className="mb-4">
        <h3 className="font-semibold mb-2 font-nunito text-base">Cargos</h3>
        <ul className="space-y-2 text-base font-normal font-nunito">
          <li className="p-2 rounded-xl flex items-center transition duration-300 ease-in-out hover:bg-blue-800 hover:text-white hover:shadow-lg">
            <span className="bg-blue-800 w-8 h-8 rounded-full flex items-center justify-center overflow-hidden">
              <img src="/Vector (3).svg" alt="Cargos" className="h-4 w-auto" />
            </span>
            <span className="ml-2">Cargos</span>
          </li>
        </ul>
      </div>

       
       <div className="mt-auto">
        <button
          onClick={handleLogout}
          className="w-full flex items-center text-base font-bold truncate font-nunito bg-transparent hover:bg-blue-800 text-white hover:text-white py-2 border border-transparent rounded-xl transition duration-300 ease-in-out"
        >
          <span className="bg-blue-800 w-8 h-8 rounded-full flex items-center justify-center overflow-hidden mr-2">
            <img src="/sair.svg" alt="Logout" className="h-4 w-auto" />
          </span>
          Sair
        </button>
      </div>
    </div>
  );
}

export default Sidebar;
