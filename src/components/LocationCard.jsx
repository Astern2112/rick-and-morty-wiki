import React from 'react';
const LocationCard = ({ location }) => {
  return (
    <div>
      <div className="animate- flex aspect-square flex-col items-center justify-center rounded-full bg-gradient-to-b from-green-600 to-amber-800 p-10 font-bold text-white duration-150 hover:scale-105 hover:ease-in-out">
        <h3 className="text-2xl font-bold">{location.name}</h3>
        <p className="text-base font-medium">Type: {location.type}</p>
        <p className="text-base font-medium">Dimension: {location.dimension}</p>
        <p className="text-base font-medium">
          #Residents: {location.residents.length}
        </p>
      </div>
    </div>
  );
};

export default LocationCard;
