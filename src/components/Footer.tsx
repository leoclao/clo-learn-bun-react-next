import React from "react";

interface Props {
  className: string,
  children: React.ReactElement,
}

export default function Footer({ className, children }: Props) {
  return (
    <header className={className}>
      {children}
    </header>
  );
}
