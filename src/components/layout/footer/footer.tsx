import Link from 'next/link';
import { Logo } from '../../logo/logo';

export const Footer = () => {
  return (
    <footer className="bg-gray-500">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:py-8">
        <div className="flex justify-between md: flex-row gap-2">
          <Logo />
          <nav className="flex flex-col md:flex-row items-center gap-4 text-sm text-blue-100">
            <Link href="/temos-de-uso" className="text-sm hover:text-blue-200">
              Termos de uso
            </Link>
            <Link href="/politica-de-privacidade" className="text-sm hover:text-blue-200">
              Politica de privacidade
            </Link>
            <Link href="/feedback" className="text-sm hover:text-blue-200">
              Feedback
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
};
