"use client";

import { useRef, useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Phone,
  Shield,
  Heart,
  Users,
  Award,
  ChevronRight,
  Zap,
  CheckCircle,
  ArrowRight,
  Clock,
  Star,
  Stethoscope,
  Activity,
  Pill,
  UserCheck,
  Quote,
  BadgeCheck,
  CalendarCheck,
  HeartHandshake,
} from "lucide-react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { motion, useInView, useAnimation } from "framer-motion";

// Animated counter hook
function useCounter(end: number, duration: number = 2000, startOnView: boolean = true) {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (startOnView && isInView && !hasStarted) {
      setHasStarted(true);
      let startTime: number;
      const animate = (currentTime: number) => {
        if (!startTime) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / duration, 1);
        setCount(Math.floor(progress * end));
        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };
      requestAnimationFrame(animate);
    }
  }, [isInView, end, duration, hasStarted, startOnView]);

  return { count, ref };
}

const stats = [
  { value: 30, suffix: "+", label: "Years Experience", icon: Award },
  { value: 64000, suffix: "+", label: "Clients Served", icon: Users },
  { value: 100, suffix: "%", label: "Licensed Professionals", icon: BadgeCheck },
  { value: 24, suffix: "/7", label: "Support Available", icon: Clock },
];

const services = [
  {
    icon: Stethoscope,
    title: "Skilled Nursing",
    description: "Expert RN and LPN care for complex medical needs and health monitoring.",
  },
  {
    icon: HeartHandshake,
    title: "Home Health Aides",
    description: "Personal care assistance with daily activities and mobility support.",
  },
  {
    icon: Activity,
    title: "Physical Therapy",
    description: "Rehabilitation services to restore strength and independence.",
  },
  {
    icon: Heart,
    title: "Companion Care",
    description: "Emotional support and companionship for social wellbeing.",
  },
  {
    icon: Pill,
    title: "Medication Management",
    description: "Safe medication administration and monitoring programs.",
  },
  {
    icon: UserCheck,
    title: "RN LPN CNA HHA Staffing",
    description: "Flexible staffing solutions for facilities and homes.",
  },
];

const whyChooseUs = [
  "Compassionate, trained caregivers",
  "Personalized treatment plans",
  "Fast 2-hour response times",
  "Affordable care options",
  "Family-centered approach",
  "24/7 On Call Availability",
];

const testimonials = [
  {
    name: "Maria Rodriguez",
    role: "Family Member",
    content: "Accurate Health Care has been a blessing for our family. The nurses are incredibly compassionate and professional. My mother receives the best care in her own home.",
    rating: 5,
  },
  {
    name: "James Thompson",
    role: "Patient",
    content: "After my surgery, the home health aides helped me recover quickly. They treated me with dignity and respect. I highly recommend their services.",
    rating: 5,
  },
  {
    name: "Sandra Williams",
    role: "Daughter",
    content: "The rapid response team was there within 2 hours when we needed them. Their professionalism and kindness made a difficult time much easier.",
    rating: 5,
  },
];

const trustIndicators = [
  { icon: Shield, text: "Licensed & Insured & Bonded" },
  { icon: Clock, text: "24/7 On Call Availability" },
  { icon: Users, text: "Over 64,000 Clients Served" },
  { icon: Award, text: "Serving 3 Counties" },
];

function StatCard({ stat, index }: { stat: typeof stats[0]; index: number }) {
  const { count, ref } = useCounter(stat.value, 2000);
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative group"
    >
      <div className="neumorphic rounded-3xl p-8 text-center hover:shadow-soft-lg transition-all duration-300 border border-border/50">
        <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 text-primary mb-4 group-hover:scale-110 transition-transform">
          <stat.icon className="h-7 w-7" />
        </div>
        <p className="text-4xl lg:text-5xl font-bold text-foreground mb-2">
          {stat.value === 64000 ? count.toLocaleString() : count}
          {stat.suffix}
        </p>
        <p className="text-muted-foreground font-medium">{stat.label}</p>
      </div>
    </motion.div>
  );
}

