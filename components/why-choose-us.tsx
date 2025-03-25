import Image from "next/image";

interface FeatureProps {
  title: string;
  description: string;
}

function Feature({ title, description }: FeatureProps) {
  return (
    <div className="mb-10">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="font-light text-muted-foreground">{description}</p>
      <div className="mt-6 border-t border-gray-700 w-8"></div>
    </div>
  );
}

export function WhyChooseUs() {
  const features = [
    {
      title: "Strategic Investment Expertise",
      description:
        "We specialize in identifying high-potential opportunities across Africa and beyond, deploying capital strategically to maximize returns and impact."
    },
    {
      title: "Value-Added Partnership",
      description:
        "We have a team of skilled professionals who are experts in the latest business frameworks, providing hands-on support to our portfolio companies."
    },
    {
      title: "Global Network Access",
      description:
        "We are at the forefront of connecting African businesses to global markets, which means opening doors to international partnerships and expansion opportunities."
    },
    {
      title: "Comprehensive Growth Management",
      description:
        "At Platform Capital, we understand the importance of having a robust growth strategy. That's why we run all of our portfolio companies through a proven acceleration framework."
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-[#f4f8fc]">
      <div className="container px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-base text-muted-foreground">Why Choose Us</p>
            <h2 className="text-3xl md:text-5xl tracking-tight font-medium mt-3 mb-6">
              We help identify, explore and respond to new opportunities.
            </h2>
            <p className="text-xl mb-8 text-muted-foreground font-light">
              As long as those opportunities involve creating value and driving
              growth — we can develop an endless number of pathways to success.
            </p>
            <div className="relative z-10">
              <Image
                src="/images/330235305_462941035921466_6595542028735887616_n.jpg?height=500&width=600&text=Platform+Capital+Investment"
                alt="Platform Capital Investment Process"
                width={600}
                height={500}
                className="rounded-lg object-cover"
              />
              <div className="z-0 absolute -top-4 -right-4 w-24 h-24 bg-primary"></div>
              <div className="z-0 absolute -bottom-4 -left-4 w-16 h-16 bg-primary"></div>
            </div>
          </div>

          <div className="space-y-6 md:pl-12">
            {features.map((feature, index) => (
              <Feature
                key={index}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
