'use client';

import { useEffect } from "react";
import Components from '@/components';

export default function TemplateNonHeader({ children }: { children: React.ReactNode }) {
  // useEffect(() => {
  //   console.log("Log page view");
  // }, []);

  return (
    <Components.ThemeProviders>
      <div className="wrapper">
        {children}
        <footer>footer</footer>
      </div>
    </Components.ThemeProviders>
  );
}
