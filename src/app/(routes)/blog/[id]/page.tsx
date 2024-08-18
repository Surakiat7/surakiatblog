import React from 'react';
import BlogPostByID from './blogidmetapage';
import { Metadata, ResolvingMetadata } from 'next';
import { getPostDataById } from '../blogpostmockdata';

type Props = {
  params: { id: string };
};

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'https://www.surakiat.dev';

function generateKeywords(title: string): string {
  const words = title.split(' ');
  const keywords = words.filter((word) => word.length > 3).join(', ');
  return keywords;
}

function formatDateToISO(dateStr: string): string {
  const [datePart, timePart] = dateStr.split(' ');
  const [day, month, year] = datePart.split('/');
  const [time, period] = timePart.split(' ');

  let [hour, minute] = time.split(':');
  if (period === 'PM' && hour !== '12') hour = (parseInt(hour) + 12).toString();
  if (period === 'AM' && hour === '12') hour = '00';

  return `${year}-${month}-${day}T${hour}:${minute}:00+07:00`;
}

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const id = parseInt(params.id);
  const post = getPostDataById(id);

  const canonicalUrl = `${BASE_URL}/blog/${params.id}`;
  const title = post ? `${post.title} | Surakiat` : 'Blog Post | Surakiat';
  const description =
    post?.description ||
    'Visit my blog to discover tips, techniques, and various methods for frontend development!';
  const publishedTime = post?.createdAt ? formatDateToISO(post.createdAt) : '';

  return {
    metadataBase: new URL(BASE_URL),
    title: title,
    description: description,
    keywords: generateKeywords(title),
    openGraph: {
      title: title,
      description: description,
      url: canonicalUrl,
      siteName: 'Surakiat Blog',
      locale: 'th_TH',
      type: 'article',
      publishedTime: publishedTime,
      authors: ['Surakiat'],
    },
    twitter: {
      card: 'summary',
      title: title,
      description: description,
      creator: '@Surakiat',
      site: 'surakiat.dev',
    },
    alternates: {
      canonical: canonicalUrl,
    },
    authors: [{ name: 'Surakiat', url: 'https://www.facebook.com/Surakiatz/' }],
    other: {
      'article:section': 'blog',
    },
    verification: {
      google: 'google',
      yandex: 'yandex',
      yahoo: 'yahoo',
    },
  };
}

export default function Page({ params }: { params: { id: string } }) {
  return <BlogPostByID />;
}