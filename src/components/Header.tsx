
import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  // Handle scroll effect for header
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300",
        scrolled 
          ? "py-3 md:py-4" 
          : "py-4 md:py-6"
      )}
    >
      <div className="section-container px-4 md:px-6">
        <div className="flex items-center justify-between w-full rounded-full bg-[#16113A] border-2 border-purple-500 py-2 px-6 shadow-[0_0_15px_rgba(168,85,247,0.5)]">
          <a 
            href="#" 
            className="text-lg md:text-xl font-display font-medium text-white transition-opacity hover:opacity-80"
          >
            Portfolio
          </a>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex space-x-8 md:space-x-10 bg-[#29235C]/40 backdrop-blur-sm px-6 py-2 rounded-full">
              {["Projects", "About", "Contact"].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase()}`}
                    className="text-sm font-medium text-white transition-colors hover:text-purple-300"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white focus:outline-none p-2 rounded-full bg-[#29235C]"
          onClick={toggleMenu}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </div>

      {/* Mobile Navigation */}
      {isMobile && (
        <div 
          className={cn(
            "fixed inset-0 bg-[#16113A]/95 z-40 transition-all duration-300 pt-20",
            menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          )}
        >
          <nav className="h-full flex flex-col items-center justify-center">
            <ul className="flex flex-col items-center space-y-8 px-8 py-10 rounded-2xl border-2 border-purple-500 bg-[#29235C] shadow-[0_0_15px_rgba(168,85,247,0.5)]">
              {["Projects", "About", "Contact"].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase()}`}
                    className="text-xl font-medium text-white transition-colors hover:text-purple-300"
                    onClick={closeMenu}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
