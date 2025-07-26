<table className="w-full table-auto border-collapse rounded-lg overflow-hidden shadow-sm">
  <thead className="bg-blue-100 text-blue-900 font-semibold">
    <tr>
      <th className="py-3 px-6 text-left">ID</th>
      <th className="py-3 px-6 text-left">Nome</th>
      <th className="py-3 px-6 text-left">E-mail</th>
      <th className="py-3 px-6 text-left">Telefone</th>
      <th className="py-3 px-6 text-left">Data de Nascimento</th>
      <th className="py-3 px-6 text-left">Endereço</th>
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
        <td className="py-3 px-6 border-b border-gray-200">{user.phone}</td>
        <td className="py-3 px-6 border-b border-gray-200">{user.birthDate}</td>
        <td className="py-3 px-6 border-b border-gray-200">{user.address}</td>
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
  </tbody>
</table>