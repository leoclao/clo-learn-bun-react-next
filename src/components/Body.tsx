// import React from "react";
interface Props {
  className: string,
  content: React.ReactNode
}

export default function Body({ className, content }: Props) {
  <div className={className}>
    {content}
  </div>
}

// export default Body;
