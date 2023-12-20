'use client';

import * as React from 'react';
import { ThemeProvider as NextThemeProvider } from 'next-themes';

type Props = Parameters<typeof NextThemeProvider>[1];

export default function ThemeProviders({ children, ...props }: Props) {
  return <NextThemeProvider {...props}>{children}</NextThemeProvider>
}