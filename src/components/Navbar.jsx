import Logo from './Logo';

export default function Navbar({ children }) {
  return (
    <nav className="py-2 px-4 bg-blue text-white rounded-xl sticky top-2 z-30 h-[70px] flex items-center justify-between gap-2">
      <Logo />
      {children}
    </nav>
  );
}
