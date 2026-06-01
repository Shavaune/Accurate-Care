"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Phone, Menu, X, Clock, MapPin, Mail } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "About Us", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);800

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Top Bar */}
      <motion.div
        initial={{ y: -40 }}
        animate={{ y: scrolled ? -40 : 0 }}
        transition={{ duration: 0.3 }}
        className="bg-primary text-primary-foreground"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between py-2 gap-2 text-sm">
            <div className="flex items-center gap-6 flex-wrap justify-center">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>On Call: (954) 791-4551</span>
              </div>
              <div className="hidden md:flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span>info@accuratehc.net</span>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>Mon-Fri: 9AM - 5PM</span>
              </div>
              <div className="hidden sm:flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>South Florida</span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Main Navigation - Glassmorphism */}
      <motion.nav
        initial={{ y: 0 }}
        animate={{
          y: scrolled ? -40 : 0,
          backgroundColor: scrolled
            ? "rgba(255, 255, 255, 0.95)"
            : "rgba(255, 255, 255, 0.7)",
        }}
        transition={{ duration: 0.3 }}
        className={`backdrop-blur-xl border-b transition-all duration-300 ${
          scrolled ? "border-border shadow-soft" : "border-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="relative w-12 h-12"
              >
                <Image
                  src="/images/logo.png"
                  alt="Accurate Health Care Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </motion.div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-foreground">
                  Accurate Health Care
                </span>
                <span className="text-xs text-muted-foreground hidden sm:block">
                  Kind, Professional Care Givers
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="relative text-foreground/80 hover:text-primary font-medium transition-colors group py-2"
                >
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
                </Link>
              ))}
            </div>

            {/* CTA Button with Glow */}
            <div className="hidden lg:flex items-center gap-4">
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button
                  asChild
                  size="lg"
                  className="glow bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary"
                >
                  <Link href="/contact">
                    <Phone className="mr-2 h-4 w-4" />
                    Get Care Now
                  </Link>
                </Button>
              </motion.div>
            </div>

            {/* Mobile menu button */}
            <button
              type="button"
              className="lg:hidden p-2 text-foreground rounded-xl hover:bg-muted transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden overflow-hidden bg-card/95 backdrop-blur-xl border-t border-border"
            >
              <div className="flex flex-col gap-2 p-4">
                {navigation.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      href={item.href}
                      className="px-4 py-3 text-foreground hover:bg-muted rounded-xl transition-colors block"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: navigation.length * 0.1 }}
                  className="pt-2"
                >
                  <Button asChild className="w-full glow">
                    <Link href="/contact">
                      <Phone className="mr-2 h-4 w-4" />
                      Get Care Now
                    </Link>
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </header>
  );
}
