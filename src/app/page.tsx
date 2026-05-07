"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactCTA from '@/components/sections/contact/ContactCTA';
import FeatureCardTwentyThree from '@/components/sections/feature/FeatureCardTwentyThree';
import FooterBase from '@/components/sections/footer/FooterBase';
import HeroSplitDoubleCarousel from '@/components/sections/hero/HeroSplitDoubleCarousel';
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import ProductCardThree from '@/components/sections/product/ProductCardThree';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import TeamCardFive from '@/components/sections/team/TeamCardFive';
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
        { name: "Home", id: "hero" },
        { name: "About", id: "about" },
        { name: "Services", id: "features" },
        { name: "Projects", id: "products" },
        { name: "Contact", id: "contact" },
      ]}
      brandName="Vision Vault"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroSplitDoubleCarousel
      background={{ variant: "gradient-bars" }}
      title="Defining the Future of Digital Presence"
      description="Vision Vault Media crafts immersive digital experiences that capture the essence of modern innovation. We build, design, and redefine brands for the next generation."
      leftCarouselItems={[
        { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3DBf69E7h9WAlw2JUCQiE4hCJae/modern-architectural-visual-abstract-hig-1778117756202-302260e0.png", imageAlt: "Digital Innovation" },
        { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3DBf69E7h9WAlw2JUCQiE4hCJae/professional-web-design-studio-aesthetic-1778117764387-100d1c40.png", imageAlt: "Studio Workspace" },
        { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3DBf69E7h9WAlw2JUCQiE4hCJae/abstract-data-network-nodes-neon-subtle--1778117773529-17073af3.png", imageAlt: "Data Network" },
        { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3DBf69E7h9WAlw2JUCQiE4hCJae/high-end-corporate-headshots-professiona-1778117781606-b3689fbc.png", imageAlt: "Corporate Focus" },
        { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3DBf69E7h9WAlw2JUCQiE4hCJae/architectural-interior-view-modern-desig-1778117792453-da471382.png", imageAlt: "Modern Concrete" },
      ]}
      rightCarouselItems={[
        { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3DBf69E7h9WAlw2JUCQiE4hCJae/luxury-creative-design-display-digital-w-1778117804682-2c0586f6.png", imageAlt: "Creative Dashboard" },
        { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3DBf69E7h9WAlw2JUCQiE4hCJae/professional-web-design-studio-aesthetic-1778117812843-9df4631e.png", imageAlt: "Studio Workspace" },
        { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3DBf69E7h9WAlw2JUCQiE4hCJae/abstract-data-network-nodes-neon-subtle--1778117822270-e093445b.png", imageAlt: "Data Network" },
        { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3DBf69E7h9WAlw2JUCQiE4hCJae/modern-architectural-visual-abstract-hig-1778117831557-7db80019.png", imageAlt: "Digital Innovation" },
        { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3DBf69E7h9WAlw2JUCQiE4hCJae/architectural-interior-view-modern-desig-1778117840599-646732cc.png", imageAlt: "Modern Concrete" },
      ]}
      buttons={[{ text: "Start Project", href: "#contact" }]}
      avatars={[
        { src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3DBf69E7h9WAlw2JUCQiE4hCJae/high-end-corporate-headshots-professiona-1778117847890-f7ad5b0c.png", alt: "Team Member 1" },
        { src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3DBf69E7h9WAlw2JUCQiE4hCJae/luxury-creative-design-display-digital-w-1778117858750-73a7b2dc.png", alt: "Team Member 2" },
      ]}
      avatarText="Trusted by 100+ global brands"
    />
  </div>

  <div id="about" data-section="about">
      <TextSplitAbout
      useInvertedBackground={false}
      title="Built for Visionaries"
      description={[
        "We are a team of passionate creators, developers, and thinkers. At Vision Vault, we believe that design should never be an afterthought, but the primary language of your brand.",        "Our mission is to help companies bridge the gap between their vision and reality through meticulous execution and high-performance engineering."
      ]}
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardTwentyThree
      animationType="scale-rotate"
      textboxLayout="split"
      useInvertedBackground={false}
      title="Mastery in Motion"
      description="Our core services are designed to move the needle and elevate your market position."
      features={[
        { 
            id: "1", 
            title: "Web Development", 
            tags: ["3D Interactive", "React", "High-Performance"],
            imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3DBf69E7h9WAlw2JUCQiE4hCJae/modern-architectural-visual-abstract-hig-1778117866641-0f1d68ac.png", 
            onFeatureClick: () => console.log("Web Dev Interaction")
        },
        { 
            id: "2", 
            title: "Digital Strategy", 
            tags: ["3D Interactive", "Data-Driven", "Growth"],
            imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3DBf69E7h9WAlw2JUCQiE4hCJae/professional-web-design-studio-aesthetic-1778117878428-f97d2515.png", 
            onFeatureClick: () => console.log("Digital Strategy Interaction")
        },
        { 
            id: "3", 
            title: "UX/UI Design", 
            tags: ["3D Interactive", "Human-Centric", "Elegant"],
            imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3DBf69E7h9WAlw2JUCQiE4hCJae/abstract-data-network-nodes-neon-subtle--1778117889389-5008d6a8.png", 
            onFeatureClick: () => console.log("UX/UI Design Interaction")
        }
      ]}
    />
  </div>

  <div id="products" data-section="products">
      <ProductCardThree
      animationType="slide-up"
      textboxLayout="split"
      gridVariant="bento-grid"
      useInvertedBackground={false}
      products={[
        { id: "1", name: "Brand Foundation", price: "Inquire", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3DBf69E7h9WAlw2JUCQiE4hCJae/modern-architectural-visual-abstract-hig-1778117900714-7e4b641d.png" },
        { id: "2", name: "Premium Web Platform", price: "Inquire", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3DBf69E7h9WAlw2JUCQiE4hCJae/professional-web-design-studio-aesthetic-1778117910015-7822e0fc.png" },
        { id: "3", name: "Custom SaaS Build", price: "Inquire", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3DBf69E7h9WAlw2JUCQiE4hCJae/abstract-data-network-nodes-neon-subtle--1778117918482-0e07a366.png" },
        { id: "4", name: "Mobile Optimization", price: "Inquire", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3DBf69E7h9WAlw2JUCQiE4hCJae/high-end-corporate-headshots-professiona-1778117926132-14aee31d.png" },
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
        { id: "1", name: "Yacine Loe", role: "Creative Director", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3DBf69E7h9WAlw2JUCQiE4hCJae/modern-architectural-visual-abstract-hig-1778117955849-94dde044.jpg" },
        { id: "2", name: "Maya Chen", role: "Lead Architect", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3DBf69E7h9WAlw2JUCQiE4hCJae/professional-web-design-studio-aesthetic-1778117964429-a65f92f8.png" },
      ]}
      title="The Minds Behind the Vault"
      description="A global collective of creatives, coders, and strategists."
    />
  </div>

  <div id="socialProof" data-section="socialProof">
      <SocialProofOne
      textboxLayout="default"
      useInvertedBackground={false}
      names={["Microsoft", "Google", "Apple", "Stripe", "Airbnb", "Spotify", "Netflix"]}
      title="Trusted Partners"
      description="Collaborating with innovators across industries."
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactCTA
      useInvertedBackground={false}
      background={{ variant: "plain" }}
      tag="Get in Touch"
      title="Ready to Build?"
      description="Let's start your project and push the boundaries of what's possible."
      buttons={[{ text: "Contact Us", href: "#" }]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBase
      columns={[
        { title: "Company", items: [{ label: "About", href: "#about" }, { label: "Services", href: "#features" }] },
        { title: "Work", items: [{ label: "Projects", href: "#products" }] },
        { title: "Legal", items: [{ label: "Privacy", href: "#" }, { label: "Terms", href: "#" }] },
      ]}
      logoText="Vision Vault Media"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}