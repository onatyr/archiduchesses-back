import React, { useState, useEffect } from 'react';
import { PlantsService } from '../services/plants.service';
import { Plant } from '../../../shared/models';
import AddPlantButton from '../components/AddPlantButton';
import { formatDate } from '../utils/date';

const Plants: React.FC = () => {
  const [plants, setPlants] = useState<Plant[]>([]);
  // const [selectedPlant, setSelectedPlant] = useState<Plant | null>(null);

  useEffect(() => {
    const fetchPlants = async () => {
      const plantsData = await new PlantsService().getAll();
      setPlants(plantsData);
    };

    fetchPlants();
  }, []);

  return (
    <div className="container mx-auto p-4 flex flex-col items-start">
      <div className="flex flex-row w-full justify-between">
        <h1 className="text-2xl font-bold text-secondary dark:text-dark-secondary mb-4">
          Plants
        </h1>
        <div>
          <AddPlantButton />
        </div>
      </div>
      <div className="w-full">
        <ul className="flex flex-row flex-wrap gap-4 w-full">
          {plants.map((plant, index) => (
            <li
              key={index}
              className="mb-4 bg-background text-onBackground rounded-lg border border-surface dark:border-dark-surface cursor-pointer hover:bg-surface"
            >
              <div className="flex items-center gap-4">
                <div className="w-24 h-24 overflow-hidden rounded-lg">
                  <img
                    src={plant.imageUrl}
                    alt={plant.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="pr-4">
                  <p className="text-lg font-semibold">{plant.name}</p>
                  <p className="text-sm italic">{plant.family}</p>
                  <p className="text-sm">
                    Adopted on {formatDate(plant.adoptionDate)}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Plants;
