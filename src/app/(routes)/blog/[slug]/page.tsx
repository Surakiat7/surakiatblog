import React from "react";

interface Props {
  params: {
    slug: string;
  };
}

const BlogSlug: React.FC<Props> = ({ params }) => {
  const { slug } = params;
  return (
    <main className="w-full flex flex-col gap-6 items-center justify-center h-screen">
      <div className="flex flex-col items-center justify-center gap-4">
        <p className="text-xl">Blog Page</p>
        <p className="text-xl">{slug}</p>
      </div>
    </main>
  );
};

export default BlogSlug;