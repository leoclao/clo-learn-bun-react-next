import React, { useState, useEffect } from "react";
import clsx from "clsx";
import Types from "@/types";

import styles from "@/styles/modules/navigation.module.scss";

interface Props {
  orientation: Types.Orientations;
  size: Types.Sizes;
  theme: Types.Themes;
  modifierClass?: string;
  children: React.ReactNode;
}

export default function Navigation({
  orientation = "horizontal",
  size = "md",
  theme = "default",
  modifierClass,
  children
}: Props) {
  const isOrientation = () => Object.values(Types.Orientations).includes(orientation) && true;
  const isSizeExists = () => Object.values(Types.Sizes).includes(size) && true;
  const isThemeExists = () => Object.values(Types.Themes).includes(theme) && true;
  const baseClass = clsx(
    styles.base,
    !!isOrientation && styles[`${orientation}`],
    !!isSizeExists && styles[`${size}`],
    !!isThemeExists && styles[`${theme}`],
  );
  <nav className={baseClass}>
    {children}
  </nav>
}