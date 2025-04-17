import { StrictMode } from 'react';
import './Layout.css';
import { Nav } from '../components/Nav';
import { Footer } from '../components/Footer';

export { Layout };

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <StrictMode>
      <div className="bg-bg-top min-h-dvh">
        <Nav />
        {children}
        <Footer className="mt-8 sm:mt-48" />
      </div>
    </StrictMode>
  );
}
