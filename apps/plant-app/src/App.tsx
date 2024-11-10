import * as React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Sidebar from './components/SideBar';
import Tasks from './pages/Tasks';
import Plants from './pages/Plants';
import Rooms from './pages/Rooms';
import WelcomeScreen from './pages/WelcomeScreen';
import Settings from './pages/Settings';

const App: React.FC = () => {
  const location = useLocation(); // Get current route

  // Check if the current route is the root ("/")
  const isWelcomeScreen = location.pathname === '/';

  return (
    <div className="min-h-screen flex bg-background dark:bg-dark-background">
      {!isWelcomeScreen && <Sidebar />}

      <div className="flex-1 p-4 bg-background dark:bg-dark-background text-onBackground dark:text-dark-onBackground overflow-y-auto">
        <Routes>
          <Route path="/" element={<WelcomeScreen />} />{' '}
          <Route path="/tasks" element={<Tasks />} />
          <Route path="/plants" element={<Plants />} />
          <Route path="/rooms" element={<Rooms />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
