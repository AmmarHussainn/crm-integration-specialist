// app/layout.js
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { siteGraphSchema } from "@/lib/schema";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata = {
  // STRICT DOMAIN FIX: Singular domain with www
  metadataBase: new URL("https://www.crmintegrationspecialist.com"),
  alternates: {
    canonical: "https://www.crmintegrationspecialist.com",
  },
  title: {
    default:
      "CRM Integration Specialists | Custom API Bridges, GHL & Voice AI Workflows",
    template: "%s | CRM Integration Specialists",
  },
  description:
    "Ammar Hussain engineers secure, bi-directional API bridges connecting GoHighLevel, HubSpot, and Salesforce with n8n, custom webhooks, and Retell AI voice agents for B2B enterprises and agencies.",
  keywords: [
    "CRM Integration Specialists",
    "GoHighLevel Salesforce Integration Developer",
    "GoHighLevel HubSpot Sync",
    "Retell AI CRM Workflows",
    "n8n Webhook Middleware",
    "Custom CRM API Automation",
  ],
  authors: [{ name: "Ammar Hussain" }],
  openGraph: {
    title: "Custom CRM API Integrations & Webhook Infrastructure",
    description:
      "Bi-directional API bridges between GoHighLevel, HubSpot, Salesforce, and custom Voice AI. Built for scaling B2B teams and agencies.",
    url: "https://www.crmintegrationspecialist.com",
    siteName: "CRM Integration Specialists",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Custom CRM API Integrations & Webhook Infrastructure",
    description:
      "Bi-directional API bridges between GoHighLevel, HubSpot, Salesforce, and custom Voice AI.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(siteGraphSchema),
          }}
        />
      </head>
      <body className="bg-ink text-text font-body antialiased">{children}</body>
    </html>
  );
}