"use client";

import DefaultLayout from "@/components/templates/default";
import SocialFeedSection from "@/components/organisms/socialFeedSection";
import ContactSection from "@/components/organisms/contactSection";
import HeroSection from "@/components/organisms/heroSection";
import PartnersSection from "@/components/organisms/partnersSection";

export default function IndexPage() {
  return (
    <DefaultLayout>
      <HeroSection />

      <PartnersSection />

      <SocialFeedSection />

      <ContactSection />
    </DefaultLayout>
  );
}
