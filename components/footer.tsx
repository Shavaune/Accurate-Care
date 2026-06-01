"use client";

import Link from "next/link";
import Image from "next/image";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  AlertCircle,
} from "lucide-react";
import { motion } from "framer-motion";

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "About Us", href: "/about" },
  { name: "Contact Us", href: "/contact" },
];

const services = [
  "Skilled Nursing",
  "Home Health Aides",
  "Physical Therapy",
  "Companion Care",
  "Medication Management",
  "CNA & RN Staffing",
];

const serviceAreas = [
  "Miami-Dade County",
  "Broward County",
  "Palm Beach County",
];

export function Footer() {
  return (
    <footer className="relative bg-gradient-to-b from-foreground to-foreground/95 text-background overflow-hidden">
      {/* Decorative gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-primary/5 pointer-events-none" />

      {/* Emergency Hotline Banner */}
      <div className="relative border-b border-background/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <div className="flex items-center gap-2 text-primary">
              <AlertCircle className="h-5 w-5 animate-pulse" />
              <span className="font-semibold">24/7 Emergency Hotline</span>
            </div>
            <a
              href="tel:8007212009"
              className="text-2xl font-bold text-background hover:text-primary transition-colors"
            >
              (954) 791-4551
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2 space-y-6">
            <Link href="/" className="flex items-center gap-3 group">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="relative w-14 h-14 bg-background rounded-2xl p-1 shadow-lg"
              >
                <Image
                  src="/images/logo.png"
                  alt="Accurate Health Care Logo"
                  fill
                  className="object-contain p-1"
                />
              </motion.div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold">Accurate Health Care</span>
                <span className="text-sm text-background/70">Since 1994</span>
              </div>
            </Link>
            <p className="text-background/80 leading-relaxed max-w-md">
              Providing compassionate, professional home health care services to
              South Florida families for over 30 years. Your loved ones deserve
              exceptional care in the comfort of their home.
            </p>
            <div className="flex items-center gap-4">
              {[
                { icon: Facebook, label: "Facebook" },
                { icon: Twitter, label: "Twitter" },
                { icon: Instagram, label: "Instagram" },
                { icon: Linkedin, label: "LinkedIn" },
              ].map(({ icon: Icon, label }) => (
                <motion.a
                  key={label}
                  href="#"
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="w-10 h-10 rounded-xl bg-background/10 hover:bg-primary/20 flex items-center justify-center text-background/70 hover:text-primary transition-colors"
                  aria-label={label}
                >
                  <Icon className="h-5 w-5" />
                </motion.a>
              ))}
            </div>
            <div className="text-sm text-background/60 space-y-1">
              <p>License: #HHA21627096</p>
              <p>Established: December 14, 1994</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-background/70 hover:text-primary transition-colors inline-flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/50 group-hover:bg-primary transition-colors" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Our Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li
                  key={service}
                  className="text-background/70 flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-primary/50" />
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-sm text-background/60">
                    On Call
                  </p>
                  <a
                    href="tel:8007212009"
                    className="text-background hover:text-primary transition-colors font-semibold"
                  >
                    (954) 791-4551
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-sm text-background/60">Email</p>
                  <a
                    href="mailto:info@accuratehc.net"
                    className="text-background hover:text-primary transition-colors"
                  >
                    info@accuratehc.net
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-sm text-background/60">
                    Location
                  </p>
                  <p className="text-background/80 text-sm">
                    6101 W Atlantic Blvd
                    <br />
                    Suite 211, Margate, FL
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <Clock className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-sm text-background/60">Hours</p>
                  <p className="text-background/80 text-sm">Mon - Fri: 9AM - 5PM</p>
                  <p className="text-primary font-medium text-sm">
                    24/7 Emergency Care
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Service Areas */}
      <div className="relative border-t border-background/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <MapPin className="h-5 w-5 text-primary" />
              <span className="font-semibold">Service Areas:</span>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              {serviceAreas.map((area) => (
                <span
                  key={area}
                  className="px-4 py-2 bg-background/10 rounded-full text-sm text-background/80"
                >
                  {area}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Mission Statement */}
      <div className="relative border-t border-background/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <h4 className="font-semibold mb-3 text-primary">Our Mission</h4>
            <p className="text-background/70 max-w-3xl mx-auto text-sm leading-relaxed">
              Accurate Health Care will provide care in a dignified and
              respectful manner to all our clients in their time of need. We
              will provide services to all clients regardless of race, creed,
              color, national origin, handicap, religion, age, gender, sexual
              preference or source of payment.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative border-t border-background/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-background/60 text-sm">
              &copy; {new Date().getFullYear()} Accurate Health Care, Inc. All
              rights reserved.
            </p>
            <div className="flex items-center gap-6 text-sm">
              <Link
                href="#"
                className="text-background/60 hover:text-primary transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="#"
                className="text-background/60 hover:text-primary transition-colors"
              >
                Terms of Service
              </Link>
              <Link
                href="#"
                className="text-background/60 hover:text-primary transition-colors"
              >
                HIPAA Compliance
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
