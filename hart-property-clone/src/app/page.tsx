import Hero from "@/components/hero";
import VisionSection from "@/components/vision-section";
import ValuesSection from "@/components/values-section";
import EngageSection from "@/components/engage-section";
import ContactSection from "@/components/contact-section";
import { AnimatedSection } from "@/components/ui/animated-section";

export default function Home() {
  return (
    <div>
      <AnimatedSection direction="up"><Hero /></AnimatedSection>
      <AnimatedSection direction="up" delay={0.2}><VisionSection /></AnimatedSection>
      <AnimatedSection direction="up" delay={0.4}><ValuesSection /></AnimatedSection>
      <AnimatedSection direction="up" delay={0.6}><EngageSection /></AnimatedSection>
      <AnimatedSection direction="up" delay={0.8}><ContactSection /></AnimatedSection>
    </div>
  );
}
