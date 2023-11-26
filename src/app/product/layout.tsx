import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Clo - Sản phẩm',
  description: 'Tất cả sản phẩm'
}

export default function ProductLayout ({ children }: { children: React.ReactNode}) {
  return (
    <main className={inter.className}>
      {children}
    </main>
  );
}
