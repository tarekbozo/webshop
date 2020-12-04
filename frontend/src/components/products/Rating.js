import React from 'react';
import FullStar from '../ui/FullStar';
import Star from '../ui/Star';

export const Rating = ({ value, text }) => {
  return (
    <div className='flex'>
      <span>{value >= 1 ? <FullStar /> : <Star />}</span>
      <span>{value >= 3 ? <FullStar /> : <Star />}</span>
      <span>{value >= 4 ? <FullStar /> : <Star />}</span>
      <span>{value >= 5 ? <FullStar /> : <Star />}</span>
      <span className=' mr-2'>{value >= 6 ? <FullStar /> : <Star />}</span>

      {text && text}
    </div>
  );
};
