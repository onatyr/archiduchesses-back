import * as React from 'react';
import { Route, Routes } from 'react-router-dom';
import Sidebar from './components/SideBar';
import Tasks from './pages/Tasks';
import Plants from './pages/Plants';
import Rooms from './pages/Rooms';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex bg-background dark:bg-dark-background">
      <Sidebar />
      <div className="flex-1 p-4 bg-background dark:bg-dark-background text-onBackground dark:text-dark-onBackground overflow-y-auto">
        <Routes>
          <Route path="/tasks" element={<Tasks />} />
          <Route path="/plants" element={<Plants />} />
          <Route path="/rooms" element={<Rooms />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
