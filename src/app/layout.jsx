import "@/style/globals.css";

export const metadata = {
  metadataBase: new URL("https://falconizzare.github.io/"),
  title: "Octopi || Secure Your Business",
  description:
    "Safeguard your data and information through advanced cyber security practices, ensuring the highest level of protection against potential threats.",
  keywords: [
    "Octopi.ai",
    "Octopi",
    "Cloud",
    "Security",
    "IaC",
    "Infrastructure",
    "Digital",
    "CyberSecurity",
    "Automation",
    "Staff",
    "Managed"
  ],
  creator: "Octopi",
  publisher: "Octopi",
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "https://www.octopi.ai"
    }
  },
  openGraph: {
    title: "Octopi || Secure Your Business",
    description:
      "Safeguard your data and information through advanced cyber security practices, ensuring the highest level of protection against potential threats.",
    url: "https://www.octopi.ai",
    type: "website",
    siteName: "Octopi",
    authors: "Octopi",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1280,
        height: 720,
        alt: "octopi-preview"
      }
    ]
  },
  verification: {
    google: "" // google-site-verification code
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
