import { ArtistsSection } from "@/components/artists-section";
import { BrandsSection } from "@/components/brands-section";
import { CollaboratorsSection } from "@/components/collaborators-section";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Manifesto } from "@/components/manifesto";
import { PhilosophySection } from "@/components/philosophy-section";
import { SessionsSection } from "@/components/sessions-section";
import { TeamSection } from "@/components/team-section";
import { WhatWeDo } from "@/components/what-we-do";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Manifesto />
        <WhatWeDo />
        <ArtistsSection />
        <CollaboratorsSection />
        <BrandsSection />
        <TeamSection />
        <SessionsSection />
        <PhilosophySection />
      </main>
      <Footer />
    </>
  );
}
