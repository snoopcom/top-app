import cn from 'classnames';
import { CardProps } from './Card.props';
import styles from './Card.module.css';
import { ForwardedRef, forwardRef } from 'react';

export const Card = forwardRef(
  (
    { color = 'white', className, children, ...props }: CardProps,
    ref: ForwardedRef<HTMLDivElement>
  ): JSX.Element => {
    return (
      <div
        className={cn(styles.card, className, {
          [styles.blue]: color === 'blue',
        })}
        {...props}
        ref={ref}
      >
        {children}
      </div>
    );
  }
);
