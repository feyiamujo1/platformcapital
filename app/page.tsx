import Link from "next/link";
import Image from "next/image";
import { ChevronRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { HeroSlider } from "@/components/hero-slider";
import { PortfolioScroller } from "@/components/portfolio-scroller";
import { VideoSection } from "@/components/video-section";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { TestimonialCarousel } from "@/components/testimonial-carousel";
import { WhyChooseUs } from "@/components/why-choose-us";

export default function Home() {
  // Hero slides with better images
  const heroSlides = [
    {
      id: 1,
      title: "Investing in Africa's Future",
      description: "Unlocking potential, creating market leaders.",
      ctaText: "Learn More",
      ctaLink: "/about",
      imageSrc:
        "/placeholder.svg?height=600&width=1200&text=African+Business+Skyline"
    },
    {
      id: 2,
      title: "Bridging Africa & The World",
      description: "Strategic investments that drive growth.",
      ctaText: "Discover More",
      ctaLink: "/investments",
      imageSrc: "/placeholder.svg?height=600&width=1200&text=Global+Connections"
    },
    {
      id: 3,
      title: "Innovate. Scale. Lead.",
      description: "Empowering businesses for long-term success.",
      ctaText: "Get Started",
      ctaLink: "/contact",
      imageSrc: "/placeholder.svg?height=600&width=1200&text=Innovation+Hub"
    }
  ];

  const leadershipTeam = [
    {
      name: "Akintoye Akindele",
      position: "Founder & CEO",
      imageSrc: "/images/team/akintoye.webp?height=300&width=300"
    },
    {
      name: "Dolapo Ogunmekan",
      position: "Managing Partner",
      imageSrc: "/images/team/ogunmekan.webp?height=450&width=300"
    },
    {
      name: "Ponmile Osibo",
      position: "Partner",
      imageSrc: "/images/team/ponmile.png?height=450&width=300"
    }
  ];

  const investmentVerticals = [
    "Food & Agriculture Value Chain",
    "Healthcare",
    "Procurement & Infrastructure",
    "Fund Management & Fixed Income",
    "Financial Services",
    "Power & Energy",
    "Industry & Manufacturing",
    "Technology, Media, Telecommunications & Payments"
  ];

  const portfolioCompanies = [
    {
      name: "Solo Funds",
      logo: "/images/companies/SoLo.png?height=100&width=200"
    },
    {
      name: "Koko Networks",
      logo: "/images/companies/koko.png?height=100&width=200"
    },
    {
      name: "Koniku",
      logo: "/images/companies/koniku.png?height=100&width=200"
    },
    {
      name: "Lipa Later",
      logo: "/images/companies/lipa.png?height=100&width=200"
    },
    { name: "RxAll", logo: "/images/companies/rxall.png?height=100&width=200" },
    {
      name: "Strap Tech",
      logo: "/images/companies/straptech.png?height=100&width=200"
    },
    {
      name: "Sanivation",
      logo: "/images/companies/salvation.png?height=100&width=200"
    },
    {
      name: "Duport Midstream Company Ltd",
      logo: "/images/companies/duport.png?height=100&width=200"
    },
    {
      name: "Atlantic Refinery and Petrochemical Limited",
      logo: "/images/companies/atlantic.png?height=100&width=200"
    }
  ];

  const testimonials = [
    {
      quote:
        "Platform Capital has been a game-changer for our business. Their investment and strategic guidance have accelerated our growth beyond expectations.",
      author: "CEO, Lipa Later"
    },
    {
      quote:
        "The team at Platform Capital understands the African market like no other. Their insights and support have helped us navigate challenges and scale effectively.",
      author: "Founder, Koniku"
    },
    {
      quote:
        "Working with Platform Capital has given us access to global opportunities that we never imagined possible.",
      author: "Managing Director, Koko Networks"
    }
  ];

  const videoLinks = [
    "https://youtu.be/iou6J7lHWpU?si=xrMQdvMQzDEDHUO7",
    "https://youtu.be/ZzW-jiDEY2Q?si=viABkTRsKqSD7IVk",
    "https://youtu.be/xobBwKT0hzk?si=ZAVkcMQO1unN2nsu",
    // "https://youtu.be/bYYuZqG1fwQ?si=gjWhvDxBVVTYei9V",
    // "https://youtu.be/Vc-c_89B5Ng?si=-XxXCYG84O1c9Ynv",
    // "https://youtu.be/dxJ4izAsIYw?si=ENbCJiqwPSxz1qet"
  ];

  const impactStats = [
    { stat: "104+", description: "Direct Portfolio Companies" },
    { stat: "9", description: "Investment Verticals" },
    { stat: "11", description: "Nationalities Represented" },
    { stat: "Diverse", description: "Industry-Leading Team" }
  ];

  return (
    <>
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        {/* <section className="relative">
          <HeroSlider slides={heroSlides} />
        </section> */}

        {/* Introduction Section */}
        <section className="py-16 md:py-24 bg-white relative isolate flex w-full flex-col pt-9">
          <svg
            aria-hidden="true"
            className="absolute inset-x-0 top-0 -z-10 h-full w-full fill-neutral-50 stroke-neutral-950/5 [mask-image:linear-gradient(circle, white_40%,transparent_50%)]">
            <rect
              width="100%"
              height="100%"
              fill="url(#:R1lba:)"
              strokeWidth="0"></rect>
            <svg x="50%" y="-96" strokeWidth="0" className="overflow-visible">
              <path
                transform="translate(64 160)"
                d="M45.119 4.5a11.5 11.5 0 0 0-11.277 9.245l-25.6 128C6.82 148.861 12.262 155.5 19.52 155.5h63.366a11.5 11.5 0 0 0 11.277-9.245l25.6-128c1.423-7.116-4.02-13.755-11.277-13.755H45.119Z"></path>
              <path
                transform="translate(128 320)"
                d="M45.119 4.5a11.5 11.5 0 0 0-11.277 9.245l-25.6 128C6.82 148.861 12.262 155.5 19.52 155.5h63.366a11.5 11.5 0 0 0 11.277-9.245l25.6-128c1.423-7.116-4.02-13.755-11.277-13.755H45.119Z"></path>
              <path
                transform="translate(288 480)"
                d="M45.119 4.5a11.5 11.5 0 0 0-11.277 9.245l-25.6 128C6.82 148.861 12.262 155.5 19.52 155.5h63.366a11.5 11.5 0 0 0 11.277-9.245l25.6-128c1.423-7.116-4.02-13.755-11.277-13.755H45.119Z"></path>
              <path
                transform="translate(512 320)"
                d="M45.119 4.5a11.5 11.5 0 0 0-11.277 9.245l-25.6 128C6.82 148.861 12.262 155.5 19.52 155.5h63.366a11.5 11.5 0 0 0 11.277-9.245l25.6-128c1.423-7.116-4.02-13.755-11.277-13.755H45.119Z"></path>
              <path
                transform="translate(544 640)"
                d="M45.119 4.5a11.5 11.5 0 0 0-11.277 9.245l-25.6 128C6.82 148.861 12.262 155.5 19.52 155.5h63.366a11.5 11.5 0 0 0 11.277-9.245l25.6-128c1.423-7.116-4.02-13.755-11.277-13.755H45.119Z"></path>
              <path
                transform="translate(320 800)"
                d="M45.119 4.5a11.5 11.5 0 0 0-11.277 9.245l-25.6 128C6.82 148.861 12.262 155.5 19.52 155.5h63.366a11.5 11.5 0 0 0 11.277-9.245l25.6-128c1.423-7.116-4.02-13.755-11.277-13.755H45.119Z"></path>
            </svg>
            <defs>
              <pattern
                id=":R1lba:"
                width="96"
                height="480"
                x="50%"
                patternUnits="userSpaceOnUse"
                patternTransform="translate(0 -96)"
                fill="none">
                <path d="M128 0 98.572 147.138A16 16 0 0 1 82.883 160H13.117a16 16 0 0 0-15.69 12.862l-26.855 134.276A16 16 0 0 1-45.117 320H-116M64-160 34.572-12.862A16 16 0 0 1 18.883 0h-69.766a16 16 0 0 0-15.69 12.862l-26.855 134.276A16 16 0 0 1-109.117 160H-180M192 160l-29.428 147.138A15.999 15.999 0 0 1 146.883 320H77.117a16 16 0 0 0-15.69 12.862L34.573 467.138A16 16 0 0 1 18.883 480H-52M-136 480h58.883a16 16 0 0 0 15.69-12.862l26.855-134.276A16 16 0 0 1-18.883 320h69.766a16 16 0 0 0 15.69-12.862l26.855-134.276A16 16 0 0 1 109.117 160H192M-72 640h58.883a16 16 0 0 0 15.69-12.862l26.855-134.276A16 16 0 0 1 45.117 480h69.766a15.999 15.999 0 0 0 15.689-12.862l26.856-134.276A15.999 15.999 0 0 1 173.117 320H256M-200 320h58.883a15.999 15.999 0 0 0 15.689-12.862l26.856-134.276A16 16 0 0 1-82.883 160h69.766a16 16 0 0 0 15.69-12.862L29.427 12.862A16 16 0 0 1 45.117 0H128"></path>
              </pattern>
            </defs>
          </svg>
          <div className="h-[65vh] flex flex-col items-center justify-center container px-4 md:px-6">
            <div className="max-w-4xl mx-auto text-center mb-6">
              <p className="text-base text-muted-foreground">
                Africa's Largest Glo-Cal Investment Firm
              </p>
              <h2 className="text-3xl md:text-6xl font-medium tracking-tight mt-2">
                <span className="text-primary text-">Platform Capital</span>
                <br /> We bridge the gap between Africa and the World
              </h2>
            </div>
            <div className="max-w-2xl mx-auto text-center">
              <p className="text-lg mb-6 text-center">
                We are a leading global investment and advisory firm, committed
                to bridging Africa with the world through strategic investments,
                value-driven partnerships, and game-changing innovation.
                {/* Our deep market insights, extensive global networks,
                and diverse team of industry experts allow us to unlock new
                frontiers of opportunity, shaping the future of businesses
                across industries and geographies. */}
              </p>
              <Button size={"lg"} className="w-fit mx-auto">
                <Link href="/">Learn more</Link>
              </Button>
              {/* <p className="text-lg">
                We don't follow trends—we create them. By deploying patient, value-accretive capital, we empower
                businesses to scale, innovate, and become market leaders both regionally and globally.
              </p> */}
            </div>
            {/* <div>
              <img src="/images/woman-at-her-desk.webp" alt="" />
            </div> */}
          </div>
        </section>

        {/* Who We Are Section */}
        {/* <section className="py-16 md:py-24 bg-[#f4f8fc]">
          <div className="container px-4 md:px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
                  Who We Are
                </h2>
                <p className="text-lg mb-6">
                  At Platform Capital, we are more than investors—we are
                  catalysts for sustainable growth. As a sector-agnostic
                  principal investment and advisory firm, we deploy strategic
                  capital alongside international and local investors, turning
                  high-potential businesses into industry champions.
                </p>
                <p className="text-lg mb-6">
                  Our commitment extends beyond capital injection; we offer
                  bespoke Corporate Finance & Capital Markets advisory services,
                  ensuring our portfolio companies and partners maximize their
                  full potential.
                </p>
                <p className="text-lg font-medium">
                  What truly sets us apart? Our relentless passion for rewriting
                  the African narrative. We believe in Africa's boundless
                  potential and are dedicated to fostering innovation,
                  sustainability, and long-term economic impact.
                </p>
                <Button className="mt-6" asChild>
                  <Link href="/about">
                    Discover More About Us{" "}
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Image
                  src="/placeholder.svg?height=300&width=300"
                  alt="Platform Capital Office"
                  width={300}
                  height={300}
                  className="rounded-lg object-cover w-full h-full"
                />
                <Image
                  src="/placeholder.svg?height=300&width=300"
                  alt="Platform Capital Team"
                  width={300}
                  height={300}
                  className="rounded-lg object-cover w-full h-full mt-12"
                />
              </div>
              <div className="justify-center lg:justify-end relative flex aspect-719/680 w-full grayscale"><svg viewBox="0 0 655 680" fill="none" className="h-full"><g clip-path="url(#:S1:-clip)" className="group"><g className="origin-center scale-100 transition duration-500 motion-safe:group-hover:scale-105"><foreignObject width="655" height="680"><img alt="" loading="lazy" width="2400" height="3000" decoding="async" data-nimg="1" className="w-full bg-neutral-100 object-cover" style="color:transparent;aspect-ratio:655 / 680" sizes="(min-width: 1024px) 41rem, 31rem" srcset="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flaptop.22dcb094.jpg&amp;w=16&amp;q=75 16w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flaptop.22dcb094.jpg&amp;w=32&amp;q=75 32w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flaptop.22dcb094.jpg&amp;w=48&amp;q=75 48w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flaptop.22dcb094.jpg&amp;w=64&amp;q=75 64w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flaptop.22dcb094.jpg&amp;w=96&amp;q=75 96w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flaptop.22dcb094.jpg&amp;w=128&amp;q=75 128w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flaptop.22dcb094.jpg&amp;w=256&amp;q=75 256w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flaptop.22dcb094.jpg&amp;w=384&amp;q=75 384w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flaptop.22dcb094.jpg&amp;w=640&amp;q=75 640w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flaptop.22dcb094.jpg&amp;w=750&amp;q=75 750w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flaptop.22dcb094.jpg&amp;w=828&amp;q=75 828w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flaptop.22dcb094.jpg&amp;w=1080&amp;q=75 1080w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flaptop.22dcb094.jpg&amp;w=1200&amp;q=75 1200w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flaptop.22dcb094.jpg&amp;w=1920&amp;q=75 1920w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flaptop.22dcb094.jpg&amp;w=2048&amp;q=75 2048w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flaptop.22dcb094.jpg&amp;w=3840&amp;q=75 3840w" src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flaptop.22dcb094.jpg&amp;w=3840&amp;q=75"></foreignObject></g><use href="#:S1:-shape" strokeWidth="2" className="stroke-neutral-950/10"></use></g><defs><clipPath id=":S1:-clip"><path id=":S1:-shape" d="M537.827 9.245A11.5 11.5 0 0 1 549.104 0h63.366c7.257 0 12.7 6.64 11.277 13.755l-25.6 128A11.5 11.5 0 0 1 586.87 151h-28.275a15.999 15.999 0 0 0-15.689 12.862l-59.4 297c-1.98 9.901 5.592 19.138 15.689 19.138h17.275l.127.001c.85.009 1.701.074 2.549.009 11.329-.874 21.411-7.529 24.88-25.981.002-.012.016-.016.023-.007.008.009.022.005.024-.006l24.754-123.771A11.5 11.5 0 0 1 580.104 321h63.366c7.257 0 12.7 6.639 11.277 13.755l-25.6 128A11.5 11.5 0 0 1 617.87 472H559c-22.866 0-28.984 7.98-31.989 25.931-.004.026-.037.035-.052.014-.015-.02-.048-.013-.053.012l-24.759 123.798A11.5 11.5 0 0 1 490.87 631h-29.132a14.953 14.953 0 0 0-14.664 12.021c-4.3 21.502-23.18 36.979-45.107 36.979H83.502c-29.028 0-50.8-26.557-45.107-55.021l102.4-512C145.096 91.477 163.975 76 185.902 76h318.465c10.136 0 21.179-5.35 23.167-15.288l10.293-51.467Zm-512 160A11.5 11.5 0 0 1 37.104 160h63.366c7.257 0 12.7 6.639 11.277 13.755l-25.6 128A11.5 11.5 0 0 1 74.87 311H11.504c-7.257 0-12.7-6.639-11.277-13.755l25.6-128Z" fill-rule="evenodd" clip-rule="evenodd"></path></clipPath></defs></svg></div>
            </div>
          </div>
        </section> */}
        <section className="py-16 md:py-24 bg-[#f4f8fc] overflow-hidden">
          <div className="container px-4 md:px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-base text-muted-foreground">Who we are</p>
                <h2 className="text-3xl md:text-5xl tracking-tight font-medium mt-3 mb-6">
                  Catalysts for sustainable growth
                </h2>
                <p className="text-lg mb-6 text-muted-foreground">
                  As a sector-agnostic investment firm, we deploy strategic
                  capital alongside international and local investors, turning
                  high-potential businesses into industry champions. We believe
                  in Africa's boundless potential and are dedicated to fostering
                  innovation and long-term economic impact.
                </p>
                {/* <p className="text-lg font-medium mb-6">
                  What sets us apart is our passion for rewriting the African
                  narrative. 
                </p> */}
                <Button className="mt-4" asChild>
                  <Link href="/about">
                    Discover More About Us{" "}
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
              <div className="justify-center lg:justify-end relative flex aspect-[719/680] w-full">
                <svg viewBox="0 0 655 680" fill="none" className="h-full">
                  <g clipPath="url(#clip)" className="group">
                    <g className="origin-center scale-100 transition duration-500 motion-safe:group-hover:scale-105">
                      <foreignObject width="655" height="680">
                        <img
                          alt="Platform Capital workspace"
                          loading="lazy"
                          width="2400"
                          height="3000"
                          decoding="async"
                          className="w-full bg-neutral-100 object-cover"
                          style={{
                            color: "transparent",
                            aspectRatio: "655 / 680"
                          }}
                          sizes="(min-width: 1024px) 41rem, 31rem"
                          src="images/Our-Africa-Our-Pride.jpg?height=680&width=655"
                        />
                      </foreignObject>
                    </g>
                    <use
                      href="#shape"
                      strokeWidth="2"
                      className="stroke-neutral-950/10"></use>
                  </g>
                  <defs>
                    <clipPath id="clip">
                      <path
                        id="shape"
                        d="M537.827 9.245A11.5 11.5 0 0 1 549.104 0h63.366c7.257 0 12.7 6.64 11.277 13.755l-25.6 128A11.5 11.5 0 0 1 586.87 151h-28.275a15.999 15.999 0 0 0-15.689 12.862l-59.4 297c-1.98 9.901 5.592 19.138 15.689 19.138h17.275l.127.001c.85.009 1.701.074 2.549.009 11.329-.874 21.411-7.529 24.88-25.981.002-.012.016-.016.023-.007.008.009.022.005.024-.006l24.754-123.771A11.5 11.5 0 0 1 580.104 321h63.366c7.257 0 12.7 6.639 11.277 13.755l-25.6 128A11.5 11.5 0 0 1 617.87 472H559c-22.866 0-28.984 7.98-31.989 25.931-.004.026-.037.035-.052.014-.015-.02-.048-.013-.053.012l-24.759 123.798A11.5 11.5 0 0 1 490.87 631h-29.132a14.953 14.953 0 0 0-14.664 12.021c-4.3 21.502-23.18 36.979-45.107 36.979H83.502c-29.028 0-50.8-26.557-45.107-55.021l102.4-512C145.096 91.477 163.975 76 185.902 76h318.465c10.136 0 21.179-5.35 23.167-15.288l10.293-51.467Zm-512 160A11.5 11.5 0 0 1 37.104 160h63.366c7.257 0 12.7 6.639 11.277 13.755l-25.6 128A11.5 11.5 0 0 1 74.87 311H11.504c-7.257 0-12.7-6.639-11.277-13.755l25.6-128Z"
                        fillRule="evenodd"
                        clipRule="evenodd"></path>
                    </clipPath>
                  </defs>
                </svg>
              </div>
            </div>
          </div>
        </section>

        {/* Leadership Section */}
        <section className="py-16 md:py-24 bg-white relative isolate">
          <svg
            aria-hidden="true"
            className="absolute inset-x-0 top-0 -z-10 h-[95vh] w-full fill-neutral-50 stroke-neutral-950/5 [mask-image:linear-gradient(to_bottom_left,white_40%,transparent_50%)]">
            <rect
              width="100%"
              height="100%"
              fill="url(#:R1lba:)"
              strokeWidth="0"></rect>
            <svg x="50%" y="-96" strokeWidth="0" className="overflow-visible">
              <path
                transform="translate(64 160)"
                d="M45.119 4.5a11.5 11.5 0 0 0-11.277 9.245l-25.6 128C6.82 148.861 12.262 155.5 19.52 155.5h63.366a11.5 11.5 0 0 0 11.277-9.245l25.6-128c1.423-7.116-4.02-13.755-11.277-13.755H45.119Z"></path>
              <path
                transform="translate(128 320)"
                d="M45.119 4.5a11.5 11.5 0 0 0-11.277 9.245l-25.6 128C6.82 148.861 12.262 155.5 19.52 155.5h63.366a11.5 11.5 0 0 0 11.277-9.245l25.6-128c1.423-7.116-4.02-13.755-11.277-13.755H45.119Z"></path>
              <path
                transform="translate(288 480)"
                d="M45.119 4.5a11.5 11.5 0 0 0-11.277 9.245l-25.6 128C6.82 148.861 12.262 155.5 19.52 155.5h63.366a11.5 11.5 0 0 0 11.277-9.245l25.6-128c1.423-7.116-4.02-13.755-11.277-13.755H45.119Z"></path>
              <path
                transform="translate(512 320)"
                d="M45.119 4.5a11.5 11.5 0 0 0-11.277 9.245l-25.6 128C6.82 148.861 12.262 155.5 19.52 155.5h63.366a11.5 11.5 0 0 0 11.277-9.245l25.6-128c1.423-7.116-4.02-13.755-11.277-13.755H45.119Z"></path>
              <path
                transform="translate(544 640)"
                d="M45.119 4.5a11.5 11.5 0 0 0-11.277 9.245l-25.6 128C6.82 148.861 12.262 155.5 19.52 155.5h63.366a11.5 11.5 0 0 0 11.277-9.245l25.6-128c1.423-7.116-4.02-13.755-11.277-13.755H45.119Z"></path>
              <path
                transform="translate(320 800)"
                d="M45.119 4.5a11.5 11.5 0 0 0-11.277 9.245l-25.6 128C6.82 148.861 12.262 155.5 19.52 155.5h63.366a11.5 11.5 0 0 0 11.277-9.245l25.6-128c1.423-7.116-4.02-13.755-11.277-13.755H45.119Z"></path>
            </svg>
            <defs>
              <pattern
                id=":R1lba:"
                width="96"
                height="480"
                x="50%"
                patternUnits="userSpaceOnUse"
                patternTransform="translate(0 -96)"
                fill="none">
                <path d="M128 0 98.572 147.138A16 16 0 0 1 82.883 160H13.117a16 16 0 0 0-15.69 12.862l-26.855 134.276A16 16 0 0 1-45.117 320H-116M64-160 34.572-12.862A16 16 0 0 1 18.883 0h-69.766a16 16 0 0 0-15.69 12.862l-26.855 134.276A16 16 0 0 1-109.117 160H-180M192 160l-29.428 147.138A15.999 15.999 0 0 1 146.883 320H77.117a16 16 0 0 0-15.69 12.862L34.573 467.138A16 16 0 0 1 18.883 480H-52M-136 480h58.883a16 16 0 0 0 15.69-12.862l26.855-134.276A16 16 0 0 1-18.883 320h69.766a16 16 0 0 0 15.69-12.862l26.855-134.276A16 16 0 0 1 109.117 160H192M-72 640h58.883a16 16 0 0 0 15.69-12.862l26.855-134.276A16 16 0 0 1 45.117 480h69.766a15.999 15.999 0 0 0 15.689-12.862l26.856-134.276A15.999 15.999 0 0 1 173.117 320H256M-200 320h58.883a15.999 15.999 0 0 0 15.689-12.862l26.856-134.276A16 16 0 0 1-82.883 160h69.766a16 16 0 0 0 15.69-12.862L29.427 12.862A16 16 0 0 1 45.117 0H128"></path>
              </pattern>
            </defs>
          </svg>
          <div className="container px-4 md:px-6 relative">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-medium tracking-tight mb-4">
                Our Leadership
              </h2>
              <p className="text-lg text-muted-foreground">
                Meet the visionaries driving Platform Capital's success
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {leadershipTeam.map(leader => (
                <Card key={leader.name} className="overflow-hidden">
                  <Image
                    src={leader.imageSrc || "/placeholder.svg"}
                    alt={leader.name}
                    width={500}
                    height={500}
                    className="w-full object-cover object-center aspect-[14/14]"
                  />
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold">{leader.name}</h3>
                    <p className="text-muted-foreground">{leader.position}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="text-center mt-12">
              <Button variant="outline" asChild>
                <Link href="/team">
                  Meet Our Full Team <ChevronRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        {/* <section className="py-16 md:py-24 bg-[#f4f8fc] overflow-hidden ">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl md:text-5xl tracking-tight font-medium mb-4">
                Why Choose Platform Capital?
              </h2>
              <p className="text-xl">
                We don't just invest; we redefine possibilities.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="bg-primary-foreground text-primary">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">
                    Proven Expertise & Strong Track Record
                  </h3>
                  <p>
                    Decades of experience and a history of successful
                    investments
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-primary-foreground text-primary">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">
                    Exclusive Access to Global High-Quality Deal Flow
                  </h3>
                  <p>Connecting Africa to lucrative global markets</p>
                </CardContent>
              </Card>
              <Card className="bg-primary-foreground text-primary">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">
                    A Unique Investment Strategy with Value Addition at Its Core
                  </h3>
                  <p>A hands-on approach to scaling businesses</p>
                </CardContent>
              </Card>
              <Card className="bg-primary-foreground text-primary">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">
                    Attractive & Sustainable Investment Structures
                  </h3>
                  <p>Designed for long-term success</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section> */}

        <WhyChooseUs />

        {/* Investment Verticals Section */}
        <section className="py-16 md:py-24 bg-white relative isolate overflow-hidden">
          <svg
            aria-hidden="true"
            className="absolute inset-x-0 top-0 -z-10 h-[95vh] w-full fill-neutral-50 stroke-neutral-950/5 [mask-image:linear-gradient(to_bottom_left,white_40%,transparent_50%)]">
            <rect
              width="100%"
              height="100%"
              fill="url(#:R1lba:)"
              strokeWidth="0"></rect>
            <svg x="50%" y="-96" strokeWidth="0" className="overflow-visible">
              <path
                transform="translate(64 160)"
                d="M45.119 4.5a11.5 11.5 0 0 0-11.277 9.245l-25.6 128C6.82 148.861 12.262 155.5 19.52 155.5h63.366a11.5 11.5 0 0 0 11.277-9.245l25.6-128c1.423-7.116-4.02-13.755-11.277-13.755H45.119Z"></path>
              <path
                transform="translate(128 320)"
                d="M45.119 4.5a11.5 11.5 0 0 0-11.277 9.245l-25.6 128C6.82 148.861 12.262 155.5 19.52 155.5h63.366a11.5 11.5 0 0 0 11.277-9.245l25.6-128c1.423-7.116-4.02-13.755-11.277-13.755H45.119Z"></path>
              <path
                transform="translate(288 480)"
                d="M45.119 4.5a11.5 11.5 0 0 0-11.277 9.245l-25.6 128C6.82 148.861 12.262 155.5 19.52 155.5h63.366a11.5 11.5 0 0 0 11.277-9.245l25.6-128c1.423-7.116-4.02-13.755-11.277-13.755H45.119Z"></path>
              <path
                transform="translate(512 320)"
                d="M45.119 4.5a11.5 11.5 0 0 0-11.277 9.245l-25.6 128C6.82 148.861 12.262 155.5 19.52 155.5h63.366a11.5 11.5 0 0 0 11.277-9.245l25.6-128c1.423-7.116-4.02-13.755-11.277-13.755H45.119Z"></path>
              <path
                transform="translate(544 640)"
                d="M45.119 4.5a11.5 11.5 0 0 0-11.277 9.245l-25.6 128C6.82 148.861 12.262 155.5 19.52 155.5h63.366a11.5 11.5 0 0 0 11.277-9.245l25.6-128c1.423-7.116-4.02-13.755-11.277-13.755H45.119Z"></path>
              <path
                transform="translate(320 800)"
                d="M45.119 4.5a11.5 11.5 0 0 0-11.277 9.245l-25.6 128C6.82 148.861 12.262 155.5 19.52 155.5h63.366a11.5 11.5 0 0 0 11.277-9.245l25.6-128c1.423-7.116-4.02-13.755-11.277-13.755H45.119Z"></path>
            </svg>
            <defs>
              <pattern
                id=":R1lba:"
                width="96"
                height="480"
                x="50%"
                patternUnits="userSpaceOnUse"
                patternTransform="translate(0 -96)"
                fill="none">
                <path d="M128 0 98.572 147.138A16 16 0 0 1 82.883 160H13.117a16 16 0 0 0-15.69 12.862l-26.855 134.276A16 16 0 0 1-45.117 320H-116M64-160 34.572-12.862A16 16 0 0 1 18.883 0h-69.766a16 16 0 0 0-15.69 12.862l-26.855 134.276A16 16 0 0 1-109.117 160H-180M192 160l-29.428 147.138A15.999 15.999 0 0 1 146.883 320H77.117a16 16 0 0 0-15.69 12.862L34.573 467.138A16 16 0 0 1 18.883 480H-52M-136 480h58.883a16 16 0 0 0 15.69-12.862l26.855-134.276A16 16 0 0 1-18.883 320h69.766a16 16 0 0 0 15.69-12.862l26.855-134.276A16 16 0 0 1 109.117 160H192M-72 640h58.883a16 16 0 0 0 15.69-12.862l26.855-134.276A16 16 0 0 1 45.117 480h69.766a15.999 15.999 0 0 0 15.689-12.862l26.856-134.276A15.999 15.999 0 0 1 173.117 320H256M-200 320h58.883a15.999 15.999 0 0 0 15.689-12.862l26.856-134.276A16 16 0 0 1-82.883 160h69.766a16 16 0 0 0 15.69-12.862L29.427 12.862A16 16 0 0 1 45.117 0H128"></path>
              </pattern>
            </defs>
          </svg>
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-medium tracking-tight mb-4">
                Our Investment Verticals
              </h2>
              <p className="text-lg text-muted-foreground">
                We identify and invest in industries with high growth potential
                and transformative impact
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {investmentVerticals.map((vertical, index) => (
                // <Card key={index} className="hover:shadow-lg transition-shadow">
                //   <CardContent className="p-6">
                //     <h3 className="text-lg font-bold">{vertical}</h3>
                //   </CardContent>
                // </Card>
                <div key={index} className="mb-10">
                  <h3 className="text-xl font-semibold mb-2">{vertical}</h3>
                  {/* <p className="font-light text-muted-foreground">
                    {description}
                  </p> */}
                  <div className="my-3 border-t border-gray-700 w-8"></div>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Sint corporis similique, molestiae autem provident.
                  </p>
                </div>
              ))}
            </div>
            <div className="text-center mt-12">
              <Button asChild>
                <Link href="/investments">
                  View Our Full Investment Portfolio{" "}
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Portfolio Section */}
        <section className="py-16 md:py-24 bg-[#f4f8fc]">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-medium tracking-tight mb-4">
                Our Portfolio: Powering Game-Changers
              </h2>
              <p className="text-lg text-muted-foreground">
                We have backed and nurtured some of the most innovative,
                high-growth companies across Africa and beyond
              </p>
            </div>
            <PortfolioScroller companies={portfolioCompanies} />
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 md:py-24 bg-white relative isolate overflow-hidden">
          <svg
            aria-hidden="true"
            className="absolute inset-x-0 top-0 -z-10 h-[95vh] w-full fill-neutral-50 stroke-neutral-950/5 [mask-image:linear-gradient(to_bottom_left,white_40%,transparent_50%)]">
            <rect
              width="100%"
              height="100%"
              fill="url(#:R1lba:)"
              strokeWidth="0"></rect>
            <svg x="50%" y="-96" strokeWidth="0" className="overflow-visible">
              <path
                transform="translate(64 160)"
                d="M45.119 4.5a11.5 11.5 0 0 0-11.277 9.245l-25.6 128C6.82 148.861 12.262 155.5 19.52 155.5h63.366a11.5 11.5 0 0 0 11.277-9.245l25.6-128c1.423-7.116-4.02-13.755-11.277-13.755H45.119Z"></path>
              <path
                transform="translate(128 320)"
                d="M45.119 4.5a11.5 11.5 0 0 0-11.277 9.245l-25.6 128C6.82 148.861 12.262 155.5 19.52 155.5h63.366a11.5 11.5 0 0 0 11.277-9.245l25.6-128c1.423-7.116-4.02-13.755-11.277-13.755H45.119Z"></path>
              <path
                transform="translate(288 480)"
                d="M45.119 4.5a11.5 11.5 0 0 0-11.277 9.245l-25.6 128C6.82 148.861 12.262 155.5 19.52 155.5h63.366a11.5 11.5 0 0 0 11.277-9.245l25.6-128c1.423-7.116-4.02-13.755-11.277-13.755H45.119Z"></path>
              <path
                transform="translate(512 320)"
                d="M45.119 4.5a11.5 11.5 0 0 0-11.277 9.245l-25.6 128C6.82 148.861 12.262 155.5 19.52 155.5h63.366a11.5 11.5 0 0 0 11.277-9.245l25.6-128c1.423-7.116-4.02-13.755-11.277-13.755H45.119Z"></path>
              <path
                transform="translate(544 640)"
                d="M45.119 4.5a11.5 11.5 0 0 0-11.277 9.245l-25.6 128C6.82 148.861 12.262 155.5 19.52 155.5h63.366a11.5 11.5 0 0 0 11.277-9.245l25.6-128c1.423-7.116-4.02-13.755-11.277-13.755H45.119Z"></path>
              <path
                transform="translate(320 800)"
                d="M45.119 4.5a11.5 11.5 0 0 0-11.277 9.245l-25.6 128C6.82 148.861 12.262 155.5 19.52 155.5h63.366a11.5 11.5 0 0 0 11.277-9.245l25.6-128c1.423-7.116-4.02-13.755-11.277-13.755H45.119Z"></path>
            </svg>
            <defs>
              <pattern
                id=":R1lba:"
                width="96"
                height="480"
                x="50%"
                patternUnits="userSpaceOnUse"
                patternTransform="translate(0 -96)"
                fill="none">
                <path d="M128 0 98.572 147.138A16 16 0 0 1 82.883 160H13.117a16 16 0 0 0-15.69 12.862l-26.855 134.276A16 16 0 0 1-45.117 320H-116M64-160 34.572-12.862A16 16 0 0 1 18.883 0h-69.766a16 16 0 0 0-15.69 12.862l-26.855 134.276A16 16 0 0 1-109.117 160H-180M192 160l-29.428 147.138A15.999 15.999 0 0 1 146.883 320H77.117a16 16 0 0 0-15.69 12.862L34.573 467.138A16 16 0 0 1 18.883 480H-52M-136 480h58.883a16 16 0 0 0 15.69-12.862l26.855-134.276A16 16 0 0 1-18.883 320h69.766a16 16 0 0 0 15.69-12.862l26.855-134.276A16 16 0 0 1 109.117 160H192M-72 640h58.883a16 16 0 0 0 15.69-12.862l26.855-134.276A16 16 0 0 1 45.117 480h69.766a15.999 15.999 0 0 0 15.689-12.862l26.856-134.276A15.999 15.999 0 0 1 173.117 320H256M-200 320h58.883a15.999 15.999 0 0 0 15.689-12.862l26.856-134.276A16 16 0 0 1-82.883 160h69.766a16 16 0 0 0 15.69-12.862L29.427 12.862A16 16 0 0 1 45.117 0H128"></path>
              </pattern>
            </defs>
          </svg>
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-medium tracking-tight mb-4">
                Testimonials: Hear from Our Partners
              </h2>
            </div>
            <TestimonialCarousel testimonials={testimonials} />
          </div>
        </section>

        {/* Growth & Impact Initiatives */}
        <section className="py-16 md:py-24 bg-[#f4f8fc]">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl md:text-5xl tracking-tight font-medium mb-4">
                Growth & Impact Initiatives
              </h2>
              <p className="text-lg text-muted-foreground">
                At Platform Capital, we go beyond investments—we build
                ecosystems that empower businesses and communities
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-12">
              <Card>
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-4">Unicorn Group</h3>
                  <p className="text-lg mb-6">
                    Through Unicorn Group, we support and scale African startups
                    with funding, mentorship, and world-class incubation
                    facilities. We empower the next generation of innovators and
                    disruptors.
                  </p>
                  <Image
                    src="/images/unicorn.jpg?height=200&width=400"
                    alt="Unicorn Group"
                    width={400}
                    height={200}
                    className="rounded-lg mb-6 w-full max-h-[500px] object-cover"
                  />
                  <Button variant="outline" asChild>
                    <Link href="/unicorn-group">Learn More</Link>
                  </Button>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-4">Diatom Impact</h3>
                  <p className="text-lg mb-6">
                    Our Diatom Impact foundation is dedicated to creating
                    lasting social change through education, technology access,
                    and social entrepreneurship programs.
                  </p>
                  <Image
                    src="/images/diacom.jpg?height=200&width=400"
                    alt="Diatom Impact"
                    width={400}
                    height={200}
                    className="rounded-lg mb-6 w-full max-h-[500px] object-cover"
                  />
                  <Button variant="outline" asChild>
                    <Link href="/diatom-impact">Learn More</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
            <div className="text-center mt-12">
              <Button asChild>
                <Link href="/impact">
                  Explore Our Impact Initiatives{" "}
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Events Section */}
        <section className="py-16 md:py-24 bg-white relative isolate overflow-hidden">
          <svg
            aria-hidden="true"
            className="absolute inset-x-0 top-0 -z-10 h-[95vh] w-full fill-neutral-50 stroke-neutral-950/5 [mask-image:linear-gradient(to_bottom_left,white_40%,transparent_50%)]">
            <rect
              width="100%"
              height="100%"
              fill="url(#:R1lba:)"
              strokeWidth="0"></rect>
            <svg x="50%" y="-96" strokeWidth="0" className="overflow-visible">
              <path
                transform="translate(64 160)"
                d="M45.119 4.5a11.5 11.5 0 0 0-11.277 9.245l-25.6 128C6.82 148.861 12.262 155.5 19.52 155.5h63.366a11.5 11.5 0 0 0 11.277-9.245l25.6-128c1.423-7.116-4.02-13.755-11.277-13.755H45.119Z"></path>
              <path
                transform="translate(128 320)"
                d="M45.119 4.5a11.5 11.5 0 0 0-11.277 9.245l-25.6 128C6.82 148.861 12.262 155.5 19.52 155.5h63.366a11.5 11.5 0 0 0 11.277-9.245l25.6-128c1.423-7.116-4.02-13.755-11.277-13.755H45.119Z"></path>
              <path
                transform="translate(288 480)"
                d="M45.119 4.5a11.5 11.5 0 0 0-11.277 9.245l-25.6 128C6.82 148.861 12.262 155.5 19.52 155.5h63.366a11.5 11.5 0 0 0 11.277-9.245l25.6-128c1.423-7.116-4.02-13.755-11.277-13.755H45.119Z"></path>
              <path
                transform="translate(512 320)"
                d="M45.119 4.5a11.5 11.5 0 0 0-11.277 9.245l-25.6 128C6.82 148.861 12.262 155.5 19.52 155.5h63.366a11.5 11.5 0 0 0 11.277-9.245l25.6-128c1.423-7.116-4.02-13.755-11.277-13.755H45.119Z"></path>
              <path
                transform="translate(544 640)"
                d="M45.119 4.5a11.5 11.5 0 0 0-11.277 9.245l-25.6 128C6.82 148.861 12.262 155.5 19.52 155.5h63.366a11.5 11.5 0 0 0 11.277-9.245l25.6-128c1.423-7.116-4.02-13.755-11.277-13.755H45.119Z"></path>
              <path
                transform="translate(320 800)"
                d="M45.119 4.5a11.5 11.5 0 0 0-11.277 9.245l-25.6 128C6.82 148.861 12.262 155.5 19.52 155.5h63.366a11.5 11.5 0 0 0 11.277-9.245l25.6-128c1.423-7.116-4.02-13.755-11.277-13.755H45.119Z"></path>
            </svg>
            <defs>
              <pattern
                id=":R1lba:"
                width="96"
                height="480"
                x="50%"
                patternUnits="userSpaceOnUse"
                patternTransform="translate(0 -96)"
                fill="none">
                <path d="M128 0 98.572 147.138A16 16 0 0 1 82.883 160H13.117a16 16 0 0 0-15.69 12.862l-26.855 134.276A16 16 0 0 1-45.117 320H-116M64-160 34.572-12.862A16 16 0 0 1 18.883 0h-69.766a16 16 0 0 0-15.69 12.862l-26.855 134.276A16 16 0 0 1-109.117 160H-180M192 160l-29.428 147.138A15.999 15.999 0 0 1 146.883 320H77.117a16 16 0 0 0-15.69 12.862L34.573 467.138A16 16 0 0 1 18.883 480H-52M-136 480h58.883a16 16 0 0 0 15.69-12.862l26.855-134.276A16 16 0 0 1-18.883 320h69.766a16 16 0 0 0 15.69-12.862l26.855-134.276A16 16 0 0 1 109.117 160H192M-72 640h58.883a16 16 0 0 0 15.69-12.862l26.855-134.276A16 16 0 0 1 45.117 480h69.766a15.999 15.999 0 0 0 15.689-12.862l26.856-134.276A15.999 15.999 0 0 1 173.117 320H256M-200 320h58.883a15.999 15.999 0 0 0 15.689-12.862l26.856-134.276A16 16 0 0 1-82.883 160h69.766a16 16 0 0 0 15.69-12.862L29.427 12.862A16 16 0 0 1 45.117 0H128"></path>
              </pattern>
            </defs>
          </svg>
          <div className="container px-4 md:px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
                  Events & Conferences
                </h2>
                <h3 className="text-2xl font-bold mb-4">
                  Africa Walk Conference
                </h3>
                <p className="text-lg mb-6">
                  A premier annual event that unites leaders, investors, and
                  innovators to discuss the future of Africa's economies,
                  innovation, and sustainable investments.
                </p>
                <Button asChild>
                  <Link href="/events">
                    Join Our Next Event{" "}
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
              <div>
                <Image
                  src="/images/africa.jpg?height=400&width=600"
                  alt="Africa Walk Conference"
                  width={600}
                  height={400}
                  className="rounded-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Media & Press Section */}
        <section className="py-16 md:py-24 bg-[#f4f8fc]">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl md:text-5xl tracking-tight font-medium mb-4">
                Media & Press
              </h2>
              <p className="text-lg text-muted-foreground">
                Stay updated with our latest news, insights, and media coverage
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {[1, 2, 3].map(item => (
                <Card key={item} className="overflow-hidden">
                  <Image
                    src={`/images/platform.jpg?height=200&width=400&text=Press Release ${item}`}
                    alt={`Press Release ${item}`}
                    width={400}
                    height={200}
                    className="w-full h-48 object-cover"
                  />
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-2">
                      Platform Capital Announces New Investment
                    </h3>
                    <p className="text-muted-foreground mb-4">March 24, 2023</p>
                    <Button variant="outline" size="sm" asChild>
                      <Link href="/press">Read More</Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="text-center mt-12">
              <Button variant="outline" asChild>
                <Link href="/press">
                  View All Press Releases{" "}
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Video Section */}
        <section className="py-16 md:py-24 bg-white relative isolate overflow-hidden">
          <svg
            aria-hidden="true"
            className="absolute inset-x-0 top-0 -z-10 h-[95vh] w-full fill-neutral-50 stroke-neutral-950/5 [mask-image:linear-gradient(to_bottom_left,white_40%,transparent_50%)]">
            <rect
              width="100%"
              height="100%"
              fill="url(#:R1lba:)"
              strokeWidth="0"></rect>
            <svg x="50%" y="-96" strokeWidth="0" className="overflow-visible">
              <path
                transform="translate(64 160)"
                d="M45.119 4.5a11.5 11.5 0 0 0-11.277 9.245l-25.6 128C6.82 148.861 12.262 155.5 19.52 155.5h63.366a11.5 11.5 0 0 0 11.277-9.245l25.6-128c1.423-7.116-4.02-13.755-11.277-13.755H45.119Z"></path>
              <path
                transform="translate(128 320)"
                d="M45.119 4.5a11.5 11.5 0 0 0-11.277 9.245l-25.6 128C6.82 148.861 12.262 155.5 19.52 155.5h63.366a11.5 11.5 0 0 0 11.277-9.245l25.6-128c1.423-7.116-4.02-13.755-11.277-13.755H45.119Z"></path>
              <path
                transform="translate(288 480)"
                d="M45.119 4.5a11.5 11.5 0 0 0-11.277 9.245l-25.6 128C6.82 148.861 12.262 155.5 19.52 155.5h63.366a11.5 11.5 0 0 0 11.277-9.245l25.6-128c1.423-7.116-4.02-13.755-11.277-13.755H45.119Z"></path>
              <path
                transform="translate(512 320)"
                d="M45.119 4.5a11.5 11.5 0 0 0-11.277 9.245l-25.6 128C6.82 148.861 12.262 155.5 19.52 155.5h63.366a11.5 11.5 0 0 0 11.277-9.245l25.6-128c1.423-7.116-4.02-13.755-11.277-13.755H45.119Z"></path>
              <path
                transform="translate(544 640)"
                d="M45.119 4.5a11.5 11.5 0 0 0-11.277 9.245l-25.6 128C6.82 148.861 12.262 155.5 19.52 155.5h63.366a11.5 11.5 0 0 0 11.277-9.245l25.6-128c1.423-7.116-4.02-13.755-11.277-13.755H45.119Z"></path>
              <path
                transform="translate(320 800)"
                d="M45.119 4.5a11.5 11.5 0 0 0-11.277 9.245l-25.6 128C6.82 148.861 12.262 155.5 19.52 155.5h63.366a11.5 11.5 0 0 0 11.277-9.245l25.6-128c1.423-7.116-4.02-13.755-11.277-13.755H45.119Z"></path>
            </svg>
            <defs>
              <pattern
                id=":R1lba:"
                width="96"
                height="480"
                x="50%"
                patternUnits="userSpaceOnUse"
                patternTransform="translate(0 -96)"
                fill="none">
                <path d="M128 0 98.572 147.138A16 16 0 0 1 82.883 160H13.117a16 16 0 0 0-15.69 12.862l-26.855 134.276A16 16 0 0 1-45.117 320H-116M64-160 34.572-12.862A16 16 0 0 1 18.883 0h-69.766a16 16 0 0 0-15.69 12.862l-26.855 134.276A16 16 0 0 1-109.117 160H-180M192 160l-29.428 147.138A15.999 15.999 0 0 1 146.883 320H77.117a16 16 0 0 0-15.69 12.862L34.573 467.138A16 16 0 0 1 18.883 480H-52M-136 480h58.883a16 16 0 0 0 15.69-12.862l26.855-134.276A16 16 0 0 1-18.883 320h69.766a16 16 0 0 0 15.69-12.862l26.855-134.276A16 16 0 0 1 109.117 160H192M-72 640h58.883a16 16 0 0 0 15.69-12.862l26.855-134.276A16 16 0 0 1 45.117 480h69.766a15.999 15.999 0 0 0 15.689-12.862l26.856-134.276A15.999 15.999 0 0 1 173.117 320H256M-200 320h58.883a15.999 15.999 0 0 0 15.689-12.862l26.856-134.276A16 16 0 0 1-82.883 160h69.766a16 16 0 0 0 15.69-12.862L29.427 12.862A16 16 0 0 1 45.117 0H128"></path>
              </pattern>
            </defs>
          </svg>
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl md:text-5xl tracking-tight font-medium mb-4">
                Watch Our Latest Videos
              </h2>
              <p className="text-lg text-muted-foreground">
                Stay engaged with our latest insights, events, and impact
                stories
              </p>
            </div>
            <VideoSection videoLinks={videoLinks} />
            <div className="text-center mt-12">
              <Button asChild>
                <Link
                  href="https://www.youtube.com/@PlatformCapital"
                  target="_blank"
                  rel="noopener noreferrer">
                  Visit Our YouTube Channel{" "}
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Impact Stats Section */}
        {/* <section className="py-16 md:py-24 bg-black text-white">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl md:text-5xl tracking-tight font-medium mb-4">
                Our Impact in Numbers
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {impactStats.map((stat, index) => (
                <div key={index} className="text-center">
                  <h3 className="text-4xl md:text-5xl font-bold mb-2">
                    {stat.stat}
                  </h3>
                  <p className="text-xl">{stat.description}</p>
                </div>
              ))}
            </div>
            <div className="max-w-3xl mx-auto text-center mt-12">
              <p className="text-lg">
                At Platform Capital, we are not just investing—we are
                revolutionizing industries, creating generational wealth, and
                transforming Africa's economic landscape.
              </p>
            </div>
          </div>
        </section> */}

        {/* CTA Section */}
        {/* <section className="py-16 md:py-24 bg-white">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-5xl tracking-tight font-medium mb-4">
                Ready to Elevate Your Business?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Let's build the future together. Contact us today to explore how
                we can partner for success.
              </p>
              <Button size="lg" asChild>
                <Link href="/contact">Contact Us Today</Link>
              </Button>
            </div>
          </div>
        </section> */}
      </main>
      <Footer />
    </>
  );
}
