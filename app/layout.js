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
      "Clio Certified Administrator | Legal CRM & Practice Management Specialist",
    template: "%s | CRM Integration Specialists",
  },
  description:
    "Official Clio Certified Administrator & Legal CRM Integration Specialist. Custom bi-directional API bridges between Clio, GoHighLevel, Lawmatics, Filevine, and Retell AI for law firms in the US, UK, and worldwide.",
  keywords: [
    "Clio Certified Administrator",
    "Clio API Integration Specialist",
    "Clio GoHighLevel Integration",
    "Legal CRM Automation",
    "Clio Practice Management Setup",
    "Legal CRM integration specialist US/UK",
    "legal tech automation architect for law firms",
    "remote Clio setup expert",
    "GoHighLevel Clio integration",
    "GoHighLevel legal CRM integration",
    "Clio API developer",
    "GoHighLevel Lawmatics sync",
    "Retell AI legal CRM workflows",
    "n8n webhook middleware legal",
    "Filevine GoHighLevel integration",
    "bi-directional legal CRM sync",
    "Immigration law firm automation",
    "Employment law CRM sync",
  ],
  authors: [{ name: "Ammar Hussain", url: "https://www.linkedin.com/in/ammar-hussain/" }],
  openGraph: {
    title: "Clio Certified Administrator — Custom Legal CRM API Bridges & Automation",
    description:
      "Certified Clio Administrator engineering bi-directional API bridges connecting Clio with GoHighLevel, Lawmatics, Filevine, and Retell AI voice agents.",
    url: "https://www.crmintegrationspecialist.com",
    siteName: "CRM Integration Specialists",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Clio Certified Administrator — Custom Legal CRM Bridges & Automation",
    description:
      "Certified Clio Administrator & Legal CRM Integration Specialist for law firms worldwide.",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-icon.png",
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