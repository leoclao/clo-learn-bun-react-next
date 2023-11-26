import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Clo - Người dùng',
  description: 'Thông tin người dùng'
}

export default function UserLayout ({ children }: { children: React.ReactNode}) {
  return (
    <main className={inter.className}>
      User {children}
    </main>
  );
}
