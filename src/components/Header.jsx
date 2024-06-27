import React from 'react';
import { Menu } from '@headlessui/react';
import { BellIcon, UserCircleIcon } from '@heroicons/react/solid';

const Header = ({ userName }) => {
  return (
    <header className="bg-white shadow">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-900">Nome da Página</h1>
        <div className="flex items-center space-x-4">
          <span className="text-gray-600">Bem vindo, {userName}</span>
          <div className="relative">
            <Menu>
              <Menu.Button className="flex items-center space-x-2">
                <UserCircleIcon className="h-8 w-8 text-gray-500" />
                <span className="sr-only">Abrir menu do usuário</span>
              </Menu.Button>
              <Menu.Items className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg py-1">
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href="#profile"
                      className={`block px-4 py-2 text-sm text-gray-700 ${active && 'bg-gray-100'}`}
                    >
                      Perfil
                    </a>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href="#settings"
                      className={`block px-4 py-2 text-sm text-gray-700 ${active && 'bg-gray-100'}`}
                    >
                      Configurações
                    </a>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href="#logout"
                      className={`block px-4 py-2 text-sm text-gray-700 ${active && 'bg-gray-100'}`}
                    >
                      Sair
                    </a>
                  )}
                </Menu.Item>
              </Menu.Items>
            </Menu>
          </div>
          <BellIcon className="h-6 w-6 text-gray-500" />
        </div>
      </div>
    </header>
  );
};

export default Header;
