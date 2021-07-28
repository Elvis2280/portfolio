import Link from 'next/link';

const Navbar = () => {
  return (
    <div className="h-14">
      <nav className="flex items-center py-3 justify-between text-secondaryLight fixed bg-primary top-0 w-full z-40">
        <div className="layout-component">
          <div className=" flex justify-between font-semibold sm:text-lg md:text-xl">
            <Link href="/">
              <a className="hover:text-neutral transition-all cursor-pointer duration-200 px-1 rounded active:ring-2">
                Home
              </a>
            </Link>
            <Link href="/about">
              <a className="hover:text-neutral transition-all cursor-pointer duration-200 px-1 rounded active:ring-2">
                About Me
              </a>
            </Link>
            <Link href="/blog">
              <a className="hover:text-neutral transition-all cursor-pointer duration-200 px-1 rounded active:ring-2">
                Blog
              </a>
            </Link>
            <Link href="/projects">
              <a className="hover:text-neutral transition-all cursor-pointer duration-200 px-1 rounded active:ring-2">
                Projects
              </a>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
