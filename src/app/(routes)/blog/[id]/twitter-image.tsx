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

  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(to bottom, #f0f0f0, #e0e0e0)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'Arial, sans-serif',
        }}
      >
        <div
          style={{
            fontSize: 60,
            fontWeight: 'bold',
            color: '#333',
            textAlign: 'center',
            padding: '0 20px',
          }}
        >
          {title}
        </div>
        <div
          style={{
            fontSize: 30,
            color: '#666',
            marginTop: 20,
          }}
        >
          @Surakiat
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}