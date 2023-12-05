import React, { Children } from 'react';
import clsx from 'clsx';
import styles from '@/styles/modules/col.module.scss';

interface Props {
  children: React.ReactElement;
  colSpan?: string | undefined;
}

const Col: React.FC<Props> = ({
  children,
  colSpan
}) => {
  const className = clsx(
    !colSpan && styles.base,
    !!colSpan && styles[`span${colSpan}`]
  );

  // return (Children.map(children, child =>
  //   <div className={baseClass}>{child}</div>
  // ));
  return (
    <div className={className}>{children}</div>
  );
}

export default Col;
