"use client";

import { useTheme } from "@/contexts/ThemeContext";
import { Divider, Image } from "@nextui-org/react";

const workExperienceData = [
  {
    imageSrc: "/logo/pfc-logo.png",
    companyName: "Perfect Computer Solutions Co., Ltd.",
    period: "July 24, 2023 - Present",
    position: "Frontend Developer (Working hybrid in Bangkok)",
    details: [
      "Wat Doi Wiang Kaew Website/CMS: Developed a landing page and content management system using Next.js for managing content, banners, amulets, videos, and payment system settings.",
      "Khubdee (Next.js): Designed UX/UI and developed the frontend using Figma and Next.js for a driving history check system. Collaborated with the backend team to integrate AI for facial recognition and ID card scanning for verification.",
      "NSB (Next.js): Developed the frontend in Next.js for drug record forms and phone number OTP login verification.",
    ],
  },
  {
    imageSrc: "/logo/amarin-logo.png",
    companyName: "Amarin Corporations Public Company Limited.",
    period: "April 20 - September 20, 2023",
    position:
      "UX/UI Designer Intern in the BDCX Department (Onsite in Bangkok)",
    details: [
      "I interned as a UX/UI Designer at Amarin Corporations Public Company Limited, where I had the opportunity to redesign websites for Sudsapda Magazine, AmarinBaby&Kids, and Naiin.com. I primarily used design tools such as Figma, Adobe XD, Photoshop, and Illustrator to create visually appealing and user-friendly interfaces.",
      "Additionally, I collaborated with the development team to implement the designs using HTML, CSS, and JavaScript. I also had the opportunity to gather user feedback through surveys at exhibitions during Amarin's fairs.",
      "Throughout my internship, I gained valuable experience in creating a seamless user experience and applying responsive design principles for various devices. I participated in brainstorming sessions and ideation processes, working closely with the Business Development and Consumer Experience teams to contribute creative ideas and solutions.",
    ],
  },
];

const WorkExprience = () => {
  const { theme } = useTheme();
  const bgColorClass =
    theme === "light"
      ? "bg-zinc-200 text-zinc-950"
      : "bg-zinc-900 text-zinc-50";
  const textColorClass = theme === "light" ? "text-zinc-600" : "text-zinc-500";

  return (
    <section className={`${bgColorClass} py-12 sm:py-6`}>
      <div className="w-full px-6 py-6 flex flex-col items-center">
        <h1 className="text-center font-bold text-4xl md:text-6xl max-w-xl">
          Work Experience
        </h1>
        <p className="text-center font-normal text-md max-w-2xl pt-4">
          I have work experience as a Frontend Developer, working on various
          projects ranging from website development to complex system
          integrations. Below is an overview of my professional journey.
        </p>
      </div>
      <div className="flex w-full flex-col px-12 sm:px-6">
        {workExperienceData.map((experience, index) => (
          <div key={index} className="flex w-full flex-col">
            {index !== 0 && <Divider className="my-6" />}
            <div className="flex sm:flex-col w-full gap-4 items-center">
              <div className="flex h-auto rounded-xl">
                <Image
                  isZoomed
                  width="100%"
                  height="auto"
                  className="object-cover w-[80px] h-[80px]"
                  src={experience.imageSrc}
                  alt={`${experience.companyName} logo`}
                />
              </div>
              <div className="flex flex-col w-full">
                <div className="flex sm:flex-col sm:items-start w-full items-center justify-between">
                  <h2 className="font-bold text-xl sm:text-lg">
                    {experience.companyName}
                  </h2>
                  <h2 className="font-bold text-xl sm:text-lg">
                    {experience.period}
                  </h2>
                </div>
                <h2 className="font-medium text-zinc-400 text-md sm:font-normal">
                  {experience.position}
                </h2>
              </div>
            </div>
            <div className="flex w-full flex-col gap-2">
              {experience.details.map((detail, detailIndex) =>
                index === 0 ? (
                  <li
                    key={detailIndex}
                    className={`${textColorClass} pt-2 font-normal text-base sm:text-sm`}
                  >
                    {detail}
                  </li>
                ) : (
                  <p
                    key={detailIndex}
                    className={`${textColorClass} pt-2 font-normal text-base sm:text-sm`}
                  >
                    {detail}
                  </p>
                )
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WorkExprience;