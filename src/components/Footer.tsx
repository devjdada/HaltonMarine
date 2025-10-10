import { Anchor } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-foreground text-background py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Anchor className="h-8 w-8 text-primary" />
              <h3 className="text-xl font-bold">Halton Marine</h3>
            </div>
            <p className="text-background/80 mb-4 max-w-md">
              Leading indigenous company delivering world-class marine and dredging services 
              across Nigeria since 2014.
            </p>
            <p className="text-sm text-background/60">
              RC 1173334 | Est. February 25, 2014
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection("services")}
                  className="text-background/80 hover:text-primary transition-colors"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("services-detail")}
                  className="text-background/80 hover:text-primary transition-colors"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="text-background/80 hover:text-primary transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-background/80">
              <li>Chiro Plaza, No. 9 Nkpolu Road</li>
              <li>Port Harcourt, Nigeria</li>
              <li className="pt-2">
                <a
                  href="tel:+2348066411573"
                  className="hover:text-primary transition-colors"
                >
                  +234 (0) 806 6411573
                </a>
              </li>
              <li>
                <a
                  href="mailto:nathkenneth@gmail.com"
                  className="hover:text-primary transition-colors"
                >
                  nathkenneth@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-background/20 text-center text-background/60 text-sm">
          <p>
            © {currentYear} Halton Marine and Dredging Services Ltd. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
