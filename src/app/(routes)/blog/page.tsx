"use client";

import BackButton from "@/component/Button/BackButton";
import NavbarElementContent from "@/elements/Navbar/NavbarContent";
import React, { useEffect, useState } from "react";
import { Image, Divider, User, Link, Spinner } from "@nextui-org/react";
import BreadcrumbsComponent from "@/component/Breadcrumbs/Breadcrumbs";
import BlogPostFindAll from "@/component/Carousels/BlogFindAll";

type Props = {};

export default function BlogPost({}: Props) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Spinner label="Loading..." color="white" />
      </div>
    );
  }

  const breadcrumbsItems = [
    { name: "Home", href: "/" },
    { name: "Blog", href: "/blog" },
  ];

  return (
    <main className="w-full">
      <NavbarElementContent />
      <div className="px-32 sm:px-0">
        <div className="bg-zinc-900">
          <div className="py-4 sm:py-4 px-8 sm:px-4 w-full">
            <div className="flex w-full gap-2 flex-col">
              <BreadcrumbsComponent items={breadcrumbsItems} />
              <BackButton />
            </div>
            <div className="w-full pt-6">
              <BlogPostFindAll />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
