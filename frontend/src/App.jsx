import React, { useState } from 'react';
import UserForm from './components/UserForm';

export default function App() {
  const [usuarios, setUsuarios] = useState([
    { id: 1, name: 'Pedro Sobral', email: 'pedro@example.com' },
    { id: 2, name: 'Maria Silva', email: 'maria@example.com' },
  ]);

  const [editingUser, setEditingUser] = useState(null);

  function handleAddUser(newUser) {
    setUsuarios(prev => [...prev, newUser]);
  }

  function handleDeleteUser(id) {
    setUsuarios(prev => prev.filter(user => user.id !== id));
  }

  function handleEditUser(user) {
    setEditingUser(user);
  }

  function handleUpdateUser(updatedUser) {
    setUsuarios(prev =>
      prev.map(user => (user.id === updatedUser.id ? updatedUser : user))
    );
    setEditingUser(null);
  }

  function handleCancelEdit() {
    setEditingUser(null);
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-blue-50 to-white font-sans">
      {/* Header */}
      <header className="bg-blue-900 text-white p-6 shadow-md sticky top-0 z-10">
        <h1 className="text-3xl font-extrabold tracking-wide">Gerenciamento de Usuários</h1>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto mt-10 p-6 bg-white rounded-xl shadow-lg">
        <UserForm
          onAddUser={handleAddUser}
          editingUser={editingUser}
          onUpdateUser={handleUpdateUser}
          onCancelEdit={handleCancelEdit}
        />

        <h2 className="text-2xl font-semibold text-blue-900 mt-12 mb-6 border-b border-blue-300 pb-2">
          Lista de Usuários
        </h2>

        <table className="w-full table-auto border-collapse rounded-lg overflow-hidden shadow-sm">
          <thead className="bg-blue-100 text-blue-900 font-semibold">
            <tr>
              <th className="py-3 px-6 text-left">ID</th>
              <th className="py-3 px-6 text-left">Nome</th>
              <th className="py-3 px-6 text-left">E-mail</th>
              <th className="py-3 px-6 text-left">Ações</th>
            </tr>
          </thead>
          <tbody>
            {usuarios.map((user, idx) => (
              <tr
                key={user.id}
                className={idx % 2 === 0 ? 'bg-white' : 'bg-blue-50'}
              >
                <td className="py-3 px-6 border-b border-gray-200">{user.id}</td>
                <td className="py-3 px-6 border-b border-gray-200">{user.name}</td>
                <td className="py-3 px-6 border-b border-gray-200">{user.email}</td>
                <td className="py-3 px-6 border-b border-gray-200 space-x-3">
                  <button
                    onClick={() => handleEditUser(user)}
                    className="bg-yellow-400 hover:bg-yellow-500 text-white font-semibold px-4 py-2 rounded shadow transition duration-200"
                  >
                    Editar
                  </button>
                  <button
                    onClick={() => handleDeleteUser(user.id)}
                    className="bg-red-600 hover:bg-red-700 text-white font-semibold px-4 py-2 rounded shadow transition duration-200"
                  >
                    Excluir
                  </button>
                </td>
              </tr>
            ))}
            {usuarios.length === 0 && (
              <tr>
                <td colSpan="4" className="text-center py-6 text-gray-500">
                  Nenhum usuário cadastrado.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </main>
    </div>
  );
}