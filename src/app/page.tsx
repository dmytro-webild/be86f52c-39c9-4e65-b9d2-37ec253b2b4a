"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FeatureCardSixteen from '@/components/sections/feature/FeatureCardSixteen';
import FooterCard from '@/components/sections/footer/FooterCard';
import HeroLogo from '@/components/sections/hero/HeroLogo';
import MetricCardFourteen from '@/components/sections/metrics/MetricCardFourteen';
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import SplitAbout from '@/components/sections/about/SplitAbout';
import { Lightbulb, TrendingUp, Users } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="hover-bubble"
        defaultTextAnimation="reveal-blur"
        borderRadius="pill"
        contentWidth="smallMedium"
        sizing="largeSmallSizeLargeTitles"
        background="aurora"
        cardStyle="glass-depth"
        primaryButtonStyle="primary-glow"
        secondaryButtonStyle="radial-glow"
        headingFontWeight="medium"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarLayoutFloatingInline
      navItems={[
        {
          name: "Über mich",
          id: "about",
        },
        {
          name: "Leistungen",
          id: "services",
        },
        {
          name: "Beispiele",
          id: "products",
        },
        {
          name: "Ablauf",
          id: "process",
        },
        {
          name: "Für Sie",
          id: "target-audience",
        },
      ]}
      brandName="Gabriel Santos Pendon"
      button={{
        text: "Kostenlos beraten lassen",
        href: "#contact",
      }}
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroLogo
      logoText="Gabriel Santos Pendon"
      description="Websites für lokale Unternehmen in Dortmund.\nModern, mobil, persönlich betreut – damit Ihr Geschäft online genauso überzeugt wie offline."
      buttons={[
        {
          text: "Beispiele ansehen",
          href: "#products",
        },
        {
          text: "Kostenlos beraten lassen",
          href: "#contact",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/representations-user-experience-interface-design_23-2150038912.jpg"
      imageAlt="Moderne Website auf Laptop und Smartphone"
      showDimOverlay={true}
    />
  </div>

  <div id="about" data-section="about">
      <SplitAbout
      textboxLayout="default"
      useInvertedBackground={true}
      title="Wer ich bin & was mich antreibt"
      description="Ich bin Gabriel Santos Pendon, Ihr Partner für digitale Präsenz in Dortmund. Als freiberuflicher Webdesigner helfe ich kleinen, lokalen Unternehmen, online zu strahlen. Mein Antrieb ist es, Ihnen eine Website zu bauen, die nicht nur modern und mobil-tauglich ist, sondern auch Ihr Geschäft authentisch widerspiegelt und Ihnen neue Kunden bringt. Ich setze auf persönliche Betreuung und transparente Kommunikation – keine Agentur-Floskeln, sondern ehrliche Arbeit von Mensch zu Mensch."
      bulletPoints={[
        {
          title: "Persönliche Betreuung",
          description: "Individuelle Beratung und enger Austausch für Ihr maßgeschneidertes Online-Erlebnis.",
          icon: Users,
        },
        {
          title: "Transparenz & Fairness",
          description: "Klare Kommunikation, verständliche Prozesse und faire, nachvollziehbare Preise.",
          icon: Lightbulb,
        },
        {
          title: "Langfristiger Erfolg",
          description: "Eine Website, die langfristig funktioniert, leicht zu pflegen ist und mit Ihrem Geschäft wächst.",
          icon: TrendingUp,
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/portrait-male-personal-shopper-working_23-2148924153.jpg"
      imageAlt="Gabriel Santos Pendon im Büro"
      mediaAnimation="opacity"
    />
  </div>

  <div id="services" data-section="services">
      <FeatureCardSixteen
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      negativeCard={{
        items: [
          "Keine versteckten Kosten",
          "Kein technisches Kauderwelsch",
          "Keine überflüssigen Funktionen",
        ],
      }}
      positiveCard={{
        items: [
          "Individuelle Website-Erstellung (Design, Texte, Bilder, Kontaktformular)",
          "Komplettes Domain- & Hosting-Setup (Ich richte alles für Sie ein)",
          "Professionelle laufende Pflege (Updates, Änderungen, neue Inhalte)",
        ],
      }}
      title="Meine Leistungen im Überblick"
      description="Ich kümmere mich um alles, damit Sie sich auf Ihr Kerngeschäft konzentrieren können. Von der Idee bis zur Wartung – hier erfahren Sie, wie ich Sie unterstütze."
    />
  </div>

  <div id="products" data-section="products">
      <ProductCardOne
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={true}
      products={[
        {
          id: "demo-1",
          name: "Eleganter Friseursalon",
          imageSrc: "http://img.b2bpic.net/free-photo/woman-using-mobile-phone-while-getting-her-hair-straightened_107420-12154.jpg",
          imageAlt: "Website für einen Friseursalon",
        },
        {
          id: "demo-2",
          name: "Gemütliches Café Dortmund",
          imageSrc: "http://img.b2bpic.net/free-photo/homemade-recipe-food-nutrition-appetite_53876-132241.jpg",
          imageAlt: "Website für ein Café",
        },
        {
          id: "demo-3",
          name: "Handwerksbetrieb Digital",
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-image-professional-stainless-coffee-pot_613910-8830.jpg",
          imageAlt: "Website für einen Handwerksbetrieb",
        },
        {
          id: "demo-4",
          name: "Moderne Arztpraxis",
          imageSrc: "http://img.b2bpic.net/free-photo/performance-experience-development-knowledge-learning_53876-124452.jpg",
          imageAlt: "Website für eine Arztpraxis",
        },
        {
          id: "demo-5",
          name: "Lokaler Einzelhandel Online",
          imageSrc: "http://img.b2bpic.net/free-photo/business-woman-is-working-online-traing-reply-customer-home-office-packaging-wall_1150-21872.jpg",
          imageAlt: "Website für einen Einzelhändler",
        },
        {
          id: "demo-6",
          name: "Dienstleister Präsenz",
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-beautiful-dachshund-dog-with-chewing-toy_23-2149202483.jpg",
          imageAlt: "Website für einen Dienstleister",
        },
      ]}
      title="Referenzen & Beispiele"
      description="Überzeugen Sie sich selbst von meiner Arbeit. Hier sehen Sie ausgewählte Projekte, die ich für lokale Unternehmen realisiert habe."
    />
  </div>

  <div id="process" data-section="process">
      <MetricCardFourteen
      useInvertedBackground={false}
      title="So kommen Sie zu Ihrer neuen Website"
      tag="Mein einfacher 4-Schritte-Plan"
      metrics={[
        {
          id: "step-1",
          value: "1.",
          description: "Unverbindliches Erstgespräch: Wir lernen uns kennen und besprechen Ihre Ziele und Vorstellungen.",
        },
        {
          id: "step-2",
          value: "2.",
          description: "Konzept & Mockup-Erstellung: Ich entwickle ein Design-Konzept und eine erste Skizze Ihrer zukünftigen Website.",
        },
        {
          id: "step-3",
          value: "3.",
          description: "Entwicklung & Umsetzung: Ihre Website wird nach Ihren Wünschen umgesetzt, mit modernen Technologien und mobil optimiert.",
        },
        {
          id: "step-4",
          value: "4.",
          description: "Übergabe & Langfristige Betreuung: Nach dem Launch bleibe ich Ihr Partner für Updates, Wartung und weitere Unterstützung.",
        },
      ]}
      metricsAnimation="slide-up"
    />
  </div>

  <div id="target-audience" data-section="target-audience">
      <SocialProofOne
      textboxLayout="default"
      useInvertedBackground={true}
      names={[
        "Friseure",
        "Cafés & Restaurants",
        "Handwerksbetriebe",
        "Kleine Praxen (Ärzte, Therapeuten)",
        "Einzelhändler & Boutiquen",
        "Dienstleister vor Ort",
        "Lokale Geschäfte",
      ]}
      title="Für diese Branchen bin ich Ihr idealer Partner"
      description="Meine Expertise ist speziell auf die Bedürfnisse lokaler Dienstleister und kleiner Unternehmen zugeschnitten. Ich verstehe, was Ihre Kunden suchen und wie wir diese am besten online erreichen."
      speed={40}
      showCard={true}
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactCenter
      useInvertedBackground={false}
      background={{
        variant: "radial-gradient",
      }}
      tag="Ihr Weg zur professionellen Online-Präsenz"
      title="Kostenlos beraten lassen"
      description="Ich bin Gabriel Santos Pendon, Ihr Webdesigner in Dortmund. \n\nE-Mail: g.pendon@icloud.com\nTelefon: 0152 54593606\nStandort: Dortmund\n\nSenden Sie mir eine kurze Nachricht (E-Mail) und ich melde mich umgehend bei Ihnen:"
      inputPlaceholder="Ihre E-Mail-Adresse für die erste Kontaktaufnahme"
      buttonText="Nachricht senden"
      termsText="Mit dem Absenden stimmen Sie meinen Datenschutzbestimmungen zu."
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterCard
      logoText="Gabriel Santos Pendon"
      copyrightText="© 2026 Gabriel Santos Pendon. | Impressum | Datenschutzerklärung"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
