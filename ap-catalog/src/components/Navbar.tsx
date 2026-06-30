import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Menu, X, Search } from 'lucide-react';

const navLinks = [
  { label: 'TRANG CHỦ', to: '/' },
  { label: 'GIỚI THIỆU', to: '/gioi-thieu' },
  { label: 'DỰ ÁN', to: '/du-an' },
  { label: 'BÁO GIÁ', to: '/bao-gia' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navBg = isHome && !scrolled
    ? 'bg-transparent'
    : 'bg-[#f6f3ef] shadow-sm';

  const textColor = isHome && !scrolled ? 'text-white' : 'text-[#4a4035]';

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navBg}`}>
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex-shrink-0 flex items-center gap-2 group">
          <div className={`w-10 h-10 rounded flex items-center justify-center font-bold text-lg tracking-tight transition-all duration-300 ${
            isHome && !scrolled
              ? 'bg-white/20 text-white border border-white/40'
              : 'bg-[#8b7355] text-white'
          }`}>
            VL
          </div>
          <span className={`text-xs font-semibold tracking-[0.15em] transition-colors duration-300 hidden sm:block ${
            isHome && !scrolled ? 'text-white' : 'text-[#4a4035]'
          }`}>
            NGUYỄN VŨ LUÂN
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`text-xs font-semibold tracking-widest transition-colors hover:text-[#8b7355] ${textColor} ${
                location.pathname === link.to ? 'border-b-2 border-[#8b7355] pb-0.5' : ''
              }`}
            >
              {link.label}
            </Link>
          ))}
          <button className={`${textColor} hover:text-[#8b7355] transition-colors`}>
            <Search size={16} />
          </button>
        </nav>

        {/* Mobile menu button */}
        <button
          className={`md:hidden ${textColor}`}
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {open && (
        <div className="md:hidden bg-[#f6f3ef] border-t border-[#e0d8ce] px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setOpen(false)}
              className={`text-xs font-semibold tracking-widest text-[#4a4035] hover:text-[#8b7355] ${
                location.pathname === link.to ? 'text-[#8b7355]' : ''
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
