import React from "react";

interface Props {
  className: string,
  content: React.ReactNode,
}

const Header: React.FC = ({ className, content }) => (
  <header className={className}>
    {content}
  </header>
);

export default Header;
