import { Metadata } from "next";
import Link from "next/link";
import { WaveDivider } from "@/components/wave-divider";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import {
  Phone,
  Users,
  Heart,
  Shield,
  Award,
  Clock,
  Stethoscope,
  Home,
  Pill,
  Activity,
  CheckCircle,
  ArrowRight,
  CreditCard,
  MapPin,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Our Services | Accurate Health Care, Inc.",
  description:
    "Comprehensive home health care services including Home Health Aides, CNAs, LPNs, RNs, and specialized care. Serving South Florida since 1994.",
};

const services = [
  {
    icon: Users,
    title: "Home Health Aides (HHA)",
    description:
      "Personal care assistance with daily living activities, ensuring comfort and dignity for your loved ones.",
    features: [
      "Bathing and personal hygiene assistance",
      "Dressing and grooming support",
      "Meal preparation and feeding",
      "Light housekeeping",
      "Mobility assistance",
      "Companionship and emotional support",
    ],
  },
  {
    icon: Heart,
    title: "Certified Nursing Assistants (CNA)",
    description:
      "Trained professionals who provide skilled nursing support under the supervision of licensed nurses.",
    features: [
      "Vital signs monitoring",
      "Basic wound care",
      "Range of motion exercises",
      "Patient positioning",
      "Toileting assistance",
      "Medical equipment assistance",
    ],
  },
  {
    icon: Shield,
    title: "Licensed Practical Nurses (LPN)",
    description:
      "Professional nursing care including medication administration and health monitoring.",
    features: [
      "Medication administration",
      "Wound care and dressing changes",
      "Health status monitoring",
      "Patient education",
      "Care coordination",
      "Documentation and reporting",
    ],
  },
  {
    icon: Award,
    title: "Registered Nurses (RN)",
    description:
      "Expert-level care for complex medical conditions and coordinated care plans.",
    features: [
      "Complex wound care",
      "IV therapy and infusions",
      "Care plan development",
      "Patient and family education",
      "Medical supervision",
      "Emergency response",
    ],
  },
  {
    icon: Activity,
    title: "High Tech Nurses",
    description:
      "Specialized nurses trained in advanced medical equipment and technology for complex needs.",
    features: [
      "Ventilator management",
      "Tracheostomy care",
      "G-tube feeding",
      "Advanced monitoring",
      "Specialized equipment operation",
      "Complex medication management",
    ],
  },
  {
    icon: Home,
    title: "Live-In Care & Companions",
    description:
      "Around-the-clock care and companionship for those who need continuous support.",
    features: [
      "24-hour presence and supervision",
      "Overnight care",
      "Social engagement",
      "Household management",
      "Transportation assistance",
      "Family peace of mind",
    ],
  },
];

const specialServices = [
  {
    icon: Clock,
    title: "Rapid Response Program",
    description:
      "A professional caregiver arrives within 2 hours after we have been contacted — guaranteed.",
  },
  {
    icon: Pill,
    title: "Medication Management",
    description:
      "Supportive medication supervision designed to promote safety, dignity, and independence.",
  },
  {
    icon: Stethoscope,
    title: "24/7 Emergency Care",
    description:
      "We are available 24 hours a day, 7 days a week, 365 days a year whenever care is needed.",
  },
];

