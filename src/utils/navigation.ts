"use client";

import { useRouter } from "next/navigation";

export const useNavigate = () => {
  const router = useRouter();

  return {
    Back: async () => {
      await router?.back();
    },

    MainRoute: () => {
      return {
        Home: async () => {
          await router?.push(`/`);
        },
        Blog: async () => {
          await router?.push(`/blog`);
        },
        BlogParam: async (id: string | number) => {
          await router.push(`/blog/${id}`);
        },
      };
    },
  };
};

// export const routes = {
//   HOME: "/",
// };
