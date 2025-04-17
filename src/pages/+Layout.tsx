import { StrictMode } from 'react';
import './Layout.css';

export { Layout };

function Layout({ children }: { children: React.ReactNode }) {
  return <StrictMode>{children}</StrictMode>;
}
