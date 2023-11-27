import React from "react";
import clsx from "clsx";
import { Size } from "@/types"
import styles from "@/styles/modules/collapse.module.scss";
import Header from "./Header";
import Body from "./Body";

interface Props {
  isHorizontal: boolean,
  isCollapsed: boolean,
  header: React.ReactNode,
  body: React.ReactNode,
  // size?: Size
}

const Collapse: React.FC<Props> = ({
  isHorizontal = false,
  isCollapsed = false,
  header,
  body
  // size = 'md'
}) => {
  const baseClass = clsx(
    styles.base,
    !isHorizontal && styles.vertical,
    !!isHorizontal && styles.horizontal,
    // size && styles[`${size}`],
    !!isCollapsed && styles.collapsed
  )
  return (
    <div className={baseClass}>
      {header && <Header className={styles.header} content={header} />}
      
      {body && <Body className={styles.body} content={body} />}
    </div>
  );
};

export default Collapse;