const paymentOptions = [
  "All major credit cards",
  "Private pay",
  "Most insurance plans",
  "Long-term care insurance",
  "Worker's compensation",
  "Medicare/Medicaid",
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="flex-1">

{/* Hero */}
<section className="relative overflow-hidden bg-[#061817]">
  {/* Background Effects */}
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(0,137,123,0.22),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(0,137,123,0.28),transparent_35%)]" />
  <div className="absolute right-0 top-0 hidden h-full w-[34rem] bg-[radial-gradient(circle,rgba(0,137,123,0.18)_1px,transparent_1px)] [background-size:18px_18px] lg:block" />

  <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-39 pb-32 lg:pt-38">
    <div className="grid lg:grid-cols-[1fr_1.05fr] gap-16 items-center">
      {/* Left Content */}
      <div>
        <span className="mb-7 inline-flex items-center gap-3 rounded-full bg-primary/25 px-5 py-3 text-sm font-semibold text-white shadow-sm">
          <Shield className="h-5 w-5 text-white" />
          Trusted Home Health Care in South Florida
        </span>

        <h1 className="max-w-3xl text-5xl sm:text-6xl lg:text-7xl font-bold tracking-[-0.04em] leading-[0.95] text-white mb-7">
          Compassionate Care
          <span className="block text-primary">Right at Home</span>
        </h1>

        <div className="mb-7 flex items-center gap-3 text-primary">
          <div className="h-px w-14 bg-primary" />
          <Heart className="h-5 w-5" />
          <div className="h-px w-14 bg-primary" />
        </div>

        <p className="text-lg sm:text-xl text-white/80 leading-relaxed max-w-2xl mb-10">
          Professional home health care personnel for families, hospitals,
          nursing homes, adult living facilities, and private homes.
        </p>

        <div className="flex flex-col sm:flex-row gap-5 mb-14">
          <Button
            size="lg"
            className="h-16 rounded-2xl px-8 text-lg font-semibold shadow-lg"
            asChild
          >
            <Link href="/contact">
              <Phone className="mr-3 h-5 w-5" />
              Get Care Now
              <ArrowRight className="ml-3 h-5 w-5" />
            </Link>
          </Button>

          <Button
            size="lg"
            variant="outline"
            className="h-16 rounded-2xl border-white/40 bg-white/5 px-8 text-lg font-semibold text-white hover:bg-white/10"
            asChild
          >
            <Link href="tel:8007212009">
              <Phone className="mr-3 h-5 w-5" />
              Call (800) 721-2009
            </Link>
          </Button>
        </div>

        <div className="grid sm:grid-cols-3 gap-6 text-white">
          <div className="flex items-center gap-4">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/15 text-primary">
              <Award className="h-7 w-7" />
            </div>
            <div>
              <p className="text-2xl font-bold">30+</p>
              <p className="text-sm text-white/65">Years of Experience</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/15 text-primary">
              <Clock className="h-7 w-7" />
            </div>
            <div>
              <p className="text-2xl font-bold">24/7</p>
              <p className="text-sm text-white/65">Care Availability</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/15 text-primary">
              <MapPin className="h-7 w-7" />
            </div>
            <div>s
              <p className="text-2xl font-bold">Tri-County</p>
              <p className="text-sm text-white/65">South Florida Area</p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Image */}
      <div className="relative hidden lg:block">
        <div className="absolute -inset-6 rounded-[2.5rem] bg-primary/20 blur-3xl" />

        <div className="relative overflow-hidden rounded-[2rem] border border-white/10 shadow-2xl">
          <Image
            src="/images/service-aide.jpg"
            alt="Caregiver assisting a senior patient"
            width={760}
            height={640}
            className="h-[540px] w-full object-cover"
            priority
          />

          <div className="absolute inset-0 bg-gradient-to-t from-[#061817]/45 via-transparent to-transparent" />

          <div className="absolute bottom-8 left-8 rounded-3xl bg-white p-6 shadow-2xl">
            <div className="flex items-center gap-5">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-white">
                <Users className="h-8 w-8" />
              </div>

              <div>
                <p className="text-3xl font-bold text-primary">64,000+</p>
                <p className="font-semibold text-foreground">Families Served</p>
                <p className="text-sm text-muted-foreground">
                  Across South Florida
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <WaveDivider />
        </section>

        {/* Services */}
        <section className="py-24 bg-gradient-to-b from-white to-[#eef7f4]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <p className="text-primary font-bold tracking-wide text-sm uppercase mb-3">
                Our Personnel
              </p>
              <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-5">
                Professionals You Can Trust
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                From basic assistance to complex medical care, our team is ready
                to help with dependable, compassionate support.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service) => (
                <div
                  key={service.title}
                  className="group relative overflow-hidden rounded-3xl border border-border bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="absolute right-0 top-0 h-28 w-28 rounded-bl-full bg-primary/5 transition group-hover:bg-primary/10" />

                  <div className="relative mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary transition group-hover:bg-primary group-hover:text-white">
                    <service.icon className="h-7 w-7" />
                  </div>

                  <h3 className="relative text-xl font-bold text-foreground mb-3">
                    {service.title}
                  </h3>

                  <p className="relative text-muted-foreground mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  <ul className="relative space-y-2 mb-6">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href="/contact"
                    className="relative inline-flex items-center text-sm font-semibold text-primary hover:gap-2 transition-all"
                  >
                    Learn more <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Special Programs + Payments */}
        <section className="py-24 bg-[#f6fbf9]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 rounded-3xl border border-border bg-white p-8 shadow-sm">
                <p className="text-primary font-bold tracking-wide text-sm uppercase mb-6">
                  Specialized Care & Support
                </p>

                <div className="grid md:grid-cols-3 gap-8">
                  {specialServices.map((service) => (
                    <div key={service.title}>
                      <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-full bg-primary text-white">
                        <service.icon className="h-7 w-7" />
                      </div>
                      <h3 className="text-lg font-bold text-foreground mb-3">
                        {service.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                        {service.description}
                      </p>
                      <Link
                        href="/contact"
                        className="inline-flex items-center text-sm font-semibold text-primary"
                      >
                        Learn more <ArrowRight className="ml-1 h-4 w-4" />
                      </Link>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-3xl border border-border bg-white p-8 shadow-sm">
                <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <CreditCard className="h-7 w-7" />
                </div>

                <p className="text-primary font-bold tracking-wide text-sm uppercase mb-3">
                  Flexible Payment Options
                </p>

                <h2 className="text-2xl font-bold text-foreground mb-6">
                  We work with families to make quality care affordable.
                </h2>

                <ul className="grid gap-4">
                  {paymentOptions.map((option) => (
                    <li key={option} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{option}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Service Area */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <p className="text-primary font-semibold mb-4">Service Area</p>
                <h2 className="text-4xl font-bold text-foreground mb-6">
                  Serving South Florida
                </h2>
                <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                  Accurate Health Care Inc. provides home health care to the
                  residents of the tri-county area.
                </p>

                <div className="grid sm:grid-cols-3 gap-4 mb-8">
                  {["Miami-Dade", "Broward", "Palm Beach"].map((county) => (
                    <div
                      key={county}
                      className="rounded-2xl bg-[#eef7f4] p-6 text-center border border-primary/10"
                    >
                      <p className="text-xl font-bold text-foreground mb-1">
                        {county}
                      </p>
                      <p className="text-sm text-muted-foreground">County</p>
                    </div>
                  ))}
                </div>

                <p className="text-muted-foreground leading-relaxed">
                  Our employees work in hospitals, nursing homes, adult living
                  facilities, and private homes throughout South Florida.
                </p>
              </div>

              <div className="relative">
                <div className="absolute -inset-4 rounded-[2rem] bg-primary/10 blur-2xl" />
                <div className="relative rounded-[2rem] bg-[#eef7f4] p-4">
                  <Image
                    src="/images/service-aide.jpg"
                    alt="Home health care in South Florida"
                    width={650}
                    height={450}
                    className="rounded-[1.5rem] object-cover w-full h-[430px]"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 bg-[#061817]">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-primary font-semibold mb-4">Need Care Services?</p>

            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Let’s find the right care solution for your loved one
            </h2>

            <p className="text-lg text-white/70 max-w-2xl mx-auto mb-10 leading-relaxed">
              Contact us today to discuss your care needs. Our coordinators are
              ready to help you choose the right level of support
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8 py-6" asChild>
                <Link href="tel:8007212009">
                  <Phone className="mr-2 h-5 w-5" />
                  Call (800) 721-2009
                </Link>
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 py-6 border-white/25 bg-white/5 text-white hover:bg-white/10"
                asChild
              >
                <Link href="/contact">
                  Request Information
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}