function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      className="group"
    >
      <div className="relative bg-card rounded-3xl p-8 shadow-soft hover:shadow-soft-lg transition-all duration-300 border border-border/50 h-full">
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        <div className="relative">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-primary/80 text-primary-foreground mb-6 shadow-lg group-hover:shadow-xl group-hover:scale-105 transition-all">
            <service.icon className="h-7 w-7" />
          </div>
          <h3 className="text-xl font-semibold text-foreground mb-3">
            {service.title}
          </h3>
          <p className="text-muted-foreground leading-relaxed">
            {service.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

function TestimonialCard({ testimonial, index }: { testimonial: typeof testimonials[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className="relative"
    >
      <div className="glass rounded-3xl p-8 border border-border/30 h-full">
        <div className="absolute -top-4 left-8">
          <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
            <Quote className="h-5 w-5 text-primary" />
          </div>
        </div>
        <div className="flex items-center gap-1 mb-4 pt-2">
          {[...Array(testimonial.rating)].map((_, i) => (
            <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />
          ))}
        </div>
        <p className="text-foreground/90 leading-relaxed mb-6 italic">
          &quot;{testimonial.content}&quot;
        </p>
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/30 to-primary/10 flex items-center justify-center text-primary font-semibold">
            {testimonial.name[0]}
          </div>
          <div>
            <p className="font-semibold text-foreground">{testimonial.name}</p>
            <p className="text-sm text-muted-foreground">{testimonial.role}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1 pt-[120px]">
        {/* Hero Section */}
        <section className="relative min-h-[90vh] flex items-center overflow-hidden">
          {/* Background */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/hero-care-bright.jpg"
              alt="Compassionate home health care"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/40" />
            <div className="absolute inset-0 animated-gradient" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Left Content */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary/10 backdrop-blur-sm rounded-full text-primary border border-primary/20 mb-8"
                >
                  <Award className="h-4 w-4" />
                  <span className="text-sm font-semibold">
                    Trusted Home Healthcare Since 1994
                  </span>
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6"
                >
                  <span className="block text-balance">Compassionate Care</span>
                  <span className="gradient-text">In The Comfort Of Home</span>
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="text-xl text-muted-foreground mb-10 leading-relaxed max-w-xl"
                >
                  Providing skilled nursing, home health aides, therapy, and
                  personalized care services across South Florida with dignity,
                  professionalism, and heart.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="flex flex-col sm:flex-row gap-4 mb-12"
                >
                  <Button
                    size="lg"
                    className="text-lg px-8 py-7 glow bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary rounded-2xl"
                    asChild
                  >
                    <Link href="/contact">
                      <CalendarCheck className="mr-2 h-5 w-5" />
                      Call Us Today!
                    </Link>
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="text-lg px-8 py-7 rounded-2xl border-2 hover:bg-muted"
                    asChild
                  >
                    <Link href="/services">
                      Explore Services
                      <ChevronRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                </motion.div>

                {/* Trust Indicators */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  className="grid grid-cols-2 gap-4"
                >
                  {trustIndicators.map((item, index) => (
                    <motion.div
                      key={item.text}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.7 + index * 0.1 }}
                      className="flex items-center gap-3 text-muted-foreground"
                    >
                      <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                        <item.icon className="h-4 w-4 text-primary" />
                      </div>
                      <span className="text-sm font-medium">{item.text}</span>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>

              {/* Right Content - Floating Card */}
              <motion.div
                initial={{ opacity: 0, x: 50, y: 20 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="hidden lg:block"
              >
                <div className="relative">
                  <div className="glass rounded-3xl p-8 border border-border/50 shadow-soft-lg">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center text-primary-foreground">
                        <Phone className="h-7 w-7" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">
                          24/7 On Call Availability
                        </p>
                        <p className="text-2xl font-bold text-foreground">
                           (954) 791-4551
                        </p>
                      </div>
                    </div>
                    <div className="space-y-4 mb-6">
                      <div className="flex items-center justify-between p-4 bg-muted/50 rounded-2xl">
                        <span className="text-muted-foreground">Rapid Response</span>
                        <span className="font-bold text-primary">2 Hours</span>
                      </div>
                      <div className="flex items-center justify-between p-4 bg-muted/50 rounded-2xl">
                        <span className="text-muted-foreground">Clients Served</span>
                        <span className="font-bold text-foreground">64,000+</span>
                      </div>
                      <div className="flex items-center justify-between p-4 bg-muted/50 rounded-2xl">
                        <span className="text-muted-foreground">Experience</span>
                        <span className="font-bold text-foreground">30+ Years</span>
                      </div>
                    </div>
                    <Button className="w-full py-6 rounded-2xl glow" asChild>
                      <Link href="/contact">
                        Request Free Consultation
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </Link>
                    </Button>
                  </div>
                  
                  {/* Decorative Elements */}
                  <div className="absolute -top-6 -right-6 w-24 h-24 bg-primary/10 rounded-full blur-2xl" />
                  <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-primary/5 rounded-full blur-3xl" />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-24 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <p className="text-primary font-semibold mb-4">Our Track Record</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground text-balance">
                Trusted By Thousands of Families
              </h2>
            </motion.div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <StatCard key={stat.label} stat={stat} index={index} />
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-24 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <p className="text-primary font-semibold mb-4">Our Services</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6 text-balance">
                Comprehensive Home Health Care Solutions
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                From skilled nursing to companion care, we provide a full range
                of services tailored to meet your unique needs.
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <ServiceCard key={service.title} service={service} index={index} />
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mt-12"
            >
              <Button size="lg" variant="outline" className="rounded-2xl px-8" asChild>
                <Link href="/services">
                  View All Services
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-24 bg-secondary/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="relative rounded-3xl overflow-hidden shadow-soft-lg">
                  <Image
                    src="/images/service-nursing.jpg"
                    alt="Professional nursing care"
                    width={600}
                    height={500}
                    className="object-cover w-full h-[500px]"
                  />
                </div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="absolute -bottom-8 -right-8 glass rounded-2xl p-6 shadow-soft-lg border border-border/50 max-w-xs"
                >
                  <div className="flex items-center gap-4 mb-3">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center text-primary-foreground">
                      <Zap className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="font-bold text-foreground">Rapid Response</p>
                      <p className="text-sm text-muted-foreground">2-Hour Guarantee</p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    When things happen unexpectedly, a professional caregiver
                    arrives within 2 hours.
                  </p>
                </motion.div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <p className="text-primary font-semibold mb-4">Why Choose Us</p>
                <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6 text-balance">
                  Exceptional Care That Makes a Difference
                </h2>
                <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                  At Accurate Health Care, we combine professional expertise with
                  genuine compassion. Our personalized approach ensures your loved
                  ones receive the dignified care they deserve.
                </p>

                <div className="grid sm:grid-cols-2 gap-4 mb-8">
                  {whyChooseUs.map((item, index) => (
                    <motion.div
                      key={item}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center gap-3 p-3 bg-card rounded-xl border border-border/50"
                    >
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                      <span className="text-foreground text-sm font-medium">{item}</span>
                    </motion.div>
                  ))}
                </div>

                <Button size="lg" className="rounded-2xl glow" asChild>
                  <Link href="/about">
                    Learn More About Us
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-24 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <p className="text-primary font-semibold mb-4">Testimonials</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6 text-balance">
                What Families Say About Us
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Our commitment to exceptional care has earned the trust of thousands
                of families across South Florida.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <TestimonialCard
                  key={testimonial.name}
                  testimonial={testimonial}
                  index={index}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/95 to-primary/90" />
          <div className="absolute inset-0 animated-gradient opacity-30" />
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6 text-balance">
                Your Loved Ones Deserve Exceptional Care
              </h2>
              <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto mb-10 leading-relaxed">
                Contact us today for a free consultation. Our caring team is
                ready to create a personalized care plan for your family.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Button
                    size="lg"
                    variant="secondary"
                    className="text-lg px-10 py-7 rounded-2xl shadow-lg"
                    asChild
                  >
                    <Link href="/contact">
                      <Phone className="mr-2 h-5 w-5" />
                      Call (954) 791-4551 / (800) 721-2009  
                    </Link>
                  </Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Button
                    size="lg"
                    variant="outline"
                    className="text-lg px-10 py-7 rounded-2xl border-2 border-primary-foreground/30 text-primary-foreground bg-transparent hover:bg-primary-foreground/10"
                    asChild
                  >
                    <Link href="/contact">Schedule Consultation</Link>
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
