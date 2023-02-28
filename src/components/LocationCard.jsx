import React from 'react';
const LocationCard = ({ location }) => {
  return (
    <div>
      <div className="flex aspect-square flex-col items-center justify-center rounded-full bg-gradient-to-br from-blue-700 to-purple-500 p-10 font-bold text-white">
        <h3 className="text-2xl font-bold">{location.name}</h3>
        <p className="text-base font-medium">Type: {location.type}</p>
        <p className="text-base font-medium">Dimension: {location.dimension}</p>
      </div>
    </div>
  );
};

export default LocationCard;
