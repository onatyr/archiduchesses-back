import React from 'react';
import { Link } from 'react-router-dom';
import PlantIcon from './PlantIcon';

const Sidebar: React.FC = () => {
  const linkClassName =
    'hover:bg-primaryVariant dark:hover:bg-dark-primaryVariant p-2 rounded';

  return (
    <div className="w-64 h-full  bg-primary dark:bg-dark-primary text-onPrimary dark:text-dark-onPrimary flex flex-col">
      <div className="p-4 text-xl font-semibold">
        <PlantIcon size="2em" />
        <h1>Turbo Plant</h1>
      </div>
      <nav className="flex flex-col gap-4 p-4">
        <Link to="/tasks" className={linkClassName}>
          Tasks
        </Link>
        <Link to="/plants" className={linkClassName}>
          Plants
        </Link>
        <Link to="/rooms" className={linkClassName}>
          Rooms
        </Link>
      </nav>
    </div>
  );
};

export default Sidebar;
