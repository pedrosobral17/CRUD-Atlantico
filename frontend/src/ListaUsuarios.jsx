import React, { useEffect, useState } from 'react';

function ListaUsuarios() {
  const [usuarios, setUsuarios] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('http://localhost:3001/users')
      .then(res => {
        if (!res.ok) throw new Error('Erro ao buscar usuários');
        return res.json();
      })
      .then(data => {
        setUsuarios(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Carregando usuários...</p>;
  if (error) return <p style={{ color: 'red' }}>{error}</p>;

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Lista de Usuários</h2>
      {usuarios.length === 0 ? (
        <p>Nenhum usuário cadastrado.</p>
      ) : (
        <ul>
          {usuarios.map(user => (
            <li key={user.id} className="border rounded p-2 mb-2">
              <p><strong>Nome:</strong> {user.name}</p>
              <p><strong>Email:</strong> {user.email}</p>
              <p><strong>Telefone:</strong> {user.phone || '-'}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ListaUsuarios;