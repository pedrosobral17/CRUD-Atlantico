import { Link } from 'react-router-dom'

export default function Sidebar() {
  return (
    <div className="w-64 bg-blue-900 text-white p-6">
      <h2 className="text-2xl font-bold mb-6">Painel</h2>
      <nav className="flex flex-col space-y-4">
        <Link to="/">Dashboard</Link>
        <Link to="/usuarios">Usuários</Link>
      </nav>
    </div>
  )
}