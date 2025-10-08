import { Inter } from 'next/font/google';
import { Footer } from '../footer/footer';
import { Header } from '../header/header';

type LayoutProps = {
  children: React.ReactNode;
};

const inter = Inter({
  subsets: ['latin'],
});

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className={`${inter.className} relative flex min-h-screen flex-col`}>
      <Header />
      <main className="flex-1 flex flex-col pb-12">{children}</main>
      <Footer />
    </div>
  );
};
