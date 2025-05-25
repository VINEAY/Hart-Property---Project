import EngageSection from "@/components/engage-section";
import Image from "next/image";
import { AnimatedSection } from "@/components/ui/animated-section";

export default function OurWayPage() {
  return (
    <div>
      <div className="bg-hart-dark h-64 flex items-center justify-center">
        <h1 className="text-4xl text-white font-raleway">
          <span className="font-bold">OUR</span> WAY
        </h1>
      </div>

      <AnimatedSection direction="up" delay={0.2}>
        {/* Background image */}
        <div className="relative h-[50vh] overflow-hidden">
          <Image
            src="https://ext.same-assets.com/3964215446/2996139437.jpeg"
            alt="Property development"
            fill
            className="object-cover"
            crossOrigin="anonymous"
          />
        </div>
      </AnimatedSection>

      <AnimatedSection direction="up" delay={0.4}>
        <EngageSection />
      </AnimatedSection>
    </div>
  );
}
