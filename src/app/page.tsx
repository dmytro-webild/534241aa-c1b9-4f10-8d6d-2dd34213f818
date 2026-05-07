"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactCTA from '@/components/sections/contact/ContactCTA';
import FeatureCardSeven from '@/components/sections/feature/FeatureCardSeven';
import FooterBase from '@/components/sections/footer/FooterBase';
import HeroSplitDoubleCarousel from '@/components/sections/hero/HeroSplitDoubleCarousel';
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import ProductCardTwo from '@/components/sections/product/ProductCardTwo';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import TeamCardFive from '@/components/sections/team/TeamCardFive';
import TestimonialCardTwo from '@/components/sections/testimonial/TestimonialCardTwo';
import TextSplitAbout from '@/components/sections/about/TextSplitAbout';

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="directional-hover"
        defaultTextAnimation="entrance-slide"
        borderRadius="soft"
        contentWidth="small"
        sizing="mediumLargeSizeMediumTitles"
        background="circleGradient"
        cardStyle="solid"
        primaryButtonStyle="shadow"
        secondaryButtonStyle="radial-glow"
        headingFontWeight="normal"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarLayoutFloatingOverlay
      navItems={[
        {
          name: "Home",
          id: "hero",
        },
        {
          name: "About",
          id: "about",
        },
        {
          name: "Services",
          id: "features",
        },
        {
          name: "Projects",
          id: "products",
        },
        {
          name: "Contact",
          id: "contact",
        },
      ]}
      brandName="Vision Vault"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroSplitDoubleCarousel
      background={{
        variant: "gradient-bars",
      }}
      title="Defining the Future of Digital Presence"
      description="Vision Vault Media crafts immersive digital experiences that capture the essence of modern innovation. We build, design, and redefine brands for the next generation."
      leftCarouselItems={[
        {
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3DBf69E7h9WAlw2JUCQiE4hCJae/modern-architectural-visual-abstract-hig-1778117756202-302260e0.png",
          imageAlt: "Digital Innovation",
        },
        {
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3DBf69E7h9WAlw2JUCQiE4hCJae/professional-web-design-studio-aesthetic-1778117764387-100d1c40.png",
          imageAlt: "Studio Workspace",
        },
        {
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3DBf69E7h9WAlw2JUCQiE4hCJae/abstract-data-network-nodes-neon-subtle--1778117773529-17073af3.png",
          imageAlt: "Data Network",
        },
        {
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3DBf69E7h9WAlw2JUCQiE4hCJae/high-end-corporate-headshots-professiona-1778117781606-b3689fbc.png",
          imageAlt: "Corporate Focus",
        },
        {
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3DBf69E7h9WAlw2JUCQiE4hCJae/architectural-interior-view-modern-desig-1778117792453-da471382.png",
          imageAlt: "Modern Concrete",
        },
      ]}
      rightCarouselItems={[
        {
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3DBf69E7h9WAlw2JUCQiE4hCJae/luxury-creative-design-display-digital-w-1778117804682-2c0586f6.png",
          imageAlt: "Creative Dashboard",
        },
        {
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3DBf69E7h9WAlw2JUCQiE4hCJae/professional-web-design-studio-aesthetic-1778117812843-9df4631e.png",
          imageAlt: "Studio Workspace",
        },
        {
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3DBf69E7h9WAlw2JUCQiE4hCJae/abstract-data-network-nodes-neon-subtle--1778117822270-e093445b.png",
          imageAlt: "Data Network",
        },
        {
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3DBf69E7h9WAlw2JUCQiE4hCJae/modern-architectural-visual-abstract-hig-1778117831557-7db80019.png",
          imageAlt: "Digital Innovation",
        },
        {
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3DBf69E7h9WAlw2JUCQiE4hCJae/architectural-interior-view-modern-desig-1778117840599-646732cc.png",
          imageAlt: "Modern Concrete",
        },
      ]}
      buttons={[
        {
          text: "Start Project",
          href: "#contact",
        },
      ]}
      avatars={[
        {
          src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3DBf69E7h9WAlw2JUCQiE4hCJae/high-end-corporate-headshots-professiona-1778117847890-f7ad5b0c.png",
          alt: "Team Member 1",
        },
        {
          src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3DBf69E7h9WAlw2JUCQiE4hCJae/luxury-creative-design-display-digital-w-1778117858750-73a7b2dc.png",
          alt: "Team Member 2",
        },
        {
          src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3DBf69E7h9WAlw2JUCQiE4hCJae/modern-architectural-visual-abstract-hig-1778117756202-302260e0.png",
          alt: "Team Member 3",
        },
        {
          src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3DBf69E7h9WAlw2JUCQiE4hCJae/professional-web-design-studio-aesthetic-1778117764387-100d1c40.png",
          alt: "Team Member 4",
        },
        {
          src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3DBf69E7h9WAlw2JUCQiE4hCJae/abstract-data-network-nodes-neon-subtle--1778117773529-17073af3.png",
          alt: "Team Member 5",
        },
      ]}
      avatarText="Trusted by 100+ global brands"
      marqueeItems={[
        {
          type: "text",
          text: "Innovation",
        },
        {
          type: "text",
          text: "Excellence",
        },
        {
          type: "text",
          text: "Scalability",
        },
        {
          type: "text",
          text: "Precision",
        },
        {
          type: "text",
          text: "Creativity",
        },
      ]}
    />
  </div>

  <div id="about" data-section="about">
      <TextSplitAbout
      useInvertedBackground={false}
      title="Built for Visionaries"
      description={[
        "We are a team of passionate creators, developers, and thinkers. At Vision Vault, we believe that design should never be an afterthought, but the primary language of your brand.",
        "Our mission is to help companies bridge the gap between their vision and reality through meticulous execution and high-performance engineering.",
      ]}
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardSeven
      animationType="slide-up"
      textboxLayout="split"
      useInvertedBackground={false}
      features={[
        {
          title: "Web Development",
          description: "High-speed, scalable web platforms built on the modern stack.",
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3DBf69E7h9WAlw2JUCQiE4hCJae/modern-architectural-visual-abstract-hig-1778117866641-0f1d68ac.png",
          imageAlt: "Dev",
        },
        {
          title: "Digital Strategy",
          description: "Data-driven marketing and growth strategies that resonate.",
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3DBf69E7h9WAlw2JUCQiE4hCJae/professional-web-design-studio-aesthetic-1778117878428-f97d2515.png",
          imageAlt: "Strat",
        },
        {
          title: "UX/UI Design",
          description: "Crafting intuitive and elegant interfaces that users love.",
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3DBf69E7h9WAlw2JUCQiE4hCJae/abstract-data-network-nodes-neon-subtle--1778117889389-5008d6a8.png",
          imageAlt: "Design",
        },
      ]}
      title="Mastery in Motion"
      description="Our core services are designed to move the needle and elevate your market position."
    />
  </div>

  <div id="products" data-section="products">
      <ProductCardTwo
      animationType="slide-up"
      textboxLayout="split"
      gridVariant="bento-grid"
      useInvertedBackground={false}
      products={[
        {
          id: "1",
          brand: "Vault",
          name: "Brand Foundation",
          price: "$5,000",
          rating: 5,
          reviewCount: "12",
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3DBf69E7h9WAlw2JUCQiE4hCJae/modern-architectural-visual-abstract-hig-1778117900714-7e4b641d.png",
        },
        {
          id: "2",
          brand: "Vault",
          name: "Premium Web Platform",
          price: "$12,000",
          rating: 5,
          reviewCount: "24",
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3DBf69E7h9WAlw2JUCQiE4hCJae/professional-web-design-studio-aesthetic-1778117910015-7822e0fc.png",
        },
        {
          id: "3",
          brand: "Vault",
          name: "Custom SaaS Build",
          price: "$25,000",
          rating: 5,
          reviewCount: "8",
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3DBf69E7h9WAlw2JUCQiE4hCJae/abstract-data-network-nodes-neon-subtle--1778117918482-0e07a366.png",
        },
        {
          id: "4",
          brand: "Vault",
          name: "Mobile Optimization",
          price: "$4,000",
          rating: 5,
          reviewCount: "30",
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3DBf69E7h9WAlw2JUCQiE4hCJae/high-end-corporate-headshots-professiona-1778117926132-14aee31d.png",
        },
        {
          id: "5",
          brand: "Vault",
          name: "Content Strategy",
          price: "$3,500",
          rating: 5,
          reviewCount: "15",
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3DBf69E7h9WAlw2JUCQiE4hCJae/architectural-interior-view-modern-desig-1778117937525-dbb5b17d.png",
        },
        {
          id: "6",
          brand: "Vault",
          name: "SEO Foundation",
          price: "$2,500",
          rating: 5,
          reviewCount: "40",
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3DBf69E7h9WAlw2JUCQiE4hCJae/luxury-creative-design-display-digital-w-1778117947556-cfbe4e25.png",
        },
      ]}
      title="Signature Solutions"
      description="A curated selection of our specialized offerings for high-impact growth."
    />
  </div>

  <div id="team" data-section="team">
      <TeamCardFive
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      team={[
        {
          id: "1",
          name: "Alex Rivet",
          role: "Creative Director",
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3DBf69E7h9WAlw2JUCQiE4hCJae/modern-architectural-visual-abstract-hig-1778117955849-94dde044.jpg",
        },
        {
          id: "2",
          name: "Maya Chen",
          role: "Lead Architect",
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3DBf69E7h9WAlw2JUCQiE4hCJae/professional-web-design-studio-aesthetic-1778117964429-a65f92f8.png",
        },
        {
          id: "3",
          name: "Sam Vance",
          role: "Growth Strategist",
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3DBf69E7h9WAlw2JUCQiE4hCJae/abstract-data-network-nodes-neon-subtle--1778117974750-f1feaec5.png",
        },
        {
          id: "4",
          name: "Jordan P",
          role: "UX Researcher",
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3DBf69E7h9WAlw2JUCQiE4hCJae/high-end-corporate-headshots-professiona-1778117983307-bb45232c.png",
        },
      ]}
      title="The Minds Behind the Vault"
      description="A global collective of creatives, coders, and strategists."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardTwo
      animationType="slide-up"
      textboxLayout="split"
      useInvertedBackground={false}
      testimonials={[
        {
          id: "1",
          name: "Sarah J.",
          role: "CEO",
          testimonial: "Vision Vault transformed our brand identity overnight.",
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3DBf69E7h9WAlw2JUCQiE4hCJae/modern-architectural-visual-abstract-hig-1778117992404-69160dd4.png",
        },
        {
          id: "2",
          name: "Mark L.",
          role: "Founder",
          testimonial: "High performance and unmatched aesthetics.",
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3DBf69E7h9WAlw2JUCQiE4hCJae/professional-web-design-studio-aesthetic-1778118002482-3a7d0109.png",
        },
        {
          id: "3",
          name: "Elena R.",
          role: "Product Lead",
          testimonial: "The best design partners we've ever worked with.",
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3DBf69E7h9WAlw2JUCQiE4hCJae/abstract-data-network-nodes-neon-subtle--1778118013812-ef87a4fa.png",
        },
        {
          id: "4",
          name: "James K.",
          role: "CMO",
          testimonial: "Exceeded all our expectations.",
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3DBf69E7h9WAlw2JUCQiE4hCJae/high-end-corporate-headshots-professiona-1778118024628-1b2f1940.png",
        },
        {
          id: "5",
          name: "Lisa T.",
          role: "Startup Founder",
          testimonial: "Incredible communication and creative clarity.",
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3DBf69E7h9WAlw2JUCQiE4hCJae/architectural-interior-view-modern-desig-1778118033477-16d0edcf.png",
        },
      ]}
      title="Voices of Impact"
      description="Real feedback from the leaders we help succeed."
    />
  </div>

  <div id="socialProof" data-section="socialProof">
      <SocialProofOne
      textboxLayout="default"
      useInvertedBackground={false}
      names={[
        "Microsoft",
        "Google",
        "Apple",
        "Stripe",
        "Airbnb",
        "Spotify",
        "Netflix",
      ]}
      title="Trusted Partners"
      description="Collaborating with innovators across industries."
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactCTA
      useInvertedBackground={false}
      background={{
        variant: "plain",
      }}
      tag="Get in Touch"
      title="Ready to Build?"
      description="Let's start your project and push the boundaries of what's possible."
      buttons={[
        {
          text: "Contact Us",
          href: "#",
        },
      ]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBase
      columns={[
        {
          title: "Company",
          items: [
            {
              label: "About",
              href: "#about",
            },
            {
              label: "Services",
              href: "#features",
            },
          ],
        },
        {
          title: "Work",
          items: [
            {
              label: "Projects",
              href: "#products",
            },
            {
              label: "Testimonials",
              href: "#testimonials",
            },
          ],
        },
        {
          title: "Legal",
          items: [
            {
              label: "Privacy",
              href: "#",
            },
            {
              label: "Terms",
              href: "#",
            },
          ],
        },
      ]}
      logoText="Vision Vault Media"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
