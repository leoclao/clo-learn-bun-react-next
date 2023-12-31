import React from "react";

interface Props {
  className: string,
  content: React.ReactNode,
}

export default function Header({ className, content }: Props) {
  return (
    <header className={className}>
      {content}
    </header>
  );
}

// export default Header;
