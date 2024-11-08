import React from 'react';
import { IconContext } from 'react-icons';
import { TbPlant } from 'react-icons/tb';

interface PlantIconProps {
  size?: string;
}

const PlantIcon: React.FC<PlantIconProps> = ({ size = '1em' }) => {
  return (
    <IconContext.Provider value={{ size, className: 'global-class-name' }}>
      <div>
        <TbPlant />
      </div>
    </IconContext.Provider>
  );
};

export default PlantIcon;
