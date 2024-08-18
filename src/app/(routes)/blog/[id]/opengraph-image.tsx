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
  const imgUrl = post ? post.imgUrl : '';

  console.log("post data", post);
  
  return new ImageResponse(
    (
      <div
        style={{
          background: `url(${imgUrl}) no-repeat center center/cover`,
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