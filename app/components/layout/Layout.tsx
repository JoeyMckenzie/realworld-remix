import type { PropsWithChildren } from 'react';
import Footer from './Footer';
import Navbar from './Navbar';

export default function Layout({ children }: PropsWithChildren): JSX.Element {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
