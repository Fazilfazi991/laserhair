import type { Metadata, Viewport } from "next";
import { ScrollAnimations } from "@/components/ScrollAnimations";
import { JsonLd } from "@/components/schema/JsonLd";
import { organizationSchema, websiteSchema } from "@/lib/schema";
import { absoluteUrl, siteConfig } from "@/lib/site-config";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.defaultTitle,
    template: "%s | LaserHairRemovalUAE"
  },
  description: siteConfig.defaultDescription,
  applicationName: siteConfig.name,
  referrer: "origin-when-cross-origin",
  keywords: [
    "laser hair removal UAE",
    "laser hair removal Dubai",
    "laser hair removal Abu Dhabi",
    "laser hair removal cost UAE",
    "laser hair removal clinics Dubai"
  ],
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  formatDetection: { email: false, address: false, telephone: false },
  alternates: {
    canonical: "/",
    languages: {
      "en-AE": "/",
      "x-default": "/"
    }
  },
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: siteConfig.defaultTitle,
    description: siteConfig.defaultDescription,
    images: [{ url: absoluteUrl(siteConfig.ogImage), width: 1200, height: 630, alt: siteConfig.name }]
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.defaultTitle,
    description: siteConfig.defaultDescription,
    site: siteConfig.twitter,
    creator: siteConfig.twitter,
    images: [absoluteUrl(siteConfig.ogImage)]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1
    }
  },
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/icon.svg"
  },
  manifest: "/site.webmanifest"
};

export const viewport: Viewport = {
  themeColor: "#0F6E56"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang={siteConfig.language}>
      <body>
        <ScrollAnimations />
        <JsonLd data={[organizationSchema, websiteSchema]} />
        <header className="site-header">
          <nav className="nav" aria-label="Main navigation">
            <a className="brand" href="/">
              <img
                className="brand-logo"
                src="/images/laser-hair-removal-logo.png"
                alt="Laser Hair Removal"
              />
            </a>
            <div className="nav-links">
              <a href="/cost/">Cost</a>
              <a href="/clinics/dubai/">Clinics</a>
              <a href="/dark-skin/">Dark skin</a>
              <a href="/deals/">Deals</a>
              <a href="/compare/">Compare</a>
            </div>
            <a className="btn" href="#lead-form">Get quotes</a>
          </nav>
        </header>
        {children}
        <footer className="site-footer">
          <div className="section-inner footer-grid">
            <div>
              <a className="brand" href="/">
                <img
                  className="brand-logo footer-logo"
                  src="/images/laser-hair-removal-logo.png"
                  alt="Laser Hair Removal"
                />
              </a>
              <p>
                Helping you compare clinics, prices and technologies for safe,
                effective laser hair removal in the UAE.
              </p>
              <div className="social-row">
                <span>f</span>
                <span>ig</span>
                <span>in</span>
              </div>
            </div>
            <div>
              <h3>Explore</h3>
              <p><a href="/cost/">Cost guide</a></p>
              <p><a href="/compare/">Compare clinics</a></p>
              <p><a href="/dark-skin/">Dark skin</a></p>
              <p><a href="/deals/">Deals</a></p>
            </div>
            <div>
              <h3>Company</h3>
              <p><a href="/about/">About</a></p>
              <p><a href="/sessions/">How it works</a></p>
              <p><a href="/privacy-policy/">Privacy policy</a></p>
              <p><a href="/terms/">Terms of use</a></p>
            </div>
            <div>
              <h3>Stay updated</h3>
              <p>Get tips, guides and exclusive deals.</p>
              <form className="newsletter">
                <input aria-label="Email address" placeholder="Enter your email" />
                <button className="btn" type="submit">Go</button>
              </form>
            </div>
          </div>
          <p className="copyright">© 2026 LaserHairRemovalUAE.com. All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
}
