import { useEffect } from "react";
import { cn } from "@/lib/utils";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  links: Array<{ href: string; label: string }>;
  onLinkClick: (href: string) => void;
}

const MobileMenu = ({ isOpen, onClose, links, onLinkClick }: MobileMenuProps) => {
  // Close the menu when clicking outside and handle ESC key
  useEffect(() => {
    if (!isOpen) return;

    const handleEscKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscKey);

    return () => {
      document.removeEventListener("keydown", handleEscKey);
    };
  }, [isOpen, onClose]);

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <div
      className={cn(
        "md:hidden fixed inset-x-0 top-[57px] bg-white dark:bg-gray-800 border-t dark:border-gray-700 transition-all duration-300 ease-in-out",
        isOpen
          ? "opacity-100 translate-y-0 visible"
          : "opacity-0 -translate-y-4 invisible"
      )}
    >
      <div className="container mx-auto px-6 py-3 space-y-2">
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={(e) => {
              e.preventDefault();
              onLinkClick(link.href);
            }}
            className={`block py-2 ${
              link.href === "#home"
                ? "text-primary"
                : "text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary"
            } transition-colors`}
          >
            {link.label}
          </a>
        ))}
        <a
          href="#contact"
          onClick={(e) => {
            e.preventDefault();
            onLinkClick("#contact");
          }}
          className="block mt-4 px-4 py-2 bg-primary hover:bg-primary/90 text-white rounded-md transition-colors text-center"
        >
          Hire Me
        </a>
      </div>
    </div>
  );
};

export default MobileMenu;
