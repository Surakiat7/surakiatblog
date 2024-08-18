import { MetadataRoute } from 'next';
import { PostData } from './(routes)/blog/blogpostmockdata';

// ดึง ID ของโพสต์ทั้งหมด
const getAllPostIds = (): number[] => {
  return PostData.map(post => post.id);
};

// สร้าง URL แต่ละโพสต์
const getPostUrls = (): string[] => {
  const postIds = getAllPostIds();
  return postIds.map(id => `https://surakiat.dev/blog/${id}`);
};

// สร้าง sitemap
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const postUrls = getPostUrls();

  return [
    {
      url: 'https://surakiat.dev',
      lastModified: new Date(),
      changeFrequency: 'yearly' as const,
      priority: 1,
    },
    {
      url: 'https://surakiat.dev/blog',
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    ...postUrls.map(url => ({
      url,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.6,
    })),
  ];
}
