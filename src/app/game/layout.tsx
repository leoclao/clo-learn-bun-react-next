import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Clo - Game',
  description: 'Tic Tac Toe'
}

export default function GameLayout ({ children }: { children: React.ReactNode}) {
  return (
    <main className={inter.className}>
      {children}
    </main>
  );
}
