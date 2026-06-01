import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { WaveDivider } from "@/components/wave-divider";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import {
  Phone,
  Heart,
  Award,
  Users,
  Target,
  ArrowRight,
  Calendar,
  Shield,
  Sparkles,
  HandHeart,
  CheckCircle,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About Us | Accurate Health Care, Inc.",
  description:
    "Learn about Accurate Health Care, Inc. - providing compassionate home health care services in South Florida since 1994. Over 64,000 clients served.",
};

const coreValues = [
  {
    icon: Heart,
    title: "Passion",
    description:
      "We are passionate about providing the best possible care to every client we serve.",
  },
  {
    icon: Award,
    title: "Competent Caregivers",
    description:
      "Our staff is thoroughly trained, certified, and committed to excellence.",
  },
  {
    icon: HandHeart,
    title: "Respect",
    description:
      "We treat every client with the dignity, patience, and respect they deserve.",
  },
  {
    icon: Shield,
    title: "Trust",
    description:
      "Families trust us to care for their loved ones, and we honor that trust daily.",
  },
];

const principles = [
  {
    icon: Sparkles,
    title: "Encouraging Independence",
    description:
      "We support clients in maintaining independence whenever possible.",
  },
  {
    icon: Target,
    title: "Enabling Choice",
    description: "We empower clients to make meaningful choices about their care.",
  },
  {
    icon: Heart,
    title: "Preserving Dignity",
    description: "Every interaction is guided by compassion and dignity.",
  },
  {
    icon: Users,
    title: "Celebrating Individuality",
    description: "We recognize the unique needs and personality of each client.",
  },
  {
    icon: HandHeart,
    title: "Nurturing the Spirit",
    description:
      "We care for the whole person, including emotional and spiritual needs.",
  },
  {
    icon: Users,
    title: "Involving Family",
    description:
      "We work closely with loved ones to provide reliable, personalized care.",
  },
];

