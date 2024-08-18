'use client';

import BackButton from '@/components/Buttons/Back';
import NavbarElementContent from '@/elements/Navbar/NavbarContent';
import React, { useEffect, useState } from 'react';
import { Loading } from '@/components/Loading/loading';
import BreadcrumbsComponent from '@/components/Breadcrumb/Breadcrumb';
import BlogPostFindAll from '@/components/Carousels/BlogFindAll';
import Footer from '@/elements/Footer/Footer';
import { useThemeColors } from '@/@core/utils/themeColorClass';

type Props = {};

export default function BlogPost({}: Props) {
  const { bgContentColorClass, borderColorClass } = useThemeColors();

  const breadcrumbsItems = [
    { name: 'Home', href: '/' },
    { name: 'Blog', href: '/blog' },
  ];

  return (
    <>
    <Loading />
      <main className={`w-full ${bgContentColorClass}`}>
        <NavbarElementContent />
        <div className={`px-32 sm:px-0 border-b-1 ${borderColorClass}`}>
          <div className={`${bgContentColorClass}`}>
            <div className="py-4 sm:py-4 px-8 sm:px-4 w-full">
              <div className="flex justify-center w-full gap-2 flex-col">
                <BreadcrumbsComponent items={breadcrumbsItems} />
                <BackButton />
              </div>
              <div className="w-full pt-6">
                <BlogPostFindAll />
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </main>
    </>
  );
}
