import React, { forwardRef } from "react";
import clsx from "clsx";
import styles from "@/styles/modules/header.module.scss";

type MyRef = HTMLElement;
interface Props {
  className: string,
  content: React.ReactNode,
}

// export default function Header({ className, content }: Props) {
const Header = forwardRef<MyRef, Props>(function Header(props: Props, ref: React.Ref<MyRef>): React.ReactElement {
  const className = clsx(styles.base, !!props.className && styles[`${props.className}`]);
    return (
      <header className={className} ref={ref}>
        {props.content}
      </header>
    );
  }
);

export default Header;
