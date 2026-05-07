"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import PricingCardEight from '@/components/sections/pricing/PricingCardEight';
import FooterBase from '@/components/sections/footer/FooterBase';
import { ShoppingCart } from "lucide-react";

export default function ServicesPricingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="directional-hover"
        defaultTextAnimation="entrance-slide"
        borderRadius="soft"
        contentWidth="medium"
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
                { name: "Services & Pricing", id: "#pricing" },
                { name: "Projects", id: "/projects" },
                { name: "Contact", id: "/contact" },
            ]}
            brandName="Vision Vault"
        />

        <div id="pricing" data-section="pricing" style={{ marginTop: '100px' }}>
            <PricingCardEight 
                title="Services & Pricing"
                description="Select a package to start your digital transformation journey."
                animationType="slide-up"
                plans={[
                    {
                        id: "basic",                        badge: "Starter",                        price: "$1,999",                        subtitle: "For emerging brands",                        features: ["Responsive Web Design", "CMS Integration", "SEO Setup"],
                        buttons: [{ text: "Add to Cart", onClick: () => alert("Added to cart") }]
                    },
                    {
                        id: "pro",                        badge: "Growth",                        price: "$4,999",                        subtitle: "For scaling businesses",                        features: ["Custom Development", "E-commerce Ready", "Performance Optimization", "Priority Support"],
                        buttons: [{ text: "Add to Cart", onClick: () => alert("Added to cart") }]
                    }
                ]}
            />
        </div>

        <div id="footer" data-section="footer">
            <FooterBase
                columns={[
                    { title: "Company", items: [{ label: "Home", href: "/" }] },
                    { title: "Legal", items: [{ label: "Privacy", href: "#" }, { label: "Terms", href: "#" }] },
                ]}
                logoText="Vision Vault Media"
            />
        </div>
      </ReactLenis>
    </ThemeProvider>
  );
}