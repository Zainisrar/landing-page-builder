import { Facebook, Instagram, Twitter } from "lucide-react";

const footerLinks = [
  {
    links: [
      { label: "How It Works", href: "#how-it-works" },
      { label: "Community", href: "#community" },
      { label: "Features", href: "#features" },
    ],
  },
  {
    links: [
      { label: "Testimonials", href: "#testimonials" },
      { label: "FAQ", href: "#faq" },
      { label: "Contact", href: "#contact" },
    ],
  },
  {
    links: [
      { label: "Blog", href: "#blog" },
      { label: "Design Ideas", href: "#design-ideas" },
      { label: "Professional Designs", href: "#professional-designs" },
    ],
  },
];

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Twitter, href: "#", label: "X" },
];

export const Footer = () => {
  return (
    <footer className="bg-[#1a1a1a] text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-6 py-12 lg:py-16">
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-10">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-md flex items-center justify-center">
              <svg viewBox="0 0 24 24" className="w-5 h-5 text-white" fill="currentColor">
                <path d="M12 3L4 9v12h5v-7h6v7h5V9l-8-6z" />
              </svg>
            </div>
            <span className="text-xl font-bold">
              <span className="text-primary">N</span>eighborbrite
            </span>
          </div>

          {/* Links Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 lg:gap-16">
            {footerLinks.map((column, colIndex) => (
              <div key={colIndex} className="flex flex-col gap-4">
                {column.links.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="text-white/90 hover:text-primary transition-colors font-medium"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            ))}
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="text-white hover:text-primary transition-colors"
              >
                <social.icon className="w-6 h-6" />
              </a>
            ))}
            {/* TikTok icon (not in lucide) */}
            <a href="#" aria-label="TikTok" className="text-white hover:text-primary transition-colors">
              <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
                <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-6 py-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <p className="text-white/60 text-sm">
              © 2025 Neighborbrite. All rights reserved.
            </p>
            <div className="flex items-center gap-8">
              <a href="#" className="text-white/80 hover:text-white text-sm underline underline-offset-2">
                Privacy Policy
              </a>
              <a href="#" className="text-white/80 hover:text-white text-sm underline underline-offset-2">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
