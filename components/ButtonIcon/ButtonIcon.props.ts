import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';
import up from '../../helpers/icons/up.svg';
import close from '../../helpers/icons/close.svg';
import menu from '../../helpers/icons/menu.svg';

export const icons = {
  up,
  close,
  menu,
};

export type IconName = keyof typeof icons;

export interface ButtonIconProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  appearance: 'primary' | 'white';
  icon: IconName;
}
