import VisionSection from "@/components/vision-section";
import { AnimatedSection } from "@/components/ui/animated-section";

export default function OurVisionPage() {
  return (
    <div>
      <div className="bg-hart-dark h-64 flex items-center justify-center">
        <h1 className="text-4xl text-white font-raleway">
          <span className="font-bold">OUR</span> VISION
        </h1>
      </div>
      <AnimatedSection direction="up" delay={0.2}>
        <VisionSection />
      </AnimatedSection>
    </div>
  );
}
