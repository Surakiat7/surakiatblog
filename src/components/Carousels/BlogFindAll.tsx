import React, { useState, useEffect, useCallback } from 'react';
import SkeletonBlogCard from '../Skeleton/BlogCard';
import { useNavigate } from '@/@core/utils/navigation';
import { PostData } from '@/app/(routes)/blog/blogpostmockdata';
import { Post } from '@/types';
import SearchButton from '../Buttons/Search';
import _ from 'lodash';
import NextImage from 'next/image';
import { useThemeColors } from '@/@core/utils/themeColorClass';

const BlogPostFindAll = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredPosts, setFilteredPosts] = useState<Post[]>(PostData);
  const [isLoading, setIsLoading] = useState(false);
  const { bgColorSencondaryClass, TitleLinearColor } = useThemeColors();

  const debouncedSearch = useCallback(
    _.debounce((query: string) => {
      const results = PostData.filter((post) =>
        post.title.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredPosts(results);
      setIsLoading(false);
    }, 500),
    []
  );

  useEffect(() => {
    if (searchQuery === '') {
      setFilteredPosts(PostData);
    } else {
      setIsLoading(true);
      debouncedSearch(searchQuery);
    }
  }, [searchQuery, debouncedSearch]);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  return (
    <section className={`${bgColorSencondaryClass}`}>
      <div className="relative overflow-hidden">
        <div className="w-full">
          <div className="flex items-center justify-between">
            <div className="flex flex-col gap-2 w-full">
              <div className="flex sm:gap-2 w-full sm:items-center items-center justify-between">
                <h1
                  className={`text-4xl py-2 font-bold sm:w-1/2 ${TitleLinearColor}`}
                >
                  Blog
                </h1>
                <div className="sm:w-full">
                  <SearchButton onSearch={handleSearch} />
                </div>
              </div>
              <div className="flex w-full items-start justify-between sm:items-center gap-8">
                <p className="font-normal text-md sm:hidden">
                  Visit my blog to discover tips, techniques, and various
                  methods for frontend development! Whether you&apos;re looking
                  to enhance your skills or stay updated with the latest in
                  frontend technology and design, I&apos;ll be sharing articles
                  and tutorials that might help you in one way or another.
                </p>
                <p className="hidden sm:flex font-normal text-md">
                  Visit my blog to discover tips, techniques, and various
                  methods for frontend development!
                </p>
              </div>
              <div className="flex w-full pt-2">
                <h2 className="text-xl font-bold sm:w-full bg-gradient-to-r from-[#4EDFE7] to-[#00597B] inline-block text-transparent bg-clip-text">
                  {searchQuery ? (
                    <>
                      {_.size(filteredPosts)} Search Results: {searchQuery}
                    </>
                  ) : (
                    `Totals ${_.size(filteredPosts)} Posts`
                  )}
                </h2>
              </div>
              <div className="flex w-full min-h-screen pb-4">
                {isLoading ? (
                  <div className="grid grid-cols-3 sm:grid-cols-1 gap-4 w-full h-fit">
                    {_.times(3, (index) => (
                      <SkeletonBlogCard key={index} />
                    ))}
                  </div>
                ) : (
                  <div className="grid grid-cols-3 sm:grid-cols-1 gap-4 w-full h-fit">
                    {_.size(filteredPosts) > 0 ? (
                      filteredPosts.map((post) => (
                        <BlogPost key={post.id} {...post} />
                      ))
                    ) : (
                      <p className="text-base font-normal">No results found</p>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const BlogPost = ({ id, imgUrl, author, title, description }: Post) => {
  const { borderColorClass, authorColorClass, shadowClass } = useThemeColors();
  const navigate = useNavigate();

  const handleBlogClick = (id: string) => {
    navigate.BlogId(id);
  };

  return (
    <div
      className={`group relative w-full flex flex-col gap-2 rounded-2xl border ${borderColorClass} p-3 shrink-0 cursor-pointer transition-transform hover:-translate-y-1 ${shadowClass}`}
      onClick={() => handleBlogClick(id.toString())}
    >
      <div className="w-full mb-2 !h-[200px]">
        <NextImage
          src={imgUrl}
          alt={`An image for a blog post titled ${title}`}
          width={350}
          height={200}
          priority
          className="w-full rounded-lg object-cover"
          style={{ height: '200px', objectFit: 'cover' }}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </div>
      <span
        className={`rounded-xl w-fit border-[1px] ${authorColorClass} px-1.5 py-1 text-xs uppercase`}
      >
        {author}
      </span>
      <h3
        className={`mt-2 text-lg font-medium transition-colors group-hover:bg-gradient-to-r group-hover:from-[#4EDFE7] group-hover:to-[#00597B] group-hover:inline-block group-hover:text-transparent group-hover:bg-clip-text`}
      >
        {title}
      </h3>
      <p className="text-sm">{description}</p>
    </div>
  );
};

export default BlogPostFindAll;
