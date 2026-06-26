import React from 'react';
import { Navbar } from './sections/Navbar';
import { Hero } from './sections/Hero';
import { Companies } from './sections/Companies';
import { Statistics } from './sections/Statistics';
import { Features } from './sections/Features';
import { BentoSection } from './sections/BentoSection';
import { WorkflowSection } from './sections/Workflow';
import { Pricing } from './sections/Pricing';
import { Testimonials } from './sections/Testimonials';
import { FAQ } from './sections/FAQ';
import { CTA } from './sections/CTA';
import { Footer } from './sections/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#F8F8F6] font-sans antialiased selection:bg-[#0F9D8A]/20 selection:text-[#0F9D8A]">
      {/* 1. Header Navigation */}
      <Navbar />

      {/* 2. Main Narrative Flow */}
      <main>
        {/* Hero Section with Live Cluster Dashboard */}
        <Hero />

        {/* Client Logotype Strip */}
        <Companies />

        {/* Core SLA & Throughput Statistics */}
        <Statistics />

        {/* Feature Capability Showcase */}
        <Features />

        {/* Interactive Bento Telemetry Board */}
        <BentoSection />

        {/* Determinative Pipeline Workflow Timeline */}
        <WorkflowSection />

        {/* Investment Licensing Matrix (Pricing Engine) */}
        <Pricing />

        {/* Validated Engineering Testimonials */}
        <Testimonials />

        {/* FAQ Accordion Index */}
        <FAQ />

        {/* Ultimate Conversion CTA Card */}
        <CTA />
      </main>

      {/* 3. Global Semantic Footer */}
      <Footer />
    </div>
  );
}
