import type { Metadata } from 'next';
import Link from 'next/link';
import '@/styles/globals.scss';
import TemplateNon from '../templates/non';

export const metadata: Metadata = {
  title: 'Clo - Authentication',
  description: 'Authentication'
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <TemplateNon>
      <main>
        {children}
        <nav>
          <Link href="/auth/login">Login</Link>
          <Link href="/auth/register">Register</Link>
        </nav>
      </main>
    </TemplateNon>
  );
}
