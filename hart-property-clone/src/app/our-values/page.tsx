import ValuesSection from "@/components/values-section";
import { AnimatedSection } from "@/components/ui/animated-section";

export default function OurValuesPage() {
  return (
    <div>
      <div className="bg-hart-dark h-64 flex items-center justify-center">
        <h1 className="text-4xl text-white font-raleway">
          <span className="font-bold">OUR</span> VALUES
        </h1>
      </div>
      <AnimatedSection direction="up" delay={0.2}>
        <ValuesSection />
      </AnimatedSection>
    </div>
  );
}
