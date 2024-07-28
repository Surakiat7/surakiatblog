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
      };
    },
  };
};

// export const routes = {
//   HOME: "/",
// };
