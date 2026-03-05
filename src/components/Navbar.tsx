
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import haltonLogo from "@/assets/halton-logo.png";
import useScreenSize from "@/hooks/use-screen-size";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const { width } = useScreenSize();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Projects", path: "/projects" },
    { name: "Equipment", path: "/equipment" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  const isTransparentPage = [
    "/about",
    "/services",
    "/projects",
    "/equipment",
    "/contact",
  ].includes(location.pathname);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (width >= 768) {
      setIsOpen(false);
    }
  }, [width]);

  const navClasses = `
    sticky top-0 z-50 transition-all duration-300
    ${isTransparentPage && !isScrolled
      ? "bg-background/15  text-red"
      : "bg-background/95 text-foreground backdrop-blur-sm shadow-[var(--shadow-card)]"
    }
  `;

  const getLinkClasses = (path: string) => `
    hover:text-primary transition-colors font-medium
    ${isActive(path) ? "text-primary" : ""}
  `;

  return (
    <nav className={navClasses}>
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <img
              src={haltonLogo}
              alt="Halton Marine Logo"
              className="h-20 w-auto"
            />
          </Link>

          {width >= 768 ? (
            <div className="flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={getLinkClasses(link.path)}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          ) : (
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          )}
        </div>

        {isOpen && (
          <div className="mt-4 pb-4 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block ${getLinkClasses(link.path)}`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
