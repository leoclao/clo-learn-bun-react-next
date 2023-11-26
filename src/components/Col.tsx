import React, { Children } from 'react';
import clsx from 'clsx';
import styles from '@/styles/modules/col.module.scss';

interface Props {
  children: React.ReactElement;
  colSpan?: number;
}

const Col: React.FC<Props> = ({
  children,
  colSpan
}) => {
  const baseClass = clsx(styles.base);

  return (Children.map(children, child =>
    <div className={baseClass}>{child}</div>
  ));
}

export default Col;
