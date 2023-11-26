import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Clo - Người dùng',
  description: 'Đăng nhập'
}

export default function LoginLayout ({ children }: { children: React.ReactNode}) {
  return (
    <section>
      {children}
    </section>
  );
}
