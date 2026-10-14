import { useState } from 'react';
import { useLocation } from 'react-router';
import { Menu, X } from 'lucide-react';
import Container from './Container.jsx';
import Logo from './Logo.jsx';
import Navigation from './Navigation.jsx';
import IconButton from './IconButton.jsx';

export default function Header() {
  const [open, setOpen] = useState(false);
  // On the home page the header floats transparently over the video hero.
  const overlay = useLocation().pathname === '/';

  return (
    <header id="home" className={overlay ? 'absolute inset-x-0 top-0 z-20' : ''}>
      <Container className="relative flex items-center justify-between pt-6 sm:pt-9 lg:pt-[38px]">
        <Logo variant={overlay ? 'light' : 'dark'} />

        <nav aria-label="Principal" className="hidden md:block">
          <Navigation className={`flex items-center gap-9 text-[16px] ${overlay ? 'text-white' : 'text-ink'}`} />
        </nav>

        <IconButton
          label={open ? 'Fechar menu' : 'Abrir menu'}
          icon={open ? X : Menu}
          className={`md:hidden ${overlay ? 'text-white! hover:bg-white/10' : ''}`}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        />

        {open && (
          <nav
            id="mobile-menu"
            aria-label="Menu móvel"
            className="absolute inset-x-5 top-full z-20 mt-3 rounded-2xl border border-black/5 bg-white p-2 shadow-[0_8px_24px_rgba(0,0,0,0.06)] md:hidden"
          >
            <Navigation
              className="flex flex-col text-[16px]"
              linkClassName="block rounded-xl px-4 py-3 hover:bg-card"
              onNavigate={() => setOpen(false)}
            />
          </nav>
        )}
      </Container>
    </header>
  );
}
