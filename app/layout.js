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
      "GoHighLevel Clio Integration | Legal CRM & Voice AI Integration Specialist",
    template: "%s | CRM Integration Specialists",
  },
  description:
    "Specialist in GoHighLevel Clio integration, Lawmatics, Filevine, and Retell AI voice agents for law firms. Custom bi-directional API bridges with sub-380ms sync and zero dropped leads.",
  keywords: [
    "GoHighLevel Clio integration",
    "GoHighLevel legal CRM integration",
    "Immigration law firm automation",
    "GoHighLevel legal intake workflows",
    "Automated attorney case matching system",
    "Legal intake paid consultation Stripe integration",
    "Clio API developer",
    "GoHighLevel Lawmatics sync",
    "Retell AI legal CRM workflows",
    "n8n webhook middleware legal",
    "Filevine GoHighLevel integration",
    "bi-directional legal CRM sync",
  ],
  authors: [{ name: "Ammar Hussain" }],
  openGraph: {
    title: "GoHighLevel Clio Integration — Custom API Bridges for Law Firms",
    description:
      "Stop losing leads to broken webhooks. Custom bi-directional API bridges connecting GoHighLevel with Clio, Lawmatics, Filevine, and Retell AI voice agents.",
    url: "https://www.crmintegrationspecialist.com",
    siteName: "CRM Integration Specialists",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "GoHighLevel Clio Integration — Custom API Bridges for Law Firms",
    description:
      "Specialist in GoHighLevel Clio integration, Lawmatics, Filevine, and Retell AI voice workflows.",
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