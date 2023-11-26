import React, { Children } from 'react';
import clsx from 'clsx';
import styles from '@/styles/modules/grid.module.scss';

interface Props {
  children: React.ReactElement;
  display: string;
}

const Grid: React.FC<Props> = ({
  children,
  display = 'base',
}) => {
  const baseClass = clsx({
    [`${styles[`${display}`]}`]: !!display
  });
  // return (Children.map(children, child => <div className={baseClass}>{child}</div>));
  return (<div className={baseClass}>{children}</div>);
};

export default Grid;
