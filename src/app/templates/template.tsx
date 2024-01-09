'use client';

import { useEffect } from "react";
import Components from '@/components';

export default function Template({ children, headerRef, headerClass, footerRef }: { children: React.ReactNode }) {
  // useEffect(() => {
  //   console.log("Log page view");
  // }, []);
  // const headerRef = useRef();

  return (
    <Components.ThemeProviders>
      <div className="wrapper">
        <Components.Header className={headerClass} content="Header" ref={headerRef} />
        {children}
        <Components.Footer className="footer" ref={footerRef} content="Footer" />
      </div>
    </Components.ThemeProviders>
  );
}
