import React, { Children } from 'react';
import clsx from 'clsx';
import styles from '@/styles/modules/col.module.scss';

interface Props {
  children: React.ReactElement;
  colSpan?: string | undefined;
}

export default function Col({
  children,
  colSpan
}: Props) {
  const className = clsx(
    !colSpan && styles.base,
    !!colSpan && styles[`span${colSpan}`]
  );
  
  return (
    <div className={className}>{children}</div>
  );
}

// export default Col;
