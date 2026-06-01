"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  CheckCircle,
  Send,
  AlertCircle,
  ArrowRight,
  Shield,
  Heart,
} from "lucide-react";
import { WaveDivider } from "@/components/wave-divider";

const contactInfo = [
  {
    icon: Phone,
    title: "Call Us",
    primary: "(954) 791-4551",
    secondary: "(800) 721-2009",
    description: "Toll-Free 24/7 for emergencies",
    href: "tel:(954)791-4551"
  },
  {
    icon: Mail,
    title: "Email Us",
    primary: "info@accuratehc.net",
    description: "We respond within 24 hours",
    href: "mailto:info@accuratehc.net",
  },
  {
    icon: MapPin,
    title: "Visit Us",
    primary: "6101 W Atlantic Blvd Suite 211",
    secondary: "Margate, FL 33063",
    description: "Our South Florida office",
  },
  {
    icon: Clock,
    title: "Office Hours",
    primary: "Monday - Friday",
    secondary: "9:00 AM - 5:00 PM",
    description: "24/7 On Call Available",
  },
];

const faqs = [
  {
    question: "How quickly can you provide a caregiver?",
    answer:
      "Through our Rapid Response Program, we guarantee a professional caregiver will arrive within 2 hours for urgent situations. For non-emergency requests, care is usually arranged within 24-48 hours.",
  },
  {
    question: "What areas do you serve?",
    answer:
      "We provide home health care services throughout South Florida, including Miami-Dade, Broward, and Palm Beach counties.",
  },
  {
    question: "What types of insurance do you accept?",
    answer:
      "We accept long-term care insurance, worker's compensation, private pay, and all major credit cards. Our team works with families to help minimize out-of-pocket expenses.",
  },
  {
    question: "Are your caregivers licensed and insured?",
    answer:
      "Yes. Our caregivers are screened, trained, and certified. Our agency is licensed by the State of Florida and maintains insurance coverage.",
  },
  {
    question: "Can I meet the caregiver before they start?",
    answer:
      "Yes. We encourage families to meet potential caregivers so everyone feels comfortable and confident before care begins.",
  },
];

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormState({
      name: "",
      email: "",
      phone: "",
      service: "",
      message: "",
    });
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="flex-1">
        {/* Hero */}
        <section className="relative overflow-hidden bg-[#061817]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(0,137,123,0.22),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(0,137,123,0.28),transparent_35%)]" />
          <div className="absolute right-0 top-0 hidden h-full w-[34rem] bg-[radial-gradient(circle,rgba(0,137,123,0.18)_1px,transparent_1px)] [background-size:18px_18px] lg:block" />

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-40 pb-42 lg:pt-44 lg:pb-48">
            <div className="grid lg:grid-cols-[1fr_1.05fr] gap-16 items-center">
              <div>
                <span className="mb-7 inline-flex items-center gap-3 rounded-full bg-primary/25 px-5 py-3 text-sm font-semibold text-white shadow-sm">
                  <Shield className="h-5 w-5 text-white" />
                  Contact Accurate Health Care
                </span>

                <h1 className="max-w-3xl text-5xl sm:text-6xl lg:text-7xl font-bold tracking-[-0.04em] leading-[0.95] text-white mb-7">
                  Let’s Talk About
                  <span className="block text-primary">The Care You Need</span>
                </h1>

                <div className="mb-7 flex items-center gap-3 text-primary">
                  <div className="h-px w-14 bg-primary" />
                  <Heart className="h-5 w-5" />
                  <div className="h-px w-14 bg-primary" />
                </div>

                <p className="text-lg sm:text-xl text-white/80 leading-relaxed max-w-2xl mb-10">
                  Our care coordinators are ready to help you find the right
                  support for your loved one in South Florida.
                </p>

                <div className="flex flex-col sm:flex-row gap-5 mb-14">
                  <Button
                    size="lg"
                    className="h-16 rounded-2xl px-8 text-lg font-semibold shadow-lg"
                    asChild
                  >
                    <Link href="tel:(954)791-4551">
                      <Phone className="mr-3 h-5 w-5" />
                      Call Now
                      <ArrowRight className="ml-3 h-5 w-5" />
                    </Link>
                  </Button>

                  <Button
                    size="lg"
                    variant="outline"
                    className="h-16 rounded-2xl border-white/40 bg-white/5 px-8 text-lg font-semibold text-white hover:bg-white/10"
                    asChild
                  >
                    <Link href="mailto:info@accuratehc.net">
                      <Mail className="mr-3 h-5 w-5" />
                      Email Us
                    </Link>
                  </Button>
                </div>

                <div className="grid sm:grid-cols-3 gap-6 text-white">
                  <div>
                    <p className="text-2xl font-bold">2 Hours</p>
                    <p className="text-sm text-white/65">Rapid Response</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold">24/7</p>
                    <p className="text-sm text-white/65">Emergency Care</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold">Tri-County</p>
                    <p className="text-sm text-white/65">South Florida</p>
                  </div>
                </div>
              </div>

              <div className="relative hidden lg:block">
                <div className="absolute -inset-6 rounded-[2.5rem] bg-primary/20 blur-3xl" />

                <div className="relative rounded-[2rem] border border-white/10 bg-white/10 p-8 shadow-2xl backdrop-blur">
                  <div className="mb-8">
                    <p className="text-primary font-bold tracking-wide text-sm uppercase mb-3">
                      Quick Contact
                    </p>
                    <h2 className="text-3xl font-bold text-white">
                      We’re ready to help.
                    </h2>
                  </div>

                  <div className="space-y-5">
                    {contactInfo.slice(0, 3).map((info) => (
                      <div
                        key={info.title}
                        className="flex gap-4 rounded-2xl border border-white/10 bg-white/10 p-5"
                      >
                        <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-primary text-white">
                          <info.icon className="h-6 w-6" />
                        </div>

                        <div>
                          <p className="font-semibold text-white">{info.title}</p>
                          {info.href ? (
                            <a
                              href={info.href}
                              className="text-white/80 hover:text-primary"
                            >
                              {info.primary}
                            </a>
                          ) : (
                            <p className="text-white/80">{info.primary}</p>
                          )}
                          {info.secondary && (
                            <p className="text-white/60">{info.secondary}</p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
  <WaveDivider />
        </section>

        {/* Contact Cards */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {contactInfo.map((info) => (
                <div
                  key={info.title}
                  className="group rounded-3xl border border-border bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary transition group-hover:bg-primary group-hover:text-white">
                    <info.icon className="h-7 w-7" />
                  </div>

                  <h3 className="text-xl font-bold text-foreground mb-3">
                    {info.title}
                  </h3>

                  {info.href ? (
                    <a
                      href={info.href}
                      className="block font-semibold text-primary hover:underline"
                    >
                      {info.primary}
                    </a>
                  ) : (
                    <p className="font-semibold text-foreground">
                      {info.primary}
                    </p>
                  )}

                  {info.secondary && (
                    <p className="text-muted-foreground">{info.secondary}</p>
                  )}

                  <p className="text-sm text-muted-foreground mt-3">
                    {info.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Form + Map */}
        <section className="py-24 bg-[#f6fbf9]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-12">
              <div>
                <p className="text-primary font-bold tracking-wide text-sm uppercase mb-3">
                  Send a Message
                </p>

                <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-5">
                  Tell us how we can help.
                </h2>

                <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                  Fill out the form and one of our coordinators will contact you
                  within 24 hours to discuss your care needs.
                </p>

                {isSubmitted ? (
                  <div className="rounded-3xl bg-white p-10 border border-border shadow-sm text-center">
                    <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <CheckCircle className="h-8 w-8" />
                    </div>

                    <h3 className="text-2xl font-bold text-foreground mb-4">
                      Thank You!
                    </h3>

                    <p className="text-muted-foreground mb-6">
                      Your message has been received. One of our coordinators
                      will contact you within 24 hours.
                    </p>

                    <Button onClick={() => setIsSubmitted(false)}>
                      Send Another Message
                    </Button>
                  </div>
                ) : (
                  <form
                    onSubmit={handleSubmit}
                    className="rounded-3xl bg-white p-8 border border-border shadow-sm space-y-6"
                  >
                    {error && (
                      <div className="flex items-center gap-2 text-destructive bg-destructive/10 p-4 rounded-xl">
                        <AlertCircle className="h-5 w-5" />
                        <p>{error}</p>
                      </div>
                    )}

                    <div className="grid sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          placeholder="John Doe"
                          value={formState.name}
                          onChange={(e) =>
                            setFormState({ ...formState, name: e.target.value })
                          }
                          required
                          className="h-12 rounded-xl"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="info accuratehc.net"
                          value={formState.email}
                          onChange={(e) =>
                            setFormState({ ...formState, email: e.target.value })
                          }
                          required
                          className="h-12 rounded-xl"
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number *</Label>
                        <Input
                          id="phone"
                          type="tel"
                          placeholder="(555) 123-4567"
                          value={formState.phone}
                          onChange={(e) =>
                            setFormState({ ...formState, phone: e.target.value })
                          }
                          required
                          className="h-12 rounded-xl"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="service">Service Needed</Label>
                        <select
                          id="service"
                          className="flex h-12 w-full rounded-xl border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                          value={formState.service}
                          onChange={(e) =>
                            setFormState({
                              ...formState,
                              service: e.target.value,
                            })
                          }
                        >
                          <option value="">Select a service</option>
                          <option value="hha">Home Health Aide</option>
                          <option value="cna">Certified Nursing Assistant</option>
                          <option value="lpn">Licensed Practical Nurse</option>
                          <option value="rn">Registered Nurse</option>
                          <option value="livein">Live-In Care</option>
                          <option value="companion">Companion Care</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        placeholder="Please describe your care needs..."
                        rows={5}
                        value={formState.message}
                        onChange={(e) =>
                          setFormState({ ...formState, message: e.target.value })
                        }
                        required
                        className="rounded-xl"
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="h-14 w-full rounded-xl text-base font-semibold"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        "Sending..."
                      ) : (
                        <>
                          <Send className="mr-2 h-5 w-5" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                )}
              </div>

              <div className="space-y-8">
                <div>
                  <p className="text-primary font-bold tracking-wide text-sm uppercase mb-3">
                    Visit Our Office
                  </p>

                  <h2 className="text-4xl font-bold text-foreground mb-5">
                    Located in Margate, Florida.
                  </h2>

                  <p className="text-muted-foreground text-lg leading-relaxed">
                    We welcome families to visit our office and speak with our
                    care team about the best support options.
                  </p>
                </div>

                <div className="overflow-hidden rounded-3xl border border-border bg-white shadow-sm">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3582.5878095283!2d-80.21095492374!3d26.243639077021!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d901c7c9c1c8e9%3A0x8b1b1b1b1b1b1b1b!2s6101%20W%20Atlantic%20Blvd%20%23211%2C%20Margate%2C%20FL%2033063!5e0!3m2!1sen!2sus!4v1234567890123"
                    width="100%"
                    height="360"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Accurate Health Care Office Location"
                  />
                </div>

                <div className="relative overflow-hidden rounded-3xl bg-[#061817] p-8 text-white shadow-xl">
                  <div className="absolute right-0 top-0 h-32 w-32 rounded-bl-full bg-primary/20" />

                  <div className="relative">
                    <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary text-white">
                      <Phone className="h-7 w-7" />
                    </div>

                    <h3 className="text-2xl font-bold mb-4">
                      Need Immediate Care?
                    </h3>

                    <p className="text-white/75 mb-6 leading-relaxed">
                      Our Rapid Response Program ensures a professional
                      caregiver can arrive quickly for urgent care needs.
                    </p>

                    <Button size="lg" className="rounded-xl" asChild>
                      <a href="tel:(954) 791-4551">
                        <Phone className="mr-2 h-5 w-5" />
                        (954) 791-4551
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-24 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <p className="text-primary font-bold tracking-wide text-sm uppercase mb-3">
                FAQs
              </p>

              <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-5">
                Frequently Asked Questions
              </h2>

              <p className="text-muted-foreground text-lg leading-relaxed">
                Find answers to common questions about our services.
              </p>
            </div>

            <div className="grid gap-5">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="rounded-3xl border border-border bg-white p-7 shadow-sm"
                >
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    {faq.question}
                  </h3>

                  <p className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}