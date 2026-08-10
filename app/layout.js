import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { personSchema, professionalServiceSchema } from "@/lib/schema";

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
  metadataBase: new URL("https://crmintegrationspecialists.com"),
  title: {
    default:
      "CRM Integration Specialists | Custom API Integrations for Law Firms & GHL Agencies",
    template: "%s | CRM Integration Specialists",
  },
  description:
    "Ammar Hussain engineers secure, bi-directional API bridges connecting GoHighLevel with Clio, Lawmatics, Filevine, and custom Voice AI. Legal CRM automation, webhook middleware, and Retell AI workflows built for law firms and GHL agencies.",
  keywords: [
    "CRM Integration Specialists",
    "GoHighLevel Clio Integration Developer",
    "Legal CRM API Automation",
    "Retell AI CRM Workflows",
    "GoHighLevel Lawmatics integration",
    "Legal CRM webhook middleware",
  ],
  authors: [{ name: "Ammar Hussain" }],
  openGraph: {
    title: "Custom API Integrations & Automation for Law Firms & GHL Agencies",
    description:
      "Stop losing leads to broken webhooks. Secure, high-speed bi-directional API bridges between GoHighLevel and Clio, Lawmatics, Filevine, and custom Voice AI.",
    url: "https://crmintegrationspecialists.com",
    siteName: "CRM Integration Specialists",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Custom API Integrations & Automation for Law Firms & GHL Agencies",
    description:
      "Bi-directional API bridges between GoHighLevel and Clio, Lawmatics, Filevine, and custom Voice AI.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable}`}>
      <head>
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(professionalServiceSchema),
          }}
        />
      </head>
      <body className="bg-ink text-text font-body antialiased">{children}</body>
    </html>
  );
}
