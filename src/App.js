import React from 'react';
import {
  Routes,
  Route
} from 'react-router-dom';

import IndexPage from './pages/Index.js';
import AdminDashboardPage from './pages/Admin-dashboard.js';
import AdminClientesPage from './pages/Admin-clientes.js';
import AdminCadastrosPage from './pages/Admin-cadastros.js';
import AdminChamadosPage from './pages/Admin-chamados.js';
import ClienteDashboardPage from './pages/Cliente-dashboard.js';

function App() {
  return (
    <Routes>
      <Route path="/" element={<IndexPage />} />
         
      <Route path="/admindashboard" element={<AdminDashboardPage />} />
         
      <Route path="/adminclientes" element={<AdminClientesPage />} />
         
      <Route path="/admincadastros" element={<AdminCadastrosPage />} />
         
      <Route path="/adminchamados" element={<AdminChamadosPage />} />
         
      <Route path="/clientedashboard" element={<ClienteDashboardPage />} />
    </Routes>
  );
}

export default App;
