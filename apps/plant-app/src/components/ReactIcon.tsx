import React from 'react';
import { IconContext } from 'react-icons';
import { RiDeleteBinLine } from 'react-icons/ri';
import { RiCheckboxCircleFill } from 'react-icons/ri';
import { TbPlant } from 'react-icons/tb';
import { BsQuestion } from 'react-icons/bs';
import { FaHouse } from 'react-icons/fa6';
import { IoMdSettings } from 'react-icons/io';
import { RiPlantFill } from 'react-icons/ri';
import { FaSun } from 'react-icons/fa';
import { IoIosWater } from 'react-icons/io';

interface ReactIconProps {
  type: string;
  size?: string;
}

const PlantIcon: React.FC<ReactIconProps> = ({ type = '', size = '1em' }) => {
  let IconToRender;

  switch (type) {
    case 'tasks':
      IconToRender = RiCheckboxCircleFill;
      break;
    case 'delete':
      IconToRender = RiDeleteBinLine;
      break;
    case 'plant':
      IconToRender = TbPlant;
      break;
    case 'plants':
      IconToRender = RiPlantFill;
      break;
    case 'rooms':
      IconToRender = FaHouse;
      break;
    case 'settings':
      IconToRender = IoMdSettings;
      break;
    case 'sunlight':
      IconToRender = FaSun;
      break;
    case 'watering':
      IconToRender = IoIosWater;
      break;
    default:
      IconToRender = BsQuestion; // Default icon if type doesn't match
      break;
  }

  return (
    <IconContext.Provider value={{ size, className: 'global-class-name' }}>
      <div>
        <IconToRender />
      </div>
    </IconContext.Provider>
  );
};

export default PlantIcon;
