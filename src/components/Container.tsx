import React, { Children } from 'react';
import clsx from 'clsx';
import styles from '@/styles/modules/container.module.scss';

interface Props {
  children: React.ReactElement;
  modifierClass: string | undefined;
}

const Container: React.FC<Props> = ({ children, modifierClass }) => {
  const baseClass = clsx(
    !modifierClass && styles.b,
    modifierClass
  );

  return <div className={baseClass}>{children}</div>
};

export default Container;
