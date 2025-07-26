import React, { useState, useEffect } from 'react';

export default function UserForm({ onAddUser, editingUser, onUpdateUser, onCancelEdit }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    phone: '',
    birthDate: '',
    address: '',
  });

  useEffect(() => {
    if (editingUser) {
      setFormData({
        name: editingUser.name || '',
        email: editingUser.email || '',
        password: '',
        phone: editingUser.phone || '',
        birthDate: editingUser.birthDate || '',
        address: editingUser.address || '',
      });
    } else {
      setFormData({
        name: '',
        email: '',
        password: '',
        phone: '',
        birthDate: '',
        address: '',
      });
    }
  }, [editingUser]);

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (editingUser) {
      onUpdateUser({ ...editingUser, ...formData });
    } else {
      onAddUser({ id: Date.now(), ...formData });
    }
    setFormData({
      name: '',
      email: '',
      password: '',
      phone: '',
      birthDate: '',
      address: '',
    });
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="grid grid-cols-1 md:grid-cols-3 gap-6 bg-blue-50 p-6 rounded-lg shadow-sm"
    >
      <input
        type="text"
        name="name"
        placeholder="Nome"
        value={formData.name}
        onChange={handleChange}
        required
        className="border border-blue-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      <input
        type="email"
        name="email"
        placeholder="E-mail"
        value={formData.email}
        onChange={handleChange}
        required
        className="border border-blue-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      {!editingUser && (
        <input
          type="password"
          name="password"
          placeholder="Senha"
          value={formData.password}
          onChange={handleChange}
          required
          className="border border-blue-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      )}

      <input
        type="tel"
        name="phone"
        placeholder="Telefone"
        value={formData.phone}
        onChange={handleChange}
        pattern="\d{10,15}"
        title="Digite o telefone com DDD, somente números"
        className="border border-blue-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
      />

      <input
        type="date"
        name="birthDate"
        placeholder="Data de Nascimento"
        value={formData.birthDate}
        onChange={handleChange}
        className="border border-blue-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
      />

      <input
        type="text"
        name="address"
        placeholder="Endereço"
        value={formData.address}
        onChange={handleChange}
        className="border border-blue-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
      />

      <div className="md:col-span-3 flex justify-end space-x-4 mt-2">
        {editingUser && (
          <button
            type="button"
            onClick={onCancelEdit}
            className="px-6 py-2 rounded bg-gray-300 hover:bg-gray-400 transition"
          >
            Cancelar
          </button>
        )}
        <button
          type="submit"
          className="px-6 py-2 rounded bg-blue-700 text-white font-semibold hover:bg-blue-800 transition"
        >
          {editingUser ? 'Atualizar' : 'Adicionar'}
        </button>
      </div>
    </form>
  );
}