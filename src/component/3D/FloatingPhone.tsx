import { motion } from "framer-motion";
import { FiBatteryCharging, FiWifi } from "react-icons/fi";
import Image from "next/image";
import { useTheme } from "@/contexts/ThemeContext";

const Phone3D: React.FC = () => {
  return (
    <section className="grid place-content-center">
      <FloatingPhone />
    </section>
  );
};

const FloatingPhone: React.FC = () => {
  return (
    <div
      style={{
        transformStyle: "preserve-3d",
        transform: "rotateY(-30deg) rotateX(15deg)",
      }}
      className="rounded-[24px] bg-gradient-to-br from-[#4EDFE7] to-[#00597B]"
    >
      <motion.div
        initial={{
          transform: "translateZ(8px) translateY(-2px)",
        }}
        animate={{
          transform: "translateZ(32px) translateY(-8px)",
        }}
        transition={{
          repeat: Infinity,
          repeatType: "mirror",
          duration: 2,
          ease: "easeInOut",
        }}
        className="relative h-[480px] sm:h-96 sm:w-56 w-[260px] rounded-[24px] border-2 border-b-4 border-r-4 border-white border-l-neutral-200 border-t-neutral-200 bg-neutral-900 p-1 pl-[3px] pt-[3px]"
      >
        <HeaderBar />
        <Screen />
      </motion.div>
    </div>
  );
};

const HeaderBar: React.FC = () => {
  return (
    <>
      <div className="absolute left-[50%] top-2.5 z-10 h-2 w-16 -translate-x-[50%] rounded-md bg-neutral-900"></div>
      <div className="absolute right-3 top-2 z-10 flex gap-2">
        <FiWifi className="text-neutral-600" />
        <FiBatteryCharging className="text-neutral-600" />
      </div>
    </>
  );
};

const Screen: React.FC = () => {
  const { theme } = useTheme();
  const logoSrc =
    theme === "light"
      ? `${process.env.NEXT_PUBLIC_IMGIX_DOMAIN}/Surakiat-DarkBG.png`
      : `${process.env.NEXT_PUBLIC_IMGIX_DOMAIN}/Surakiat-WhiteBG.png`;
  const ColorClass =
    theme === "light" ? "bg-zinc-50 text-zinc-950" : "bg-zinc-950 text-zinc-50";
  return (
    <div
      className={`relative z-0 grid h-full w-full place-content-center overflow-hidden rounded-[20px] ${ColorClass}`}
    >
      <div className="flex flex-col gap-4 w-full justify-center items-center">
        <p className={`text-center font-bold text-2xl sm:text-xl`}>
          Contact me
        </p>
        <Image
          src={logoSrc}
          alt="Surakiat-Logo"
          width={70}
          height={70}
          sizes="100vw"
          layout="fixed"
          className="object-cover w-[70px] h-[70px]"
        />
      </div>
      <button
        className={`absolute bottom-4 left-4 right-4 z-10 rounded-lg py-2 text-sm font-medium ${ColorClass}`}
      >
        Send Message
      </button>
      <div className="absolute -bottom-72 left-[50%] h-96 w-96 -translate-x-[50%] rounded-full bg-gradient-to-br from-[#4EDFE7] to-[#00597B]" />
    </div>
  );
};

export default Phone3D;
