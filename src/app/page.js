import Hero from "@/components/Hero";
import Partners from "@/components/Partners";
import ValueProp from "@/components/ValueProp";
import Features from "@/components/Features";
import CaseStudies from "@/components/CaseStudies";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Partners />
      <ValueProp />
      <Features />
      <CaseStudies />
    </main>
  );
}
