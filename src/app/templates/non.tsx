'use client';

import { useEffect } from "react";
import Components from '@/components';

export default function TemplateNon({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    console.log("Log page view");
  }, []);

  return (
    <Components.ThemeProviders>
      <div className="wrapper">
        {children}
      </div>
    </Components.ThemeProviders>
  );
}
