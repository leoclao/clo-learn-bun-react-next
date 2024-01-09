import React, { forwardRef } from "react";

type MyRef = HTMLElement;
interface Props {
  className: string;
  content: React.ReactNode;
}

// export default function Footer({ className, children }: Props) {
const Footer = forwardRef<MyRef, Props>(function Footer(props: Props, ref: React.Ref<MyRef>): React.ReactElement {
  return (
    <footer className={props.className} ref={ref}>
      {props.content}
    </footer>
  );
}
);

export default Footer;
