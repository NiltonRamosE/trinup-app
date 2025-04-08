"use client";

import DefaultLayout from "@/components/templates/default";
import SocialFeedSection from "@/components/organisms/home/socialFeedSection";
import ContactSection from "@/components/organisms/home/contactSection";
import HeroSection from "@/components/organisms/home/heroSection";
import PartnersSection from "@/components/organisms/home/partnersSection";
import { Helmet } from 'react-helmet-async';
import { indexPage } from "@/lib/constants/seoPages"

export default function IndexPage() {
  return (
    <>
      <Helmet>
        {/* Primary Meta Tags */}
        <title>{indexPage.title}</title>
        <meta name="title" content={indexPage.title} />
        <meta name="description" content={indexPage.description} />
        <meta name="keywords" content={indexPage.keywords.join(", ")} />

        {/* Open Graph / Facebook */}
        <meta property="og:url" content={indexPage.url} />
        <meta property="og:title" content={indexPage.title} />
        <meta property="og:description" content={indexPage.description} />
        <meta property="og:image" content={indexPage.image} />

        {/* Twitter */}
        <meta name="twitter:url" content={indexPage.url} />
        <meta name="twitter:title" content={indexPage.title} />
        <meta name="twitter:description" content={indexPage.description} />
        <meta name="twitter:image" content={indexPage.image} />
        
        <link rel="canonical" href={indexPage.url}/>
        {/* Lite YouTube Embed - CDN */}
        <script type="module" src="https://cdn.jsdelivr.net/npm/@justinribeiro/lite-youtube@1/lite-youtube.min.js"></script>
      </Helmet>
      <DefaultLayout>
        <HeroSection />

        <PartnersSection />

        <SocialFeedSection />

        <ContactSection />

      </DefaultLayout>
    </>
  );
}
