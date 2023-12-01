// 'use client';
// import { useState, useEffect } from 'react';
// import { useState, useEffect } from 'react';
import Components from '@/components';

// import Collapse from "@/components/Collapse";

export default function Login() {
  // const [isClient, setIsClient] = useState(false);

  // useEffect(() => {setIsClient(true)}, []);

  const collapseHeader = <h2>Collapse Header</h2>;
  const collapseBody = <p>Collapse Body</p>;

  return (
    <div>
      <Components.Collapse
        header={collapseHeader}
        body={collapseBody}
      />
    </div>
  )
}