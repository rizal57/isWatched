import NumResults from './NumResults';
import Logo from './Logo';
import Search from './Search';

export default function Navbar() {
  return (
    <nav className="py-2 px-4 bg-blue text-white rounded-xl sticky top-2 z-30 h-[70px] flex items-center justify-between">
      <Logo />
      <Search />
      <NumResults />
    </nav>
  );
}
