import React, { Children } from 'react';
import clsx from 'clsx';
import styles from '@/styles/modules/grid.module.scss';

interface Props {
  children: React.ReactElement;
  cols: string | undefined,
  rows: string | undefined,
  gap: string | undefined
}

export default function Grid({
  children,
  cols,
  rows,
  gap
}: Props) {
  const baseClass = clsx(
    styles.base,
    !!cols && styles[`cols${cols}`],
    !!rows && styles[`rows${rows}`],
    !!gap && styles[`gap${gap}`],
  );
  
  return (<div className={baseClass}>{children}</div>);
};

// export default Grid;
