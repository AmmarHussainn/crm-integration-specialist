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
      "Legal CRM Integration Specialist | Sub-60s Lead-to-Retainer Architecture",
    template: "%s | CRM Integration Specialists",
  },
  description:
    "We turn cold intake leads into signed retainers in under 60 seconds. Official Clio Certified Administrator & Legal CRM Integration Specialist engineering custom API middleware connecting Clio, GoHighLevel, SmartAdvocate, Filevine, and Retell AI voice agents for law firms worldwide.",
  keywords: [
    "Personal Injury CRM integration specialist",
    "Employment law CRM sync",
    "Employment and labor law intake automation",
    "Workers compensation legal CRM integration",
    "SSDI intake automation GoHighLevel",
    "Immigration law CRM integration Retell AI",
    "Criminal defense 24/7 call dispatch",
    "Family law and estate planning CRM bridge",
    "Bankruptcy legal tech middleware",
    "SmartAdvocate Clio Lawmatics API middleware",
    "Legal lead to retainer automation",
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
    title: "Legal CRM Integration Specialist — Sub-60s Lead-to-Retainer Architecture",
    description:
      "We turn cold intake leads into signed retainers in under 60 seconds. Custom bi-directional API bridges connecting Clio, GoHighLevel, SmartAdvocate, Filevine, and Retell AI voice agents.",
    url: "https://www.crmintegrationspecialist.com",
    siteName: "CRM Integration Specialists",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Legal CRM Integration Specialist — Sub-60s Lead-to-Retainer Architecture",
    description:
      "We turn cold legal intake leads into signed retainers in under 60 seconds with custom CRM middleware.",
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