import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Sidebar from './components/SideBar';
import Tasks from './pages/Tasks';
import Plants from './pages/Plants';
import Rooms from './pages/Rooms';

const App: React.FC = () => {
  return (
    <div className="h-screen flex">
      <Sidebar />
      <div className="flex-1 p-4">
        <Routes>
          <Route path="/tasks" element={<Tasks />} />
          <Route path="/plants" element={<Plants />} />
          <Route path="/rooms" element={<Rooms />} />
          <Route
            path="/"
            element={<div>Select a page from the sidebar.</div>}
          />
        </Routes>
      </div>
    </div>
  );
};

export default App;
