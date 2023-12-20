'use client';

import { useEffect } from "react";
import Components from '@/components';

export default function Template({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    console.log("Log page view");
  }, []);

  return (
    <Components.ThemeProviders>
      <div className="wrapper">
        <Components.Header className="header" content="Header" />
        {children}
        <footer>footer</footer>
      </div>
    </Components.ThemeProviders>
  );
}
