import React from "react";

interface Props {
  className: string,
  content: React.ReactNode
}

const Body: React.FC = ({ className, content }) => (
  <div className={className}>
    {content}
  </div>
);

export default Body;
