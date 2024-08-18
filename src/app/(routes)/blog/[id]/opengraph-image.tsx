import { ImageResponse } from 'next/og';
import { getPostDataById } from '../blogpostmockdata';

export const runtime = 'edge';

export const alt = 'Blog Post | Surakiat';
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = 'image/png';

export default async function Image({ params }: { params: { id: string } }) {
  const post = getPostDataById(parseInt(params.id));
  const title = post ? post.title : 'Blog Post';
  let imgUrl = post ? post.imgUrl : '';

  // แปลง AVIF เป็น PNG และปรับขนาดภาพ
  if (imgUrl) {
    imgUrl = `${imgUrl}?fm=png&w=1200&h=630&fit=crop&crop=entropy`;
  }

  console.log('post data', post);
  console.log('imgUrl data', imgUrl);

  return new ImageResponse(
    (
      <div
        style={{
          backgroundImage: `url(${imgUrl})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'Arial, sans-serif',
        }}
      >
      </div>
    ),
    {
      ...size,
      headers: {
        'Cache-Control': 'no-store, max-age=0',
      },
    }
  );
}