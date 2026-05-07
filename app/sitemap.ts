import type { MetadataRoute } from "next";

const siteUrl = "https://dhammaonline.vercel.app";

type Teaching = {
  slug: string;
};

async function getTeachingSitemapEntries(): Promise<MetadataRoute.Sitemap> {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/teachings`,
      {
        next: {
          revalidate: 3600,
        },
      }
    );

    if (!response.ok) return [];

    const teachings = (await response.json()) as Teaching[];

    return teachings
      .filter((teaching) => teaching.slug)
      .map((teaching) => ({
        url: `${siteUrl}/teachings/${teaching.slug}`,
        lastModified: new Date(),
        changeFrequency: "weekly",
        priority: 0.7,
      }));
  } catch {
    return [];
  }
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const teachingEntries = await getTeachingSitemapEntries();

  return [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${siteUrl}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${siteUrl}/teachings`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    ...teachingEntries,
  ];
}
