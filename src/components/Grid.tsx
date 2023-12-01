import React, { Children } from 'react';
import clsx from 'clsx';
import styles from '@/styles/modules/grid.module.scss';

interface Props {
  children: React.ReactElement;
  cols: string | undefined,
  rows: string | undefined,
  gap: string | undefined
}

const Grid: React.FC<Props> = ({
  children,
  cols,
  rows,
  gap
}) => {
  const baseClass = clsx(
    styles.base,
    !!cols && styles[`cols${cols}`],
    !!rows && styles[`rows${rows}`],
    !!gap && styles[`gap${gap}`],
  );
  // return (Children.map(children, child => <div className={baseClass}>{child}</div>));
  return (<div className={baseClass}>{children}</div>);
};

export default Grid;
