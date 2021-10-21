import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { RevieModel } from '../../interfaces/product.interface';

export interface ReviewProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  review: RevieModel;
}
