import { useEffect, useState, KeyboardEvent } from 'react';
import cn from 'classnames';
import { uniqueId } from 'lodash';
import { RatingProps } from './Rating.props';
import StarIcon from './star.svg';
import styles from './Rating.module.css';

export const Rating = ({ isEditable = false, rating, setRating, ...props }: RatingProps): JSX.Element => {
  const [ratingArray, setRatingArray] = useState<JSX.Element[]>(new Array(5).fill(<></>));

  useEffect(() => {
    constructRating(rating);
  }, [rating]);

  const constructRating = (currentRating: number) => {
    const updateArray = ratingArray.map((r: JSX.Element, i: number) => {
      return (
        <span 
          className={cn(styles.star, {
              [styles.filled]: i < currentRating,
              [styles.editable]: isEditable
            })}
          onMouseEnter={() => changeDisplay(i + 1)}
          onMouseLeave={() => changeDisplay(rating)}
          onClick={() => onClick(i + 1)}
        >
          <StarIcon 
            tabIndex={isEditable ? 0 : -1}
            onKeyDown={(e: KeyboardEvent<SVGAElement>) => isEditable && handleSpace(i + 1, e)}
          />
        </span>
      );
    });
    
    setRatingArray(updateArray);
  };

  const changeDisplay = (num: number) => {
    if (!isEditable) {
      return;
    }
    
    constructRating(num);
  };

  const onClick = (num: number) => {
    if (!isEditable || !setRating) {
      return;
    }
    
    setRating(num);
  };

  const handleSpace = (num: number, e: KeyboardEvent<SVGAElement>) => {
    if (e.code !== 'Space' || !setRating) {
      return;
    }

    setRating(num);
  };

  const preparation = ratingArray.map((item) => <span key={uniqueId()}>{item}</span>);

  return (
    <div {...props}>
      {preparation}
    </div>
  );
};