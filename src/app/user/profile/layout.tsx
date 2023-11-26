import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Clo - Người dùng',
  description: 'Thông tin người dùng'
}

export default function ProfileLayout ({ children }: { children: React.ReactNode}) {
  return (
    <>
      <aside>aside</aside>
      {children}
    </>
  );
}
