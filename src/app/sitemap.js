export default async function sitemap() {
  const website = "https://www.octopi.ai";

  return [
    {
      url: website,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1
    }
  ];
}
