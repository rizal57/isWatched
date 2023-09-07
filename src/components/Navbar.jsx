import NumResults from './NumResults';
import Logo from './Logo';
import Search from './Search';

export default function Navbar() {
  return (
    <nav className="py-2 px-4 bg-blue-400 rounded-md h-[70px] flex items-center justify-between">
      <Logo />
      <Search />
      <NumResults />
    </nav>
  );
}
