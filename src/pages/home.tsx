"use client";

import DefaultLayout from "@/components/templates/default";
import SocialFeedSection from "@/components/organisms/home/socialFeedSection";
import ContactSection from "@/components/organisms/home/contactSection";
import HeroSection from "@/components/organisms/home/heroSection";
import PartnersSection from "@/components/organisms/home/partnersSection";

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