const milestones = [
  {
    year: "1994",
    title: "Company Founded",
    description:
      "Accurate Healthcare, Inc. was established with a mission to care for the elderly, sick, injured, and those in need.",
  },
  {
    year: "2000s",
    title: "Expanded Services",
    description:
      "We grew our care team to include HHAs, CNAs, LPNs, RNs, and high-tech nurses.",
  },
  {
    year: "2010s",
    title: "Growing Across South Florida",
    description:
      "We continued serving more families across Miami-Dade, Broward, and Palm Beach counties.",
  },
  {
    year: "Today",
    title: "64,000+ Clients Served",
    description:
      "We continue our mission of providing compassionate care to families throughout South Florida.",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="flex-1">
{/* Hero */}
<section className="relative overflow-hidden bg-[#061817]">
  {/* Background */}
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(0,137,123,0.25),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(0,137,123,0.22),transparent_40%)]" />
  <div className="absolute right-0 top-0 hidden h-full w-[32rem] bg-[radial-gradient(circle,rgba(0,137,123,0.18)_1px,transparent_1px)] [background-size:18px_18px] lg:block opacity-40" />

    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-39 pb-32 lg:pt-38">
    <div className="grid lg:grid-cols-[1fr_1.05fr] gap-16 items-center">

      {/* Content */}
      <div>
        <span className="mb-7 inline-flex items-center gap-3 rounded-full bg-primary/25 px-5 py-3 text-sm font-semibold text-white shadow-sm">
          <Shield className="h-4 w-4" />
          About Accurate Health Care
        </span>

        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-[-0.04em] leading-[0.95] text-white mb-6">
          Caring for Families
          <span className="block text-primary">Since 1994</span>
        </h1>

        <div className="flex items-center gap-3 text-primary mb-8">
          <div className="h-px w-12 bg-primary" />
          <Heart className="h-5 w-5" />
          <div className="h-px w-12 bg-primary" />
        </div>

        <p className="text-lg sm:text-xl text-white/75 leading-relaxed max-w-2xl mb-10">
          For more than three decades, we've provided compassionate,
          professional home healthcare services throughout South Florida,
          helping families find comfort, dignity, and peace of mind.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mb-14">
          <Button
            size="lg"
            className="h-16 rounded-2xl px-8 text-lg font-semibold shadow-xl"
            asChild
          >
            <Link href="/contact">
              Contact Us
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>

          <Button
            size="lg"
            variant="outline"
            className="h-16 rounded-2xl border-white/30 bg-white/5 px-8 text-lg text-white hover:bg-white/10"
            asChild
          >
            <Link href="/services">
              View Services
            </Link>
          </Button>
        </div>

        {/* Stats */}
        <div className="grid sm:grid-cols-3 gap-6">
          <div className="flex items-center gap-4">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
              <Calendar className="h-7 w-7 text-primary" />
            </div>

            <div>
              <p className="text-2xl font-bold text-white">30+</p>
              <p className="text-sm text-white/60">Years of Service</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
              <Users className="h-7 w-7 text-primary" />
            </div>

            <div>
              <p className="text-2xl font-bold text-white">64,000+</p>
              <p className="text-sm text-white/60">Clients Served</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
              <Heart className="h-7 w-7 text-primary" />
            </div>

            <div>
              <p className="text-2xl font-bold text-white">24/7</p>
              <p className="text-sm text-white/60">Care Available</p>
            </div>
          </div>
        </div>
      </div>

      {/* Image */}
      <div className="relative hidden lg:block">
        <div className="absolute -inset-6 rounded-[2.5rem] bg-primary/20 blur-3xl" />

        <div className="relative overflow-hidden rounded-[2rem] border border-white/10 shadow-2xl">
          <Image
            src="/images/team.jpg"
            alt="Accurate Health Care team"
            width={750}
            height={650}
            className="h-[580px] w-full object-cover"
            priority
          />

          <div className="absolute inset-0 bg-gradient-to-t from-[#061817]/50 via-transparent to-transparent" />

          {/* Floating Card */}
          <div className="absolute bottom-8 left-8 rounded-3xl bg-white p-6 shadow-2xl">
            <div className="flex items-center gap-5">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-white">
                <Award className="h-8 w-8" />
              </div>

              <div>
                <p className="text-3xl font-bold text-primary">1994</p>
                <p className="font-semibold text-foreground">
                  Trusted Since
                </p>
                <p className="text-sm text-muted-foreground">
                  Three decades of care
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
        {/* Story */}
        <section className="py-24 bg-gradient-to-b from-white to-[#eef7f4]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <p className="text-primary font-bold tracking-wide text-sm uppercase mb-4">
                  Our Story
                </p>

                <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
                  A Legacy of Compassionate Care
                </h2>

                <div className="space-y-5 text-muted-foreground text-lg leading-relaxed">
                  <p>
                    Accurate Healthcare, Inc. was established on December 14,
                    1994, with a clear mission: to provide compassionate,
                    professional care to those who need it most.
                  </p>

                  <p>
                    Our agency provides a broad range of temporary home health
                    care personnel, including Home Health Aides, Certified
                    Nursing Assistants, Registered Nurses, Licensed Practical
                    Nurses, and High Tech Nurses.
                  </p>

                  <p>
                    Staff members are provided directly to patients, other home
                    health firms, nursing facilities, medical facilities, and
                    families across South Florida.
                  </p>

                  <div className="rounded-3xl border border-primary/15 bg-white p-6 shadow-sm">
                    <p className="font-semibold text-foreground">
                      Much of our pride comes from the referrals we receive from
                      friends and family of the clients we have served.
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid gap-5">
                {[
                  "Home care agencies",
                  "Hospitals",
                  "Assisted living facilities",
                  "Guardians and attorneys",
                  "Community service agencies",
                  "Physicians",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-4 rounded-2xl bg-white p-5 shadow-sm border border-border"
                  >
                    <CheckCircle className="h-6 w-6 text-primary flex-shrink-0" />
                    <span className="font-medium text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Mission */}
        <section className="py-24 bg-[#061817]">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-primary font-semibold mb-4">Our Mission</p>

            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-8">
              Care with Dignity and Respect
            </h2>

            <p className="text-xl text-white/75 leading-relaxed">
              Accurate Health Care provides care in a dignified and respectful
              manner to all clients in their time of need, regardless of
              background, age, gender, religion, disability, or source of
              payment.
            </p>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <p className="text-primary font-bold tracking-wide text-sm uppercase mb-3">
                Core Values
              </p>

              <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-5">
                What Drives Us Every Day
              </h2>

              <p className="text-muted-foreground text-lg leading-relaxed">
                Our values guide every interaction, every care decision, and
                every moment spent with your loved ones.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {coreValues.map((value) => (
                <div
                  key={value.title}
                  className="group rounded-3xl border border-border bg-white p-8 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary transition group-hover:bg-primary group-hover:text-white">
                    <value.icon className="h-7 w-7" />
                  </div>

                  <h3 className="text-xl font-bold text-foreground mb-3">
                    {value.title}
                  </h3>

                  <p className="text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Principles */}
        <section className="py-24 bg-[#f6fbf9]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <p className="text-primary font-bold tracking-wide text-sm uppercase mb-3">
                Principles of Service
              </p>

              <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-5">
                How We Deliver Care
              </h2>

              <p className="text-muted-foreground text-lg leading-relaxed">
                Every client receives care that honors their individuality,
                comfort, safety, and well-being.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {principles.map((principle) => (
                <div
                  key={principle.title}
                  className="rounded-3xl border border-border bg-white p-8 shadow-sm transition hover:shadow-lg"
                >
                  <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                    <principle.icon className="h-7 w-7" />
                  </div>

                  <h3 className="text-xl font-bold text-foreground mb-3">
                    {principle.title}
                  </h3>

                  <p className="text-muted-foreground leading-relaxed">
                    {principle.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
{/* Timeline */}
<section className="relative overflow-hidden py-24 bg-[#f6fbf9]">
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(0,137,123,0.12),transparent_32%)]" />

  <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-16 items-start">
      <div className="lg:sticky lg:top-28">
        <p className="text-primary font-bold tracking-wide text-sm uppercase mb-4">
          Our Journey
        </p>

        <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
          30+ Years of Serving Families
        </h2>

        <p className="text-lg text-muted-foreground leading-relaxed mb-8">
          From a small mission of care in 1994 to serving thousands of families
          across South Florida, our journey has always been centered on dignity,
          trust, and compassionate support.
        </p>

        <div className="rounded-3xl bg-[#061817] p-8 text-white shadow-xl">
          <p className="text-5xl font-bold mb-2">64,000+</p>
          <p className="text-white/70">Clients and families served with care</p>
        </div>
      </div>

      <div className="grid gap-6">
        {milestones.map((milestone, index) => (
          <div
            key={milestone.year}
            className="group relative overflow-hidden rounded-3xl border border-border bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            <div className="absolute right-0 top-0 h-28 w-28 rounded-bl-full bg-primary/5 transition group-hover:bg-primary/10" />

            <div className="relative flex flex-col sm:flex-row gap-6">
              <div className="flex-shrink-0">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary text-white shadow-md">
                  <span className="text-lg font-bold">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
              </div>

              <div>
                <div className="mb-3 inline-flex rounded-full bg-primary/10 px-4 py-1.5 text-sm font-bold text-primary">
                  {milestone.year}
                </div>

                <h3 className="text-2xl font-bold text-foreground mb-3">
                  {milestone.title}
                </h3>

                <p className="text-muted-foreground leading-relaxed">
                  {milestone.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
</section>

        {/* Stats */}
        <section className="py-20 bg-[#061817]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
              {[
                ["64,000+", "Clients Served"],
                ["1994", "Established"],
                ["3", "Counties Served"],
                ["24/7", "Emergency Care"],
              ].map(([number, label]) => (
                <div key={label}>
                  <p className="text-4xl lg:text-5xl font-bold text-white mb-2">
                    {number}
                  </p>
                  <p className="text-white/65">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 bg-primary">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl sm:text-5xl font-bold text-primary-foreground mb-6">
              Become Part of Our Family
            </h2>

            <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto mb-10 leading-relaxed">
              Let us help you provide the best care for your loved ones. Contact
              us today to learn more about our services.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                variant="secondary"
                className="text-lg px-8 py-6"
                asChild
              >
                <Link href="/contact">
                  <Phone className="mr-2 h-5 w-5" />
                  Contact Us Today
                </Link>
              </Button>

              <Button
                size="lg"
                variant="secondary"
                className="text-lg px-8 py-6"
                asChild
              >
                <Link href="/services">
                  View Our Services
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