import React from 'react';

const AddPlantButton: React.FC = () => {
  return (
    <button className="group cursor-pointer outline-none" title="Add New">
      <svg
        className="stroke-background dark:stroke-dark-background fill-secondary dark:fill-dark-secondary group-active:stroke-background dark:group-active:stroke-dark-background"
        viewBox="0 0 24 24"
        height="50px"
        width="50px"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Circle with apple-500 fill */}
        <path
          strokeWidth="1.5"
          d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
        />
        {/* Horizontal line of the plus sign */}
        <path
          strokeWidth="1.5"
          d="M8 12H16"
          className="stroke-background dark:stroke-dark-background"
        />
        {/* Vertical line of the plus sign */}
        <path
          strokeWidth="1.5"
          d="M12 16V8"
          className="stroke-background dark:stroke-dark-background"
        />
      </svg>
    </button>
  );
};

export default AddPlantButton;
