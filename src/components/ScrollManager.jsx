import { useEffect } from 'react';
import { useLocation } from 'react-router';

// Client-side navigation doesn't scroll by itself: jump to the #hash target, or to the top on a new page.
export default function ScrollManager() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      document.getElementById(decodeURIComponent(hash.slice(1)))?.scrollIntoView();
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
}
