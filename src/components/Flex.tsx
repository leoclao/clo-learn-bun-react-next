import React, { Children } from 'react';
import clsx from 'clsx';
import styles from '@/styles/modules/flex.module.scss';

interface Props {
  children: React.ReactElement;
  // basis?: string | undefined,
  direction?: string | undefined,
  wrap?: string | undefined,
  // flex?: string | undefined,
  // grow?: string | undefined,
  // shrink?: string | undefined,
  gap?: string | undefined
}

const Flex: React.FC<Props> = ({
  children,
  // basis,
  direction,
  wrap,
  // flex,
  // grow,
  // shrink,
  gap
}) => {
  const baseClass = clsx(
    styles.b,
    // !!basis && styles[`${basis}`],
    !!direction && styles[`${direction}`],
    !!wrap && styles[`${wrap}`],
    // !!flex && styles[`${flex}`],
    // !!grow && styles[`${grow}`],
    // !!shrink && styles[`${shrink}`],
    !!gap && styles[`gap${gap}`],
  );
  // return (Children.map(children, child => <div className={baseClass}>{child}</div>));
  return (<div className={baseClass}>{children}</div>);
};

export default Flex;
