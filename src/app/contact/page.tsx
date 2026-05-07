"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
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
              { name: "About", id: "/#about" },
              { name: "Services", id: "/#features" },
              { name: "Projects", id: "/#products" },
              { name: "Contact", id: "/contact" },
            ]}
            brandName="Vision Vault"
        />

        <div className="pt-32 pb-20">
            <ContactSplitForm
                title="Connect with Vision Vault"
                description="We are ready to bring your ideas to life. Reach out via email or phone, or fill out the form below."
                inputs={[
                    { name: "name", type: "text", placeholder: "Full Name", required: true },
                    { name: "email", type: "email", placeholder: "Email Address", required: true }
                ]}
                textarea={{ name: "message", placeholder: "How can we help?", rows: 4 }}
                useInvertedBackground={false}
                className="pt-10"
            />
            <div className="max-w-3xl mx-auto px-6 py-10 space-y-4">
                <p className="text-lg">Email: VisionVaultMedia@protonmail.com</p>
                <p className="text-lg">Phone: 416-988-0807</p>
            </div>
        </div>

        <FooterBase
            columns={[
              { title: "Company", items: [{ label: "About", href: "/#about" }, { label: "Services", href: "/#features" }] },
              { title: "Work", items: [{ label: "Projects", href: "/#products" }] },
              { title: "Legal", items: [{ label: "Privacy", href: "/#" }, { label: "Terms", href: "/#" }] },
            ]}
            logoText="Vision Vault Media"
        />
      </ReactLenis>
    </ThemeProvider>
  );
}