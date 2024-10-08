import React, { useState, useEffect, useRef } from 'react';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';
import useMeasure from 'react-use-measure';
import { gsap } from 'gsap';
import { Image } from '@nextui-org/react';
import SkeletonBlogCard from '../Skeleton/BlogCard';
import { useNavigate } from '@/@core/utils/navigation';
import { PostData } from '@/app/(routes)/blog/blogpostmockdata';
import { Post } from '@/types';
import Link from 'next/link';
import _ from 'lodash';
import { useThemeColors } from '@/@core/utils/themeColorClass';

const CARD_WIDTH = 350;
const MARGIN = 20;
const CARD_SIZE = CARD_WIDTH + MARGIN;

const BREAKPOINTS = {
  sm: 640,
  lg: 1024,
};

const BlogPostCarousel = () => {
  const [ref, { width }] = useMeasure();
  const [offset, setOffset] = useState(0);
  const {
    bgColorSencondaryClass,
    bgButtonColorClass,
    TitleLinearColor,
    iconColor,
  } = useThemeColors();
  const carouselRef = useRef(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 2000);
  }, []);

  const CARD_BUFFER =
    width > BREAKPOINTS.lg ? 3 : width > BREAKPOINTS.sm ? 2 : 1;

  const CAN_SHIFT_LEFT = offset < 0;

  const CAN_SHIFT_RIGHT =
    Math.abs(offset) < CARD_SIZE * (PostData.length - CARD_BUFFER);

  const shiftLeft = () => {
    if (!CAN_SHIFT_LEFT) {
      return;
    }
    const newOffset = offset + CARD_SIZE;
    setOffset(newOffset);
    gsap.to(carouselRef.current, {
      x: newOffset,
      duration: 0.5,
      ease: 'power2.out',
    });
  };

  const shiftRight = () => {
    if (!CAN_SHIFT_RIGHT) {
      return;
    }
    const newOffset = offset - CARD_SIZE;
    setOffset(newOffset);
    gsap.to(carouselRef.current, {
      x: newOffset,
      duration: 0.5,
      ease: 'power2.out',
    });
  };

  return (
    <section className={`${bgColorSencondaryClass}`} ref={ref}>
      <div className="relative overflow-hidden">
        <div className="w-full">
          <div className="flex pt-4 items-center justify-between">
            <div className="flex flex-col gap-2 sm:gap-2 w-full px-12 sm:px-6 pt-12 sm:pt-6">
              <h2
                className={`text-4xl py-2 font-bold h-full sm:w-full ${TitleLinearColor}`}
              >
                Blog
              </h2>
              <div className="flex w-full items-start justify-between sm:items-start gap-8 sm:gap-2 pb-4 sm:pb-0">
                <p className="font-normal text-md sm:hidden">
                  Visit my blog to discover tips, techniques, and various
                  methods for frontend development! Whether you&apos;re looking
                  to enhance your skills or stay updated with the latest in
                  frontend technology and design, I&apos;ll be sharing articles
                  and tutorials that might help you in one way or another.
                  Let&apos;s develop your frontend skills together with shared
                  knowledge and experience.
                  <Link
                    href="/blog"
                    className="pl-2 bg-gradient-to-r from-[#4EDFE7] to-[#00597B] inline-block text-transparent bg-clip-text cursor-pointer transition-transform transform hover:translate-x-[4px] duration-300"
                  >
                    View All Posts
                  </Link>
                </p>
                <p className="hidden sm:flex font-normal text-md">
                  Visit my blog to discover tips for frontend development.
                </p>
                <div className="flex items-center gap-2">
                  <button
                    className={`rounded-lg border-[1px] border-neutral-400 ${bgButtonColorClass} p-1.5 text-2xl transition-opacity ${
                      CAN_SHIFT_LEFT ? '' : 'opacity-30'
                    }`}
                    disabled={!CAN_SHIFT_LEFT}
                    onClick={shiftLeft}
                    aria-label="Shift Left"
                  >
                    <FiArrowLeft color={iconColor} />
                  </button>
                  <button
                    className={`rounded-lg border-[1px] border-neutral-400 ${bgButtonColorClass} p-1.5 text-2xl transition-opacity ${
                      CAN_SHIFT_RIGHT ? '' : 'opacity-30'
                    }`}
                    disabled={!CAN_SHIFT_RIGHT}
                    onClick={shiftRight}
                    aria-label="Shift Right"
                  >
                    <FiArrowRight color={iconColor} />
                  </button>
                </div>
              </div>
              <div className="hidden sm:flex sm:pb-2">
                <Link
                  href="/blog"
                  className="bg-gradient-to-r from-[#4EDFE7] to-[#00597B] inline-block text-transparent bg-clip-text cursor-pointer transition-transform transform hover:translate-x-[4px] duration-300"
                >
                  View All Posts
                </Link>
              </div>
            </div>
          </div>
          <div
            ref={carouselRef}
            className="flex pt-2 px-12 pb-12 sm:px-6 sm:pb-6"
          >
            {isLoading
              ? _.times(6, (index) => <SkeletonBlogCard key={index} />)
              : PostData.map((post) => (
                  <BlogPostCard key={post.id} {...post} />
                ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const BlogPostCard = ({ id, imgUrl, author, title, description }: Post) => {
  const { authorColorClass, shadowClass, borderColorClass } = useThemeColors();
  const navigate = useNavigate();

  const handleBlogClick = (id: string) => {
    navigate.BlogId(id);
  };

  return (
    <div
      className={`group relative flex flex-col gap-2 rounded-2xl border ${borderColorClass} p-3 shrink-0 cursor-pointer transition-transform hover:-translate-y-1 ${shadowClass}`}
      style={{
        width: CARD_WIDTH,
        marginRight: MARGIN,
      }}
      onClick={() => handleBlogClick(id.toString())}
    >
      <div className="w-full mb-2 !h-[200px]">
        <Image
          src={imgUrl}
          alt={`An image for a blog post titled ${title}`}
          width={350}
          height={200}
          loading="lazy"
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
      <p className={`text-sm`}>{description}</p>
    </div>
  );
};

export default BlogPostCarousel;
