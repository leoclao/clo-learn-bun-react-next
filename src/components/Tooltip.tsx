import React, { useState, useLayoutEffect } from "react";
import clsx from "clsx";
import Types from "@/types";
import styles from "@/styles";

interface Props {
  animate: string;
  className: string;
  position: Types.Positions;
  size: Types.Sizes;
  theme: Types.Themes;
  children: React.ReactNode;
}

export default function Tooltip({
  animate,
  className,
  position,
  size,
  theme,
  children
}: Props) {
  const isPositionExists = () => Object.values(Types.Positions).includes(position) && true;
  const isSizeExists = () => Object.values(Types.Sizes).includes(size) && true;
  const isThemeExists = () => Object.values(Types.Themes).includes(theme) && true;
  const baseClass = clsx(
    styles.base,
    !!isPositionExists && styles[`${position}`],
    !!isSizeExists && styles[`${size}`],
    !!isThemeExists && styles[`${size}`],
    !!animate && styles[`${animate}`]
  );
  const wrapperClass = clsx(styles[`${wrap}`]);
  const contentClass = clsx(styles[`${content}`]);
  return (
    <div className={baseClass}>
      <div className={wrapperClass}>
        <div className={contentClass}>{children}</div>
      </div>
    </div>
  );
}
