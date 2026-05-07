"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactSplit from '@/components/sections/contact/ContactSplit';
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import FooterBase from '@/components/sections/footer/FooterBase';

export default function ContactPage() {
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
        <NavbarLayoutFloatingOverlay
            navItems={[
              { name: "Home", id: "/" },
              { name: "About", id: "/about" },
              { name: "Services", id: "/services" },
              { name: "Projects", id: "/projects" },
              { name: "Contact", id: "/contact" },
            ]}
            brandName="Vision Vault"
        />

        <div className="pt-24">
            <ContactSplit
              tag="Contact Us"
              title="Let's Build Something Extraordinary"
              description="Whether you're looking for a full web transformation or need strategic digital guidance, our doors are always open to new visionaries. Fill out the form and we'll be in touch."
              background={{ variant: "sparkles-gradient" }}
              useInvertedBackground={false}
              onSubmit={(email) => console.log("Form submitted with email:", email)}
            />
        </div>

        <FooterBase
            columns={[
              { title: "Company", items: [{ label: "About", href: "/about" }, { label: "Services", href: "/services" }] },
              { title: "Work", items: [{ label: "Projects", href: "/projects" }] },
              { title: "Legal", items: [{ label: "Privacy", href: "/privacy" }, { label: "Terms", href: "/terms" }] },
            ]}
            logoText="Vision Vault Media"
        />
      </ReactLenis>
    </ThemeProvider>
  );
}