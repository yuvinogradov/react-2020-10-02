import React, { useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import Restaurant from '../restaurant';
import Navigation from '../navigation';
import { restaurants } from '../../fixtures';

const Restaurants = ({ restaurants }) => {
  const [activeRestaurantId, setActiveRestaurant] = useState(restaurants[0].id);

  const activeRestaurant = useMemo(
    () => restaurants.find(({ id }) => id === activeRestaurantId),
    [activeRestaurantId, restaurants]
  );

  return (
    <div>
      <Navigation
        restaurants={restaurants}
        onRestaurantClick={setActiveRestaurant}
      />
      <Restaurant restaurant={activeRestaurant} />
    </div>
  );
};

restaurants.propTypes = {
  restaurants: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
    }).isRequired
  ).isRequired,
};

export default Restaurants;
