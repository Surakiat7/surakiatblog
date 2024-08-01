"use client";

import { useRouter } from "next/navigation";

export const useNavigate = () => {
  const router = useRouter();

  return {
    Back: async () => {
      await router?.back();
    },
    Home: async () => {
      await router?.push('/');
    },
    Blog: async () => {
      await router?.push('/blog');
    },
    BlogParam: async (id: string | number) => {
      await router?.push(`/blog/${id}`);
    },
  };
};
