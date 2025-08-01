import Link from "next/link";

const Header = () => {
  return (
    <header className="px-8 pt-8">
      <nav className="flex items-center justify-start gap-6">
        <Link 
          href="#" 
          className="text-sm font-medium text-black hover:text-[#FF1493] transition-colors"
        >
          Info
        </Link>
        <Link 
          href="#" 
          className="text-sm font-medium text-black hover:text-[#FF1493] transition-colors"
        >
          Contact
        </Link>
        <Link 
          href="#" 
          className="text-sm font-medium text-black hover:text-[#FF1493] transition-colors"
        >
          Instagram
        </Link>
        <Link 
          href="#" 
          className="text-sm font-medium text-black hover:text-[#FF1493] transition-colors"
        >
          Dribbble
        </Link>
      </nav>
    </header>
  );
};

export default Header;