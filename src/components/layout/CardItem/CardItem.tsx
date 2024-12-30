import React, { useState } from 'react';
import './styles.css';
import Button from '../Button/Button.tsx';
import { useDispatch } from 'react-redux';
import Plant from '../../../interfaces/plant.ts';
import { addToCart } from '../../../cartSlice.ts';

interface CardItemProps {
  plant: Plant;
}

const CardItem = ({ plant }: CardItemProps) => {
  const dispatch = useDispatch();
  const [isAdded, setIsAdded] = useState(false);

  const handleAddToCart = (item: Plant) => {
    dispatch(addToCart(item));
    setIsAdded(true);
  };

  return (
    <div className='card-item'>
      <div className="sale">
        <p>SALE</p>
      </div>
      <div className="card-header">
        <h2>{plant.name}</h2>
      </div>
      <div className="card-body">
        <div className="image-container">
          <img src={plant.image} alt={plant.name} />
        </div>
        <p className='card-price'>${plant.cost}</p>
        <p className='card-description'>{plant.description}</p>
        <Button onClick={() => handleAddToCart(plant)} content='Add to cart' isdisabled={isAdded} />
      </div>
    </div>
  );
};

export default CardItem;