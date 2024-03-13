"use client";

import { useRouter } from "next/navigation";

export const useNavigate = () => {
  const router = useRouter();

  return {
    Back: async () => {
      await router?.back();
    },

    Record: () => {
      return {
        Drug: async () => {
          await router?.push(`/record/drug`);
        },
        Report: async () => {
          await router?.push(`/record/report`);
        },
      };
    },
  };
};

export const routes = {
  HOME: "/",
  RECORD_DRUG: "record/drug/",
  RECORD_REPORT: "record/report/create",
};
