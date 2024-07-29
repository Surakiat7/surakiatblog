"use client";

import { useTheme } from "@/contexts/ThemeContext";

const Contact = () => {
  const { theme } = useTheme();
  const bgColorClass =
    theme === "light" ? "bg-zinc-50 text-zinc-950" : "bg-zinc-950 text-zinc-50";

  return (
    <section className={`${bgColorClass} py-12 sm:py-6`}>
      <div className="w-full px-6 py-6 flex flex-col items-center">
        <h1 className="text-center font-bold text-4xl md:text-6xl max-w-xl">
          Contact
        </h1>
        <p className="text-center font-normal text-md max-w-2xl pt-4">
          Feel free to reach out to me directly for any inquiries or
          collaborations. This contact form is for personal communication only
          and not associated with any company.
        </p>
      </div>
    </section>
  );
};

export default Contact;
